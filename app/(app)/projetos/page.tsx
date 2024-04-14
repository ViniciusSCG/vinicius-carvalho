"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
const projectsData = [
  {
    image: "/projects/1.png",
    category: "",
    name: "Aplicativo IPVO Igreja Presbiteriana Vila Operária",
    description:
      "Tecnologias: React Native, Expo, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://play.google.com/store/apps/details?id=br.com.lexp.ipvo&hl=pt&gl=US&pli=1",
    github: "",
  },
  {
    image: "/projects/7.jpeg",
    category: "",
    name: "Aplicativo StudentCare",
    description:
      "Tecnologias: React Native, Expo, TypeScript, Java, Spring Boot, SQLServer",
    link: "",
    github: "",
  },
  {
    image: "/projects/2.png",
    category: "",
    name: "ChatGPTeacher",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer, ChatGPT API",
    link: "https://app.chatgpteacher.com.br/",
    github: "",
  },
  {
    image: "/projects/8.png",
    category: "",
    name: "SmartSkills",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://app.smartskillsinmedicine.com/",
    github: "",
  },
  {
    image: "/projects/3.png",
    category: "",
    name: "Inova Carreiras",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://www.inovacarreira.com.br/",
    github: "",
  },
  {
    image: "/projects/4.png",
    category: "",
    name: "StudentCare",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer, ChatGPT API, Machine Learning, Power BI",
    link: "https://demo.studentcare.com.br/",
    github: "",
  },
  {
    image: "/projects/5.png",
    category: "",
    name: "IPVO Web CRUD",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://ipvo.lexp.com.br/login",
    github: "",
  },
  {
    image: "/projects/6.png",
    category: "",
    name: "Farol Observatório da Aprendizagem da Rede Municipal de Natal-RN",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Node.js, Prisma, SQLServer, Power BI",
    link: "https://viitra.lexp.com.br/",
    github: "",
  },
];

const uniqueCategories = [
  "Todos os Projetos",
  ...Array.from(new Set(projectsData.map((item) => item.category))),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("Todos os Projetos");
  const fillteredProjects = projectsData.filter((project) => {
    return category === "Todos os Projetos"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          Projetos
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {fillteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
