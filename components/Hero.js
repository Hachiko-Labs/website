"use client";

import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section class="w-screen flex flex-col items-start justify-start text-start pt-32 px-48 gap-8">
            <div
                class="text-6xl font-neco text-primary w-9/12 flex flex-col gap-16"
            >
                <p>your product software partner for startup founders. full-stack development on a flexible subscription - cancel anytime</p>
                <p>let’s collaborate today!</p>
            </div>
            <div>
                <Button>Work with us</Button>
            </div>
        </section>
    )
};

export default Hero;