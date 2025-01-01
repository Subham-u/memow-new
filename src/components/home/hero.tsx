"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import HyperText from "../ui/hyper-text";
import { VelocityScroll } from "../ui/scroll-based-velocity";


 
const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden p-8 ">
    {/* Background Image */}
    <Image
      src="https://img.freepik.com/premium-photo/person-capturing-photos-aurora-borealis-with-professional-camera_891336-24665.jpg"
      alt="People enjoying outdoors"
      width={1920}
      height={1080}
      className="absolute inset-0 object-cover w-full h-[98%] "
      priority
    />
    
    {/* Content Overlay */}
    <div className="relative z-10 px-4 py-8 md:py-16 lg:py-20 mx-auto max-w-7xl h-full flex flex-col justify-between top-12">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <h1 className="max-w-4xl text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white">
        Book Your Shoot, Save Your Mémories Instantly.
        </h1>
        
        <Button 
          className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-full"
        >
          Explore All Product
        </Button>
      </div>

      {/* Floating Product Card */}
      <Card className="self-end mt-8 md:mt-0 md:absolute md:right-8 md:bottom-32 w-full md:w-72 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
        <div className="flex items-start gap-4">
          <Image
            src="https://images.unsplash.com/photo-1657826377012-9f444ed01c89?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
            alt="Water bottle product"
            width={100}
            height={200}
            className="h-[50%] w-[40%] object-contain"
          />
          <div className="space-y-2">
            <h3 className="font-bold text-lg md:text-xl">SEE THE PRODUCT DETAIL</h3>
            <Button 
              variant="ghost" 
              className="p-0 h-auto text-orange-500 hover:text-orange-600"
            >
              See All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Brand Text */}
      {/* <h2 className="text-right text-6xl top-[150%] sm:text-8xl md:text-9xl lg:text-[14rem] font-black text-white opacity-90 leading-none tracking-tight mt-8 md:mt-0 md:absolute">
        MEMOWRIES
      </h2> */}
      <div className="absolute top-[135%] md:top-[145%] w-">
      <HyperText
        className="text-center mx-auto text-7xl z-50 sm:text-8xl md:text-8xl lg:text-[14rem] font-black text-white opacity-90 leading-none tracking-tight mt-8 md:mt-0 "
        text="MEMOWRIES"
      />

      {/* <VelocityScroll className=" text-white">MAKE YOUR MEMOWRIES</VelocityScroll> */}
        </div>
    </div>
  </div>
  );
}
