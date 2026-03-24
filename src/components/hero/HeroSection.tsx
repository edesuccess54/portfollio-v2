"use client"

import dynamic from "next/dynamic";

import { CodingIcon, HeroImage } from "@/src/constant"
import Image from "next/image"


const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false, // 👈 this is the key fix
});

const HeroSection:React.FC = () => {
  return (
    <section className="h-[calc(100vh-115px)] mt-10 flex flex-col justify-center">
        <div className="flex gap-16 justify-between">
            <div className="basis-200 grow">
                <div className="font-playfair text-[96px] leading-none">
                    <div>
                        <Typewriter
                            options={{
                            strings: "Success Ede",
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </div>
                    <p><span className="text-text-secondary">Frontend</span> Engineer</p>
                </div>
                
                <p className="mt-10 w-full lg:w-107.5 text-lg">Developing high-performance, scalable architectures with technical precision. Specializing in enterprise-grade frontend ecosystems.</p>

                <div className="flex gap-8 items-center mt-8">
                    <button className="text-center text-text-black font-bold text-sm bg-border-default py-[16.5] lg:w-67.25 cursor-pointer">EXPLORE PROJECTS</button>
                    <button className="text-center text-text-primary font-bold text-sm border border-border-highlight py-[16.5] lg:w-67.25 cursor-pointer">TECHNICAL SPECS</button>
                </div>
            </div>

            <div className="basis-140 grow relative">
                <Image src={HeroImage} alt="hero image" className="w-full" objectFit="cover"  />

                <div className="absolute bottom-14 right-0 left-0 flex justify-between p-6 bg-background/60 ">
                    <div>
                        <p className="text-[10px] text-text-secondary">Current Focus</p>
                        <p className="text-text-white">Mobile Development (ReactNative with Expo)</p>
                    </div>

                    <div className="self-end">
                        <CodingIcon />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection