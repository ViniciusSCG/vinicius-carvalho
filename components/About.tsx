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
import { text } from "stream/consumers";

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

const skillsData = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "GitHub Actions", "Vercel", "Netlify", "Heroku"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
];

const qualificationsData = [
  {
    title: "Educação",
    data: [
      {
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Unicesumar",
        date: "2018 - 2020",
      },
      {
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Unicesumar",
        date: "2018 - 2020",
      },
      {
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Unicesumar",
        date: "2018 - 2020",
      },
    ],
  },
  {
    title: "Experiência",
    data: [
      {
        title: "Software Developer",
        institution: "Freelancer",
        date: "2020 - Presente",
      },
      {
        title: "Software Developer",
        institution: "Freelancer",
        date: "2020 - Presente",
      },
      {
        title: "Software Developer",
        institution: "Freelancer",
        date: "2020 - Presente",
      },
    ],
  },
];

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 xl:mb-16 text-center mx-auto">
          Sobre mim
        </h2>
        <Tabs>
          <TabsList className="">
            <TabsTrigger value="informacao">Informações</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="qualificacao">Qualificações</TabsTrigger>
          </TabsList>

          <TabsContent value="informacao">
            <div>
              {infoData.map(({ icon, text }, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skill">
            <div>
              {skillsData.map(({ title, skills }, index) => (
                <div key={index}>
                  <h3>{title}</h3>
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="qualificacao">
            <div>
              {qualificationsData.map(({ title, data }, index) => (
                <div key={index}>
                  <h3>{title}</h3>
                  <ul>
                    {data.map(({ title, institution, date }, index) => (
                      <li key={index}>
                        <h4>{title}</h4>
                        <p>{institution}</p>
                        <p>{date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
