"use client";

import { Download, Send } from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import { Button } from "./ui/button";

import { RiArrowDownSLine } from "react-icons/ri";

import Link from "next/link";
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h1 mb-4 dark:text-primary">
              Olá, eu sou Vinícius Carvalho
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Eu sou um desenvolvedor full-stack especializado em ReactJS,
              NextJS, Java e Node.js. Eu adoro criar aplicações web e mobile
              incríveis e eficientes.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="mailto:vinicarvalho23@gmail.com">
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
            <DevImg
              containerStyles="w-[410px] h-[462px] bg-no-repeat relative bg-bottom"
              src="/devImgNew1.jpg"
              alt="develop image"
            />
          </div>
        </div>
        <LinkScroll to="about" smooth={true} duration={500}>
          <RiArrowDownSLine className="hidden xl:flex text-3xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary dark:text-primary-dark animate-bounce cursor-pointer " />
        </LinkScroll>
      </div>
    </section>
  );
};

export default Hero;
