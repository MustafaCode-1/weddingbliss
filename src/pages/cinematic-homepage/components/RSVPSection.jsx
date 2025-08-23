import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import weddingConfig from '../../../config/wedding.json';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietaryRestrictions: '',
    songRequest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const attendanceOptions = [
    { value: 'yes', label: 'Joyfully Accept' },
    { value: 'no', label: 'Regretfully Decline' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp-section" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-card rounded-2xl p-12 romantic-shadow">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-20 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="Check" size={32} color="white" />
              </motion.div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You for Your Response!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're so grateful to have you as part of our special day. You'll receive a confirmation email shortly with all the details.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  onClick={() => setIsSubmitted(false)}
                  iconName="Edit"
                  iconPosition="left"
                  className="bg-gradient-to-r from-primary to-accent"
                >
                  Edit Response
                </Button>
                <Button
                  variant="outline"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-primary/20 text-primary hover:bg-primary/5"
                >
                  Add to Calendar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp-section" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon name="Heart" size={64} className="text-primary" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Icon name="Sparkles" size={48} className="text-accent" />
          </motion.div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Icon name="Heart" size={16} />
            <span>RSVP</span>
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Will You Celebrate With Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your presence would make our special day even more meaningful. 
            Please let us know if you'll be joining us for this magical celebration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 romantic-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                  className="mb-0"
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                  className="mb-0"
                />
              </div>

              {/* Attendance */}
              <Select
                label="Will you be attending?"
                placeholder="Please select your response"
                options={attendanceOptions}
                value={formData?.attendance}
                onChange={(value) => handleInputChange('attendance', value)}
                required
              />

              {formData?.attendance === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Number of Guests */}
                  <Select
                    label="Number of Guests"
                    placeholder="Select number of guests"
                    options={guestOptions}
                    value={formData?.guests}
                    onChange={(value) => handleInputChange('guests', value)}
                    required
                  />

                  {/* Dietary Restrictions */}
                  <Input
                    label="Dietary Restrictions"
                    type="text"
                    placeholder="Any allergies or dietary preferences?"
                    value={formData?.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e?.target?.value)}
                    description="Please let us know about any food allergies or dietary requirements"
                    className="mb-0"
                  />

                  {/* Song Request */}
                  <Input
                    label="Song Request"
                    type="text"
                    placeholder="Request a song for our reception"
                    value={formData?.songRequest}
                    onChange={(e) => handleInputChange('songRequest', e?.target?.value)}
                    description="Help us create the perfect playlist for our celebration"
                    className="mb-0"
                  />
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Message (Optional)
                </label>
                <textarea
                  placeholder="Share your wishes, memories, or any special message for us..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none bg-input text-foreground placeholder:text-muted-foreground"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your heartfelt words mean the world to us
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  disabled={!formData?.name || !formData?.email || !formData?.attendance}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 button-shadow text-white font-semibold py-4"
                  iconName="Send"
                  iconPosition="left"
                >
                  {isLoading ? 'Sending Response...' : 'Send RSVP'}
                </Button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  <p className="text-sm font-medium text-foreground">RSVP Deadline</p>
                  <p className="text-xs text-muted-foreground">{weddingConfig?.rsvp?.deadlineDisplay}</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  <p className="text-sm font-medium text-foreground">Guest Limit</p>
                  <p className="text-xs text-muted-foreground">{weddingConfig?.rsvp?.guestLimitText}</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <p className="text-sm font-medium text-foreground">Questions?</p>
                  <p className="text-xs text-muted-foreground">Contact us anytime</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;