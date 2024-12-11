import React from 'react';
import { PackageCarousel } from './PackageCarousel';

interface Package {
  name: string;
  originalPrice?: number;
  offerPrice?: number;
  description: string;
  features: string[];
}

interface CategorySectionProps {
  title: string;
  oneline: string;
  description: string;
  packages: Package[];
}

export function CategorySection({ title, oneline, description, packages }: CategorySectionProps) {
  return (
    <section className="py-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 mb-6">{oneline}</p>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        <PackageCarousel packages={packages} />
      </div>
    </section>
  );
}