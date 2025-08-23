import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeCard from './components/WelcomeCard';
import AccommodationFinder from './components/AccommodationFinder';
import LocalAttractions from './components/LocalAttractions';
import WeatherDashboard from './components/WeatherDashboard';
import GroupCoordination from './components/GroupCoordination';
import GiftRegistryIntegration from './components/GiftRegistryIntegration';
import RealTimeUpdates from './components/RealTimeUpdates';
import CommunicationTools from './components/CommunicationTools';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const GuestExperienceHub = () => {
  const [guestProfile, setGuestProfile] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Mock guest profile data
  const mockGuestProfile = {
    name: "Jessica Miller",
    role: "friend",
    roleLabel: "Close Friend",
    rsvpStatus: "confirmed",
    relationshipToCoupel: "College roommate of Sarah",
    arrivalDate: "March 15, 2024",
    departureDate: "March 18, 2024",
    accommodationBooked: true,
    accommodationName: "Grand Heritage Hotel",
    specialRequests: ["Vegetarian meal", "Ground floor room"],
    plusOne: true,
    plusOneName: "Mark Thompson"
  };

  useEffect(() => {
    // Simulate loading guest profile
    const timer = setTimeout(() => {
      setGuestProfile(mockGuestProfile);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'accommodation', label: 'Accommodation', icon: 'Building' },
    { id: 'attractions', label: 'Local Attractions', icon: 'MapPin' },
    { id: 'weather', label: 'Weather', icon: 'Cloud' },
    { id: 'coordination', label: 'Group Coordination', icon: 'Users' },
    { id: 'registry', label: 'Gift Registry', icon: 'Gift' },
    { id: 'updates', label: 'Updates', icon: 'Bell' },
    { id: 'communication', label: 'Communication', icon: 'MessageCircle' }
  ];

  const quickActions = [
    { id: 'rsvp', label: 'Update RSVP', icon: 'Calendar', color: 'primary' },
    { id: 'directions', label: 'Get Directions', icon: 'Navigation', color: 'success' },
    { id: 'schedule', label: 'View Schedule', icon: 'Clock', color: 'warning' },
    { id: 'contact', label: 'Contact Couple', icon: 'Phone', color: 'accent' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Loading Your Experience Hub</h2>
            <p className="text-muted-foreground">Personalizing your wedding dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <WelcomeCard guestProfile={guestProfile} />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions?.map((action) => (
              <Button
                key={action?.id}
                variant="outline"
                className={`h-20 flex-col gap-2 border-${action?.color}/20 hover:bg-${action?.color}/5`}
              >
                <Icon name={action?.icon} size={24} className={`text-${action?.color}`} />
                <span className="text-sm font-medium">{action?.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 p-2 bg-muted/30 rounded-xl">
            {navigationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span className="text-sm font-medium hidden sm:inline">{section?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {activeSection === 'overview' && (
            <div className="grid gap-8">
              <RealTimeUpdates />
              <div className="grid lg:grid-cols-2 gap-8">
                <WeatherDashboard />
                <GroupCoordination />
              </div>
            </div>
          )}

          {activeSection === 'accommodation' && <AccommodationFinder />}
          {activeSection === 'attractions' && <LocalAttractions />}
          {activeSection === 'weather' && <WeatherDashboard />}
          {activeSection === 'coordination' && <GroupCoordination />}
          {activeSection === 'registry' && <GiftRegistryIntegration />}
          {activeSection === 'updates' && <RealTimeUpdates />}
          {activeSection === 'communication' && <CommunicationTools />}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Need Help?
              </h3>
              <p className="text-muted-foreground">
                Our wedding coordinator is here to assist you with any questions or concerns.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Live Chat
              </Button>
              <Button variant="default">
                <Icon name="Phone" size={16} className="mr-2" />
                Call Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button
          variant="default"
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg"
        >
          <Icon name="Plus" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default GuestExperienceHub;