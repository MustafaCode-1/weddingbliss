import React from 'react';
import Icon from '../../../components/AppIcon';

const EventOverviewCard = () => {
  const eventDetails = {
    ceremony: {
      title: "Wedding Ceremony",
      date: "Saturday, June 15, 2024",
      time: "4:00 PM",
      venue: "St. Mary\'s Cathedral",
      address: "123 Cathedral Street, Downtown, NY 10001",
      duration: "45 minutes",
      icon: "Church"
    },
    reception: {
      title: "Wedding Reception",
      date: "Saturday, June 15, 2024", 
      time: "6:30 PM",
      venue: "Grand Ballroom at The Plaza",
      address: "768 Fifth Avenue, Manhattan, NY 10019",
      duration: "Until 11:00 PM",
      icon: "PartyPopper"
    }
  };

  const EventCard = ({ event, isReception = false }) => (
    <div className={`relative overflow-hidden rounded-2xl p-8 ${
      isReception 
        ? 'bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20' :'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20'
    }`}>
      <div className="absolute top-4 right-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isReception ? 'bg-accent/20' : 'bg-primary/20'
        }`}>
          <Icon 
            name={event?.icon} 
            size={24} 
            className={isReception ? 'text-accent' : 'text-primary'} 
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {event?.title}
          </h3>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span className="font-medium">{event?.date}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isReception ? 'bg-accent/20' : 'bg-primary/20'
            }`}>
              <Icon name="Clock" size={16} className={isReception ? 'text-accent' : 'text-primary'} />
            </div>
            <div>
              <p className="font-medium text-foreground">{event?.time}</p>
              <p className="text-sm text-muted-foreground">{event?.duration}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isReception ? 'bg-accent/20' : 'bg-primary/20'
            }`}>
              <Icon name="MapPin" size={16} className={isReception ? 'text-accent' : 'text-primary'} />
            </div>
            <div>
              <p className="font-medium text-foreground">{event?.venue}</p>
              <p className="text-sm text-muted-foreground">{event?.address}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Navigation" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Get Directions</span>
            </div>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isReception 
                ? 'bg-accent/10 text-accent hover:bg-accent/20' :'bg-primary/10 text-primary hover:bg-primary/20'
            }`}>
              View Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Wedding Day Events
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join us for a day filled with love, laughter, and unforgettable memories. 
          Here are all the details you need for our special celebration.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EventCard event={eventDetails?.ceremony} />
        <EventCard event={eventDetails?.reception} isReception />
      </div>
      <div className="bg-muted/30 rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Icon name="Info" size={20} className="text-primary" />
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Important Note
          </h3>
        </div>
        <p className="text-muted-foreground">
          Transportation will be provided between the ceremony and reception venues. 
          Shuttles will depart 15 minutes after the ceremony concludes.
        </p>
      </div>
    </section>
  );
};

export default EventOverviewCard;