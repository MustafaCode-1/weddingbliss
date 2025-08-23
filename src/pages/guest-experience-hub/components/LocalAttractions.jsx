import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LocalAttractions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Attractions', icon: 'MapPin' },
    { value: 'dining', label: 'Dining', icon: 'UtensilsCrossed' },
    { value: 'entertainment', label: 'Entertainment', icon: 'Music' },
    { value: 'sightseeing', label: 'Sightseeing', icon: 'Camera' },
    { value: 'shopping', label: 'Shopping', icon: 'ShoppingBag' }
  ];

  const attractions = [
    {
      id: 1,
      name: "Bella Vista Restaurant",
      category: "dining",
      type: "Fine Dining",
      rating: 4.8,
      distance: "0.5 miles",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
      description: "Romantic Italian restaurant with stunning city views. Perfect for pre-wedding dinners and intimate celebrations.",
      highlights: ["Rooftop Terrace", "Wine Pairing", "Private Dining"],
      coupleNote: "This is where Michael proposed! They have the best tiramisu in the city.",
      bookingLink: "https://bellavista.com/reservations",
      hours: "5:00 PM - 11:00 PM",
      phone: "(555) 123-4567"
    },
    {
      id: 2,
      name: "Historic Art Museum",
      category: "sightseeing",
      type: "Museum",
      rating: 4.6,
      distance: "1.2 miles",
      price: "$$",
      image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400",
      description: "World-class art collection featuring contemporary and classical works. Great for a cultural afternoon.",
      highlights: ["Modern Art Wing", "Sculpture Garden", "Audio Tours"],
      coupleNote: "Sarah\'s favorite museum! Don\'t miss the impressionist collection on the third floor.",
      bookingLink: "https://artmuseum.org/tickets",
      hours: "10:00 AM - 6:00 PM",
      phone: "(555) 234-5678"
    },
    {
      id: 3,
      name: "Riverside Jazz Club",
      category: "entertainment",
      type: "Live Music",
      rating: 4.7,
      distance: "0.8 miles",
      price: "$$",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      description: "Intimate jazz venue with live performances every night. Perfect for a romantic evening out.",
      highlights: ["Live Jazz", "Craft Cocktails", "Intimate Setting"],
      coupleNote: "Our first date was here! Try the signature \'Love Song\' cocktail.",
      bookingLink: "https://riversidejazz.com/shows",
      hours: "7:00 PM - 2:00 AM",
      phone: "(555) 345-6789"
    },
    {
      id: 4,
      name: "Central Market Square",
      category: "shopping",
      type: "Shopping District",
      rating: 4.5,
      distance: "0.7 miles",
      price: "$",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
      description: "Charming market square with local artisans, boutique shops, and weekend farmers market.",
      highlights: ["Local Artisans", "Weekend Market", "Unique Gifts"],
      coupleNote: "Great place to find unique wedding gifts and local souvenirs. The Saturday market is amazing!",
      bookingLink: "https://centralmarket.com/directory",
      hours: "9:00 AM - 9:00 PM",
      phone: "(555) 456-7890"
    },
    {
      id: 5,
      name: "Garden Café & Bakery",
      category: "dining",
      type: "Casual Dining",
      rating: 4.4,
      distance: "0.3 miles",
      price: "$",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
      description: "Cozy café with fresh pastries, artisan coffee, and beautiful garden seating.",
      highlights: ["Garden Seating", "Fresh Pastries", "Artisan Coffee"],
      coupleNote: "Perfect for breakfast meetings with other wedding guests. Their lavender scones are divine!",
      bookingLink: "https://gardencafe.com/menu",
      hours: "7:00 AM - 4:00 PM",
      phone: "(555) 567-8901"
    },
    {
      id: 6,
      name: "Sunset Harbor Cruise",
      category: "entertainment",
      type: "Boat Tour",
      rating: 4.9,
      distance: "2.5 miles",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      description: "Scenic harbor cruise with stunning sunset views and optional dinner service.",
      highlights: ["Sunset Views", "Dinner Option", "Photography Spots"],
      coupleNote: "We took this cruise last summer - absolutely magical! Book the dinner cruise if you can.",
      bookingLink: "https://harborcruises.com/sunset",
      hours: "6:00 PM - 9:00 PM",
      phone: "(555) 678-9012"
    }
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions?.filter(attraction => attraction?.category === selectedCategory);

  const getPriceColor = (price) => {
    switch (price) {
      case '$': return 'text-success';
      case '$$': return 'text-warning';
      case '$$$': return 'text-accent';
      default: return 'text-foreground';
    }
  };

  const getCategoryIcon = (category) => {
    const categoryObj = categories?.find(cat => cat?.value === category);
    return categoryObj ? categoryObj?.icon : 'MapPin';
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Local Attractions
          </h2>
          <p className="text-muted-foreground">
            Discover Sarah & Michael's favorite local spots and hidden gems
          </p>
        </div>

        <Button variant="outline" size="sm">
          <Icon name="Navigation" size={16} className="mr-2" />
          Get Directions
        </Button>
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
      {/* Attractions Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredAttractions?.map((attraction) => (
          <div key={attraction?.id} className="bg-background rounded-xl border border-border overflow-hidden hover:romantic-shadow transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={attraction?.image}
                alt={attraction?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                  <Icon name={getCategoryIcon(attraction?.category)} size={12} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">{attraction?.type}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={12} className="text-warning fill-current" />
                  <span className="text-xs font-medium">{attraction?.rating}</span>
                </div>
              </div>
              <div className="absolute bottom-3 right-3">
                <div className={`text-lg font-bold ${getPriceColor(attraction?.price)}`}>
                  {attraction?.price}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {attraction?.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      <span>{attraction?.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{attraction?.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {attraction?.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {attraction?.highlights?.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="bg-accent/5 rounded-lg p-3 mb-4 border border-accent/10">
                <div className="flex items-start gap-2">
                  <Icon name="Heart" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-accent mb-1">Couple's Note</div>
                    <p className="text-sm text-foreground">{attraction?.coupleNote}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="default" size="sm" className="flex-1">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Share" size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredAttractions?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No attractions found</h3>
          <p className="text-muted-foreground">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default LocalAttractions;