"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import logo from "@/../logo/DigiPaper.png"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const NavigationMenuDemo = () =>{

  return(
  <div className="flex items-center justify-between p-3">
  <Image width={40} height={40} src={logo} alt={"logo of digipaper"}/>
  <NavigationMenu>
    <NavigationMenuList className="list-none">   
      <NavigationMenuItem>
        <Link href="/api/auth/login" passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Login
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/api/auth/login" passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Signup
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>


    </NavigationMenuList>

  </NavigationMenu>
  </div>
  );
}


export default NavigationMenuDemo;
