"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import links from "@/utils/links";
import Link from "next/link";
function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft></AlignLeft>
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden grid gap-y-2"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          return (
            <DropdownMenu key={link.href}>
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </DropdownMenu>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
