import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={24} />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl font-bold"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
