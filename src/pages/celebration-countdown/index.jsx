import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import CountdownTimer from './components/CountdownTimer';
import WeddingSchedule from './components/WeddingSchedule';
import BehindTheScenes from './components/BehindTheScenes';
import GuestExcitement from './components/GuestExcitement';
import WeatherForecast from './components/WeatherForecast';
import LastMinuteUpdates from './components/LastMinuteUpdates';

const CelebrationCountdown = () => {
  const [activeSection, setActiveSection] = useState('countdown');

  const sections = [
    { id: 'countdown', label: 'Countdown', icon: 'Clock' },
    { id: 'schedule', label: 'Schedule', icon: 'Calendar' },
    { id: 'behind-scenes', label: 'Behind Scenes', icon: 'Camera' },
    { id: 'excitement', label: 'Guest Buzz', icon: 'Users' },
    { id: 'weather', label: 'Weather', icon: 'Sun' },
    { id: 'updates', label: 'Updates', icon: 'Bell' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'countdown':
        return <CountdownTimer />;
      case 'schedule':
        return <WeddingSchedule />;
      case 'behind-scenes':
        return <BehindTheScenes />;
      case 'excitement':
        return <GuestExcitement />;
      case 'weather':
        return <WeatherForecast />;
      case 'updates':
        return <LastMinuteUpdates />;
      default:
        return <CountdownTimer />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Icon name="Heart" size={120} className="text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <Icon name="Sparkles" size={100} className="text-accent" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Icon name="Star" size={80} className="text-primary" />
        </div>

        <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 rounded-full bg-primary/10 text-primary">
            <Icon name="Calendar" size={16} />
            <span className="text-sm font-medium">Wedding Countdown</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold font-heading md:text-6xl lg:text-7xl text-foreground">
            The Big Day
            <span className="block text-primary">Approaches</span>
          </h1>
          
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-muted-foreground">
            Join us as we count down to the most magical day of our lives. 
            Stay updated with all the latest wedding preparations, schedules, and exciting moments.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/wedding-details-central"
              className="inline-flex items-center px-6 py-3 space-x-2 transition-all duration-300 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 button-shadow"
            >
              <Icon name="MapPin" size={18} />
              <span className="font-medium">Wedding Details</span>
            </a>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky z-40 border-b top-20 bg-background/95 backdrop-blur-xl border-border">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex py-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeSection === section?.id
                      ? 'bg-primary text-primary-foreground button-shadow'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span className="font-medium">{section?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="px-6 py-12 mx-auto max-w-7xl">
        <div className="story-reveal revealed">
          {renderActiveSection()}
        </div>
      </main>
      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-foreground">
              Quick Actions
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Everything you need for our wedding celebration
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/wedding-details-central"
              className="p-6 text-center transition-all duration-300 border group bg-background border-border rounded-xl hover:card-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 rounded-full bg-primary/10 group-hover:bg-primary/20">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold font-heading text-foreground">
                Venue & Directions
              </h3>
              <p className="text-sm text-muted-foreground">
                Get directions and venue information
              </p>
            </a>

            <a
              href="/guest-experience-hub"
              className="p-6 text-center transition-all duration-300 border group bg-background border-border rounded-xl hover:card-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 rounded-full bg-accent/10 group-hover:bg-accent/20">
                <Icon name="Bed" size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold font-heading text-foreground">
                Accommodations
              </h3>
              <p className="text-sm text-muted-foreground">
                Find nearby hotels and lodging
              </p>
            </a>

            <a
              href="/thank-you-gallery"
              className="p-6 text-center transition-all duration-300 border group bg-background border-border rounded-xl hover:card-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 rounded-full bg-warning/10 group-hover:bg-warning/20">
                <Icon name="Camera" size={24} className="text-warning" />
              </div>
              <h3 className="mb-2 text-lg font-semibold font-heading text-foreground">
                Photo Gallery
              </h3>
              <p className="text-sm text-muted-foreground">
                View our engagement photos
              </p>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 space-x-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading">WeddingBliss</h3>
                <p className="text-sm font-accent text-primary">Love Stories Reimagined</p>
              </div>
            </div>
            
            <div className="flex justify-center mb-8 space-x-8">
              <a href="/cinematic-homepage" className="transition-colors duration-200 hover:text-primary">
                Home
              </a>
              <a href="/wedding-details-central" className="transition-colors duration-200 hover:text-primary">
                Details
              </a>
            </div>
            
            <div className="pt-8 border-t border-background/20">
              <p className="text-sm opacity-80">
              © {new Date()?.getFullYear()} WeddingBliss. Made with love for Sarah & Michael.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CelebrationCountdown;