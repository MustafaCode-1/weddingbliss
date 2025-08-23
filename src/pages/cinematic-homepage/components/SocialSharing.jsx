import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import weddingConfig from '../../../config/wedding.json';

const SocialSharing = () => {
  const [copied, setCopied] = useState(false);

  const coupleNames = `${weddingConfig?.couple?.bride} & ${weddingConfig?.couple?.groom}`;
  const dateAndVenue = `${weddingConfig?.date?.display} at ${weddingConfig?.location?.venue}`;
  const weddingDetails = {
    title: `${coupleNames}'s Wedding`,
    description: `Join us for our magical wedding celebration on ${dateAndVenue}`,
    url: window.location?.href,
    hashtag: weddingConfig?.social?.hashtag || ''
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'from-blue-600 to-blue-700',
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(weddingDetails?.url)}&quote=${encodeURIComponent(weddingDetails?.description)}`
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'from-sky-500 to-sky-600',
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(weddingDetails?.description)}&url=${encodeURIComponent(weddingDetails?.url)}&hashtags=${weddingDetails?.hashtag?.replace('#', '')}`
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'from-green-500 to-green-600',
      shareUrl: `https://wa.me/?text=${encodeURIComponent(`${weddingDetails?.description} ${weddingDetails?.url}`)}`
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      color: 'from-pink-500 to-purple-600',
      action: 'story'
    }
  ];

  const handleShare = (platform) => {
    if (platform?.shareUrl) {
      window.open(platform?.shareUrl, '_blank', 'width=600,height=400');
    } else if (platform?.action === 'story') {
      // For Instagram, we'll show a message about sharing to story
      alert('Copy the link and share it in your Instagram story!');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard?.writeText(weddingDetails?.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareMessages = [
    "Spread the love and share our joy with friends and family! 💕",
    "Help us celebrate by sharing our special day with your loved ones! ✨",
    "Your shares mean the world to us - let\'s celebrate together! 🎉"
  ];

  const [currentMessage] = useState(shareMessages?.[Math.floor(Math.random() * shareMessages?.length)]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A574' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            <Icon name="Share2" size={16} />
            <span>Share Our Joy</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spread the Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            {currentMessage}
          </p>
          <p className="text-lg text-primary font-medium">
            {weddingDetails?.hashtag}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Social Sharing Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 romantic-shadow">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Share on Social Media
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialPlatforms?.map((platform, index) => (
                  <motion.button
                    key={platform?.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleShare(platform)}
                    className={`group relative overflow-hidden bg-gradient-to-r ${platform?.color} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={platform?.icon} size={24} />
                      <span className="font-semibold">{platform?.name}</span>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </div>

              {/* Copy Link */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-medium text-foreground mb-3 text-center">
                  Or copy the link to share anywhere
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-input border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground overflow-hidden">
                    <span className="truncate block">{weddingDetails?.url}</span>
                  </div>
                  <Button
                    variant={copied ? "success" : "outline"}
                    onClick={copyToClipboard}
                    iconName={copied ? "Check" : "Copy"}
                    className={copied ? "bg-success text-white" : "border-primary/20 text-primary hover:bg-primary/5"}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              {/* Floating Hearts Animation */}
              <div className="relative mb-8">
                {[...Array(5)]?.map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 20}%`
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  >
                    <Icon 
                      name="Heart" 
                      size={16 + i * 2} 
                      className={i % 2 === 0 ? "text-primary" : "text-accent"} 
                    />
                  </motion.div>
                ))}
                
                <div className="relative z-10">
                  <Icon name="Share2" size={64} className="text-primary mx-auto mb-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Every Share Matters
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you share our wedding invitation, you're not just spreading the news - you're sharing our happiness and helping us celebrate with everyone we love.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-card rounded-lg p-4">
                  <Icon name="Heart" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-xs text-muted-foreground">Hearts United</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <Icon name="Users" size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">150</p>
                  <p className="text-xs text-muted-foreground">Loved Ones</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">1</p>
                  <p className="text-xs text-muted-foreground">Special Day</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 romantic-shadow max-w-2xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-4"
            >
              <Icon name="Heart" size={32} className="text-primary mx-auto" />
            </motion.div>
            
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Thank You for Sharing Our Love Story
            </h3>
            <p className="text-muted-foreground">
              Your support and excitement mean everything to us. We can't wait to celebrate 
              this beautiful journey with all our favorite people!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSharing;