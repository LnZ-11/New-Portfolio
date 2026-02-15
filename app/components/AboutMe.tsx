"use client";

import {
  Globe,
  BookOpen,
  Briefcase,
  GraduationCap,
  Languages,
  Calendar,
  MonitorCog,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();

  const languages = [
    {
      name: "Français",
      level: "Natif",
      flag: "🇫🇷",
      description: t.about.items.languages.fr.description,
    },
    {
      name: "Kabyle",
      level: "Natif",
      flag: "ⵣ",
      description: t.about.items.languages.kab.description,
    },
    {
      name: "Arabe",
      level: "Avancé",
      flag: "🇩🇿",
      description: t.about.items.languages.ar.description,
    },
    {
      name: "Anglais",
      level: "Avancé",
      flag: "🇺🇸",
      description: t.about.items.languages.en.description,
    },
    {
      name: "Italien",
      level: "Débutant",
      flag: "🇮🇹",
      description: t.about.items.languages.it.description,
    },
  ];

  const experiences = [
    {
      title: t.about.items.experience.tizi.title,
      company: "Tizi Flash",
      period: "2022 - 2025",
      description: t.about.items.experience.tizi.description,
      icon: MonitorCog,
    },
  ];

  const education = [
    {
      degree: t.about.items.education.formation.degree,
      school: "Centre de formation Expression",
      period: "2023 - 2024",
      description: t.about.items.education.formation.description,
      icon: GraduationCap,
    },
    {
      degree: t.about.items.education.university.degree,
      school: "Université Mouloud Mameri Tizi Ouzou",
      period: "2022 - 2025",
      description: t.about.items.education.university.description,
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-primary drop-shadow-md" />
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground drop-shadow-sm title-gradient">
              {t.about.title}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-5xl lg:max-w-8xl mx-auto">
            <div className="relative w-100 h-100 lg:w-1/2 lg:h-1/2 bg-gradient-to-br from-secondary 
            to-accent flex items-center justify-center rounded-full overflow-hidden 
            shadow-[0_0_60px_rgba(147,51,234,0.3),0_0_120px_rgba(147,51,234,0.2),0_0_180px_rgba(147,51,234,0.1)]"
            >
              <Image
                src="/images/lyes-lattari-stage.png"
                alt="Lyes Lattari"
                width={400}
                height={400}
                className="rounded-lg translate-y-[85px] lg:translate-y-[0px]"
              />
            </div>
            <p className="text-sm text-muted-foreground text-justify px-8 drop-shadow-sm">
              {t.about.intro1} <strong>Lyes Lattari</strong> {t.about.intro2} {new Date().getFullYear() - 1999} {t.about.intro3} <strong>ReactJS {t.footer.and} Next.js</strong> {t.about.intro4} <strong>JavaScript</strong>.<br />
              {t.about.p1}
              <br />
              <br />
              {t.about.p2}
              <br />
              {t.about.p3}
              <br />
              <br />
              {t.about.p4}
              <br />
              {t.about.p5}
              <br />
              {t.about.p6}
              <br />
              <br />
              {t.about.p7}
              <br />
              {t.about.p8}
              <br />
              {t.about.p9}
              <br />
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonne 1: Description et polyglottisme */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/30 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 drop-shadow-sm">
                <Languages className="w-6 h-6 text-primary" />
                {t.about.polyglotTitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed drop-shadow-sm">
                {t.about.polyglotDesc1}
              </p>
              <p className="text-muted-foreground leading-relaxed drop-shadow-sm">
                {t.about.polyglotDesc2}
              </p>
            </div>

            {/* Parcours professionnel */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 drop-shadow-sm">
                <Briefcase className="w-6 h-6 text-primary" />
                {t.about.experienceTitle}
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg shadow-sm">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground drop-shadow-sm">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </p>
                        <p className="text-muted-foreground drop-shadow-sm">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parcours universitaire */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 drop-shadow-sm">
                <GraduationCap className="w-6 h-6 text-primary" />
                {t.about.educationTitle}
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg shadow-sm">
                        <edu.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground drop-shadow-sm">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </p>
                        <p className="text-muted-foreground drop-shadow-sm">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne 2: Langues */}
          <div>
            <div className="bg-secondary/30 rounded-2xl p-8 sticky top-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 drop-shadow-sm">
                <Languages className="w-6 h-6 text-primary" />
                {t.about.languagesTitle}
              </h3>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl drop-shadow-sm">
                        {lang.flag}
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground drop-shadow-sm">
                          {lang.name}
                        </h4>
                        <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full shadow-sm">
                          {lang.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground drop-shadow-sm">
                      {lang.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Statistiques linguistiques avec ombrage */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-primary/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl font-bold text-primary drop-shadow-sm">
                      5
                    </div>
                    <div className="text-sm text-muted-foreground">Langues</div>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl font-bold text-accent drop-shadow-sm">
                      2
                    </div>
                    <div className="text-sm text-muted-foreground">Natives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
