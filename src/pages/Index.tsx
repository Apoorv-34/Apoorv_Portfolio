import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GamingBackground from "@/components/portfolio/GamingBackground";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import MarqueeTicker from "@/components/portfolio/MarqueeTicker";
import SectionDivider from "@/components/portfolio/SectionDivider";

const roles = ["Software Developer", "Game Developer", "AI Enthusiast", "Unity Creator", "Problem Solver"];

const SmoothName = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block cursor-default ${className}`}
      whileHover={{
        letterSpacing: "0.3em",
        textShadow: "0 0 20px hsl(68 100% 50% / 0.8), 0 0 60px hsl(68 100% 50% / 0.4)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{ y: -4, scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const TypedRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-primary font-heading text-lg md:text-2xl tracking-wider">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="animate-pulse-glow text-primary">|</span>
    </span>
  );
};

const LandingScreen = ({ onExplore }: { onExplore: () => void }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setReady(true), 300);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 scanline opacity-30" />

      {/* Animated radial pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
        />
      </div>

      {/* HUD corner decorations */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          className={`absolute w-16 h-16 ${pos} border-primary/30`}
        />
      ))}

      {/* HUD side lines */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />

      <div className="relative z-10 text-center px-4">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-primary/50" />
          <span className="font-display text-[10px] tracking-[0.6em] uppercase text-primary/60">
            Portfolio // 2025
          </span>
          <div className="w-8 h-px bg-primary/50" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold uppercase text-foreground leading-none"
        >
          <SmoothName text="Apoorv" className="text-glow-strong text-primary" />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-foreground/70 mt-1 tracking-[0.3em]"
        >
          Goyal
        </motion.h2>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mt-8 mb-6 w-48"
        />

        {/* Typed role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="h-8 mb-10"
        >
          <TypedRole />
        </motion.div>

        {/* Loading bar + Explore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col items-center gap-4"
        >
          {!ready ? (
            <div className="w-48">
              <div className="flex justify-between mb-1">
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                  Loading
                </span>
                <span className="font-display text-[9px] tracking-wider text-primary">
                  {Math.min(100, Math.round(loadProgress))}%
                </span>
              </div>
              <div className="w-full h-0.5 bg-border overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-primary box-glow"
                  style={{ width: `${Math.min(100, loadProgress)}%` }}
                />
              </div>
            </div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExplore}
              className="relative px-12 py-4 bg-transparent neon-border text-primary font-display text-xs sm:text-sm tracking-[0.4em] uppercase cursor-pointer rounded-sm overflow-hidden transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:box-glow-strong group"
            >
              {/* Animated border sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                Enter
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              </span>
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Bottom HUD info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 flex justify-between px-8"
      >
        <span className="font-display text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
          VIT Bhopal · CSE
        </span>
        <span className="font-display text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
          India · 2025
        </span>
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <GamingBackground />
      <ScrollProgress />
      <AnimatePresence>
        {!entered && <LandingScreen onExplore={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Navbar />
          <HeroSection />
          <MarqueeTicker />
          <AboutSection />
          <SectionDivider />
          <SkillsSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <EducationSection />
          <SectionDivider />
          <ContactSection />
        </motion.div>
      )}
    </main>
  );
};

export default Index;
