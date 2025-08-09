import { Button } from "~/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <header className="absolute top-8 left-1/2 z-10 flex w-[90vw] max-w-5xl -translate-x-1/2 items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold tracking-tight text-white">
          Dalio AI
        </span>
      </div>

      {/* Desktop Menu - Centralizado */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex">
        <NavMenu className="text-white/80" />
      </div>

      {/* Botão à direita */}
      <div className="hidden md:flex">
        <Button className="rounded-xl bg-[#6a8fdb] text-white hover:bg-[#84a8e4]">
          Solicitar acesso
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <NavigationSheet />
      </div>
    </header>
  );
};

export default Navbar;