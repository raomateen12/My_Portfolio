import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';
import { Award, ExternalLink, CheckCircle, Calendar } from 'lucide-react';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const certifications = [
  {
    id: 1,
    title: 'MERN Stack: All You Need to Know with Practical Project',
    issuer: 'Udemy',
    date: '',
    description: 'Comprehensive certification demonstrating expertise in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full Stack Development'],
    link: 'https://drive.google.com/file/d/1ZomgFqro_rinCElSP73zmxcdDqJeaGMC/view'
  },
  {
    id: 2,
    title: 'Master Next.js for Beginners with projects',
    issuer: 'Udemy',
    date: '',
    description: 'Advanced certification covering Next.js fundamentals, server-side rendering, static generation, and modern web development practices.',
    skills: ['Next.js', 'Server-side Rendering', 'Static Generation', 'React.js', 'Web Development'],
    link: 'https://drive.google.com/file/d/1-ADwRmVulK3d_WHQYvODbELwY5pXvlGK/view'
  },
  {
    id: 3,
    title: 'Mastering React: React Crash Course with Mini Projects',
    issuer: 'Udemy',
    date: '',
    description: 'Comprehensive React certification covering components, hooks, state management, and practical project implementation.',
    skills: ['React.js', 'Components', 'Hooks', 'State Management', 'Project Development'],
    link: 'https://drive.google.com/file/d/13_eUSC43ipMTXu-ODf0awZE1AW3QU8id/view'
  },
  {
    id: 4,
    title: 'React.JS for Ecommerce: Building a Store with React.JS',
    issuer: 'Udemy',
    date: '',
    description: 'Specialized certification focused on building e-commerce applications using React.js with modern development practices.',
    skills: ['React.js', 'E-commerce Development', 'Shopping Cart', 'Payment Integration', 'User Interface'],
    link: 'https://drive.google.com/file/d/1I2xE5cUjKc3ofB0Mxf-ZZJhgQYI1wq4v/view'
  },
  {
    id: 5,
    title: 'Certificate of Ambassador Appreciation',
    issuer: 'Digital Empowerment Network',
    date: '',
    description: 'Recognized for serving as a student ambassador for one month, actively promoting digital skills and community engagement among students.',
    skills: ['Leadership', 'Community Engagement', 'Digital Skills', 'Student Mentoring', 'Networking'],
    link: 'https://drive.google.com/file/d/1VkGUBY27RMDZBsdBR-YgDrJ0MKEt-49m/view?usp=sharing'
  }
];

const CertificationCard = ({ 
  certification, 
  index
}: { 
  certification: any, 
  index: number
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="certification-card bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group shadow-lg h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 20px 40px hsl(var(--primary) / 0.2)',
        transition: { duration: 0.2 }
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <motion.div
          className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Award className="w-6 h-6 text-primary" />
        </motion.div>
        <motion.a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {certification.title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <span className="font-semibold text-primary">{certification.issuer}</span>
            {certification.date && (
              <>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{certification.date}</span>
                </div>
              </>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed">{certification.description}</p>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Skills Covered
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill: string, i: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!api) {
      return;
    }
 
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="certifications" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              5+
            </div>
            <div className="text-muted-foreground font-medium">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              20+
            </div>
            <div className="text-muted-foreground font-medium">Skills Validated</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              100%
            </div>
            <div className="text-muted-foreground font-medium">Completion Rate</div>
          </div>
        </motion.div>

        {/* Certifications Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((certification, index) => (
                <CarouselItem key={certification.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <CertificationCard 
                    certification={certification} 
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Carousel indicator dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Committed to Continuous Learning
            </h3>
            <p className="text-muted-foreground mb-6">
              I believe in staying updated with the latest technologies and best practices. 
              These certifications represent my dedication to delivering quality solutions.
            </p>
            <motion.div
              className="text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Always learning, always growing</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;