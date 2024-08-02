import { NextResponse } from "next/server";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import z from "zod";

import { conversionApi } from "@/lib/capi";
import { sha256 } from "@/lib/utils";

export async function POST(req) {
  const body = (await req.json()) || {};
  const webhookIp = req.headers.get("x-forwarded-for");
  const { responses, uid, iCalUID } = body?.payload || {};

//   console.log(body.payload);
//   console.log(iCalUID);

  if (responses) {
    const { name, email, phone, plan, fbc, source } = responses;

    const parsedPlan = await parseContentWithAI(plan.value);

    const sendData = {
      event_name: "CompleteRegistration",
      event_id: uid,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: source?.value,
      user_data: {
        em: await sha256(email.value),
        fn: await sha256(name.value),
        ph: await sha256(phone.value),
        fbc: fbc?.value,
        client_user_agent: iCalUID,
        client_ip_address: webhookIp,
      },
      custom_data: {
        value: parsedPlan,
      },
    };

    console.log(sendData);

    try {
      const eventData = await conversionApi(
        JSON.stringify({
          data: [sendData],
          test_event_code: process.env.NEXT_PUBLIC_TEST_ID
        })
      );
      console.log(eventData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return NextResponse.json({ success: true });
}

const system = `
You are a text parsing expert specializing in extracting numerical information. Your task is to identify and convert any numerical representations within a given text into their standard integer or decimal format.

Here are your guidelines:

1. **Number Formats:** 
   * Recognize various number formats, including:
      - Integers (e.g., 123, 45)
      - Decimals (e.g., 3.14, 0.5)
      - Numbers expressed with word suffixes (e.g., 2K, 5M, 1.5B) where:
         - K = Thousand
         - M = Million
         - B = Billion
         - T = Trillion

2. **Currency Symbols:**
   * Identify and ignore common currency symbols like $, €, £, etc.

3. **Output Format:**
   * Return the extracted number in its standard numerical form:
      - Integers: No decimal places (e.g., 2000)
      - Decimals: Include the appropriate number of decimal places (e.g., 1500.50)

**Example Inputs and Expected Outputs:**

* "Basic plan: $2K" --> 2000
* "Profit margin: 15.5%" --> 15.5
* "Population: 9.3M"  --> 9300000
* "Debt: €1.5B" --> 1500000000
* "Temperature: 27°C" --> 27 
* "Custom plan" --> 0

**Important Note:** If no numerical value can be reliably extracted, return the string "0".
`


const parseContentWithAI = async (content) => {
  const { object } = await generateObject({
    model: google("models/gemini-1.5-flash-latest"),
    system,
    prompt: content,
    schema: z.object({
      number: z.number().optional(),
    }),
  });

  return object.number;
};
