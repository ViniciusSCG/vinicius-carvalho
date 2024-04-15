"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <MoonIcon className="absolute h-auto w-auto transition-all dark:rotate-0 " />
        ) : (
          <SunIcon className="h-auto w-auto rotate-0 scale-100 transition-all dark:-rotate-90 " />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggler;
