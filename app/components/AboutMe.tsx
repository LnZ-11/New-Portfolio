"use client";

import {
  Globe,
  BookOpen,
  Briefcase,
  GraduationCap,
  Languages,
  Calendar,
  Users,
} from "lucide-react";
import Image from "next/image";

const languages = [
  {
    name: "Français",
    level: "Natif",
    flag: "🇫🇷",
    description: "Ma premiere langue",
  },
  {
    name: "Kabyle",
    level: "Natif",
    flag: "ⵣ",
    description: "Langue berbère maternelle",
  },
  {
    name: "Arabe",
    level: "Avancé",
    flag: "🇩🇿",
    description: "Arabe classique et dialectal",
  },
  {
    name: "Anglais",
    level: "Avancé",
    flag: "🇺🇸",
    description: "Courant - Technique & Business",
  },
  {
    name: "Italien",
    level: "Débutant",
    flag: "🇮🇹",
    description: "Apprentissage en cours",
  },
];

const experiences = [
  {
    title: "Développeur Frontend",
    company: "Startup Digital",
    period: "2024 - Présent",
    description: "Création d'interfaces utilisateur responsive et optimisées",
    icon: Users,
  },
];

const education = [
  {
    degree: "Formation en Développement Web",
    school: "Centre de formation Expression",
    period: "2022 - 2023",
    description:
      "Spécialisation en développement full-stack et architectures modernes",
    icon: GraduationCap,
  },
  {
    degree: "Licence Automatique",
    school: "Institut Polytechnique",
    period: "2022 - 2025",
    description: "Fondamentaux en programmation et algorithmique",
    icon: BookOpen,
  },
];

export default function AboutMe() {
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
              À Propos de Moi
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-5xl mx-auto">
            <div className="relative w-100 h-100 bg-gradient-to-br from-secondary to-accent flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.3),0_0_120px_rgba(147,51,234,0.2),0_0_180px_rgba(147,51,234,0.1)]">
              <Image
                src="/images/lyes-lattari-stage.png"
                alt="Lyes Lattari"
                width={400}
                height={400}
                className="rounded-lg translate-y-[85px] lg:translate-y-[80px]"
              />
            </div>
            <p className="text-sm text-muted-foreground text-justify px-8 drop-shadow-sm">
              Je m&apos;appelle <strong>Lyes Lattari</strong> j&apos;ai {new Date().getFullYear() - 1999} ans, développeur Fulstack
              passionné par <strong>ReactJS et Next.js</strong> ainsi que tout le pouvoir de <strong>JavaScript</strong>.<br />
              Depuis ma tendre enfance, j&apos;ai toujours été fasciné par l&apos;informatique. je
              passais des heures à monter, démonter et bidouiller mon PC juste pour le
              plaisir.
              <br />
              <br />
              Durant mes études en <strong>génie automatique</strong> j&apos;ai rapidement 
              compris que ma véritable passion n&apos;était pas dans les fils et
              circuits, loin de là même. J&apos;ai plutôt trouver ma voie dans la <strong>programmation</strong>.<br />
              Au début, même les langages complexes comme le C++, l&apos;assembleur 8086 ou
              Pascal m&apos;ont montré la beauté brute de la logique, du code et de la capaciter de creer une chose de mes prpres main.
              J&apos;ai ensuite choisi le language <strong>JavaScript</strong> pour jouer mes symphony.
              <br />
              <br />
              Mes premiers pas en HTML, CSS et PHP, puis une formation
              full-stack, ont confirmé ma voie.
              <br />
              La découverte de <strong>React</strong> a été un tournant : un
              monde de possibilités s&apos;ouvrait à moi.
              <br />
              Sous l&apos;influence et les conseils de celui que je considère comme mon mentor
              <strong>Melvyn Malherbe</strong>, chez qui j&apos;ai
              appris à coder avec rigueur et créativité ainsi qu&apos;à bien exploiter les outils et stack moderne.
              <br />
              <br />
              Aujourd&apos;hui, je crée bien plus que des applis fonctionnelles : je
              conçois des <strong>Solutions</strong> qui facilite la vie des gens.
              <br />
              Je suis basé en Algérie mais aussi tourné vers l&apos;international, je suis prêt à
              relever tout projet ou défi, pour offrir les meilleurs solutions à tout type de problémes
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
                Mon Polyglottisme
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed drop-shadow-sm">
                Mon parcours multiculturel m&apos;a permis de développer une
                véritable passion pour les langues et la communication. Cette
                richesse linguistique influence profondément ma façon
                d&apos;appréhender le développement logiciel et les interactions
                humaines.
              </p>
              <p className="text-muted-foreground leading-relaxed drop-shadow-sm">
                Chaque langue que j&apos;apprends m&apos;ouvre de nouvelles
                perspectives et m&apos;enrichit professionnellement. Cette
                diversité culturelle fait de moi un développeur plus empathique
                et adaptable, capable de comprendre et de répondre aux besoins
                variés des utilisateurs.
              </p>
            </div>

            {/* Parcours professionnel */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 drop-shadow-sm">
                <Briefcase className="w-6 h-6 text-primary" />
                Parcours Professionnel
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
                Parcours Universitaire
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
                Langues Maîtrisées
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
