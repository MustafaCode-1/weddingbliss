import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import weddingConfig from '../../../config/wedding.json';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = weddingConfig?.hero?.images || [];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-section');
    if (rsvpSection) {
      rsvpSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {heroImages?.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={`Wedding hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
          </motion.div>
        ))}
      </div>
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              rotate: 0
            }}
            animate={{
              y: -50,
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Icon name="Heart" size={16 + Math.random() * 8} />
          </motion.div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Couple Names */}
          <div className="space-y-4">
            <motion.h1 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <span className="block">{weddingConfig?.couple?.bride}</span>
              <span className="font-accent text-primary text-3xl md:text-4xl lg:text-5xl block my-2">
                &
              </span>
              <span className="block">{weddingConfig?.couple?.groom}</span>
            </motion.h1>
            
            <motion.p 
              className="font-accent text-xl md:text-2xl text-primary/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {weddingConfig?.couple?.tagline}
            </motion.p>
          </div>

          {/* Wedding Date & Location */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg md:text-xl">
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={24} className="text-primary" />
                <span className="font-medium">{weddingConfig?.date?.display}</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/30" />
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="font-medium">{weddingConfig?.location?.venue}</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Icon name="Clock" size={20} />
              <span>Ceremony at {weddingConfig?.date?.ceremonyTime}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <Button
              variant="default"
              size="lg"
              onClick={scrollToRSVP}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 button-shadow text-white font-semibold px-8 py-4"
              iconName="Heart"
              iconPosition="left"
            >
              RSVP Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
            >
              Save the Date
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm mb-2 font-medium">Discover Our Story</span>
          <Icon name="ChevronDown" size={24} />
        </motion.div>
      </motion.div>
      {/* Image Indicators */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-2">
        {heroImages?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'bg-primary' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;