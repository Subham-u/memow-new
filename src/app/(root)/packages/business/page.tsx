import React from 'react';
import HeroService from '@/components/service/hero-service';
import ExperienceCards from '@/components/product/experience-cards';

export default function Home() {
  return (
    <>
    <HeroService/>
    <ExperienceCards/>
    {/* <div className="min-h-screen bg-gray-50">
      <main>
        {Object.entries(photographyPackages).map(([key, category]) => (
          <CategorySection
            key={key}
            title={category.title}
            oneline={category.oneline}
            description={category.description}
            packages={category.packages}
          />
        ))}
      </main>
    </div> */}
    </>
  );
}
