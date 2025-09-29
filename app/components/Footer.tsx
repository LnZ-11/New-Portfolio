"use client";

import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Heart,
  ArrowUp,
  MapPin,
  ExternalLink,
  Instagram
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-background via-secondary/20 to-accent/10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonne 1: Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 drop-shadow-md">
                Contactez-moi
              </h3>
              <p className="text-muted-foreground leading-relaxed drop-shadow-sm">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations.
                N&apos;hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:lyes.lattari@gmail.com"
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    lyes.lattari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/213542858609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    +213 542 85 86 09
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/lyes-lattari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    Lyes Lattari
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-sm">Algérie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 drop-shadow-md">
                Navigation
              </h3>
              <p className="text-muted-foreground leading-relaxed drop-shadow-sm">
                Accédez rapidement aux différentes sections de mon portfolio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="#home"
                className="p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105 text-center group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  Accueil
                </span>
              </a>
              <a
                href="#about"
                className="p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105 text-center group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  À Propos
                </span>
              </a>
              <a
                href="#projects"
                className="p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105 text-center group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  Projets
                </span>
              </a>
              <a
                href="#contact"
                className="p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105 text-center group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  Contact
                </span>
              </a>
            </div>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 drop-shadow-md">
                Suivez-moi
              </h3>
              <p className="text-muted-foreground leading-relaxed drop-shadow-sm">
                Retrouvez-moi sur les réseaux sociaux et GitHub pour suivre mes projets.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/LnZ-11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://linkedin.com/in/lyes-lattari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-all duration-200 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
              </a>
              <a
                href="https://www.instagram.com/lima_tech.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-all duration-200 hover:scale-110 group"
              >
                <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-200" />
              </a>
              <a
                href="mailto:lyes.lattari@gmail.com"
                className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-all duration-200 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Lyes Lattari. Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>et React</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
              <span className="font-medium">Retour en haut</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
