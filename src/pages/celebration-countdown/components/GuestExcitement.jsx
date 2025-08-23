import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const GuestExcitement = () => {
  const [rsvpStats, setRsvpStats] = useState({
    confirmed: 0,
    pending: 0,
    total: 150
  });

  const [excitementLevel, setExcitementLevel] = useState(0);

  useEffect(() => {
    // Simulate RSVP progress
    const timer = setTimeout(() => {
      setRsvpStats({
        confirmed: 127,
        pending: 23,
        total: 150
      });
      setExcitementLevel(85);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const recentRsvps = [
    {
      id: 1,
      name: "Emily & David Johnson",
      message: "Can\'t wait to celebrate with you both! This is going to be the wedding of the year! 💕",
      timestamp: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      attending: 2
    },
    {
      id: 2,
      name: "The Martinez Family",
      message: "So excited to witness your love story! The kids are already practicing their dance moves! 🕺💃",
      timestamp: "5 hours ago",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      attending: 4
    },
    {
      id: 3,
      name: "Jessica & Mark Thompson",
      message: "Wouldn\'t miss it for the world! Already booked our hotel and can\'t wait to party! 🎉",
      timestamp: "1 day ago",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      attending: 2
    },
    {
      id: 4,
      name: "Robert & Linda Chen",
      message: "Looking forward to celebrating your beautiful love! See you on the dance floor! ❤️",
      timestamp: "2 days ago",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      attending: 2
    }
  ];

  const milestones = [
    {
      id: 1,
      target: 50,
      reached: true,
      title: "First 50 RSVPs",
      message: "Amazing response from our loved ones!",
      icon: "Users",
      date: "Reached Jan 8"
    },
    {
      id: 2,
      target: 100,
      reached: true,
      title: "100 Guests Confirmed",
      message: "The party is going to be incredible!",
      icon: "PartyPopper",
      date: "Reached Jan 12"
    },
    {
      id: 3,
      target: 125,
      reached: true,
      title: "125 RSVPs Received",
      message: "Almost at full capacity!",
      icon: "Heart",
      date: "Reached Jan 15"
    },
    {
      id: 4,
      target: 150,
      reached: false,
      title: "Full Guest List",
      message: "Waiting for the last few responses",
      icon: "Target",
      date: "Goal: Jan 20"
    }
  ];

  const confirmedPercentage = Math.round((rsvpStats?.confirmed / rsvpStats?.total) * 100);
  const pendingPercentage = Math.round((rsvpStats?.pending / rsvpStats?.total) * 100);

  return (
    <div className="space-y-8">
      {/* RSVP Progress */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Guest Excitement Tracker
          </h3>
          <p className="text-muted-foreground">
            See how our wedding community is growing!
          </p>
        </div>

        {/* Progress Ring */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${confirmedPercentage * 2.83} 283`}
                className="text-primary transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-heading font-bold text-foreground">
                {rsvpStats?.confirmed}
              </div>
              <div className="text-sm text-muted-foreground">of {rsvpStats?.total}</div>
              <div className="text-xs text-primary font-medium mt-1">
                {confirmedPercentage}% Confirmed
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="Check" size={20} className="text-success" />
            </div>
            <div className="text-2xl font-heading font-bold text-foreground">
              {rsvpStats?.confirmed}
            </div>
            <div className="text-sm text-muted-foreground">Confirmed</div>
          </div>
          
          <div className="text-center p-4 bg-warning/5 rounded-lg border border-warning/20">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="Clock" size={20} className="text-warning" />
            </div>
            <div className="text-2xl font-heading font-bold text-foreground">
              {rsvpStats?.pending}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </div>
          
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon name="Heart" size={20} className="text-primary" />
            </div>
            <div className="text-2xl font-heading font-bold text-foreground">
              {excitementLevel}%
            </div>
            <div className="text-sm text-muted-foreground">Excitement</div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-3">
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
            RSVP Milestones
          </h4>
          {milestones?.map((milestone) => (
            <div
              key={milestone?.id}
              className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                milestone?.reached
                  ? 'bg-success/5 border-success/20' :'bg-muted/30 border-border'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                milestone?.reached
                  ? 'bg-success/10 text-success' :'bg-muted text-muted-foreground'
              }`}>
                <Icon name={milestone?.icon} size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h5 className="font-semibold text-foreground">
                    {milestone?.title}
                  </h5>
                  {milestone?.reached && (
                    <Icon name="CheckCircle" size={16} className="text-success" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {milestone?.message}
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                {milestone?.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent RSVPs */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-heading text-xl font-semibold text-foreground">
            Recent RSVPs
          </h4>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Activity" size={16} />
            <span>Live updates</span>
          </div>
        </div>

        <div className="space-y-4">
          {recentRsvps?.map((rsvp) => (
            <div
              key={rsvp?.id}
              className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover:card-shadow transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={rsvp?.avatar}
                  alt={rsvp?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-foreground">
                    {rsvp?.name}
                  </h5>
                  <span className="text-xs text-muted-foreground">
                    {rsvp?.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  {rsvp?.message}
                </p>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={14} className="text-primary" />
                  <span className="text-xs text-primary font-medium">
                    {rsvp?.attending} {rsvp?.attending === 1 ? 'guest' : 'guests'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200">
            <span className="text-sm font-medium">View all RSVPs</span>
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestExcitement;