import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Wrench, Brain, Users, Gamepad2, Figma, GitBranch, Terminal, Database, Eye, MessageSquare, BarChart3, Shield, Lightbulb, Zap, Target } from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Code },
      { name: "C#", icon: Gamepad2 },
      { name: "SQL", icon: Database },
      { name: "HTML/CSS", icon: Code },
    ],
  },
  {
    label: "Tools & Engines",
    icon: Wrench,
    skills: [
      { name: "Unity", icon: Gamepad2 },
      { name: "Blender", icon: Eye },
      { name: "Figma", icon: Figma },
      { name: "Git", icon: GitBranch },
      { name: "VS Code", icon: Terminal },
    ],
  },
  {
    label: "AI & Data",
    icon: Brain,
    skills: [
      { name: "YOLOv8", icon: Eye },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
      { name: "Data Analysis", icon: BarChart3 },
    ],
  },
  {
    label: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Leadership", icon: Shield },
      { name: "Team Management", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Communication", icon: MessageSquare },
      { name: "Strategic Planning", icon: Target },
      { name: "Agile", icon: Zap },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">Arsenal</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">Skills & Tech</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * catIdx }}
              className="bg-card neon-border rounded-sm p-6 neon-border-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-sm flex items-center justify-center">
                  <cat.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-display text-[10px] tracking-[0.3em] uppercase text-primary">{cat.label}</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 * catIdx + 0.06 * i, duration: 0.35 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="group relative flex flex-col items-center gap-2 p-3 bg-secondary/50 rounded-sm neon-border cursor-default hover:bg-primary/10 hover:border-primary/50 hover:box-glow transition-all duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-heading text-xs text-foreground group-hover:text-primary text-center transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
