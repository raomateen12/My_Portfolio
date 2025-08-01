import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import softwareHouseBg from '@/assets/software-house-bg.jpg';
import myImage from '@/assets/my_image.png';
import background1 from '@/assets/background_1.jpg';
import background2 from '@/assets/Background_image_2.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const texts = [
    // "I am Rao Mateen, a full stack MERN/Next.js developer.",
    "Dev Mateen | Full Stack MERN/Next.js Developer | Crafting Scalable Web Solutions",
    "I help businesses grow faster with automatic and time-saving management systems."
  ];

  const bgImages = [softwareHouseBg, background1, background2];

  useEffect(() => {
    const type = () => {
      const current = texts[currentText];
      const shouldDelete = isDeleting;
      
      if (shouldDelete) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
      }

      let typeSpeed = 100;
      
      if (shouldDelete) {
        typeSpeed = 50;
      }

      if (!shouldDelete && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setCurrentText((currentText + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, texts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-primary/30 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut"
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-screen h-full transition-all duration-1000 overflow-hidden -mx-4 md:mx-0">
        <div className="w-[200%] h-full md:w-full">
          <img 
            src={bgImages[bgIndex]} 
            alt="Background" 
            className="w-full h-full object-cover object-center min-w-full min-h-full"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              minWidth: '100vw',
              minHeight: '100%'
            }}
          />
        </div>
      </div>
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Animated background */}
      <div className="absolute inset-0">
        {particles}
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main heading - moved to left */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-left ml-8 md:ml-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                Mateen Ahmad Saeed
              </h1>
              
              {/* Animated subheading */}
              <motion.div
                className="text-lg md:text-xl text-muted-foreground mb-8 h-16 flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span
                  className="bg-gradient-to-r from-[color:#FF69B4] to-[color:#FFD700] bg-clip-text text-transparent font-bold"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {displayText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-primary ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </motion.div>

              {/* Download Resume Button */}
              <motion.div
                className="flex flex-col justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Mobile/Tablet: image above button */}
                <div className="block md:hidden w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 overflow-hidden">
                  <img src={myImage} alt="Mateen Ahmad Saeed" className="w-full h-full object-contain bg-white" />
                </div>
                <motion.button
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg relative overflow-hidden group flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Add resume download logic here
                    console.log('Download resume clicked');
                  }}
                >
                  <span className="relative z-10">Download My Resume</span>
                  <motion.div
                    className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="buttonHover"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Desktop/Tablet: image on right */}
            <motion.div
              className="hidden md:block ml-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mt-8 overflow-hidden">
                <img src={myImage} alt="Mateen Ahmad Saeed" className="w-full h-full object-contain bg-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;