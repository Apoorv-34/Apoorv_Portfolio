import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "goyalapoorv7@gmail.com", href: "mailto:goyalapoorv7@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9057397791", href: "tel:+919057397791" },
    { icon: Linkedin, label: "LinkedIn", value: "Apoorv Goyal", href: "https://www.linkedin.com/in/apoorv-goyal-2b4b3a256/" },
    { icon: Github, label: "GitHub", value: "ApoorvGoyal", href: "https://github.com/ApoorvGoyal" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-2">Connect</h2>
          <h3 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            Let's Build<br />
            <span className="text-primary text-glow">Something Epic</span>
          </h3>
          <p className="text-muted-foreground font-body max-w-md mx-auto text-lg">
            Got a project in mind? Let's team up and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="group bg-card neon-border rounded-sm p-6 neon-border-hover transition-all duration-300 block"
            >
              <div className="flex items-center justify-between mb-4">
                <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{link.label}</p>
              <p className="text-foreground text-sm font-body truncate group-hover:text-primary transition-colors">{link.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Big email CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:goyalapoorv7@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-display text-xs tracking-[0.3em] uppercase rounded-sm hover:box-glow-strong transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Say Hello
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-primary text-glow">AG</span>
          <p className="text-muted-foreground text-xs font-display tracking-[0.2em] uppercase">
            © 2025 Apoorv Goyal · Built with passion
          </p>
          <div className="flex gap-4">
            {links.filter(l => l.href.startsWith("http")).map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <l.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
