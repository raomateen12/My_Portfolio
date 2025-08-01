import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Rotating and glowing "M" */}
        <motion.div
          initial={{ rotateY: 0, scale: 0.5, opacity: 0 }}
          animate={{ 
            rotateY: 360, 
            scale: 1, 
            opacity: 1,
          }}
          transition={{
            rotateY: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 0.8,
              ease: "easeOut"
            },
            opacity: {
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          className="text-8xl font-bold text-neon-blue mb-8 perspective-1000"
          style={{
            fontFamily: 'Arial Black, sans-serif',
            textShadow: '0 0 30px hsl(var(--neon-blue))',
            filter: 'drop-shadow(0 0 20px hsl(var(--neon-blue) / 0.8))'
          }}
        >
          M
        </motion.div>

        {/* Loading progress bar */}
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground"
        >
          Loading Portfolio... {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;