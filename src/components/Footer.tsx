import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/raomateen12",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mateen-ahmad-saeed",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:raomateen2851@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-background/50 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Rao Mateen Ahmad Saeed(RMAS)
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-end">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Mateen
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-border/30"
        >
          <p className="text-center text-xs text-muted-foreground">
            "Code is poetry written in logic"
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;