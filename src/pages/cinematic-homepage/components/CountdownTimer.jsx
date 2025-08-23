import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import weddingConfig from '../../../config/wedding.json';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

const weddingDate = new Date(weddingConfig?.date?.weddingDateISO);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()?.getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft?.days, icon: 'Calendar', gradient: 'from-pink-400 to-rose-500' },
    { label: 'Hours', value: timeLeft?.hours, icon: 'Clock', gradient: 'from-primary to-accent' },
    { label: 'Minutes', value: timeLeft?.minutes, icon: 'Timer', gradient: 'from-purple-400 to-pink-500' },
    { label: 'Seconds', value: timeLeft?.seconds, icon: 'Zap', gradient: 'from-blue-400 to-purple-500' }
  ];

  return (
    <section id="countdown-section" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Icon name="Clock" size={16} />
            <span>Countdown to Forever</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Big Day is Almost Here!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every second brings us closer to saying "I do" and beginning our forever together. 
            Join us in counting down to the most magical day of our lives.
          </p>
        </motion.div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {timeUnits?.map((unit, index) => (
            <motion.div
              key={unit?.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 romantic-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${unit?.gradient} flex items-center justify-center shadow-lg`}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon name={unit?.icon} size={24} color="white" />
                  </motion.div>
                </div>

                {/* Number */}
                <motion.div
                  key={unit?.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="countdown-pulse"
                >
                  <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground block leading-none">
                    {unit?.value?.toString()?.padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Label */}
                <p className="font-medium text-muted-foreground mt-2 text-sm md:text-base">
                  {unit?.label}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <Icon name="Heart" size={48} className="text-primary mx-auto" />
            </motion.div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              "The best is yet to come"
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              As we count down these precious moments, our hearts are filled with excitement 
              and gratitude for all the love and support from our family and friends.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/celebration-countdown"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 button-shadow"
              >
                <Icon name="Calendar" size={20} />
                <span>View Full Timeline</span>
              </a>
              
              <button className="inline-flex items-center space-x-2 border border-primary/20 text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-all duration-300">
                <Icon name="Bell" size={20} />
                <span>Set Reminder</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon name="Heart" size={32} className="text-primary" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Icon name="Sparkles" size={28} className="text-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;