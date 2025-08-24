import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const InteractiveVenueSection = () => {
  const [activeVenue, setActiveVenue] = useState("ceremony");

  const venues = {
    ceremony: {
      name: "St. Mary's Cathedral",
      address: "123 Cathedral Street, Downtown, NY 10001",
      phone: "(555) 123-4567",
      coordinates: "40.7589,-73.9851",
      description: `A stunning Gothic Revival cathedral with soaring arches and beautiful stained glass windows. 
This historic venue has been the site of countless love stories and provides the perfect sacred setting for our ceremony.`,
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=800&h=600&fit=crop",
      ],
      features: [
        { icon: "Users", text: "Seats 300 guests" },
        { icon: "Car", text: "Valet parking available" },
        { icon: "Accessibility", text: "Wheelchair accessible" },
        { icon: "Camera", text: "Photography permitted" },
      ],
      directions: `From Manhattan: Take FDR Drive South to Exit 6. Turn right on Cathedral Street. 
Venue will be on your left. Street parking available on weekends.`,
    },
    reception: {
      name: "Grand Ballroom at The Plaza",
      address: "768 Fifth Avenue, Manhattan, NY 10019",
      phone: "(555) 987-6543",
      coordinates: "40.7648,-73.9808",
      description: `An elegant ballroom featuring crystal chandeliers, marble floors, and panoramic city views. 
This iconic venue offers the perfect blend of luxury and romance for our celebration.`,
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      ],
      features: [
        { icon: "Users", text: "Accommodates 250 guests" },
        { icon: "Car", text: "Complimentary valet" },
        { icon: "Utensils", text: "Full catering kitchen" },
        { icon: "Music", text: "Professional sound system" },
      ],
      directions: `Located in Midtown Manhattan. Subway: N, R, W to 57th St-7th Ave. 
Taxi drop-off available at main entrance on Fifth Avenue.`,
    },
  };

  const currentVenue = venues?.[activeVenue];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentVenue?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentVenue?.images?.length - 1 : prev - 1
    );
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Our Wedding Venues
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the beautiful locations where we'll celebrate our special day
        </p>
      </div>
      {/* Venue Selector */}
      <div className="flex justify-center">
        <div className="bg-muted/30 rounded-2xl p-2 flex space-x-2">
          <button
            onClick={() => setActiveVenue("ceremony")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeVenue === "ceremony"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Icon name="Church" size={18} className="mr-2 inline" />
            Ceremony
          </button>
          <button
            onClick={() => setActiveVenue("reception")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeVenue === "reception"
                ? "bg-accent text-accent-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Icon name="PartyPopper" size={18} className="mr-2 inline" />
            Reception
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Venue Images */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
            <Image
              src={currentVenue?.images?.[currentImageIndex]}
              alt={`${currentVenue?.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {currentVenue?.images?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Venue Features */}
          <div className="grid grid-cols-2 gap-4">
            {currentVenue?.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeVenue === "ceremony"
                      ? "bg-primary/20"
                      : "bg-accent/20"
                  }`}
                >
                  <Icon
                    name={feature?.icon}
                    size={16}
                    className={
                      activeVenue === "ceremony"
                        ? "text-primary"
                        : "text-accent"
                    }
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {feature?.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Details */}
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
              {currentVenue?.name}
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground mb-4">
              <Icon name="MapPin" size={16} />
              <span>{currentVenue?.address}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {currentVenue?.description}
            </p>
          </div>

          {/* Contact & Directions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeVenue === "ceremony" ? "bg-primary/20" : "bg-accent/20"
                }`}
              >
                <Icon
                  name="Phone"
                  size={18}
                  className={
                    activeVenue === "ceremony" ? "text-primary" : "text-accent"
                  }
                />
              </div>
              <div>
                <p className="font-medium text-foreground">Contact Venue</p>
                <p className="text-sm text-muted-foreground">
                  {currentVenue?.phone}
                </p>
              </div>
            </div>

            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Navigation" size={16} className="text-primary" />
                <h4 className="font-medium text-foreground">Directions</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentVenue?.directions}
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              width="100%"
              height="300"
              loading="lazy"
              title={currentVenue?.name}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${currentVenue?.coordinates}&z=15&output=embed`}
              className="w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            {/* Get Directions */}
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${currentVenue.coordinates}`,
                  "_blank"
                )
              }
              className={`flex-1 py-3 px-6 rounded-xl font-medium transition-colors duration-200 ${
                activeVenue === "ceremony"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              <Icon name="Navigation" size={16} className="mr-2 inline" />
              Get Directions
            </button>

            {/* Share Location */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: `Join us at ${currentVenue.name}`,
                      text: `Here's the venue for our wedding: ${currentVenue.name}, ${currentVenue.address}`,
                      url: `https://www.google.com/maps/search/?api=1&query=${currentVenue.coordinates}`,
                    })
                    .catch((error) => console.error("Sharing failed:", error));
                } else {
                  alert("Sharing is not supported on this device/browser.");
                }
              }}
              className="flex-1 py-3 px-6 rounded-xl font-medium border border-border text-foreground hover:bg-muted/50 transition-colors duration-200"
            >
              <Icon name="Share" size={16} className="mr-2 inline" />
              Share Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVenueSection;
