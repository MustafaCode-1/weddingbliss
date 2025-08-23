import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/cinematic-homepage', label: 'Home', icon: 'Home' },
    { path: '/wedding-details-central', label: 'Details', icon: 'Calendar' },
    { path: '/celebration-countdown', label: 'Countdown', icon: 'Clock' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent">
          <Icon name="Heart" size={20} color="white" className="animate-pulse" />
        </div>
        <div className="absolute flex items-center justify-center w-4 h-4 rounded-full -top-1 -right-1 bg-accent">
          <Icon name="Sparkles" size={8} color="white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight font-heading text-foreground">
          WeddingBliss
        </span>
        <span className="-mt-1 text-sm font-accent text-primary">
          Love Stories Reimagined
        </span>
      </div>
    </div>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled 
            ? 'floating-nav visible backdrop-blur-xl bg-background/95 romantic-shadow' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-8 lg:flex">
              {navigationItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActivePath(item?.path) ? 'text-primary' : ''
                    }`}
                  />
                  <span className="font-medium">{item?.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="items-center hidden space-x-4 lg:flex">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 button-shadow"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Save the Date
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-colors duration-200 rounded-lg lg:hidden text-foreground hover:bg-muted/50"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="px-6 py-6 mx-auto max-w-7xl">
            <nav className="space-y-2">
              {[...navigationItems]?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.label}</span>
                </a>
              ))}
            </nav>

            <div className="pt-6 mt-6 space-y-3 border-t border-border">
              <Button 
                variant="outline" 
                fullWidth
                className="border-primary/20 text-primary hover:bg-primary/5"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Save the Date
              </Button>
              <Button 
                variant="default" 
                fullWidth
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <Icon name="Heart" size={16} className="mr-2" />
                RSVP Now
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};

export default Header;