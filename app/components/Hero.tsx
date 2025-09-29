"use client";

import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function Hero() {
  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"></div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.3),0_0_100px_rgba(59,130,246,0.2),0_0_150px_rgba(59,130,246,0.1)]"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl shadow-[0_0_60px_rgba(147,51,234,0.3),0_0_120px_rgba(147,51,234,0.2),0_0_180px_rgba(147,51,234,0.1)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-[0_4px_2px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]">
              Lyes Lattari
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-accent-foreground mb-8 drop-shadow-[0_3px_6px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)] title-gradient">
              Développeur Full Stack
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-10 max-w-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.15)]">
              Passionné par la création d&apos;applications web modernes et
              performantes. J&apos;allie créativité et expertise technique pour
              transformer vos idées en solutions digitales exceptionnelles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-[0_8px_16px_rgba(59,130,246,0.4),0_4px_8px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_24px_rgba(59,130,246,0.5),0_6px_12px_rgba(59,130,246,0.4)]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#projects");
                }}
              >
                Voir mes projets
              </button>
              <button
                className="border-2 border-accent-foreground text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent-foreground hover:text-accent transition-all duration-300 shadow-[0_8px_16px_rgba(147,51,234,0.3),0_4px_8px_rgba(147,51,234,0.2)] hover:shadow-[0_12px_24px_rgba(147,51,234,0.4),0_6px_12px_rgba(147,51,234,0.3)]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
              >
                Me contacter
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-full opacity-75 blur-lg shadow-[0_0_40px_rgba(59,130,246,0.4),0_0_80px_rgba(147,51,234,0.3),0_0_120px_rgba(59,130,246,0.2)]"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/50 to-primary/50 rounded-full opacity-50 blur-md shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(147,51,234,0.2)]"></div>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-[0_16px_32px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_10px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-8xl text-primary-foreground drop-shadow-lg">
                  <Image
                    src="/images/lyes-lattari.png"
                    alt="Lyes Lattari"
                    width={300}
                    height={300}
                    className="rounded-full translate-y-[-20px] lg:translate-y-[-45px]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl shadow-[0_8px_16px_rgba(59,130,246,0.4),0_4px_8px_rgba(59,130,246,0.3)] animate-bounce hover:shadow-[0_12px_24px_rgba(59,130,246,0.5),0_6px_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                <FaReact />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl shadow-[0_8px_16px_rgba(147,51,234,0.4),0_4px_8px_rgba(147,51,234,0.3)] animate-pulse hover:shadow-[0_12px_24px_rgba(147,51,234,0.5),0_6px_12px_rgba(147,51,234,0.4)] transition-all duration-300">
                <RiNextjsFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
