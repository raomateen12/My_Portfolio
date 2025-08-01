import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import CountUp from 'react-countup';

const experiences = [
  {
    id: 1,
    title: 'React & Next.js Developer',
    company: 'Bytewise Limited',
    location: '',
    duration: 'Jun 2024 - August 2024',
    type: 'Internship',
    description: 'Developed responsive UIs and modern web applications with focus on SEO and performance optimization.',
    achievements: [
      'Developed responsive UIs with React.js and Tailwind CSS',
      'Built modern web pages with Next.js for SEO and server-side rendering',
      'Integrated REST APIs and managed state with React hooks and context API',
      'Collaborated in agile teams to deliver production-ready web applications',
      'Worked on real-world projects with clean code practices and Git workflows'
    ],
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs', 'React Hooks', 'Git'],
    color: 'neon-blue'
  },
  {
    id: 2,
    title: 'Full Stack Developer (MERN & Next.js)',
    company: 'Freelance Projects (via Fiverr/Upwork Networks & Local Clients)',
    location: '',
    duration: 'Jan 2024 - Present',
    type: 'Freelance',
    description: 'Delivered scalable, responsive, and secure solutions for diverse client requirements using modern web technologies.',
    achievements: [
      'Worked on diverse freelance projects using the MERN stack and Next.js',
      'Developed CRMs and web apps for local businesses and through indirect client networks',
      'Delivered scalable, responsive, and secure solutions based on client requirements',
      'Built e-commerce platforms, management systems, and custom web applications',
      'Maintained high client satisfaction with professional project delivery'
    ],
    technologies: ['MERN Stack', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'React.js', 'TypeScript'],
    color: 'neon-green'
  }
];

const ExperienceCard = ({ 
  experience, 
  index
}: { 
  experience: any, 
  index: number
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className="mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className={`relative p-6 md:p-8 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 group shadow-2xl max-w-4xl mx-auto`}
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          boxShadow: '0 25px 50px hsl(var(--primary) / 0.25)',
          transition: { duration: 0.2 }
        }}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--${experience.color}) / 0.15) 0%, transparent 70%)`
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <motion.div
                className={`w-14 h-14 rounded-xl bg-${experience.color}/20 flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className={`w-7 h-7 text-${experience.color}`} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{experience.title}</h3>
                <p className={`text-xl font-semibold text-${experience.color}`}>{experience.company}</p>
              </div>
            </div>
            <motion.div
              className={`px-4 py-2 bg-${experience.color}/20 text-${experience.color} rounded-full text-sm font-medium self-start`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {experience.type}
            </motion.div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement: string, i: number) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className={`w-2 h-2 bg-${experience.color} rounded-full mt-2.5 flex-shrink-0`} />
                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string, i: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.05 + 0.8 }}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and driving growth through technology
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {isInView && <CountUp end={2} duration={2} suffix="+" />}
            </div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {isInView && <CountUp end={50} duration={2.5} suffix="+" />}
            </div>
            <div className="text-muted-foreground font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              {isInView && <CountUp end={13} duration={2} />}
            </div>
            <div className="text-muted-foreground font-medium">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              {isInView && <CountUp end={100} duration={3} suffix="%" />}
            </div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id}
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;