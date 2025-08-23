import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ScheduleTimeline = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const scheduleEvents = [
    {
      id: 1,
      time: "2:00 PM",
      title: "Guest Arrival & Photos",
      location: "Cathedral Gardens",
      duration: "1 hour",
      description: `Welcome drinks and light refreshments will be served in the cathedral gardens. 
This is a perfect time for guests to mingle and take photos before the ceremony begins.`,
      icon: "Camera",
      type: "arrival",
      details: [
        "Welcome cocktails served",
        "Professional photographer available",
        "Guest book signing",
        "Restrooms available in main building"
      ]
    },
    {
      id: 2,
      time: "3:30 PM",
      title: "Ceremony Seating",
      location: "St. Mary\'s Cathedral",
      duration: "30 minutes",
      description: `Guests will be seated by our ushers. Please arrive promptly to ensure 
the ceremony begins on time. Reserved seating for immediate family.`,
      icon: "Users",
      type: "seating",
      details: [
        "Ushers will guide you to seats",
        "Front rows reserved for family",
        "Ceremony programs provided",
        "Photography during processional only"
      ]
    },
    {
      id: 3,
      time: "4:00 PM",
      title: "Wedding Ceremony",
      location: "St. Mary\'s Cathedral",
      duration: "45 minutes",
      description: `Join us as we exchange vows in this beautiful cathedral. The ceremony will include 
traditional readings, musical performances, and our personal vows.`,
      icon: "Heart",
      type: "ceremony",
      details: [
        "Processional music begins",
        "Exchange of vows and rings",
        "Unity candle ceremony",
        "Recessional and rice toss"
      ]
    },
    {
      id: 4,
      time: "5:00 PM",
      title: "Cocktail Hour",
      location: "The Plaza Terrace",
      duration: "1.5 hours",
      description: `Celebrate with signature cocktails and hors d'oeuvres while we take photos. 
Live jazz music and stunning city views await you.`,
      icon: "Wine",
      type: "cocktail",
      details: [
        "Signature cocktails: \'Love Potion\' & \'Eternal Bliss'","Gourmet hors d\'oeuvres stations","Live jazz trio performance","Terrace with city skyline views"
      ]
    },
    {
      id: 5,
      time: "6:30 PM",title: "Reception Begins",location: "Grand Ballroom",duration: "4.5 hours",
      description: `Dinner, dancing, and celebration! Join us for an evening of delicious food, 
heartfelt toasts, and dancing under the stars.`,
      icon: "PartyPopper",type: "reception",
      details: [
        "Three-course plated dinner","Wedding party introductions","First dance and parent dances","Open bar until 11:00 PM"
      ]
    },
    {
      id: 6,
      time: "11:00 PM",title: "Grand Finale",location: "Plaza Entrance",duration: "30 minutes",
      description: `Send us off with sparklers as we begin our new journey together. 
Late night snacks will be available for guests.`,
      icon: "Sparkles",type: "finale",
      details: [
        "Sparkler send-off","Late night snack station","Transportation coordination","Thank you gifts for guests"
      ]
    }
  ];

  const getEventColor = (type) => {
    const colors = {
      arrival: 'bg-blue-500/10 text-blue-600 border-blue-200',
      seating: 'bg-purple-500/10 text-purple-600 border-purple-200',
      ceremony: 'bg-primary/10 text-primary border-primary/20',
      cocktail: 'bg-orange-500/10 text-orange-600 border-orange-200',
      reception: 'bg-accent/10 text-accent border-accent/20',
      finale: 'bg-pink-500/10 text-pink-600 border-pink-200'
    };
    return colors?.[type] || 'bg-muted/10 text-muted-foreground border-border';
  };

  const toggleExpanded = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Wedding Day Timeline
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's what to expect throughout our special day. All times are approximate and we'll keep you updated with any changes.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

        <div className="space-y-8">
          {scheduleEvents?.map((event, index) => (
            <div
              key={event?.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10"></div>

              {/* Time Badge */}
              <div className={`ml-16 md:ml-0 mb-4 md:mb-0 ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
              }`}>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                  {event?.time}
                </div>
              </div>

              {/* Event Card */}
              <div className={`ml-16 md:ml-0 flex-1 ${
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              }`}>
                <div 
                  className={`bg-card border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    expandedEvent === event?.id ? 'ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => toggleExpanded(event?.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getEventColor(event?.type)}`}>
                        <Icon name={event?.icon} size={20} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {event?.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{event?.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={14} />
                            <span>{event?.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Icon 
                      name={expandedEvent === event?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground transition-transform duration-200" 
                    />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {event?.description}
                  </p>

                  {/* Expanded Details */}
                  {expandedEvent === event?.id && (
                    <div className="border-t border-border pt-4 space-y-3">
                      <h4 className="font-medium text-foreground flex items-center">
                        <Icon name="Info" size={16} className="mr-2 text-primary" />
                        Event Details
                      </h4>
                      <ul className="space-y-2">
                        {event?.details?.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Download Schedule */}
      {/* <div className="text-center pt-8">
        <div className="bg-muted/30 rounded-2xl p-6 max-w-md mx-auto">
          <Icon name="Download" size={24} className="text-primary mx-auto mb-3" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
            Download Schedule
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Save our wedding timeline to your phone for easy reference
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Calendar" size={16} className="mr-2 inline" />
            Add to Calendar
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default ScheduleTimeline;