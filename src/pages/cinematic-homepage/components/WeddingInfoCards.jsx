import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import weddingConfig from '../../../config/wedding.json';

const WeddingInfoCards = () => {
  const weddingInfo = weddingConfig?.events || [];

  const additionalInfo = weddingConfig?.additionalInfo || [];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
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
            <Icon name="Calendar" size={16} />
            <span>Wedding Details</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Celebrate With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All the essential details for our special day. We can't wait to celebrate 
            this magical moment with our favorite people.
          </p>
        </motion.div>

        {/* Main Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {weddingInfo?.map((event, index) => (
            <motion.div
              key={event?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 romantic-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${event?.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon name={event?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {event?.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {event?.time}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <Icon name="MapPin" size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{event?.location}</p>
                      <p className="text-sm text-muted-foreground">{event?.address}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event?.details}
                </p>

                {/* Map Preview */}
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4 group-hover:shadow-md transition-shadow duration-300">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={event?.location}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={event?.mapUrl}
                    className="border-0"
                  />
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary/20 hover:to-accent/20 py-3 rounded-lg transition-all duration-300 font-medium">
                  <Icon name="Navigation" size={16} />
                  <span>Get Directions</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Important Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo?.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-card rounded-xl p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <Icon name={info?.icon} size={20} className={info?.color} />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{info?.title}</h4>
                  <p className="text-primary font-medium text-sm mb-2">{info?.description}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{info?.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/wedding-details-central"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 button-shadow"
          >
            <Icon name="Info" size={20} />
            <span>View All Details</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfoCards;