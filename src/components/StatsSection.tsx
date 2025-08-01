import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  const stats = [
    {
      value: 4,
      suffix: '+',
      label: 'Certifications',
      duration: 2,
    },
    {
      value: 100,
      suffix: '%',
      label: 'Completion Rate',
      duration: 2.5,
    },
    {
      value: 15,
      suffix: '+',
      label: 'Skills Validated',
      duration: 2.2,
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievement Stats
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase my dedication to excellence and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  {/* Animated number */}
                  <div className="text-5xl md:text-6xl font-bold mb-4">
                    {startAnimation ? (
                      <span className="text-neon-green">
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={stat.duration}
                          separator=","
                          suffix={stat.suffix}
                        />
                      </span>
                    ) : (
                      <span className="text-neon-green">0{stat.suffix}</span>
                    )}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground/90 mb-2">
                    {stat.label}
                  </h3>

                  {/* Animated underline */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 mx-auto"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-4 w-1 h-20 bg-gradient-to-b from-primary to-accent opacity-30 rounded-full"></div>
        <div className="absolute top-1/2 right-4 w-1 h-20 bg-gradient-to-b from-accent to-primary opacity-30 rounded-full"></div>
      </div>
    </section>
  );
};

export default StatsSection;