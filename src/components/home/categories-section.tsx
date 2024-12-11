'use client'

import { useState, useEffect } from 'react'
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const productsByCategory: Record<string, Product[]> = {
  'Discover Our Latest Tech': [
    {
      id: '1',
      name: 'Smart Watch Pro',
      description: 'Advanced fitness tracking and notifications',
      price: 199.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '2',
      name: 'Wireless Earbuds',
      description: 'Crystal clear audio with noise cancellation',
      price: 149.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '3',
      name: 'Ultra HD Camera',
      description: '4K video recording with image stabilization',
      price: 399.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '4',
      name: 'Smart Home Hub',
      description: 'Control all your smart devices from one place',
      price: 129.99,
      image: '/placeholder.svg?height=300&width=300',
    },
  ],
  'Classic Tech Favorites': [
    {
      id: '5',
      name: 'Retro Gaming Console',
      description: 'Relive the golden age of gaming',
      price: 99.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '6',
      name: 'Vintage-Style Turntable',
      description: 'High-quality audio with a classic look',
      price: 179.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '7',
      name: 'Classic Flip Phone',
      description: 'Simple, reliable communication device',
      price: 49.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '8',
      name: 'Portable CD Player',
      description: 'Compact disc playback on the go',
      price: 39.99,
      image: '/placeholder.svg?height=300&width=300',
    },
  ],
  'Upcoming Innovations': [
    {
      id: '9',
      name: 'Holographic Display',
      description: '3D projections for immersive viewing',
      price: 999.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '10',
      name: 'AI Personal Assistant Robot',
      description: 'Your intelligent home companion',
      price: 799.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '11',
      name: 'Neural Link Interface',
      description: 'Direct brain-computer communication',
      price: 1499.99,
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      id: '12',
      name: 'Quantum Computer Kit',
      description: 'Explore quantum computing at home',
      price: 2999.99,
      image: '/placeholder.svg?height=300&width=300',
    },
  ],
};

export default function ProductCatalog() {
  const categories = Object.keys(productsByCategory);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [products, setProducts] = useState<Product[]>(productsByCategory[categories[currentCategory]]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [addedToCart, setAddedToCart] = useState<Set<string>>(new Set())

  useEffect(() => {
    setProducts(productsByCategory[categories[currentCategory]]);
  }, [currentCategory]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId)
      } else {
        newFavorites.add(productId)
      }
      return newFavorites
    })
  }

  const toggleAddToCart = (productId: string) => {
    setAddedToCart(prev => {
      const newAddedToCart = new Set(prev)
      if (newAddedToCart.has(productId)) {
        newAddedToCart.delete(productId)
      } else {
        newAddedToCart.add(productId)
      }
      return newAddedToCart
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-[#6B46C1] text-white px-6 py-2 rounded-lg shadow-md">
            <span className="text-lg font-black tracking-wide">HOT SERVICE</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button 
            onClick={() => setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length)}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous category</span>
          </Button>
          <h2 className="text-2xl font-semibold">{categories[currentCategory]}</h2>
          <Button 
            onClick={() => setCurrentCategory((prev) => (prev + 1) % categories.length)}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next category</span>
          </Button>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore cutting-edge gadgets designed to enhance your daily life and keep you connected.
        </p>
        {/* <div className="absolute p-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button className="w-2 h-2 rounded-full bg-[#6B46C1]" aria-current="true" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
        </div> */}
       
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                {addedToCart.has(product.id) ? (
                  <Badge variant="secondary" className="bg-green-500 text-white">Added</Badge>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => toggleAddToCart(product.id)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

