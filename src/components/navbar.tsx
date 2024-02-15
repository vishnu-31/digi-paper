"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavigationMenuDemo = () => {
  const {user} = useUser();
  let navItems =[];
  if(!user){
    navItems =[{
        id: "1",
        href: "/api/auth/login",
        text:"Login"
      },{
        id: "2",
        href: "/api/auth/login",
        text:"Signup"
      }];
  }
  else{
    navItems = [{
      id: "3",
      href: "/api/auth/logout",
      text: "Logout"
    }];
  }
  return (
    <div className="flex items-center justify-between p-3">
      {/* <Image
        // className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        // width={40} height={40} 
        // src={logo} alt={"logo of digipaper"}/>*/}

      <div>DigiPaper</div>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) =>
          <NavigationMenuItem key={item.id}>
            <Link  href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.text}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuDemo;
