import { event } from "@/lib/fbpixel";
// import { sha256 } from "./utils";

export default async function triggerScheduleCall() {
  const additionalData = {};

  const eventId = crypto.randomUUID();

  const userIp = await fetch("/api/get-ip").then((res) => res.json()).then((data) => data.ip);
  const sendData = {
    "event_name": "Schedule",
    "event_id": eventId,
    "event_time": Math.floor(Date.now() / 1000),
    "action_source": "website",
    "event_source_url": window.location.href,
    "user_data": {
        "client_user_agent": navigator.userAgent,
        "client_ip_address": userIp || '0.0.0.0'
    },
  };

  event("Schedule", additionalData, { eventID: eventId });

  fetch(
    `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [sendData],
        test_event_code: process.env.NEXT_PUBLIC_TEST_ID,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
