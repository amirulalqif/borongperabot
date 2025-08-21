"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/bitcoin.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight">Borong Perabot</span>
            </Link>
          </div>

          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-primary">
                      Utama
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/tentang-kami" className="px-3 py-2 text-sm font-medium hover:text-primary">
                      Tentang Kami
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/hubungi-kami" className="px-3 py-2 text-sm font-medium hover:text-primary">
                      Hubungi Kami
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="default">
              <Link href="/hubungi-kami">Dapatkan Sebut Harga</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-2 pt-8">
                  <Link href="/" className="px-2 py-2 rounded-md hover:bg-muted">
                    Utama
                  </Link>
                  <Link href="/tentang-kami" className="px-2 py-2 rounded-md hover:bg-muted">
                    Tentang Kami
                  </Link>
                  <Link href="/hubungi-kami" className="px-2 py-2 rounded-md hover:bg-muted">
                    Hubungi Kami
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
}


