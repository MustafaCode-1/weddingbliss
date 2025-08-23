import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RegistrySection = () => {
  const [activeCategory, setActiveCategory] = useState('home');

  const registryStores = [
    {
      name: "Williams Sonoma",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=60&fit=crop",
      description: "Kitchen essentials and gourmet cookware",
      itemCount: 24,
      url: "williams-sonoma.com",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      name: "Pottery Barn",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=60&fit=crop",
      description: "Home decor and furniture",
      itemCount: 18,
      url: "potterybarn.com", 
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=60&fit=crop",
      description: "Everything for our new home",
      itemCount: 42,
      url: "amazon.com",
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
    },
    {
      name: "Target",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=60&fit=crop",
      description: "Everyday essentials and decor",
      itemCount: 31,
      url: "target.com",
      color: "bg-red-500/10 text-red-600 border-red-200"
    }
  ];

  const registryCategories = {
    home: {
      title: "Home & Living",
      icon: "Home",
      items: [
        {
          name: "KitchenAid Stand Mixer",
          price: "$349.99",
          store: "Williams Sonoma",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          purchased: false,
          priority: "high",
          description: "Professional 5-quart mixer in Artisan series"
        },
        {
          name: "Cozy Throw Blankets Set",
          price: "$89.99",
          store: "Pottery Barn",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",
          purchased: true,
          priority: "medium",
          description: "Set of 2 soft cashmere blend throws"
        },
        {
          name: "Coffee Table Books Collection",
          price: "$124.99",
          store: "Amazon",
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
          purchased: false,
          priority: "low",
          description: "Curated collection of art and travel books"
        },
        {
          name: "Ceramic Dinnerware Set",
          price: "$199.99",
          store: "Target",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          purchased: false,
          priority: "high",
          description: "12-piece modern ceramic dinnerware"
        }
      ]
    },
    kitchen: {
      title: "Kitchen & Dining",
      icon: "ChefHat",
      items: [
        {
          name: "Professional Knife Set",
          price: "$299.99",
          store: "Williams Sonoma",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          purchased: false,
          priority: "high",
          description: "8-piece German steel knife collection"
        },
        {
          name: "Espresso Machine",
          price: "$449.99",
          store: "Amazon",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          purchased: false,
          priority: "medium",
          description: "Semi-automatic espresso maker"
        },
        {
          name: "Cast Iron Dutch Oven",
          price: "$179.99",
          store: "Target",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          purchased: true,
          priority: "high",
          description: "6-quart enameled cast iron pot"
        }
      ]
    },
    experiences: {
      title: "Experiences & Honeymoon",
      icon: "Plane",
      items: [
        {
          name: "Honeymoon Fund - Italy",
          price: "Any Amount",
          store: "Honeyfund",
          image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=300&fit=crop",
          purchased: false,
          priority: "high",
          description: "Help us explore the romantic cities of Italy"
        },
        {
          name: "Cooking Class for Two",
          price: "$199.99",
          store: "Local Experience",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
          purchased: false,
          priority: "medium",
          description: "Learn to cook Italian cuisine together"
        },
        {
          name: "Wine Tasting Experience",
          price: "$149.99",
          store: "Local Vineyard",
          image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=300&fit=crop",
          purchased: false,
          priority: "low",
          description: "Private wine tasting at local vineyard"
        }
      ]
    }
  };

  const currentCategory = registryCategories?.[activeCategory];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'medium': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-green-500/10 text-green-600 border-green-200';
      default: return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const RegistryItem = ({ item }) => (
    <div className={`bg-card rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
      item?.purchased ? 'border-success/30 bg-success/5' : 'border-border hover:border-primary/30'
    }`}>
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <Image
            src={item?.image}
            alt={item?.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {item?.purchased && (
          <div className="absolute top-3 right-3 bg-success text-success-foreground px-2 py-1 rounded-lg text-xs font-medium">
            <Icon name="Check" size={12} className="mr-1 inline" />
            Purchased
          </div>
        )}
        
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium border ${getPriorityColor(item?.priority)}`}>
          {item?.priority === 'high' ? 'Must Have' : item?.priority === 'medium' ? 'Would Love' : 'Nice to Have'}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-foreground line-clamp-2">{item?.name}</h4>
          <p className="font-bold text-primary text-lg ml-2">{item?.price}</p>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{item?.store}</span>
          {!item?.purchased ? (
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
              <Icon name="Gift" size={14} className="mr-1 inline" />
              Purchase
            </button>
          ) : (
            <span className="text-success text-sm font-medium">
              <Icon name="Heart" size={14} className="mr-1 inline" />
              Thank you!
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Wedding Registry
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your presence at our wedding is the greatest gift of all. If you'd like to honor us 
          with a gift, we've curated a selection of items to help us start our new life together.
        </p>
      </div>
      {/* Registry Stores */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-4">
          Our Registry Locations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {registryStores?.map((store, index) => (
            <div key={index} className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${store?.color}`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-8 bg-white rounded overflow-hidden">
                  <Image
                    src={store?.logo}
                    alt={store?.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{store?.name}</h4>
                  <p className="text-xs text-muted-foreground">{store?.itemCount} items</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{store?.description}</p>
              <button className="w-full bg-background/50 hover:bg-background/80 text-foreground py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                <Icon name="ExternalLink" size={14} className="mr-1 inline" />
                View Registry
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Category Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted/30 rounded-2xl p-2 flex space-x-2 overflow-x-auto">
          {Object.entries(registryCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={category?.icon} size={16} className="mr-2 inline" />
              {category?.title}
            </button>
          ))}
        </div>
      </div>
      {/* Registry Items */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {currentCategory?.title}
          </h3>
          <p className="text-muted-foreground">
            Items we'd love to have in our new home together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory?.items?.map((item, index) => (
            <RegistryItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Registry Stats */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Gift" size={20} className="text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">95</p>
            <p className="text-sm text-muted-foreground">Total Items</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Check" size={20} className="text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">23</p>
            <p className="text-sm text-muted-foreground">Items Purchased</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Heart" size={20} className="text-accent" />
            </div>
            <p className="text-2xl font-bold text-foreground">72</p>
            <p className="text-sm text-muted-foreground">Items Remaining</p>
          </div>
        </div>
      </div>
      {/* Alternative Giving Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Plane" size={18} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              Honeymoon Fund
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Help us create unforgettable memories on our honeymoon to Italy. 
            Every contribution helps us explore new places together.
          </p>
          <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Heart" size={16} className="mr-2 inline" />
            Contribute to Honeymoon
          </button>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Home" size={18} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              Home Fund
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            We're saving for our first home together. Your contribution would help us 
            create the perfect space to start our married life.
          </p>
          <button className="w-full bg-accent text-accent-foreground py-3 px-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200">
            <Icon name="Gift" size={16} className="mr-2 inline" />
            Contribute to Home Fund
          </button>
        </div>
      </div>
      {/* Thank You Message */}
      <div className="bg-muted/30 rounded-2xl p-8 text-center">
        <Icon name="Heart" size={32} className="text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
          Thank You for Your Generosity
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your love and support mean the world to us. Whether you choose to give a gift from our registry, 
          contribute to our funds, or simply celebrate with us on our special day, we are grateful for 
          your presence in our lives and your role in our love story.
        </p>
      </div>
    </section>
  );
};

export default RegistrySection;