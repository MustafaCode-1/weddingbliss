import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RealTimeUpdates = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const updates = [
    {
      id: 1,
      type: 'announcement',
      title: "Weather Update",
      message: "Great news! The forecast shows perfect weather for our outdoor ceremony. Sunny skies and 78°F expected!",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      priority: 'high',
      author: 'Sarah & Michael',
      category: 'weather'
    },
    {
      id: 2,
      type: 'schedule',
      title: "Ceremony Time Adjustment",
      message: "Small change: The ceremony will now start at 4:30 PM instead of 4:00 PM to allow for better lighting and photos.",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      priority: 'high',
      author: 'Wedding Coordinator',
      category: 'schedule'
    },
    {
      id: 3,
      type: 'transport',
      title: "Shuttle Service Confirmed",
      message: "The shuttle service from Grand Heritage Hotel to the venue is confirmed. First pickup at 3:45 PM.",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      priority: 'medium',
      author: 'Jessica Miller',
      category: 'transport'
    },
    {
      id: 4,
      type: 'activity',
      title: "Welcome Dinner Reminder",
      message: "Don\'t forget about tonight\'s welcome dinner at Bella Vista Restaurant at 7:00 PM. Looking forward to seeing everyone!",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      priority: 'medium',
      author: 'Sarah & Michael',
      category: 'activity'
    },
    {
      id: 5,
      type: 'accommodation',
      title: "Hotel Group Rate Extended",
      message: "Good news! We\'ve extended the group rate at Boutique Garden Inn until March 10th for any last-minute bookings.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      priority: 'low',
      author: 'Robert Johnson',
      category: 'accommodation'
    },
    {
      id: 6,
      type: 'gift',
      title: "Group Gift Update",
      message: "Amazing! The honeymoon fund has reached 75% of its goal. Thank you to everyone who has contributed so far!",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      priority: 'low',
      author: 'Gift Coordinator',
      category: 'gift'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Updates', icon: 'Bell' },
    { value: 'high', label: 'Important', icon: 'AlertTriangle' },
    { value: 'schedule', label: 'Schedule', icon: 'Calendar' },
    { value: 'transport', label: 'Transportation', icon: 'Car' },
    { value: 'weather', label: 'Weather', icon: 'Cloud' }
  ];

  const filteredUpdates = selectedFilter === 'all' 
    ? updates 
    : selectedFilter === 'high'
    ? updates?.filter(update => update?.priority === 'high')
    : updates?.filter(update => update?.category === selectedFilter);

  const getUpdateIcon = (type) => {
    switch (type) {
      case 'announcement': return 'Megaphone';
      case 'schedule': return 'Calendar';
      case 'transport': return 'Car';
      case 'activity': return 'Users';
      case 'accommodation': return 'Home';
      case 'gift': return 'Gift';
      default: return 'Bell';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10 border-error/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'announcement': return 'text-primary bg-primary/10';
      case 'schedule': return 'text-accent bg-accent/10';
      case 'transport': return 'text-warning bg-warning/10';
      case 'activity': return 'text-success bg-success/10';
      case 'accommodation': return 'text-primary bg-primary/10';
      case 'gift': return 'text-accent bg-accent/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new notification every 30 seconds (for demo purposes)
      if (Math.random() > 0.7) {
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            message: 'New update available',
            timestamp: new Date()
          }
        ]);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2 flex items-center gap-3">
            Real-Time Updates
            {notifications?.length > 0 && (
              <div className="relative">
                <Icon name="Bell" size={20} className="text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full animate-pulse"></div>
              </div>
            )}
          </h2>
          <p className="text-muted-foreground">
            Stay informed with the latest wedding announcements and changes
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Settings" size={16} className="mr-2" />
          Notification Settings
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters?.map((filter) => (
          <button
            key={filter?.value}
            onClick={() => setSelectedFilter(filter?.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedFilter === filter?.value
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:bg-muted/50'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span className="text-sm font-medium">{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Updates List */}
      <div className="space-y-4">
        {filteredUpdates?.map((update) => (
          <div key={update?.id} className="bg-background rounded-xl p-6 border border-border hover:romantic-shadow transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full ${getTypeColor(update?.type)}`}>
                <Icon name={getUpdateIcon(update?.type)} size={20} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{update?.title}</h3>
                      <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getPriorityColor(update?.priority)}`}>
                        {update?.priority} priority
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{update?.message}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        <span>{update?.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{formatTimeAgo(update?.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Helpful
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share" size={16} className="mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredUpdates?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Bell" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No updates found</h3>
          <p className="text-muted-foreground">Try selecting a different filter or check back later</p>
        </div>
      )}
      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Button variant="outline" size="sm" fullWidth>
            <Icon name="Calendar" size={16} className="mr-2" />
            View Schedule
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            <Icon name="MapPin" size={16} className="mr-2" />
            Get Directions
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            <Icon name="Phone" size={16} className="mr-2" />
            Contact Couple
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            <Icon name="Download" size={16} className="mr-2" />
            Save to Calendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeUpdates;