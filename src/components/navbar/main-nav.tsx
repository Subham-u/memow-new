"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import SearchBar from "./search";
import LoginModal from "./login-modal";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Occasions",
    href: "/packages/occasions",
    description: "Check out our latest products and collections.",
  },
  {
    title: "Business",
    href: "/packages/business",
    description: "Discover our most popular items.",
  },
  {
    title: "Instant Booking",
    href: "/packages/instant-booking",
    description: "Discover our most popular items.",
  },
];

export default function MainNav() {
  return (
    <div className="lg:px-16 ">
      <header className="sticky top-0 z-50 w-full dark:bg-gray-900 ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
            <Image
               src="https://www.memowries.com/static/media/logo.55d5fba70a1667bc1185.png"
               alt="Cotton T-Shirt"
               priority
               width={45}
               height={20}
             />
              <span className="text-xl font-bold dark:text-white text-black">
              Mémow
              </span>
            </Link>
          </div>
          <NavigationMenu className="hidden md:flex font-bold">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex text-base font-bold h-9 w-max bg-transparent items-center justify-center rounded-md px-4 py-2 dark:hover:bg-gray-700 "
                  )}
                >
                  <Link href="/" className="">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold bg-transparent dark:text-white dark:hover:bg-gray-700">
                  Packages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800 bg-white">
                    {components.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={component.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors dark:hover:bg-gray-700 hover:bg-gray-100 dark:focus:bg-gray-700 focus:bg-gray-100 dark:text-white"
                          >
                            <div className="text-sm font-medium leading-none">
                              {component.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                              {component.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" bg-transparent font-bold ">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800 bg-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full text-base w-full select-none flex-col justify-end rounded-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium dark:text-white">
                           Community Image Showcase
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground dark:text-gray-400">
                          Explore user transformations with easy navigation using pagination.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none "
                          href="/tools/image-modifiers"
                        >
                          <div className="text-sm font-medium leading-none">
                           Image Modifiers
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                           Revive old or damaged images effortlessly
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none "
                          href="/tools/image-converter"
                        >
                          <div className="text-sm font-medium leading-none">
                           Image Converter
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                           Fill in missing areas of images seamlessly
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button variant="ghost" asChild className="font-semibold">
                    <Link href="/blog">Services</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(" ")}>
                  <Button variant="ghost" asChild className="font-semibold">
                    <Link href="/past-booking">Past booking</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center ">
            <SearchBar />
            <SignedOut>
            <Link href="/sign-in">
            <LoginModal />
            </Link>
            </SignedOut>
            <SignedIn>
              <button className="absolute ml-2 md:relative">
                <UserButton />
              </button>
            </SignedIn>
            {/* <Button
              variant="ghost"
              size="icon"
              className="relative dark:hover:bg-gray-700 dark:text-white"
            >
              <ShoppingCart className="h-8 w-8 stroke-[2.5px]" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
                1
              </span>
              <span className="sr-only">Cart</span>
            </Button> */}
          </div>
        </div>
      </header>
    </div>
  );
}
