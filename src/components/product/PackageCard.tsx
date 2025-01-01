'use client'
import React from 'react';
import { PackageFeatures } from './PackageFeatures';
import { useRouter } from 'next/navigation';

interface PackageCardProps {
  index: number;
  title: string;
  name: string;
  originalPrice?: number;
  offerPrice?: number;
  description: string;
  features: string[];
}

export function PackageCard({ index, title, name, originalPrice, offerPrice, description, features }: PackageCardProps) {
  const router = useRouter()
  function handelOnclik(link : string) {
    router.push(link)
  }
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] h-full">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline gap-2">
          {offerPrice && (
            <>
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                ₹{offerPrice.toLocaleString()}
              </span>
              <span className="text-lg line-through text-gray-500">
                ₹{originalPrice?.toLocaleString()}
              </span>
            </>
          )}
          {!offerPrice && originalPrice && (
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        

        <div className="mt-6 flex-grow">
          <PackageFeatures features={features} />
        </div>

        <button 
        className="mt-8 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
        onClick={() => handelOnclik(`/packages/package?routeAttachment=${title}&package=${index}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}