import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import EventOverviewCard from "./components/EventOverviewCard";
import InteractiveVenueSection from "./components/InteractiveVenueSection";
import ScheduleTimeline from "./components/ScheduleTimeline";
import DressCodeVisualizer from "./components/DressCodeVisualizer";
import TravelAssistance from "./components/TravelAssistance";
import WeatherAndSeasonInfo from "./components/WeatherAndSeasonInfo";
import RegistrySection from "./components/RegistrySection";
import FAQSection from "./components/FAQSection";
import Icon from "../../components/AppIcon";

const WeddingDetailsCentral = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickActions = [
    {
      title: "RSVP Now",
      description: "Confirm your attendance",
      icon: "Heart",
      color: "bg-primary text-primary-foreground",
      hoverColor: "hover:bg-primary/90",
    },
    {
      title: "Get Directions",
      description: "Navigate to venues",
      icon: "Navigation",
      color: "bg-accent text-accent-foreground",
      hoverColor: "hover:bg-accent/90",
    },
    {
      title: "Book Hotel",
      description: "Reserve accommodation",
      icon: "Building",
      color: "bg-blue-600 text-white",
      hoverColor: "hover:bg-blue-700",
    },
    {
      title: "View Registry",
      description: "See our wish list",
      icon: "Gift",
      color: "bg-green-600 text-white",
      hoverColor: "hover:bg-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4a574%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Calendar" size={16} />
              <span>Saturday, June 15, 2024</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Wedding Details
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know for our special day. From ceremony
              details to travel information, we've got you covered for a perfect
              celebration.
            </p>
          </div>

          {/* Quick Actions */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${action.color} ${action.hoverColor}`}
              >
                <Icon name={action.icon} size={24} className="mx-auto mb-2" />
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs opacity-80">{action.description}</p>
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Event Overview */}
        <EventOverviewCard />

        {/* Interactive Venue Section */}
        <InteractiveVenueSection />

        {/* Schedule Timeline */}
        <ScheduleTimeline />

        {/* Dress Code Visualizer */}
        {/* <DressCodeVisualizer /> */}

        {/* Travel Assistance */}
        {/* <TravelAssistance /> */}

        {/* Weather & Season Info */}
        {/* <WeatherAndSeasonI  
        {/* <RegistrySection /> */}

        {/* FAQ Section */}
        {/* <FAQSection /> */}
      </main>

      {/* Footer CTA */}
      {/* <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Ready to Celebrate With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can't wait to share this magical day with you. Make sure to RSVP and let us know 
            about any special requirements or questions you might have.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Icon name="Heart" size={20} className="mr-2 inline" />
              RSVP Now
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary/5 transition-all duration-300">
              <Icon name="MessageCircle" size={20} className="mr-2 inline" />
              Contact Us
            </button>
          </div>
        </div>
      </section> */}

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      </div>
    </div>
  );
};

export default WeddingDetailsCentral;
