import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Gamepad2, Code, Brain } from "lucide-react";
import { useRef } from "react";

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: any; className: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.15, y: [0, -15, 0] }}
    transition={{ opacity: { delay, duration: 1 }, y: { delay, duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" } }}
    className={`absolute ${className}`}
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[130px]"
        />
      </div>

      {/* Floating gaming icons */}
      <FloatingIcon icon={Gamepad2} className="top-[15%] left-[10%] md:left-[15%]" delay={0.5} />
      <FloatingIcon icon={Code} className="top-[20%] right-[10%] md:right-[18%]" delay={0.8} />
      <FloatingIcon icon={Brain} className="bottom-[25%] left-[8%] md:left-[20%]" delay={1.1} />
      <FloatingIcon icon={Gamepad2} className="bottom-[20%] right-[12%] md:right-[15%]" delay={1.4} />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-12 h-px bg-primary/40" />
          <p className="text-primary font-display text-[10px] md:text-xs tracking-[0.4em] uppercase">
            Welcome to my world
          </p>
          <div className="w-12 h-px bg-primary/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] uppercase text-foreground mb-2"
        >
          <span className="text-glow-strong text-primary">Apoorv</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] uppercase text-foreground/80 mb-6"
        >
          Goyal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-heading text-lg md:text-2xl text-muted-foreground tracking-wider uppercase"
        >
          Software Developer{" "}
          <span className="text-primary">⬥</span> Game Developer{" "}
          <span className="text-primary">⬥</span> AI Enthusiast
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-6 md:gap-10"
        >
          {[
            { label: "Projects", val: "4+" },
            { label: "Tech", val: "10+" },
            { label: "Experience", val: "2 yrs" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-xl md:text-2xl font-bold text-primary text-glow">{s.val}</div>
              <div className="font-display text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-widest text-sm hover:box-glow-strong transition-all duration-300 rounded-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 neon-border text-primary font-heading font-semibold uppercase tracking-widest text-sm hover:bg-primary/10 neon-border-hover transition-all duration-300 rounded-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-[9px] font-display tracking-[0.4em] uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
