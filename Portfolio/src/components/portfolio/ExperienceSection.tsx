import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Co-Founder & CFO",
    company: "Travelyatri",
    period: "June 2024 – Dec 2025",
    description:
      "Co-founded a travel-tech startup, managing finances and contributing to product development. Led strategic planning, budgeting, and cross-functional team coordination.",
    highlights: ["Financial Strategy", "Product Development", "Team Leadership"],
  },
  {
    role: "Data Entry & Software Dev Intern",
    company: "SK Steel",
    period: "April – June 2025",
    description:
      "Worked on data management systems and developed internal software tools to streamline operations and improve data accuracy across departments.",
    highlights: ["Data Management", "Software Development", "Process Optimization"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">Journey</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">Experience</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-primary rounded-full box-glow" />

                <div className="bg-card neon-border rounded-sm p-6 neon-border-hover transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-heading text-xl font-bold text-foreground">{exp.role}</h4>
                      <p className="font-heading text-primary text-sm tracking-wider uppercase">{exp.company}</p>
                      <p className="font-body text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-1 text-xs font-display tracking-wider uppercase bg-primary/10 text-primary rounded-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
