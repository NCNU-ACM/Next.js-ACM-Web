import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import {useState, useEffect} from 'react'
import { cn } from "@/lib/utils";
import { GlobeIcon, UsersIcon } from "lucide-react";
import { groups } from "../data/navbar_info";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavbarProps {}
import Image from "next/image";
import logo from "../../public/logo.ico";
const inter = Inter({ subsets: ["latin"] });

export function Navbar(NavbarProps:NavbarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    mounted &&
    <>
    <time dateTime="2023-11-5" suppressHydrationWarning />
      <header className="fixed top-0 border-2 bg-white z-50">
        <div className="md:flex w-screen h-14 p-6 items-center justify-between">
          <div className="space-x-4 md:flex">
            <Link href="/">
              <div className="space-x-1 flex items-center">
                <Image src={logo} alt="logo" width={60}></Image>
                <h1 className="serif text-2xl font-bold">
                  NCNU ACM
                </h1>
              </div>
            </Link>
          </div>
          
            <NavigationMenu className="mr-[150px]">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <GlobeIcon className="pr-1" />
                    <h2>小組活動</h2>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid p-3 md:w-[300px] lg:grid-cols-[.75fr_1fr]">
                      {groups.map((component) => (
                        // {<component.icon className="mr-1 w-5 h-5"/>}
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
           
        
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
