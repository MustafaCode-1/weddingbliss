import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindTheScenes = () => {
  const [activeTab, setActiveTab] = useState('updates');

  const planningUpdates = [
    {
      id: 1,
      date: "January 15, 2025",
      title: "Venue Decorations Coming Together",
      content: "Just had our final walkthrough with the decorator! The floral arrangements are going to be absolutely stunning. We\'ve chosen white roses with gold accents to match our theme.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      author: "Sarah & Michael",
      category: "Decorations"
    },
    {
      id: 2,
      date: "January 10, 2025",
      title: "Final Dress Fitting Complete!",
      content: "The dress fits perfectly now! After three fittings, everything is exactly as I dreamed. Can't wait for everyone to see it on the big day. The alterations team did an amazing job.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      author: "Sarah",
      category: "Attire"
    },
    {
      id: 3,
      date: "January 5, 2025",
      title: "Menu Tasting Success",
      content: "We finalized our wedding menu after an incredible tasting session! The salmon with herb crust and the vegetarian risotto were absolute winners. Our guests are in for a treat!",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
      author: "Sarah & Michael",
      category: "Catering"
    }
  ];

  const vendorSpotlights = [
    {
      id: 1,
      name: "Rosewood Manor",
      role: "Wedding Venue",
      description: "Our dream venue with stunning gardens and elegant ballrooms. The team has been incredible in helping us plan every detail.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      contact: "info@rosewoodmanor.com",
      specialty: "Luxury Wedding Venues"
    },
    {
      id: 2,
      name: "Bloom & Blossom Florals",
      role: "Wedding Florist",
      description: "Creating our floral dreams with sustainable, locally-sourced flowers. Their attention to detail and creativity is unmatched.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      contact: "hello@bloomblossom.com",
      specialty: "Sustainable Wedding Florals"
    },
    {
      id: 3,
      name: "Melody & Harmony",
      role: "Wedding Musicians",
      description: "Our talented duo will provide ceremony music and cocktail hour entertainment. Their acoustic versions of our favorite songs are magical.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      contact: "bookings@melodyharmony.com",
      specialty: "Acoustic Wedding Music"
    }
  ];

  const sneak_peeks = [
    {
      id: 1,
      title: "Invitation Design Preview",
      description: "A sneak peek at our custom wedding invitations featuring watercolor florals and gold foil details.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      category: "Stationery"
    },
    {
      id: 2,
      title: "Centerpiece Mockup",
      description: "Testing our reception centerpieces with white roses, eucalyptus, and gold candle holders.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      category: "Decorations"
    },
    {
      id: 3,
      title: "Cake Design Concept",
      description: "Our three-tier wedding cake design with buttercream flowers and gold leaf accents.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      category: "Desserts"
    }
  ];

  const tabs = [
    { id: 'updates', label: 'Planning Updates', icon: 'FileText', count: planningUpdates?.length },
    { id: 'vendors', label: 'Vendor Spotlights', icon: 'Users', count: vendorSpotlights?.length },
    { id: 'peeks', label: 'Sneak Peeks', icon: 'Eye', count: sneak_peeks?.length }
  ];

  const renderUpdates = () => (
    <div className="space-y-6">
      {planningUpdates?.map((update) => (
        <div key={update?.id} className="bg-card border border-border rounded-xl p-6 hover:card-shadow transition-all duration-300">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <Image 
                  src={update?.image} 
                  alt={update?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {update?.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  {update?.title}
                </h4>
                <span className="text-sm text-muted-foreground">
                  {update?.date}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {update?.content}
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {update?.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderVendors = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendorSpotlights?.map((vendor) => (
        <div key={vendor?.id} className="bg-card border border-border rounded-xl p-6 hover:card-shadow transition-all duration-300">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
            <Image 
              src={vendor?.image} 
              alt={vendor?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
              {vendor?.name}
            </h4>
            <p className="text-primary font-medium text-sm mb-3">
              {vendor?.role}
            </p>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {vendor?.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Star" size={14} className="text-accent" />
                <span className="text-xs text-muted-foreground">
                  {vendor?.specialty}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Mail" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {vendor?.contact}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPeeks = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sneak_peeks?.map((peek) => (
        <div key={peek?.id} className="bg-card border border-border rounded-xl overflow-hidden hover:card-shadow transition-all duration-300">
          <div className="relative aspect-video">
            <Image 
              src={peek?.image} 
              alt={peek?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-accent/90 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                {peek?.category}
              </span>
              <h4 className="font-heading text-white font-semibold mb-1">
                {peek?.title}
              </h4>
            </div>
          </div>
          <div className="p-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {peek?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          Behind the Scenes
        </h3>
        <p className="text-muted-foreground">
          Follow our wedding planning journey and meet our amazing vendors
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground button-shadow'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span className="font-medium">{tab?.label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === tab?.id 
                ? 'bg-primary-foreground/20 text-primary-foreground' 
                : 'bg-foreground/10 text-muted-foreground'
            }`}>
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'updates' && renderUpdates()}
        {activeTab === 'vendors' && renderVendors()}
        {activeTab === 'peeks' && renderPeeks()}
      </div>
    </div>
  );
};

export default BehindTheScenes;