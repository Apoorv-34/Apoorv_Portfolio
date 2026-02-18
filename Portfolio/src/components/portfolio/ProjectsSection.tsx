import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2, Bot, Eye, Swords, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot with AR",
    description:
      "An intelligent chatbot integrated with Augmented Reality for immersive conversational experiences. Combines NLP with AR visualization in Unity.",
    tech: ["C#", "Unity", "AR Foundation", "NLP"],
    icon: Bot,
    color: "from-emerald-500/20 to-primary/10",
    link: "www.youtube.com", // Add your project link here, e.g. "https://github.com/ApoorvGoyal/ai-chatbot-ar"
  },
  {
    title: "AI Pothole Detection",
    description:
      "Computer vision system using YOLOv8 for real-time pothole detection on roads. Helps improve road safety through automated infrastructure monitoring.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    icon: Eye,
    color: "from-sky-500/20 to-primary/10",
    link: "", // Add your project link here
  },
  {
    title: "FPS Shooting Game",
    description:
      "A first-person shooter game built in Unity with custom 3D models from Blender. Features enemy AI, weapon systems, and immersive environments.",
    tech: ["C#", "Unity", "Blender", "3D Modeling"],
    icon: Gamepad2,
    color: "from-amber-500/20 to-primary/10",
    link: "", // Add your project link here
  },
  {
    title: "Warrior in Woods",
    description:
      "An adventure game set in a mystical forest environment. Players navigate through challenges, combat enemies, and explore handcrafted landscapes.",
    tech: ["C#", "Unity", "Blender", "Game Design"],
    icon: Swords,
    color: "from-rose-500/20 to-primary/10",
    link: "", // Add your project link here
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.link || undefined}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-card neon-border rounded-sm overflow-hidden neon-border-hover transition-all duration-500 hover:-translate-y-2 block ${project.link ? "cursor-pointer" : "cursor-default"}`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      {/* Hover background effect */}
      <motion.div
        animate={{ opacity: hovered ? 0.05 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
      />

      <div className="relative p-6 md:p-8">
        {/* Number + icon row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl font-bold text-border group-hover:text-primary/20 transition-colors">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 0 : -45, scale: hovered ? 1.1 : 1 }}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>

        <h4 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] font-display tracking-[0.15em] uppercase bg-secondary text-muted-foreground rounded-sm group-hover:bg-primary/10 group-hover:text-primary/80 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">Portfolio</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Projects</h3>
          </div>
          <span className="hidden md:block font-display text-6xl font-bold text-border">
            {String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
