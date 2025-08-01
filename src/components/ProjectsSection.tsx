import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Play, Code, Smartphone, MessageCircle, Dumbbell, ShoppingBag, Brain, Globe } from 'lucide-react';
// Create image URLs using Vite's import.meta.url
function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

// Image URLs
const realTimeVideoChatImage = getImageUrl('real_time_video_chat.jpg');
const gymImage = getImageUrl('Gym.jpg');
const ecommerceImage = getImageUrl('E-commerce.jpg');
const aiCodeImage = getImageUrl('Ai-code.png');
const portfolioImage = getImageUrl('my-PORTFOLIO.png');
const restaurantImage = getImageUrl('RESTAUNT.jpg');



const projects = [
  {
    id: 1,
    title: 'Real-Time Video Chat Application',
    description: 'Developed a real-time video chat application with one-on-one messaging and video calling using WebRTC and Socket.IO. Integrated Google Gemini AI for smart chat suggestions and automated responses.',
    image: realTimeVideoChatImage,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'Tailwind CSS', 'Framer Motion', 'Google Gemini AI', 'JWT', 'OTP', 'Cloudinary', 'Nodemailer'],
    features: ['Real-time messaging', 'Video calling', 'AI chat suggestions', 'Image sharing', 'Cloud storage'],
    demoLink: 'https://drive.google.com/file/d/1H8d99pXwnoLdd-5LKmaTAfLOXdhxvs78/view?usp=sharing',
    codeLink: 'https://github.com/raomateen12/Video_chat_app',
    color: 'neon-blue',
    // icon: MessageCircle
  },
  {
    id: 2,
    title: 'Gym Management System (MERN Stack)',
    description: 'Developed a secure, role-based Gym Management web application using the MERN stack, providing tailored dashboards for Admins, Trainers, and Members with workout planning and session tracking.',
    image: gymImage,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Chart.js'],
    features: ['Role-based access control', 'Session management', 'Progress tracking', 'Analytics dashboards', 'Secure authentication'],
    demoLink: 'https://drive.google.com/file/d/1svxQdJ2Ns3PJR-JHO8edtm8m4zJhkNhe/view?usp=sharing',
    codeLink: 'https://github.com/raomateen12/Gym_CRM_MERN',
    color: 'neon-green',
    // icon: Dumbbell
  },
  {
    id: 3,
    title: 'Scatch – E-Commerce Bag Store',
    description: 'Built a full-stack e-commerce web application for a bag store with robust user and admin functionality including cart management and order placement.',
    image: ecommerceImage,
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'EJS', 'Tailwind CSS', 'JWT', 'bcryptjs', 'multer'],
    features: ['User authentication', 'Product management', 'Cart functionality', 'Admin dashboard', 'Image upload'],
    demoLink: 'https://drive.google.com/file/d/1PRuaKUzrf9icPNamzi2KTSgZYr1Q6Yo6/view?usp=sharing',
    codeLink: 'https://github.com/raomateen12/Bag-Store',
    color: 'neon-purple',
    icon: ShoppingBag
  },
  {
    id: 4,
    title: 'AI Code Review Web App',
    description: 'Developed a full-stack AI-powered web application for real-time code review using React.js and Node.js. Integrated Google Gemini 2.5 model for automated code feedback.',
    image: aiCodeImage,
    technologies: ['React.js', 'Vite', 'Axios', 'PrismJS', 'react-simple-code-editor', 'CSS3', 'Node.js', 'Express.js', 'CORS', '@google/generative-ai'],
    features: ['Real-time code review', 'AI feedback', 'Syntax highlighting', 'Code editor', 'Secure API'],
    demoLink: 'https://drive.google.com/file/d/1xxj0p7Vlu4GhcaZxshOQN_21O-RBOacE/view?usp=sharing',
    codeLink: 'https://github.com/raomateen12/Code_Review',
    color: 'neon-pink',
    icon: Brain
  },
  {
    id: 5,
    title: 'My Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with a clean, interactive UI featuring smooth animations and a dark theme.',
    image: portfolioImage,
    technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Node.js', 'Nodemailer', 'Lucide React'],
    features: ['Responsive design', 'Interactive UI', 'Dark mode', 'Contact form', 'Project showcase', 'Skills visualization'],
    demoLink: '#',
    codeLink: '#',
    color: 'neon-blue',
    icon: Smartphone
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'Built and deployed a modern restaurant website with a user-friendly interface, featuring pages for Home, Menu, Contact, and About.',
    image: restaurantImage,
    technologies: ['React', 'Material-UI', 'HTML', 'CSS', 'JavaScript'],
    features: ['Modern UI', 'Responsive design', 'Menu showcase', 'Contact form', 'Multi-page layout'],
    demoLink: 'https://drive.google.com/file/d/1rXOGzWTqUIG88tU4_hAmHpPJs0m0p37x/view?usp=sharing',
    codeLink: 'https://github.com/raomateen12/Resturant-website-Reactjs-MUI',
    color: 'neon-green',
    icon: Globe
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className={`relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-${project.color}/50 transition-all duration-300`}>
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--${project.color}) / 0.1) 0%, transparent 70%)`
          }}
        />

        {/* Project image */}
        <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className={`p-3 bg-${project.color} text-${project.color}-foreground rounded-full hover:scale-110 transition-transform`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              <Play className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.codeLink, '_blank')}
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>


          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + i * 0.05 + 0.5 }}
                  className={`px-2 py-1 bg-${project.color}/20 text-${project.color} rounded-md text-xs font-medium`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <motion.button
              className={`flex-1 px-4 py-2 bg-${project.color} text-${project.color}-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              <Play className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.button>
            <motion.button
              className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(project.codeLink, '_blank')}
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </motion.div>


        {/* Projects grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;