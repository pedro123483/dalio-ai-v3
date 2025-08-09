import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Menu de Navegação</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-[#6a8fdb] text-[#6a8fdb] hover:bg-[#d1f1ff]"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mb-8 text-2xl font-bold">Dalio AI</div>
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
