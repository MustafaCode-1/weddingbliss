import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import weddingConfig from '../../../config/wedding.json';

const LoveStoryTeaser = () => {
  const storyChapters = weddingConfig?.loveStoryChapters || [];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <Icon name="BookOpen" size={16} />
            <span>Our Love Story</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-foreground">
            Every Love Story is Beautiful
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-muted-foreground">
            But ours is our favorite. Join us as we share the moments, memories, and milestones 
            that brought us to this magical day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {storyChapters?.map((chapter) => (
            <motion.div
              key={chapter?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: chapter?.delay }}
              viewport={{ once: true }}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden transition-all duration-500 bg-card rounded-2xl romantic-shadow hover:shadow-xl hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={chapter?.image}
                    alt={chapter?.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${chapter?.gradient} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                      <Icon name={chapter?.icon} size={20} color="white" />
                    </div>
                  </div>

                  {/* Floating Hearts */}
                  <div className="absolute transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon name="Heart" size={16} className="text-white/80" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-xl font-bold transition-colors duration-300 font-heading text-foreground group-hover:text-primary">
                      {chapter?.title}
                    </h3>
                    <p className="text-lg font-accent text-primary">
                      {chapter?.subtitle}
                    </p>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {chapter?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStoryTeaser;