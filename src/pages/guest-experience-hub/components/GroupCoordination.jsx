import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GroupCoordination = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [selectedGroup, setSelectedGroup] = useState(null);

  const guestGroups = [
    {
      id: 1,
      name: "College Friends",
      members: 8,
      coordinator: "Jessica Miller",
      coordinatorAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
      description: "Sarah\'s college roommates and close friends from university",
      activities: ["Group dinner Friday", "Shared transportation", "Hotel room block"],
      chatActive: true,
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      name: "Family - East Coast",
      members: 12,
      coordinator: "Robert Johnson",
      coordinatorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
      description: "Extended family members traveling from the East Coast",
      activities: ["Airport shuttle coordination", "Family brunch Sunday", "Group photos"],
      chatActive: true,
      lastActivity: "4 hours ago"
    },
    {
      id: 3,
      name: "Work Colleagues",
      members: 6,
      coordinator: "Amanda Chen",
      coordinatorAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
      description: "Current and former colleagues from Michael\'s workplace",
      activities: ["Happy hour Thursday", "Gift coordination", "Carpooling"],
      chatActive: false,
      lastActivity: "1 day ago"
    },
    {
      id: 4,
      name: "Wedding Party",
      members: 10,
      coordinator: "David Wilson",
      coordinatorAvatar: "https://randomuser.me/api/portraits/men/35.jpg",
      description: "Bridesmaids, groomsmen, and other wedding party members",
      activities: ["Rehearsal coordination", "Getting ready schedule", "Photo timeline"],
      chatActive: true,
      lastActivity: "30 minutes ago",
      isWeddingParty: true
    }
  ];

  const transportationOptions = [
    {
      id: 1,
      type: "Shuttle Service",
      route: "Hotel → Venue → Hotel",
      capacity: 20,
      cost: "$15 per person",
      organizer: "Jessica Miller",
      participants: 18,
      status: "confirmed",
      departure: "4:30 PM",
      return: "11:30 PM"
    },
    {
      id: 2,
      type: "Rideshare Group",
      route: "Downtown → Venue",
      capacity: 8,
      cost: "$12 per person",
      organizer: "Robert Johnson",
      participants: 6,
      status: "organizing",
      departure: "4:45 PM",
      return: "Flexible"
    },
    {
      id: 3,
      type: "Private Car Rental",
      route: "Airport → Hotel → Venue",
      capacity: 4,
      cost: "$25 per person",
      organizer: "Amanda Chen",
      participants: 4,
      status: "confirmed",
      departure: "3:00 PM",
      return: "12:00 AM"
    }
  ];

  const groupActivities = [
    {
      id: 1,
      title: "Welcome Dinner",
      date: "Friday, March 15",
      time: "7:00 PM",
      location: "Bella Vista Restaurant",
      organizer: "Jessica Miller",
      participants: 24,
      status: "confirmed",
      description: "Casual welcome dinner for out-of-town guests"
    },
    {
      id: 2,
      title: "Brunch & Farewell",
      date: "Sunday, March 17",
      time: "11:00 AM",
      location: "Garden Café",
      organizer: "Sarah & Michael",
      participants: 45,
      status: "confirmed",
      description: "Post-wedding brunch to say goodbye to guests"
    },
    {
      id: 3,
      title: "Bachelor/Bachelorette Meetup",
      date: "Thursday, March 14",
      time: "8:00 PM",
      location: "Riverside Jazz Club",
      organizer: "Wedding Party",
      participants: 16,
      status: "organizing",
      description: "Joint celebration for the wedding party"
    }
  ];

  const tabs = [
    { id: 'groups', label: 'Guest Groups', icon: 'Users' },
    { id: 'transport', label: 'Transportation', icon: 'Car' },
    { id: 'activities', label: 'Group Activities', icon: 'Calendar' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-success bg-success/10 border-success/20';
      case 'organizing': return 'text-warning bg-warning/10 border-warning/20';
      case 'pending': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Group Coordination
          </h2>
          <p className="text-muted-foreground">
            Connect with other guests and coordinate activities
          </p>
        </div>
        <Button variant="default" size="sm">
          <Icon name="Plus" size={16} className="mr-2" />
          Create Group
        </Button>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all duration-200 ${
              activeTab === tab?.id
                ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span className="font-medium">{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Guest Groups Tab */}
      {activeTab === 'groups' && (
        <div className="space-y-4">
          {guestGroups?.map((group) => (
            <div key={group?.id} className="bg-background rounded-xl p-6 border border-border hover:romantic-shadow transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Image
                      src={group?.coordinatorAvatar}
                      alt={group?.coordinator}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {group?.isWeddingParty && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Crown" size={10} color="white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{group?.name}</h3>
                      {group?.isWeddingParty && (
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                          Wedding Party
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{group?.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{group?.members} members</span>
                      <span>•</span>
                      <span>Coordinator: {group?.coordinator}</span>
                      <span>•</span>
                      <span>Last activity: {group?.lastActivity}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {group?.chatActive && (
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  )}
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Join Chat
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {group?.activities?.map((activity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {activity}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {group?.members} members coordinating
                  </span>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                  <Icon name="ChevronRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Transportation Tab */}
      {activeTab === 'transport' && (
        <div className="space-y-4">
          {transportationOptions?.map((transport) => (
            <div key={transport?.id} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{transport?.type}</h3>
                    <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(transport?.status)}`}>
                      {transport?.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{transport?.route}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Capacity:</span>
                      <div className="font-medium">{transport?.capacity} people</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Cost:</span>
                      <div className="font-medium">{transport?.cost}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Departure:</span>
                      <div className="font-medium">{transport?.departure}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Return:</span>
                      <div className="font-medium">{transport?.return}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    Organized by <span className="font-medium text-foreground">{transport?.organizer}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {transport?.participants}/{transport?.capacity} spots filled
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Contact
                  </Button>
                  <Button variant="default" size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Join
                  </Button>
                </div>
              </div>

              <div className="mt-4 bg-muted/30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <div className="flex-1 mx-4 bg-border rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${(transport?.participants / transport?.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">
                    {transport?.capacity - transport?.participants} spots left
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Group Activities Tab */}
      {activeTab === 'activities' && (
        <div className="space-y-4">
          {groupActivities?.map((activity) => (
            <div key={activity?.id} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{activity?.title}</h3>
                    <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(activity?.status)}`}>
                      {activity?.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{activity?.description}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>{activity?.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{activity?.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span>{activity?.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Organized by <span className="font-medium text-foreground">{activity?.organizer}</span></span>
                  <span>•</span>
                  <span>{activity?.participants} participants</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Info" size={16} className="mr-2" />
                    Details
                  </Button>
                  <Button variant="default" size="sm">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Join
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupCoordination;