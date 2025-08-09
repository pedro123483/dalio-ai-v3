import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { cn } from "~/lib/utils";
import Link from "next/link";

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="!gap-6 space-x-0 data-[orientation=vertical]:!gap-0 data-[orientation=vertical]:space-y-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/"
            className={cn(
              "text-base font-medium transition-colors hover:text-[#6a8fdb] data-[orientation=vertical]:py-1",
              className,
            )}
          >
            Início
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="#features"
            className={cn(
              "text-base font-medium transition-colors hover:text-[#6a8fdb] data-[orientation=vertical]:py-1",
              className,
            )}
          >
            Funcionalidades
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="#getting-started"
            className={cn(
              "text-base font-medium transition-colors hover:text-[#6a8fdb] data-[orientation=vertical]:py-1",
              className,
            )}
          >
            Começar
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="#testimonials"
            className={cn(
              "text-base font-medium transition-colors hover:text-[#6a8fdb] data-[orientation=vertical]:py-1",
              className,
            )}
          >
            Depoimentos
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="#faq"
            className={cn(
              "text-base font-medium transition-colors hover:text-[#6a8fdb] data-[orientation=vertical]:py-1",
              className,
            )}
          >
            FAQ
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
