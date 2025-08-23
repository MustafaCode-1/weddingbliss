import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LastMinuteUpdates = () => {
  const [subscribedToUpdates, setSubscribedToUpdates] = useState(false);

  const updates = [
    {
      id: 1,
      type: "important",
      title: "Parking Update",
      message: "Additional parking available at the community center across the street. Shuttle service provided every 15 minutes.",
      timestamp: "2 hours ago",
      icon: "Car",
      priority: "high"
    },
    {
      id: 2,
      type: "info",
      title: "Menu Addition",
      message: "We've added a gluten-free dessert option! Please let us know if you have any dietary restrictions we haven't addressed.",
      timestamp: "6 hours ago",
      icon: "Utensils",
      priority: "medium"
    },
    {
      id: 3,
      type: "reminder",
      title: "Gift Registry Reminder",
      message: "Thank you to everyone who has already contributed! For those still looking, our registry is available at the links below.",
      timestamp: "1 day ago",
      icon: "Gift",
      priority: "low"
    },
    {
      id: 4,
      type: "weather",
      title: "Weather Update",
      message: "Perfect weather expected for our big day! Temperature will be around 80°F with partly sunny skies.",
      timestamp: "1 day ago",
      icon: "Sun",
      priority: "medium"
    }
  ];

  const reminders = [
    {
      id: 1,
      title: "RSVP Deadline",
      date: "January 20, 2025",
      description: "Please confirm your attendance by this date",
      daysLeft: 5,
      status: "urgent"
    },
    {
      id: 2,
      title: "Hotel Block Expires",
      date: "February 1, 2025",
      description: "Book your room at discounted rates",
      daysLeft: 17,
      status: "important"
    },
    {
      id: 3,
      title: "Song Requests Due",
      date: "March 1, 2025",
      description: "Submit your must-play songs for the reception",
      daysLeft: 45,
      status: "normal"
    }
  ];

  const socialFeed = [
    {
      id: 1,
      platform: "Instagram",
      user: "@sarahandmichael2025",
      content: "Final dress fitting complete! Can't wait to walk down the aisle! 👰✨ #SarahAndMichaelForever",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      likes: 127,
      timestamp: "3 hours ago"
    },
    {
      id: 2,
      platform: "Instagram",
      user: "@weddingparty_squad",
      content: "Bachelor and bachelorette parties were AMAZING! Ready to celebrate these two lovebirds! 🎉💕",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop",
      likes: 89,
      timestamp: "1 day ago"
    },
    {
      id: 3,
      platform: "Instagram",
      user: "@mom_of_the_bride",
      content: "My baby girl is getting married! So proud and excited for this beautiful day! ❤️👨‍👩‍👧‍👦",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=300&fit=crop",
      likes: 156,
      timestamp: "2 days ago"
    }
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: "border-error/30 bg-error/5",
      medium: "border-warning/30 bg-warning/5",
      low: "border-success/30 bg-success/5"
    };
    return colors?.[priority] || colors?.low;
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      high: "AlertTriangle",
      medium: "Info",
      low: "CheckCircle"
    };
    return icons?.[priority] || icons?.low;
  };

  const getStatusColor = (status) => {
    const colors = {
      urgent: "text-error",
      important: "text-warning",
      normal: "text-success"
    };
    return colors?.[status] || colors?.normal;
  };

  return (
    <div className="space-y-8">
      {/* Latest Updates */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Latest Updates
            </h3>
            <p className="text-muted-foreground">
              Important information and last-minute changes
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Bell" size={20} className="text-primary" />
            <span className="text-sm text-primary font-medium">Live Updates</span>
          </div>
        </div>

        <div className="space-y-4">
          {updates?.map((update) => (
            <div
              key={update?.id}
              className={`border rounded-xl p-4 ${getPriorityColor(update?.priority)}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                    <Icon name={update?.icon} size={20} className="text-foreground" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">
                      {update?.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Icon name={getPriorityIcon(update?.priority)} size={16} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {update?.timestamp}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {update?.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notification Subscription */}
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Smartphone" size={20} className="text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">
                  Get Push Notifications
                </h4>
                <p className="text-sm text-muted-foreground">
                  Stay updated with real-time wedding information
                </p>
              </div>
            </div>
            <button
              onClick={() => setSubscribedToUpdates(!subscribedToUpdates)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                subscribedToUpdates
                  ? 'bg-success text-success-foreground'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              {subscribedToUpdates ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
      {/* Important Reminders */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
          Important Reminders
        </h3>
        
        <div className="space-y-4">
          {reminders?.map((reminder) => (
            <div
              key={reminder?.id}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:card-shadow transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {reminder?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {reminder?.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Due: {reminder?.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${getStatusColor(reminder?.status)}`}>
                  {reminder?.daysLeft}
                </div>
                <div className="text-xs text-muted-foreground">
                  days left
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media Feed */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Wedding Hashtag Feed
          </h3>
          <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
            <Icon name="Hash" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              #SarahAndMichaelForever
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialFeed?.map((post) => (
            <div
              key={post?.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:card-shadow transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img
                  src={post?.image}
                  alt="Social media post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {post?.platform}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">
                    {post?.user}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post?.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {post?.content}
                </p>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-error" />
                  <span className="text-sm text-muted-foreground">
                    {post?.likes} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200">
            <Icon name="Instagram" size={18} />
            <span className="font-medium">Follow on Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteUpdates;