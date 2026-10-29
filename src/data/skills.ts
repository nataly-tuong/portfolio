import javaLogo from "/assets/java-original.svg";
import jsLogo from "/assets/javascript-original.svg";
import htmlLogo from "/assets/html5-original.svg";
import cssLogo from "/assets/css3-original.svg";
import pythonLogo from "/assets/python-original.svg";
import reactLogo from "/assets/react-original.svg";
import gitLogo from "/assets/git-original.svg";
import githubLogo from "/assets/github-original.svg";
import viteLogo from "/assets/vite-original.svg";
import gsapLogo from "/assets/gsap-white.svg";
import niceGUILogo from "/assets/niceGUILogo.png";
import mongoDBLogo from "/assets/mongodb-original-wordmark.svg";
import mySQLLogo from "/assets/mysql-original-wordmark.svg";
import postmanLogo from "/assets/postman-icon.svg";
import tailwindLogo from "/assets/tailwindcss-original.svg";
import springLogo from "/assets/spring-original.svg";
import djangoLogo from "/assets/django-plain.svg";
import bootstrapLogo from "/assets/bootstrap-original.svg";
import tsLogo from "/assets/typescript-original.svg";
import nodeLogo from "devicon/icons/nodejs/nodejs-original.svg";
import expressLogo from "devicon/icons/express/express-original.svg";
import postgresLogo from "devicon/icons/postgresql/postgresql-original.svg";
import prismaLogo from "devicon/icons/prisma/prisma-original.svg";
import dockerLogo from "devicon/icons/docker/docker-original.svg";
import jiraLogo from "devicon/icons/jira/jira-original.svg";
import mavenLogo from "devicon/icons/maven/maven-original.svg";
import vscodeLogo from "devicon/icons/vscode/vscode-original.svg";
import intellijLogo from "devicon/icons/intellij/intellij-original.svg";

export type SkillItem = {
  name: string;
  logo?: string;
};

export type SkillSection = {
  title: string;
  items: SkillItem[];
};

export const skillSections: SkillSection[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "TypeScript", logo: tsLogo },
      { name: "Python", logo: pythonLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Vite", logo: viteLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "NiceGUI", logo: niceGUILogo },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Spring Boot", logo: springLogo },
      { name: "Django", logo: djangoLogo },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "MySQL", logo: mySQLLogo },
      { name: "MongoDB", logo: mongoDBLogo },
      { name: "Prisma", logo: prismaLogo },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Jira", logo: jiraLogo },
      { name: "Maven", logo: mavenLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "IntelliJ IDEA", logo: intellijLogo },
    ],
  },
];
