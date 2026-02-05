"use client";

import {
  Code,
  Database,
  Palette,
  Type,
  Store,
  Github,
  ExternalLink,
  Layers,
  Server,
  Zap,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    icon: Layers,
    description: "Framework React full-stack",
    color: "text-black",
    bgColor: "bg-gray-200 dark:bg-gray-600/20",
  },
  {
    name: "React",
    icon: Code,
    description: "Bibliothèque JavaScript",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Node.js",
    icon: Server,
    description: "Runtime JavaScript",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    name: "TypeScript",
    icon: Type,
    description: "JavaScript typé",
    color: "text-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Prisma",
    icon: Database,
    description: "ORM moderne",
    color: "text-gray-700",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    description: "Framework CSS",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    name: "Zustand",
    icon: Store,
    description: "State management",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
];

const projects = [
  {
    id: 1,
    title: "Facturex",
    description:
      "Mon App de Facturation qui utilise Puppeteer pour générer des factures en PDF puis les imprimer.",
    stack: ["React","Next.js", "TypeScript", "Tailwind CSS", "zod","puppeteer"],
    image: "/images/facturex-screenshot.png",
    githubUrl: "https://github.com/LnZ-11/facturex",
    liveUrl: "https://facturex-lilac.vercel.app/",
    status: "Terminé",
  },
  {
    id: 2,
    title: "Automatisation Mise en Ligne E-mail",
    description:
      "Un script NodeJS qui prends les emails enregistrer dans le logiciel de caisse d'un restaurant et les mets en ligne vers Mailjet chaque nuit a 2h du matin.",
    stack: ["Node.js", "TypeScript"],
    image: null,
    githubUrl: "https://github.com/LnZ-11/automatisation-email-l-addition",
    liveUrl: null,
    status: "Terminé",
  },
  {
    id: 3,
    title: "Application Timer",
    description:
      "Application de timer avec une interface utilisateur moderne et responsive.",
    stack: ["Next.js", "React", "TypeScript", "Zustand"],
    image: "/images/Timer_screenshot.png",
    githubUrl: "https://github.com/LnZ-11/Timer",
    liveUrl: "https://timer-nu-gray.vercel.app/",
    status: "Terminé",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            Technic & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto drop-shadow-md">
            Découvrez ma stack technique et explorez mes projets les plus
            récents
          </p>
        </div>
        <div className="mb-20">
          <div className="text-3xl font-bold text-foreground mb-12 text-center flex items-center justify-center gap-3 drop-shadow-md">
            <Zap className="w-8 h-8 text-primary drop-shadow-lg" />
            <span className="title-gradient">Ma Stack Technique</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`${tech.bgColor} rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-background rounded-lg shadow-lg">
                    <tech.icon
                      className={`w-8 h-8 ${tech.color} drop-shadow-lg`}
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2 drop-shadow-lg">
                  {tech.name}
                </h4>
                <p className="text-sm text-muted-foreground drop-shadow-lg">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 drop-shadow-md ">
            <Code className="w-8 h-8 drop-shadow-lg" />
            <span className="title-gradient">Mes Projets</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-background rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
              {project.image && (
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl border-b border-border shadow-inner overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                />
                </div>
              )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground drop-shadow-lg">
                      {project.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium shadow-lg ${
                        project.status === "En production"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : project.status === "En développement"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed drop-shadow-lg">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-2 drop-shadow-lg">
                      Technologies :
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs shadow-lg hover:shadow-md transition-shadow duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Github className="w-4 h-4 drop-shadow-lg" />
                      Code
                    </a>
                    {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 drop-shadow-lg" />
                      Demo
                    </a>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://github.com/LnZ-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6 drop-shadow-lg" />
              Voir tous mes projets sur GitHub
              <ArrowRight className="w-5 h-5 drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
