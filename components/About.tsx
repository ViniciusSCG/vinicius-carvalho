import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { SiOracle } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";

import { PiCertificate } from "react-icons/pi";
import Image from "next/image";
import { text } from "stream/consumers";
import DevImg from "./DevImg";
import Link from "next/link";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Vinícius Carvalho",
  },
  {
    icon: <MailIcon size={20} />,
    text: "vinicarvalho23@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Maringá, PR, Brazil",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 44 98859-1475",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Graduado em Análise de Sistemas",
  },
  {
    icon: <Calendar size={20} />,
    text: "23 anos",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Software Developer",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "- HTML, CSS, Javascript," },
      { name: "- NodeJs, NextJs, Prisma, ReactJs" },
      { name: "- Java, Spring MVC, Spring Boot" },
      { name: "- TypeScript" },
      { name: "- SQLServer" },
      { name: "- React Native, Expo" },
      { name: "- Tailwind CSS" },
      { name: "- ChatGPT API, Machine Learning, Power BI" },
      { name: "- Node.js, Prisma" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/postman.svg" },
      { imgPath: "/about/azure.svg" },
      { imgPath: "/about/sqlServer.svg" },
      { imgPath: "/about/dbeaver.svg" },
      { imgPath: "/about/github.svg" },
    ],
  },
];

const qualificationsData = [
  {
    title: "Educação",
    data: [
      {
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Unicesumar",
        date: "2019 - 2021",
      },
      {
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
        institution: "The Hong Kong University of Science and Technology",
        date: "2021 - 2021",
      },

      {
        title: "Inglês Regular",
        institution: "EnglishCentral, Inc.",
        date: "2021 - 2021",
      },
    ],
  },
  {
    title: "Experiência",
    data: [
      {
        title: "Software Developer",
        institution: "LEXP",
        date: "2023 - Presente",
      },
      {
        title: "Infrastructure Analyst",
        institution: "ClaraNet Brasil",
        date: "2021 - 2023",
      },
      {
        title: "Support Analyst",
        institution: "UniCesumar",
        date: "2019 - 2021",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre Mim
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg />
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Informações Pessoais
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 mt-4">
                      Olá, eu sou Vinícius Carvalho
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Eu sou um desenvolvedor full-stack especializado em React,
                      Node.js, TypeScript, Java, Spring Boot e SQLServer. Tenho
                      experiência em criar aplicações móveis com React Native e
                      Expo, desenvolver interfaces com Tailwind CSS, e trabalhar
                      com APIs. Meus projetos incluem aplicações web e mobile,
                      sistemas de análise preditivas na área da educação,
                      sistemas de gerenciamento e observatórios de aprendizagem.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary flex gap-2 items-center">
                        <PiCertificate size={22} />
                        Certificações
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="flex items-center gap-x-2">
                        <BsMicrosoft className="text-primary" size={20} />
                        <Link
                          href={
                            "https://www.credly.com/badges/1bc2f0cb-8bd1-4cb2-8c54-654a527c2752/linked_in_profile"
                          }
                          target="blank"
                          className="hover:text-primary cursor-pointer transition-all duration-200 hover:underline"
                        >
                          Microsoft 365 Certified: Fundamentals MS-900
                        </Link>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <SiOracle className="text-primary" size={20} />
                        <Link
                          href={
                            "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7A8D49E0C62369634DE707A7D95D69F904EA42B8AE3F682F86B7F12A65FF34AA"
                          }
                          target="blank"
                          className="hover:text-primary cursor-pointer transition-all duration-200 hover:underline"
                        >
                          Oracle Cloud Infrastructure Foundations
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 mt-4 text-center xl:text-left">
                      Minhas Qualificações
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                        text-primary"
                        >
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Experiência").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Experiência").data.map(
                            (item: any, index: any) => {
                              const { institution, title, date } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {institution}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {title}
                                    </div>
                                    <div className="text-base font-medium">
                                      {date}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education  */}
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                        text-primary"
                        >
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Educação").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Educação").data.map(
                            (item: any, index: any) => {
                              const { institution, title, date } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {institution}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {title}
                                    </div>
                                    <div className="text-base font-medium">
                                      {date}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 mt-4">
                      Ferramentas que utilizo todos os dias
                    </h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list  */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: any) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-2"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list  */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: any) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
