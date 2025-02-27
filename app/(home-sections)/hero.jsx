import React from 'react'
import { Meteors } from "@/components/magicui/meteors";
import { FlipText } from '@/components/magicui/flip-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
const Hero = () => {
  return (
    <section className='hero-section py-10 md:py-20 px-8 md:px-20 min-h-screen flex justify-center items-center'>
        <video autoPlay loop muted src="/DRA AGENCY 001.mp4"></video>
        <div className="container px-4 md:px-12 flex justify-center ">
            <Meteors number={50} />
            <div className="content">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
                    <FlipText className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#acd147] to-[#e5f5ba] bg-clip-text text-center text-9xl font-semibold leading-none text-transparent ">
                        DRA AGENCY
                    </FlipText>
                    <TypingAnimation className="text-[#fff] text-5xl mt-4">Your Success, Our Event Mission</TypingAnimation>
                </div>
                <div className="mt-6 md:mt-12 flex items-center gap-4 justify-center">
                <ShimmerButton className="shadow-2xl bg-[rgb(20,55,69)] min-w-[150px] ">
                    <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white ">
                        Register
                    </span>
                </ShimmerButton>
                <InteractiveHoverButton>DRA AGENCY</InteractiveHoverButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero