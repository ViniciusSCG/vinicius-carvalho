"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
const projectsData = [
  {
    image: "/projects/1.png",
    category: "Projeto Real",
    name: "Aplicativo IPVO Igreja Presbiteriana Vila Operária",
    description:
      "Tecnologias: React Native, Expo, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://play.google.com/store/apps/details?id=br.com.lexp.ipvo&hl=pt&gl=US&pli=1",
    github: "",
  },
  {
    image: "/projects/7.jpeg",
    category: "Projeto Real",
    name: "Aplicativo StudentCare",
    description:
      "Tecnologias: React Native, Expo, TypeScript, Java, Spring Boot, SQLServer",
    link: "",
    github: "",
  },
  {
    image: "/projects/2.png",
    category: "Projeto Real",
    name: "ChatGPTeacher",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer, ChatGPT API",
    link: "https://app.chatgpteacher.com.br/",
    github: "",
  },
  {
    image: "/projects/8.png",
    category: "Projeto Real",
    name: "SmartSkills",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://app.smartskillsinmedicine.com/",
    github: "",
  },
  {
    image: "/projects/3.png",
    category: "Projeto Real",
    name: "Inova Carreiras",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://www.inovacarreira.com.br/",
    github: "",
  },
  {
    image: "/projects/4.png",
    category: "Projeto Real",
    name: "StudentCare",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer, ChatGPT API, Machine Learning, Power BI",
    link: "https://demo.studentcare.com.br/",
    github: "",
  },
  {
    image: "/projects/5.png",
    category: "Projeto Real",
    name: "IPVO Web CRUD",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Java, Spring Boot, SQLServer",
    link: "https://ipvo.lexp.com.br/login",
    github: "",
  },
  {
    image: "/projects/6.png",
    category: "Projeto Real",
    name: "Farol Observatório da Aprendizagem da Rede Municipal de Natal-RN",
    description:
      "Tecnologias: Next.js, Tailwind CSS, TypeScript, Node.js, Prisma, SQLServer, Power BI",
    link: "https://viitra.lexp.com.br/",
    github: "",
  },
  {
    image: "/my-projects/1.png",
    category: "Projeto Pesoal",
    name: "Quiz Milhão",
    description: "Tecnologias: PHP, JavaScript, HTML, CSS, MySQL",
    link: "",
    github: "https://github.com/ViniciusSCG/QuizMilhao",
  },
  {
    image: "/my-projects/2.png",
    category: "Projeto Pesoal",
    name: "Be The Hero",
    description: "Tecnologias: Node.js, React, React Native, Expo",
    link: "",
    github: "https://github.com/ViniciusSCG/BeTheHero",
  },
  {
    image: "/my-projects/3.png",
    category: "Projeto Pesoal",
    name: "Gerador de Senhas",
    description: "Tecnologias: JavaScript, HTML, CSS",
    link: "https://viniciusscg.github.io/GeradorSenha/",
    github: "https://github.com/ViniciusSCG/GeradorSenha",
  },
  {
    image: "/my-projects/4.jpg",
    category: "Projeto Pesoal",
    name: "Doe Sangue",
    description:
      "Tecnologias: JavaScript, HTML, CSS, PostgreSQL, Node.js, Express, Nunjucks, Nodemon",
    link: "https://viniciusscg.github.io/MaratonaDev/",
    github: "https://github.com/ViniciusSCG/MaratonaDev",
  },
  {
    image: "/my-projects/5.png",
    category: "Projeto Pesoal",
    name: "Snake Game",
    description: "Tecnologias: JavaScript, HTML, CSS",
    link: "https://viniciusscg.github.io/Snake-Game/",
    github: "https://github.com/ViniciusSCG/Snake-Game",
  },
  {
    image: "/my-projects/6.png",
    category: "Projeto Pesoal",
    name: "Instagram Home Clone",
    description: "Tecnologias: HTML, CSS",
    link: "https://viniciusscg.github.io/PaginaInicialInstagram/",
    github: "https://github.com/ViniciusSCG/PaginaInicialInstagram",
  },
  {
    image: "/my-projects/preview.gif",
    category: "Projeto Pesoal",
    name: "RGB-BREAKOUT-SDL",
    description:
      "Tecnologias: C++, SDL2, SDL2_image, SDL2_ttf, SDL2_mixer, Makefile",
    link: "",
    github:
      "https://github.com/ViniciusSCG/RGB-BREAKOUT-SDL/blob/master/preview.gif",
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
                  className="capitalize w-[330px] md:w-auto"
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
