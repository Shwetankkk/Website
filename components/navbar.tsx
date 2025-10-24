"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = DATA.navigation;

  return (
    <Navbar
      isBordered
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // soft gradient + blur so it blends with the hero
      className="
        border-b border-divider
        bg-gradient-to-b from-background/80 to-transparent
        backdrop-blur-md
      "
    >
      {/* Left (mobile burger only) */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Left spacer (desktop) to truly center the nav */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <div className="w-10" />
      </NavbarContent>

      {/* Centered nav (desktop) */}
      <NavbarContent className="hidden sm:flex justify-center gap-8 flex-grow">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-primary-500 font-semibold"
                      : "text-foreground hover:text-primary-500"
                  }`}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Right: theme switcher */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-background/85 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem key={item.name}>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full flex items-center gap-3 py-3 px-4 rounded-medium transition-colors ${
                      isActive
                        ? "bg-content2 text-primary-500"
                        : "hover:bg-content1"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                    {item.name}
                  </Link>
                </motion.div>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
