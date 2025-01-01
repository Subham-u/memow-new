import CategoriesSection from "@/components/home/categories-section";
import FeaturesSection from "@/components/home/features-section";
import HeadSection from "@/components/home/head-section";
import Hero from "@/components/home/hero";
import HeroMeq from "@/components/home/hero-meq";
import BeverageLanding from "@/components/home/products-section";
import ShopSection from "@/components/home/shop-section";
import Testimonials from "@/components/home/testimonials";
import { Feature6 } from "@/components/home/features";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/home/video";
import HeroPage from "@/components/home/heropage";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroMeq />
      <HeroPage />
      <CategoriesSection />
      <BeverageLanding />
      <HeroVideoDialogDemoTopInBottomOut />
      <Feature6 />
      <HeadSection />
      <Testimonials />
      <FeaturesSection />
    </div>
  );
}
