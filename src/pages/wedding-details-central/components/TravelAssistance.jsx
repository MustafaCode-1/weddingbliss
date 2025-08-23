import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TravelAssistance = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const accommodations = [
    {
      id: 1,
      name: "The Grand Plaza Hotel",
      rating: 4.8,
      distance: "0.2 miles from venue",
      price: "$189/night",
      groupRate: "$159/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["Free WiFi", "Fitness Center", "Room Service", "Valet Parking"],
      description: "Luxury hotel in the heart of downtown with stunning city views.",
      phone: "(555) 123-4567",
      website: "grandplaza.com",
      groupCode: "WEDDING2024"
    },
    {
      id: 2,
      name: "Boutique Inn & Suites",
      rating: 4.6,
      distance: "0.5 miles from venue",
      price: "$129/night",
      groupRate: "$109/night",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      amenities: ["Continental Breakfast", "Free Parking", "Pet Friendly", "Pool"],
      description: "Charming boutique hotel with personalized service and cozy atmosphere.",
      phone: "(555) 987-6543",
      website: "boutiqueinn.com",
      groupCode: "LOVE2024"
    },
    {
      id: 3,
      name: "Budget Stay Express",
      rating: 4.2,
      distance: "1.2 miles from venue",
      price: "$89/night",
      groupRate: "$79/night",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      amenities: ["Free WiFi", "Free Breakfast", "Shuttle Service", "24/7 Front Desk"],
      description: "Clean, comfortable accommodations with excellent value and shuttle service.",
      phone: "(555) 456-7890",
      website: "budgetstay.com",
      groupCode: "CELEBRATE"
    }
  ];

  const transportationOptions = [
    {
      type: "Airport Shuttle",
      provider: "City Express Shuttle",
      cost: "$25 per person",
      duration: "45 minutes",
      description: "Shared shuttle service from JFK Airport to downtown hotels",
      phone: "(555) 111-2222",
      icon: "Bus"
    },
    {
      type: "Taxi/Uber",
      provider: "Various",
      cost: "$60-80",
      duration: "30-45 minutes",
      description: "Direct transportation from airport to your destination",
      phone: "App-based booking",
      icon: "Car"
    },
    {
      type: "Rental Car",
      provider: "Multiple agencies",
      cost: "$45-65/day",
      duration: "30 minutes",
      description: "Freedom to explore the city at your own pace",
      phone: "Various",
      icon: "Car"
    },
    {
      type: "Wedding Shuttle",
      provider: "Complimentary",
      cost: "Free",
      duration: "15 minutes",
      description: "Shuttle between ceremony and reception venues",
      phone: "Provided by couple",
      icon: "Bus"
    }
  ];

  const airportInfo = {
    primary: {
      name: "John F. Kennedy International (JFK)",
      code: "JFK",
      distance: "25 miles",
      driveTime: "45-60 minutes",
      description: "Major international airport with direct flights from most cities"
    },
    secondary: [
      {
        name: "LaGuardia Airport (LGA)",
        code: "LGA",
        distance: "18 miles",
        driveTime: "35-45 minutes"
      },
      {
        name: "Newark Liberty International (EWR)",
        code: "EWR", 
        distance: "30 miles",
        driveTime: "50-70 minutes"
      }
    ]
  };

  const localAttractions = [
    {
      name: "Central Park",
      type: "Park",
      distance: "0.8 miles",
      description: "Iconic urban park perfect for morning walks and photos",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=300&h=200&fit=crop",
      icon: "Trees"
    },
    {
      name: "Metropolitan Museum",
      type: "Museum",
      distance: "1.2 miles",
      description: "World-renowned art museum with extensive collections",
      image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=300&h=200&fit=crop",
      icon: "Building"
    },
    {
      name: "Times Square",
      type: "Entertainment",
      distance: "2.1 miles",
      description: "Bright lights and Broadway shows in the heart of NYC",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop",
      icon: "Star"
    },
    {
      name: "Brooklyn Bridge",
      type: "Landmark",
      distance: "3.5 miles",
      description: "Historic bridge with stunning city and harbor views",
      image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=300&h=200&fit=crop",
      icon: "Bridge"
    }
  ];

  const HotelCard = ({ hotel }) => (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hotel?.image}
          alt={hotel?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
          ★ {hotel?.rating}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {hotel?.name}
          </h3>
          <div className="text-right">
            <p className="text-sm text-muted-foreground line-through">{hotel?.price}</p>
            <p className="font-bold text-primary">{hotel?.groupRate}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="MapPin" size={14} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{hotel?.distance}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{hotel?.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel?.amenities?.map((amenity, index) => (
            <span key={index} className="px-2 py-1 bg-muted/50 text-xs rounded-full text-muted-foreground">
              {amenity}
            </span>
          ))}
        </div>
        
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Group Code:</span>
            <span className="font-mono text-sm font-bold text-primary">{hotel?.groupCode}</span>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
              <Icon name="ExternalLink" size={14} className="mr-1 inline" />
              Book Now
            </button>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors duration-200">
              <Icon name="Phone" size={14} />
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
          Travel & Accommodation
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We've arranged special group rates and compiled helpful travel information 
          to make your journey as smooth as possible.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted/30 rounded-2xl p-2 flex space-x-2 overflow-x-auto">
          {[
            { id: 'hotels', label: 'Hotels', icon: 'Building' },
            { id: 'transport', label: 'Transportation', icon: 'Car' },
            { id: 'airport', label: 'Airport Info', icon: 'Plane' },
            { id: 'attractions', label: 'Local Spots', icon: 'MapPin' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} className="mr-2 inline" />
              {tab?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Hotels Tab */}
      {activeTab === 'hotels' && (
        <div className="space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Tag" size={20} className="text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Special Group Rates Available
              </h3>
            </div>
            <p className="text-muted-foreground">
              We've negotiated special rates at these hotels. Use the group codes when booking 
              to receive discounted pricing. Book by May 15th to guarantee availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations?.map((hotel) => (
              <HotelCard key={hotel?.id} hotel={hotel} />
            ))}
          </div>
        </div>
      )}
      {/* Transportation Tab */}
      {activeTab === 'transport' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportationOptions?.map((option, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={option?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {option?.type}
                    </h3>
                    <p className="text-sm text-muted-foreground">{option?.provider}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Cost</p>
                    <p className="font-semibold text-foreground">{option?.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{option?.duration}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{option?.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Contact: {option?.phone}</span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                    <Icon name="ExternalLink" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Airport Info Tab */}
      {activeTab === 'airport' && (
        <div className="space-y-6">
          {/* Primary Airport */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="Plane" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {airportInfo?.primary?.name}
                </h3>
                <p className="text-lg text-primary font-medium">{airportInfo?.primary?.code}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Distance</p>
                  <p className="text-sm text-muted-foreground">{airportInfo?.primary?.distance}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Drive Time</p>
                  <p className="text-sm text-muted-foreground">{airportInfo?.primary?.driveTime}</p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground">{airportInfo?.primary?.description}</p>
          </div>

          {/* Alternative Airports */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Alternative Airports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {airportInfo?.secondary?.map((airport, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">{airport?.name}</h4>
                    <span className="text-sm font-mono text-primary">{airport?.code}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Distance: </span>
                      <span className="text-foreground">{airport?.distance}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Drive: </span>
                      <span className="text-foreground">{airport?.driveTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Local Attractions Tab */}
      {activeTab === 'attractions' && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Must-See Local Attractions
            </h3>
            <p className="text-muted-foreground">
              Make the most of your visit with our favorite local spots and recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localAttractions?.map((attraction, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={attraction?.image}
                    alt={attraction?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs">
                    {attraction?.type}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      {attraction?.name}
                    </h4>
                    <Icon name={attraction?.icon} size={16} className="text-primary" />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="MapPin" size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{attraction?.distance}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{attraction?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Contact Section */}
      <div className="bg-muted/30 rounded-2xl p-6 text-center">
        <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-3" />
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
          Need Travel Assistance?
        </h3>
        <p className="text-muted-foreground mb-4">
          Our wedding coordinator is available to help with any travel questions or special arrangements.
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
          <Icon name="Mail" size={16} className="mr-2 inline" />
          Contact Coordinator
        </button>
      </div>
    </section>
  );
};

export default TravelAssistance;