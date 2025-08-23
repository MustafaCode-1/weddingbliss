import React from 'react';
import Icon from '../../../components/AppIcon';


const WelcomeCard = ({ guestProfile }) => {
  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'wedding-party': return 'Crown';
      case 'family': return 'Heart';
      case 'friend': return 'Users';
      default: return 'User';
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'wedding-party': return 'bg-accent/10 text-accent border-accent/20';
      case 'family': return 'bg-primary/10 text-primary border-primary/20';
      case 'friend': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 romantic-shadow border border-primary/10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name={getRoleIcon(guestProfile?.role)} size={32} color="white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-4 border-background">
            <Icon name="Check" size={12} color="white" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <h1 className="text-3xl font-heading font-bold text-foreground">
              {getGreeting()}, {guestProfile?.name}!
            </h1>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getRoleBadgeColor(guestProfile?.role)}`}>
              <Icon name={getRoleIcon(guestProfile?.role)} size={14} />
              {guestProfile?.roleLabel}
            </div>
          </div>

          <p className="text-muted-foreground text-lg mb-4">
            Welcome to your personalized wedding hub! Everything you need for Sarah & Michael's special day is right here.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Icon name="Calendar" size={16} className="text-primary" />
              <span>RSVP Status: <span className="font-semibold text-success">Confirmed</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span>Distance: <span className="font-semibold">2.3 miles from venue</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Last updated: <span className="font-semibold">2 hours ago</span></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="text-center p-4 bg-background/50 rounded-xl border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">42</div>
            <div className="text-xs text-muted-foreground">Days to go</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-xl border border-primary/10">
            <div className="text-2xl font-bold text-accent mb-1">156</div>
            <div className="text-xs text-muted-foreground">Guests confirmed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;