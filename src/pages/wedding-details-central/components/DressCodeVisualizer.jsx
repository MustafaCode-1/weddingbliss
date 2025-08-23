import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DressCodeVisualizer = () => {
  const [selectedEvent, setSelectedEvent] = useState('ceremony');

  const dressCodeGuide = {
    ceremony: {
      title: "Ceremony Attire",
      subtitle: "Formal / Black Tie Optional",
      description: `We'd love for you to dress up for our ceremony! Think elegant and sophisticated. 
Ladies can wear cocktail dresses or formal gowns, while gentlemen should opt for suits or tuxedos.`,
      colorPalette: [
        { name: "Navy Blue", hex: "#1e3a8a", recommended: true },
        { name: "Burgundy", hex: "#7c2d12", recommended: true },
        { name: "Forest Green", hex: "#14532d", recommended: true },
        { name: "Charcoal", hex: "#374151", recommended: true },
        { name: "Blush Pink", hex: "#f9a8d4", recommended: false },
        { name: "Sage Green", hex: "#84cc16", recommended: false }
      ],
      avoid: ["White", "Ivory", "Cream", "Bright Red", "Neon Colors"],
      examples: {
        women: [
          {
            image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop",
            description: "Elegant midi dress in navy"
          },
          {
            image: "https://images.unsplash.com/photo-1566479179817-c0ae6b8b9b5e?w=300&h=400&fit=crop", 
            description: "Formal gown in burgundy"
          },
          {
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
            description: "Cocktail dress in forest green"
          }
        ],
        men: [
          {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
            description: "Classic black tuxedo"
          },
          {
            image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop",
            description: "Navy suit with tie"
          },
          {
            image: "https://images.unsplash.com/photo-1566479179817-c0ae6b8b9b5e?w=300&h=400&fit=crop",
            description: "Charcoal suit"
          }
        ]
      }
    },
    reception: {
      title: "Reception Attire", 
      subtitle: "Cocktail / Semi-Formal",
      description: `For the reception, we want you to be comfortable while still looking fabulous! 
Cocktail attire is perfect - think party-ready but not overly formal.`,
      colorPalette: [
        { name: "Dusty Rose", hex: "#d4a574", recommended: true },
        { name: "Sage", hex: "#87a96b", recommended: true },
        { name: "Terracotta", hex: "#c65d07", recommended: true },
        { name: "Slate Blue", hex: "#475569", recommended: true },
        { name: "Mauve", hex: "#8b5a83", recommended: false },
        { name: "Coral", hex: "#fb7185", recommended: false }
      ],
      avoid: ["White", "Ivory", "Sequined Gowns", "Overly Casual"],
      examples: {
        women: [
          {
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
            description: "Cocktail dress in dusty rose"
          },
          {
            image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop",
            description: "Midi dress in sage green"
          },
          {
            image: "https://images.unsplash.com/photo-1566479179817-c0ae6b8b9b5e?w=300&h=400&fit=crop",
            description: "Party dress in terracotta"
          }
        ],
        men: [
          {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
            description: "Suit without tie"
          },
          {
            image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop",
            description: "Blazer with dress pants"
          },
          {
            image: "https://images.unsplash.com/photo-1566479179817-c0ae6b8b9b5e?w=300&h=400&fit=crop",
            description: "Smart casual ensemble"
          }
        ]
      }
    }
  };

  const currentGuide = dressCodeGuide?.[selectedEvent];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Dress Code Guide
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Help us create beautiful photos by following our dress code suggestions. 
          We want you to feel comfortable and confident!
        </p>
      </div>
      {/* Event Selector */}
      <div className="flex justify-center">
        <div className="bg-muted/30 rounded-2xl p-2 flex space-x-2">
          <button
            onClick={() => setSelectedEvent('ceremony')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedEvent === 'ceremony' ?'bg-primary text-primary-foreground shadow-lg' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name="Church" size={18} className="mr-2 inline" />
            Ceremony
          </button>
          <button
            onClick={() => setSelectedEvent('reception')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedEvent === 'reception' ?'bg-accent text-accent-foreground shadow-lg' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name="PartyPopper" size={18} className="mr-2 inline" />
            Reception
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Dress Code Header */}
        <div className="text-center mb-8 p-8 bg-card rounded-2xl border border-border">
          <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
            {currentGuide?.title}
          </h3>
          <p className="text-xl text-primary font-medium mb-4">
            {currentGuide?.subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {currentGuide?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Palette */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Palette" size={20} className="mr-2 text-primary" />
                Recommended Colors
              </h4>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentGuide?.colorPalette?.map((color, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className={`w-16 h-16 rounded-xl mx-auto mb-2 border-2 ${
                        color?.recommended ? 'border-primary' : 'border-border'
                      }`}
                      style={{ backgroundColor: color?.hex }}
                    ></div>
                    <p className="text-sm font-medium text-foreground">{color?.name}</p>
                    {color?.recommended && (
                      <Icon name="Check" size={14} className="text-primary mx-auto mt-1" />
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <h5 className="font-medium text-foreground mb-2 flex items-center">
                  <Icon name="X" size={16} className="mr-2 text-destructive" />
                  Please Avoid
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentGuide?.avoid?.map((color, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-destructive/10 text-destructive text-sm rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-primary" />
                Style Tips
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Comfortable shoes recommended for dancing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Bring a light jacket for evening outdoor photos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Avoid overly flashy jewelry that might distract</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Consider the venue's flooring when choosing heels</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Style Examples */}
          <div className="space-y-6">
            {/* Women's Attire */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center">
                <Icon name="User" size={20} className="mr-2 text-accent" />
                Women's Attire
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {currentGuide?.examples?.women?.map((example, index) => (
                  <div key={index} className="text-center">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-2">
                      <Image
                        src={example?.image}
                        alt={example?.description}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{example?.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Men's Attire */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center">
                <Icon name="User" size={20} className="mr-2 text-primary" />
                Men's Attire
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {currentGuide?.examples?.men?.map((example, index) => (
                  <div key={index} className="text-center">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-2">
                      <Image
                        src={example?.image}
                        alt={example?.description}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{example?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-8 bg-muted/30 rounded-2xl p-6 text-center">
          <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-3" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
            Questions About Attire?
          </h3>
          <p className="text-muted-foreground mb-4">
            Not sure if your outfit fits the dress code? We're happy to help!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Mail" size={16} className="mr-2 inline" />
            Ask Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default DressCodeVisualizer;