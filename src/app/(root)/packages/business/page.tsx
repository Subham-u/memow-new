import React from "react";
import HeroService from "@/components/service/hero-service";
import ExperienceCards from "@/components/product/experience-cards";
export default function Home() {

  return (
    <>
      <HeroService />
      <ExperienceCards />
    </>
  );
}
