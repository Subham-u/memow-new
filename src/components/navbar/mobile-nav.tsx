import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function MobileNav() {
  return (
    <div>
      {" "}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader className="hidden">
            <SheetTitle className=" hidden"></SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">ecomus</span>
            </Link>
            <Link href="/" className="block py-2 text-lg font-semibold">
              Home
            </Link>
            <Link href="/shop" className="block py-2 text-lg font-semibold">
              Shop
            </Link>
            <Link href="/products" className="block py-2 text-lg font-semibold">
              Products
            </Link>
            <Link href="/pages" className="block py-2 text-lg font-semibold">
              Pages
            </Link>
            <Link href="/blog" className="block py-2 text-lg font-semibold">
              Blog
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
