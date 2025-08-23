import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelinePreview from './components/TimelinePreview';
import LoveStoryTeaser from './components/LoveStoryTeaser';
import WeddingInfoCards from './components/WeddingInfoCards';
import CountdownTimer from './components/CountdownTimer';
import RSVPSection from './components/RSVPSection';
import SocialSharing from './components/SocialSharing';
import weddingConfig from '../../config/wedding.json';

const CinematicHomepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Timeline Preview */}
        <TimelinePreview />
        
        {/* Love Story Teaser */}
        <LoveStoryTeaser />
        
        {/* Wedding Information Cards */}
        <WeddingInfoCards />
        
        {/* Countdown Timer */}
        <CountdownTimer />
        
        {/* RSVP Section */}
        {/* <RSVPSection /> */}
        
        {/* Social Sharing */}
        <SocialSharing />
        
        {/* Footer */}
        <footer className="py-16 bg-gradient-to-r from-muted to-muted/50">
          <div className="px-6 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <h3 className="mb-2 text-3xl font-bold font-heading text-foreground">
                  {weddingConfig?.couple?.bride} & {weddingConfig?.couple?.groom}
                </h3>
                <p className="text-xl font-accent text-primary">
                  {weddingConfig?.date?.display} • {weddingConfig?.location?.venue}
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <a 
                  href="/wedding-details-central" 
                  className="transition-colors duration-200 text-muted-foreground hover:text-primary"
                >
                  Wedding Details
                </a>
              </div>
              
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © {new Date()?.getFullYear()} WeddingBliss. Made with love for {weddingConfig?.couple?.bride} & {weddingConfig?.couple?.groom}.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  "Love is not just looking at each other, it's looking in the same direction together."
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CinematicHomepage;