import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "VIT Bhopal University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    current: true,
  },
  {
    institution: "MB International School, Kota",
    degree: "Higher Secondary (XII)",
    period: "Completed",
    current: false,
  },
  {
    institution: "DDPS Kota",
    degree: "Secondary (X)",
    period: "Completed",
    current: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">Background</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">Education</h3>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="flex items-start gap-4 bg-card neon-border rounded-sm p-6 neon-border-hover transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading text-lg font-bold text-foreground">{edu.institution}</h4>
                  {edu.current && (
                    <span className="px-2 py-0.5 text-[10px] font-display tracking-wider uppercase bg-primary/20 text-primary rounded-sm animate-pulse-glow">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm font-body">{edu.degree}</p>
                <p className="text-xs text-muted-foreground/70 font-display tracking-wider mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
