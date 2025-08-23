import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunicationTools = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [newMessage, setNewMessage] = useState('');

  const messageBoards = [
    {
      id: 1,
      title: "General Discussion",
      description: "Share excitement, ask questions, and connect with other guests",
      messageCount: 24,
      lastActivity: "2 hours ago",
      participants: 18,
      icon: "MessageCircle"
    },
    {
      id: 2,
      title: "Travel & Accommodation",
      description: "Coordinate travel plans and share accommodation tips",
      messageCount: 15,
      lastActivity: "4 hours ago",
      participants: 12,
      icon: "MapPin"
    },
    {
      id: 3,
      title: "Gift Coordination",
      description: "Organize group gifts and share registry suggestions",
      messageCount: 8,
      lastActivity: "1 day ago",
      participants: 9,
      icon: "Gift"
    },
    {
      id: 4,
      title: "Wedding Party",
      description: "Private board for bridesmaids, groomsmen, and wedding party",
      messageCount: 32,
      lastActivity: "1 hour ago",
      participants: 10,
      icon: "Crown",
      isPrivate: true
    }
  ];

  const recentMessages = [
    {
      id: 1,
      author: "Jessica Miller",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      message: "Just booked my room at the Grand Heritage Hotel! Can\'t wait to see everyone. The group rate is amazing!",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      board: "Travel & Accommodation",
      likes: 5,
      replies: 2
    },
    {
      id: 2,
      author: "Robert Johnson",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      message: "Sarah and Michael, thank you for creating such a beautiful invitation experience. This is so much better than traditional paper invites!",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      board: "General Discussion",
      likes: 12,
      replies: 6
    },
    {
      id: 3,
      author: "Amanda Chen",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      message: "I'm organizing a group gift for the honeymoon fund. If anyone wants to join, please let me know! We're aiming for $500 total.",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      board: "Gift Coordination",
      likes: 8,
      replies: 4
    },
    {
      id: 4,
      author: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      message: "Wedding party meeting tomorrow at 2 PM. We\'ll go over the timeline and final details. See you all there!",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      board: "Wedding Party",
      likes: 6,
      replies: 3,
      isPrivate: true
    }
  ];

  const contactOptions = [
    {
      id: 1,
      name: "Sarah & Michael",
      role: "Happy Couple",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      phone: "(555) 123-4567",
      email: "sarah.michael@wedding.com",
      preferredContact: "text",
      availability: "Available most evenings"
    },
    {
      id: 2,
      name: "Jessica Miller",
      role: "Maid of Honor",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      phone: "(555) 234-5678",
      email: "jessica@email.com",
      preferredContact: "call",
      availability: "Available weekdays 9-5"
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Best Man",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      phone: "(555) 345-6789",
      email: "david@email.com",
      preferredContact: "email",
      availability: "Available evenings & weekends"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Wedding Coordinator",
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
      phone: "(555) 456-7890",
      email: "emily@weddingplanning.com",
      preferredContact: "call",
      availability: "Available 24/7 for emergencies"
    }
  ];

  const tabs = [
    { id: 'messages', label: 'Message Boards', icon: 'MessageSquare' },
    { id: 'recent', label: 'Recent Activity', icon: 'Activity' },
    { id: 'contacts', label: 'Contact Info', icon: 'Phone' }
  ];

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

  const getPreferredContactIcon = (method) => {
    switch (method) {
      case 'call': return 'Phone';
      case 'text': return 'MessageCircle';
      case 'email': return 'Mail';
      default: return 'MessageCircle';
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Communication Hub
          </h2>
          <p className="text-muted-foreground">
            Connect with other guests and stay in touch with the wedding party
          </p>
        </div>
        <Button variant="default" size="sm">
          <Icon name="Plus" size={16} className="mr-2" />
          New Message
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
      {/* Message Boards Tab */}
      {activeTab === 'messages' && (
        <div className="space-y-4">
          {messageBoards?.map((board) => (
            <div key={board?.id} className="bg-background rounded-xl p-6 border border-border hover:romantic-shadow transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-full ${board?.isPrivate ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                    <Icon name={board?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{board?.title}</h3>
                      {board?.isPrivate && (
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                          Private
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{board?.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{board?.messageCount} messages</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        <span>{board?.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>Last activity: {board?.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Join Discussion
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Recent Activity Tab */}
      {activeTab === 'recent' && (
        <div className="space-y-4">
          {recentMessages?.map((message) => (
            <div key={message?.id} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <Image
                  src={message?.avatar}
                  alt={message?.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{message?.author}</h4>
                    <span className="text-sm text-muted-foreground">in {message?.board}</span>
                    {message?.isPrivate && (
                      <Icon name="Lock" size={14} className="text-accent" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3">{message?.message}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{formatTimeAgo(message?.timestamp)}</span>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Icon name="Heart" size={14} />
                      <span>{message?.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={14} />
                      <span>{message?.replies} replies</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Message Form */}
          <div className="bg-background rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Share a Message</h3>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="What's on your mind? Share your excitement, questions, or well wishes..."
                value={newMessage}
                onChange={(e) => setNewMessage(e?.target?.value)}
                className="min-h-[100px]"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} />
                  <span>Posting to General Discussion</span>
                </div>
                <Button variant="default" size="sm">
                  <Icon name="Send" size={16} className="mr-2" />
                  Post Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Contact Info Tab */}
      {activeTab === 'contacts' && (
        <div className="space-y-4">
          {contactOptions?.map((contact) => (
            <div key={contact?.id} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <Image
                  src={contact?.avatar}
                  alt={contact?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{contact?.name}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {contact?.role}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Phone" size={14} />
                      <span>{contact?.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Mail" size={14} />
                      <span>{contact?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{contact?.availability}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name={getPreferredContactIcon(contact?.preferredContact)} size={14} className="text-primary" />
                      <span>Prefers {contact?.preferredContact}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Emergency Contact */}
          <div className="bg-error/5 rounded-xl p-6 border border-error/20">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="AlertTriangle" size={20} className="text-error" />
              <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              For any urgent matters on the wedding day, please contact our wedding coordinator directly.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="font-semibold text-foreground">Emily Rodriguez - Wedding Coordinator</div>
                <div className="text-sm text-muted-foreground">Available 24/7 for emergencies</div>
                <div className="text-sm text-muted-foreground">(555) 456-7890</div>
              </div>
              <Button variant="destructive" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationTools;