import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GiftRegistryIntegration = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { value: 'all', label: 'All Items', icon: 'Gift' },
    { value: 'home', label: 'Home & Kitchen', icon: 'Home' },
    { value: 'experiences', label: 'Experiences', icon: 'MapPin' },
    { value: 'honeymoon', label: 'Honeymoon Fund', icon: 'Plane' },
    { value: 'group', label: 'Group Gifts', icon: 'Users' }
  ];

  const registryItems = [
    {
      id: 1,
      name: "Professional Stand Mixer",
      category: "home",
      price: 399,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      store: "Williams Sonoma",
      priority: "high",
      purchased: 0,
      needed: 1,
      description: "Perfect for baking adventures and creating memories in our new kitchen",
      contributors: [],
      groupGift: false
    },
    {
      id: 2,
      name: "Honeymoon in Tuscany",
      category: "honeymoon",
      price: 2500,
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400",
      store: "Honeymoon Fund",
      priority: "high",
      purchased: 1200,
      needed: 2500,
      description: "Help us create magical memories in the rolling hills of Tuscany",
      contributors: ["Jessica M.", "Robert J.", "Amanda C.", "+8 others"],
      groupGift: true
    },
    {
      id: 3,
      name: "Couples Cooking Class",
      category: "experiences",
      price: 150,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      store: "Local Culinary School",
      priority: "medium",
      purchased: 150,
      needed: 150,
      description: "Learn to cook together and bond over delicious food",
      contributors: ["David W."],
      groupGift: false,
      isPurchased: true
    },
    {
      id: 4,
      name: "Luxury Bedding Set",
      category: "home",
      price: 280,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400",
      store: "Pottery Barn",
      priority: "medium",
      purchased: 140,
      needed: 280,
      description: "Soft, comfortable bedding for our new home together",
      contributors: ["College Friends Group"],
      groupGift: true
    },
    {
      id: 5,
      name: "Wine Tasting Experience",
      category: "experiences",
      price: 200,
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400",
      store: "Napa Valley Tours",
      priority: "low",
      purchased: 0,
      needed: 200,
      description: "Explore local wineries and discover new favorites together",
      contributors: [],
      groupGift: false
    },
    {
      id: 6,
      name: "Smart Home Security System",
      category: "home",
      price: 450,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      store: "Best Buy",
      priority: "high",
      purchased: 225,
      needed: 450,
      description: "Keep our new home safe and secure with smart technology",
      contributors: ["Work Colleagues", "Family Group"],
      groupGift: true
    }
  ];

  const groupGifts = [
    {
      id: 1,
      name: "Honeymoon Adventure Fund",
      targetAmount: 3000,
      currentAmount: 1850,
      contributors: 15,
      description: "Help Sarah & Michael create unforgettable honeymoon memories",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
      coordinator: "Jessica Miller",
      deadline: "March 10, 2024"
    },
    {
      id: 2,
      name: "New Home Essentials Bundle",
      targetAmount: 800,
      currentAmount: 520,
      contributors: 8,
      description: "Essential items to help them settle into their new home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      coordinator: "Robert Johnson",
      deadline: "March 5, 2024"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? registryItems 
    : registryItems?.filter(item => item?.category === selectedCategory);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getProgressPercentage = (purchased, needed) => {
    return Math.min((purchased / needed) * 100, 100);
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Gift Registry
          </h2>
          <p className="text-muted-foreground">
            Help Sarah & Michael start their new life together
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>

          <Button variant="outline" size="sm">
            <Icon name="ExternalLink" size={16} className="mr-2" />
            View Full Registry
          </Button>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.value}
            onClick={() => setSelectedCategory(category?.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedCategory === category?.value
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:bg-muted/50'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="text-sm font-medium">{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Group Gifts Section */}
      {selectedCategory === 'all' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Users" size={20} className="text-primary" />
            Group Gifts
          </h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {groupGifts?.map((gift) => (
              <div key={gift?.id} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={gift?.image}
                    alt={gift?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{gift?.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{gift?.description}</p>
                    <div className="text-sm text-muted-foreground">
                      Coordinated by {gift?.coordinator}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">
                      ${gift?.currentAmount} / ${gift?.targetAmount}
                    </span>
                  </div>
                  <div className="bg-border rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent rounded-full h-3 transition-all duration-300"
                      style={{ width: `${getProgressPercentage(gift?.currentAmount, gift?.targetAmount)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                    <span>{gift?.contributors} contributors</span>
                    <span>Deadline: {gift?.deadline}</span>
                  </div>
                </div>

                <Button variant="default" size="sm" fullWidth>
                  <Icon name="Heart" size={16} className="mr-2" />
                  Contribute to Group Gift
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Registry Items */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredItems?.map((item) => (
          <div key={item?.id} className={`bg-background rounded-xl border border-border overflow-hidden hover:romantic-shadow transition-all duration-300 ${item?.isPurchased ? 'opacity-75' : ''}`}>
            <div className={`${viewMode === 'list' ? 'flex' : 'block'}`}>
              <div className={`relative ${viewMode === 'list' ? 'w-32 flex-shrink-0' : 'w-full h-48'} overflow-hidden`}>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getPriorityColor(item?.priority)}`}>
                    {item?.priority} priority
                  </span>
                </div>
                {item?.isPurchased && (
                  <div className="absolute inset-0 bg-success/20 flex items-center justify-center">
                    <div className="bg-success text-success-foreground rounded-full p-3">
                      <Icon name="Check" size={24} />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item?.name}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item?.store}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      ${item?.price}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item?.description}
                </p>

                {item?.groupGift && !item?.isPurchased && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Group Progress</span>
                      <span className="text-sm font-medium">
                        ${item?.purchased} / ${item?.needed}
                      </span>
                    </div>
                    <div className="bg-border rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${getProgressPercentage(item?.purchased, item?.needed)}%` }}
                      ></div>
                    </div>
                    {item?.contributors?.length > 0 && (
                      <div className="text-xs text-muted-foreground mt-2">
                        Contributors: {item?.contributors?.join(', ')}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-2">
                  {item?.isPurchased ? (
                    <Button variant="outline" size="sm" fullWidth disabled>
                      <Icon name="Check" size={16} className="mr-2" />
                      Purchased
                    </Button>
                  ) : (
                    <>
                      <Button variant="default" size="sm" className="flex-1">
                        <Icon name="Gift" size={16} className="mr-2" />
                        {item?.groupGift ? 'Contribute' : 'Purchase'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredItems?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Gift" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
          <p className="text-muted-foreground">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default GiftRegistryIntegration;