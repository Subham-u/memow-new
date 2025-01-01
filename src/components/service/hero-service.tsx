"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroService() {
  return (
    <div className="relative w-full overflow-hidden p-8 ">
    {/* Background Image */}
    <Image
      src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?cs=srgb&dl=pexels-asadphoto-1024993.jpg&fm=jpg"
      alt="People enjoying outdoors"
      width={1920}
      height={1080}
      className="absolute inset-0 object-cover w-[98%] h-[75%] md:m-4 rounded-2xl "
      priority
    />
    
    {/* Content Overlay */}
    <div className="relative z-10 px-4 py-8 md:py-16 lg:py-20 mx-auto max-w-7xl flex flex-col justify-between top-12">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white py-20">
        Book Your Shoot, Save Your Mémories Instantly.
        </h1>
        
        {/* <Button 
          className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-full"
        >
          Explore All Product
        </Button> */}
      </div>
    </div>
  </div>
  );
}

// import Image from 'next/image'

// export function HeroService() {
//   return (
//     <div className="from-muted/20 to-muted/50 relative flex h-96 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b">
//       <Image
//         src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?cs=srgb&dl=pexels-asadphoto-1024993.jpg&fm=jpg"
//         alt="Background"
//         fill
//         className="object-cover"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="z-10 flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
//         <h1 className="text-4xl font-bold tracking-tight">
//           Spring 2025 Collection
//         </h1>
//         <p className="text-muted-foreground mb-4 text-lg">
//           Shop our latest collection of essential items for the season.
//         </p>
//       </div>
//     </div>
//   )
// }

