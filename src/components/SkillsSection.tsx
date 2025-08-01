import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Layers,
  Zap,
  Package,
  Workflow,
  FileCode,
  Monitor,
  Cloud
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const skills = [
  { name: 'React', icon: Code, level: 95 },
  { name: 'Node.js', icon: Server, level: 90 },
  { name: 'Express', icon: Zap, level: 88 },
  { name: 'MongoDB', icon: Database, level: 85 },
  { name: 'Next.js', icon: Globe, level: 92 },
  { name: 'Git', icon: GitBranch, level: 95 },
  { name: 'GitHub', icon: Package, level: 85 },
  { name: 'TypeScript', icon: FileCode, level: 90 },
  { name: 'Socket.IO', icon: Workflow, level: 88 },
  { name: 'Redux', icon: Layers, level: 82 },
  { name: 'JavaScript', icon: Monitor, level: 94 },
  { name: 'Docker', icon: Cloud, level: 75 },
];

const skillCategories = [
  {
    title: "Frontend Technologies",
    color: "neon-purple",
    skills: [
      { name: "React.js", icon: Code },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: Monitor },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Framer Motion", icon: Zap }
    ]
  },
  {
    title: "Backend Technologies", 
    color: "neon-blue",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Zap },
      { name: "MongoDB", icon: Database },
      { name: "Socket.IO", icon: Workflow },
      { name: "JWT Auth", icon: Package },
      { name: "REST APIs", icon: Globe },
      {name:"Postman",icon:Monitor}
    ]
  },
  {
    title: "DevOps & Tools",
    color: "neon-green", 
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Package },
      { name: "Docker", icon: Cloud },
      { name: "Vercel", icon: Globe },
      { name: "Postman", icon: Monitor },
      { name: "VS Code", icon: FileCode }
    ]
  }
];

const SkillOrb = ({ skill, index, total }: { skill: any, index: number, total: number }) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 140;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        x, 
        y, 
        opacity: 1,
        scale: 1,
        rotateY: [0, 360],
      }}
      transition={{
        delay: index * 0.08,
        duration: 1.2,
        ease: "easeOut",
        rotateY: {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.3
        }
      }}
      whileHover={{ 
        scale: 1.3, 
        z: 30,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="w-20 h-20 bg-black border-2 border-primary/40 rounded-full flex items-center justify-center text-3xl shadow-lg relative"
        whileHover={{
          borderColor: 'hsl(var(--accent))',
          transition: { duration: 0.2 }
        }}
      >
        <skill.icon 
          className="w-10 h-10 text-primary" 
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) * 0.1,
          y: (e.clientY - rect.top - rect.height / 2) * 0.1,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* 3D Skills Orbit */}
        <motion.div
          className="relative h-[500px] mx-auto max-w-2xl"
          style={{
            perspective: 1500,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: mousePosition.y * 0.5,
            rotateY: mousePosition.x * 0.5,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 150, 
            damping: 25,
            mass: 0.8
          }}
        >
          {/* Central hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <motion.div
              className="w-12 h-12 bg-primary rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px hsl(var(--primary))',
                  '0 0 40px hsl(var(--primary))',
                  '0 0 20px hsl(var(--primary))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Orbiting skills */}
          {isInView && skills.map((skill, index) => (
            <SkillOrb 
              key={skill.name} 
              skill={skill} 
              index={index} 
              total={skills.length} 
            />
          ))}

          {/* Connecting lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: -1 }}
          >
            {skills.map((_, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const nextAngle = ((index + 1) / skills.length) * 2 * Math.PI;
              const radius = 120;
              
              const x1 = 50 + (Math.cos(angle) * radius) / 4;
              const y1 = 50 + (Math.sin(angle) * radius) / 4;
              const x2 = 50 + (Math.cos(nextAngle) * radius) / 4;
              const y2 = 50 + (Math.sin(nextAngle) * radius) / 4;
              
              return (
                <motion.line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 1 }}
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Technical Expertise Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Technical Expertise
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Frontend Development Card */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.7, duration: 0.6 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-80"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-primary mb-6 text-center">
                      Frontend Technologies
                    </h4>
                    <div className="overflow-y-auto h-56 space-y-3 pr-2">
                      {[
                        { name: 'HTML5', icon: Code },
                        { name: 'CSS3', icon: Layers },
                        { name: 'JavaScript (ES6+)', icon: Monitor },
                        { name: 'TypeScript', icon: FileCode },
                        { name: 'React.js', icon: Code },
                        { name: 'React Hooks', icon: Code },
                        { name: 'Redux Toolkit', icon: Layers },
                        { name: 'Next.js', icon: Globe },
                        { name: 'Tailwind CSS v4', icon: Layers },
                        { name: 'DaisyUI', icon: Layers },
                        { name: 'Framer Motion', icon: Zap },
                        { name: 'Lucide Icons', icon: Package }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.8 + index * 0.05, duration: 0.4 }}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors"
                        >
                          <skill.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>

                {/* Backend Development Card */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.9, duration: 0.6 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-80"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-accent mb-6 text-center">
                      Backend Technologies
                    </h4>
                    <div className="overflow-y-auto h-56 space-y-3 pr-2">
                      {[
                        { name: 'Node.js', icon: Server },
                        { name: 'Express.js', icon: Zap },
                        { name: 'Next.js', icon: Globe },
                        { name: 'JWT', icon: Package },
                        { name: 'NextAuth', icon: Package },
                        { name: 'Socket.IO', icon: Workflow },
                        { name: 'WebRTC', icon: Globe },
                        { name: 'RESTful APIs', icon: Globe },
                        { name: 'MongoDB Atlas', icon: Database },
                        { name: 'MySQL', icon: Database },
                        { name: 'Postman', icon: Monitor },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 2.0 + index * 0.05, duration: 0.4 }}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors"
                        >
                          <skill.icon className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>

                {/* DevOps & Project Management Card */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2.1, duration: 0.6 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-80"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-green-400 mb-6 text-center">
                      DevOps & Project Management
                    </h4>
                    <div className="overflow-y-auto h-56 space-y-3 pr-2">
                      {[
                        { name: 'Git', icon: GitBranch },
                        { name: 'GitHub', icon: Package },
                        { name: 'Vercel', icon: Globe },
                        { name: 'Render', icon: Cloud },
                        { name: 'Railway', icon: Cloud },
                        { name: 'Docker', icon: Cloud },
                        { name: 'CI/CD Pipeline', icon: Workflow },
                        { name: 'Jira', icon: Package }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 2.2 + index * 0.05, duration: 0.4 }}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-background/50 hover:bg-green-400/10 transition-colors"
                        >
                          <skill.icon className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>

                {/* UI/UX Design Card */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2.3, duration: 0.6 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-80"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-orange-400 mb-6 text-center">
                      🟠 UI/UX Design
                    </h4>
                    <div className="overflow-y-auto h-56 space-y-3 pr-2">
                      {[
                        { name: 'Responsive Design', icon: Monitor },
                        { name: 'Wireframing', icon: FileCode },
                        { name: 'Prototyping', icon: Layers },
                        { name: 'Media Queries', icon: Monitor },
                        { name: 'Component-Based Design', icon: Layers }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 2.4 + index * 0.05, duration: 0.4 }}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-background/50 hover:bg-orange-400/10 transition-colors"
                        >
                          <skill.icon className="w-4 h-4 text-orange-400" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;