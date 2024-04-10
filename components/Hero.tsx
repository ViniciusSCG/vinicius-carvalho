import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h1 mb-4 dark:text-primary">
              Olá, eu sou Vinícius Carvalho
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Eu sou um desenvolvedor full-stack especializado em React e
              Node.js. Eu adoro criar aplicações web incríveis e eficientes.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="#contact">
                <Button className="gap-x-2">
                  <Send size={18} />
                  Contate-me
                </Button>
              </Link>

              <Link href="/resume.pdf">
                <Button variant={"secondary"} className="gap-x-2">
                  <Download size={18} />
                  Baixar CV
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <DevImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
