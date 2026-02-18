import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">About</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">Who I Am</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card neon-border rounded-sm p-8 neon-border-hover transition-all duration-300"
          >
            <p className="text-muted-foreground leading-relaxed text-base font-body">
              I'm <span className="text-primary font-semibold">Apoorv Goyal</span>, a B.Tech Computer Science student at 
              VIT Bhopal University with a passion for building immersive digital experiences. From co-founding a travel-tech 
              startup to developing AI-powered solutions and game worlds in Unity, I thrive at the intersection of 
              creativity and technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Projects", value: "4+" },
              { label: "Startups", value: "1" },
              { label: "Tech Stack", value: "10+" },
              { label: "Focus", value: "AI & Games" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card neon-border rounded-sm p-6 text-center neon-border-hover transition-all duration-300"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow mb-1">
                  {stat.value}
                </div>
                <div className="font-heading text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
