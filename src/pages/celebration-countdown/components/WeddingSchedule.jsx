import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WeddingSchedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scheduleEvents = [
    {
      id: 1,
      time: "2:00 PM",
      title: "Guest Arrival & Welcome",
      description: "Guests arrive at the venue and enjoy welcome drinks and light refreshments",
      location: "Garden Terrace",
      duration: "30 minutes",
      icon: "Users",
      color: "primary",
      details: "Please arrive on time to ensure you don't miss any special moments. Parking will be available in the main lot."
    },
    {
      id: 2,
      time: "2:30 PM",
      title: "Pre-Ceremony Photos",
      description: "Family and wedding party photos before the ceremony begins",
      location: "Rose Garden",
      duration: "30 minutes",
      icon: "Camera",
      color: "accent",
      details: "Immediate family and wedding party members please gather at the designated photo area."
    },
    {
      id: 3,
      time: "3:00 PM",
      title: "Processional Music",
      description: "The ceremony begins with the processional as the wedding party walks down the aisle",
      location: "Main Ceremony Space",
      duration: "10 minutes",
      icon: "Music",
      color: "success",
      details: "Please take your seats by 2:55 PM. The ceremony will begin promptly at 3:00 PM."
    },
    {
      id: 4,
      time: "3:10 PM",
      title: "Wedding Ceremony",
      description: "The main ceremony including vows, ring exchange, and the first kiss as married couple",
      location: "Main Ceremony Space",
      duration: "45 minutes",
      icon: "Heart",
      color: "primary",
      details: "Please silence all phones and cameras. Our photographer will capture all the special moments."
    },
    {
      id: 5,
      time: "4:00 PM",
      title: "Cocktail Hour",
      description: "Celebrate with cocktails, hors d'oeuvres, and mingling while couple takes photos",
      location: "Terrace & Gardens",
      duration: "60 minutes",
      icon: "Wine",
      color: "accent",
      details: "Enjoy signature cocktails and appetizers while we capture some beautiful couple portraits."
    },
    {
      id: 6,
      time: "5:00 PM",
      title: "Reception Begins",
      description: "Grand entrance of the newlyweds followed by dinner service",
      location: "Grand Ballroom",
      duration: "30 minutes",
      icon: "PartyPopper",
      color: "success",
      details: "Please find your assigned seats. Dinner will be served shortly after our grand entrance."
    },
    {
      id: 7,
      time: "6:00 PM",
      title: "First Dance & Toasts",
      description: "First dance as married couple followed by heartfelt toasts from family and friends",
      location: "Dance Floor",
      duration: "45 minutes",
      icon: "Music2",
      color: "primary",
      details: "Grab a tissue! This is always the most emotional part of the evening."
    },
    {
      id: 8,
      time: "7:00 PM",
      title: "Dancing & Celebration",
      description: "Open dance floor for all guests to celebrate and dance the night away",
      location: "Dance Floor",
      duration: "3 hours",
      icon: "Disc3",
      color: "accent",
      details: "Let\'s party! The dance floor is open and the DJ is ready to keep the energy high all night long."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20"
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Wedding Day Schedule
          </h3>
          <p className="text-muted-foreground">
            Your complete guide to our special day
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-lg">
          <Icon name="MapPin" size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">Rosewood Manor</span>
        </div>
      </div>
      <div className="space-y-4">
        {scheduleEvents?.map((event, index) => (
          <div key={event?.id} className="relative">
            {/* Timeline Line */}
            {index !== scheduleEvents?.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
            )}
            
            <div 
              className={`relative bg-card border border-border rounded-xl p-6 transition-all duration-300 cursor-pointer hover:card-shadow ${
                selectedEvent === event?.id ? 'ring-2 ring-primary/20 bg-primary/5' : 'hover:bg-muted/30'
              }`}
              onClick={() => setSelectedEvent(selectedEvent === event?.id ? null : event?.id)}
            >
              <div className="flex items-start space-x-4">
                {/* Time Badge */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(event?.color)}`}>
                  <Icon name={event?.icon} size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {event?.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm font-medium text-primary">
                          {event?.time}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {event?.duration}
                        </span>
                      </div>
                    </div>
                    <Icon 
                      name={selectedEvent === event?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground transition-transform duration-200"
                    />
                  </div>

                  <p className="text-muted-foreground mb-3">
                    {event?.description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event?.location}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedEvent === event?.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Icon name="Info" size={16} className="text-primary mt-0.5" />
                          <p className="text-sm text-foreground">
                            {event?.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Important Timing Note</h4>
            <p className="text-sm text-muted-foreground">
              Please arrive 15 minutes before each event to ensure smooth transitions. 
              We'll send updates if there are any schedule changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSchedule;