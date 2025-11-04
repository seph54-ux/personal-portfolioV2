
"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Logo } from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto h-20 px-4 flex justify-between items-center glassmorphic mt-2 rounded-lg">
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex items-center">
          <NavigationMenuList>
            {navLinks.map((link) => {
              if (link.name === 'Contact') return null;
              
              return link.sublinks ? (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {link.sublinks.map((sublink) => (
                        <ListItem
                          key={sublink.name}
                          title={sublink.name}
                          href={sublink.href}
                        >
                          {sublink.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === link.href
                          ? "bg-accent/50 text-accent-foreground"
                          : ""
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
            <Button asChild className="ml-4">
              <Link href="/contact">Contact</Link>
            </Button>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg">
                <div className="p-4">
                    <Logo />
                    <nav className="mt-8 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            !link.sublinks ? (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "text-lg font-medium hover:text-primary transition-colors",
                                        pathname === link.href && "text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <div key={link.name} className="flex flex-col gap-2">
                                    <h3 className="text-lg font-medium">{link.name}</h3>
                                    {link.sublinks.map(sublink => (
                                         <Link
                                            key={sublink.name}
                                            href={sublink.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "text-muted-foreground hover:text-primary transition-colors ml-4",
                                                pathname === sublink.href && "text-primary"
                                            )}
                                        >
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )
                        ))}
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
