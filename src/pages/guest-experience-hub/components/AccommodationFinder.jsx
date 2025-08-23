import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AccommodationFinder = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('list');

  const accommodations = [
    {
      id: 1,
      name: "Grand Heritage Hotel",
      category: "luxury",
      price: 299,
      rating: 4.8,
      distance: "0.3 miles",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      amenities: ["Free WiFi", "Pool", "Spa", "Valet Parking"],
      groupCode: "SARAH-MICHAEL-2024",
      availability: "Available",
      description: "Elegant luxury hotel with stunning city views and world-class amenities.",
      specialOffer: "15% off with group code"
    },
    {
      id: 2,
      name: "Boutique Garden Inn",
      category: "mid-range",
      price: 189,
      rating: 4.6,
      distance: "0.8 miles",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      amenities: ["Free WiFi", "Garden View", "Restaurant", "Free Parking"],
      groupCode: "WEDDING2024",
      availability: "Limited",
      description: "Charming boutique hotel with beautiful garden settings and personalized service.",
      specialOffer: "Complimentary breakfast"
    },
    {
      id: 3,
      name: "Modern City Suites",
      category: "budget",
      price: 129,
      rating: 4.3,
      distance: "1.2 miles",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400",
      amenities: ["Free WiFi", "Kitchenette", "Gym", "Free Parking"],
      groupCode: "CELEBRATE2024",
      availability: "Available",
      description: "Contemporary suites perfect for extended stays with all modern conveniences.",
      specialOffer: "Free shuttle to venue"
    },
    {
      id: 4,
      name: "Historic Manor House",
      category: "luxury",
      price: 349,
      rating: 4.9,
      distance: "2.1 miles",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
      amenities: ["Historic Charm", "Fine Dining", "Concierge", "Spa Services"],
      groupCode: "MANOR-WEDDING",
      availability: "Available",
      description: "Restored 19th-century manor offering luxury accommodations with historic elegance.",
      specialOffer: "Welcome champagne & chocolates"
    }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices', icon: 'DollarSign' },
    { value: 'budget', label: 'Under $150', icon: 'Wallet' },
    { value: 'mid-range', label: '$150-$250', icon: 'CreditCard' },
    { value: 'luxury', label: '$250+', icon: 'Crown' }
  ];

  const filteredAccommodations = selectedPriceRange === 'all' 
    ? accommodations 
    : accommodations?.filter(hotel => hotel?.category === selectedPriceRange);

  const getPriceColor = (category) => {
    switch (category) {
      case 'budget': return 'text-success';
      case 'mid-range': return 'text-warning';
      case 'luxury': return 'text-accent';
      default: return 'text-foreground';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'text-success bg-success/10 border-success/20';
      case 'Limited': return 'text-warning bg-warning/10 border-warning/20';
      case 'Sold Out': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Accommodation Finder
          </h2>
          <p className="text-muted-foreground">
            Discover perfect stays near the wedding venue with exclusive group rates
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
          </div>

          <Button variant="outline" size="sm">
            <Icon name="Map" size={16} className="mr-2" />
            View Map
          </Button>
        </div>
      </div>
      {/* Price Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {priceRanges?.map((range) => (
          <button
            key={range?.value}
            onClick={() => setSelectedPriceRange(range?.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedPriceRange === range?.value
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:bg-muted/50'
            }`}
          >
            <Icon name={range?.icon} size={16} />
            <span className="text-sm font-medium">{range?.label}</span>
          </button>
        ))}
      </div>
      {/* Accommodations List */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        {filteredAccommodations?.map((hotel) => (
          <div key={hotel?.id} className="bg-background rounded-xl border border-border overflow-hidden hover:romantic-shadow transition-all duration-300">
            <div className={`${viewMode === 'list' ? 'flex' : 'block'}`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'w-full h-48'} overflow-hidden`}>
                <Image
                  src={hotel?.image}
                  alt={hotel?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getAvailabilityColor(hotel?.availability)}`}>
                    {hotel?.availability}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={12} className="text-warning fill-current" />
                    <span className="text-xs font-medium">{hotel?.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {hotel?.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      <span>{hotel?.distance} from venue</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getPriceColor(hotel?.category)}`}>
                      ${hotel?.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per night</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {hotel?.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel?.amenities?.slice(0, 4)?.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Tag" size={14} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Special Wedding Offer</span>
                  </div>
                  <p className="text-sm text-foreground">{hotel?.specialOffer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground">Group Code:</span>
                    <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                      {hotel?.groupCode}
                    </code>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Heart" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Share" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredAccommodations?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Home" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No accommodations found</h3>
          <p className="text-muted-foreground">Try adjusting your price range filter</p>
        </div>
      )}
    </div>
  );
};

export default AccommodationFinder;