"use client";

import React from "react";
import { Card } from "../ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../ui/button";

const heading = {
  title: "Customer review",
  subtitle:
    "Inspire and let yourself be inspired, from one unique fashion to another.",
};

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className=" p-3 md:mt-7 ">
      <div className=" flex items-center justify-center gap-4 p-5  md:p-10 flex-col text-center">
        <div className=" text-lg md:text-5xl  tracking-tight  ">
          {heading.title}
        </div>
        <div className="text-sm md:text-base">{heading.subtitle}</div>
      </div>
      <div className=" max-w-screen-2xl mx-auto">
        {" "}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((category, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3 w-1/3 lg:w-1/2 xl:w-1/3"
              >
                <TestimonialsCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className=" hidden md:block" />
          <CarouselPrevious className=" hidden md:block" />
        </Carousel>
      </div>
      <div className=" flex items-center justify-center gap-2 p-3 md:mt-10 mt-5">
        {[...Array(5)].map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-3 h-3 rounded-full p-0 ${
              index === current ? "bg-primary" : "bg-primary/30"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsCard() {
  return (
    <Card className=" rounded-lg border p-4 md:p-6 ">
      <div className=" flex flex-col gap-5">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-current text-orange-500"
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="text-lg font-bold">Best Online Store</div>
        <div className="text-base italic ">
          “I always find something stylish and affordable on this web fashion
          site”
        </div>
        <div>
          <div className="text-base font-semibold">shashi vadan</div>
          <div className="">Customer from India</div>
        </div>
        <div className=" h-[1px] bg-zinc-600/50 w-full"></div>
        <div className="flex justify-start">
          <div>
            <Image
              src="/stock/PackageOff1.jpg"
              alt="Ribbed Tank Top"
              width={60}
              height={100}
              className=" h-[100px]  object-cover rounded-md "
            />
          </div>
          <div className=" px-6 flex flex-col  items-end justify-center gap-4">
            <div>Jersey </div>
            <div className="font-semibold">$18.00</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
