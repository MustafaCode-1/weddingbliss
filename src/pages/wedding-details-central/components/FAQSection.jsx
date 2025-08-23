import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = {
    general: {
      title: "General Information",
      icon: "Info",
      color: "text-primary",
      questions: [
        {
          id: 1,
          question: "What time should I arrive?",
          answer: `Please arrive at the ceremony venue by 3:30 PM for seating. The ceremony will begin promptly at 4:00 PM. 
We recommend arriving 15-20 minutes early to find parking and get settled. Ushers will be available to help guide you to your seats.`
        },
        {
          id: 2,
          question: "Is the wedding indoors or outdoors?",
          answer: `The ceremony will be held indoors at St. Mary's Cathedral, so weather won't be a concern. 
The reception will be in the Grand Ballroom at The Plaza, also indoors. However, we'll have outdoor spaces available 
for cocktail hour and photos, weather permitting.`
        },
        {
          id: 3,
          question: "Can I bring a plus-one?",
          answer: `Plus-ones are indicated on your invitation. If your invitation is addressed to you "and guest," 
you're welcome to bring someone. If you have questions about your invitation or need to make changes, 
please contact us directly rather than assuming.`
        },
        {
          id: 4,
          question: "Will there be parking available?",
          answer: `Yes! The cathedral offers free street parking on weekends, and The Plaza provides complimentary valet service 
for reception guests. We recommend carpooling when possible, and ride-sharing services are readily available in the area.`
        }
      ]
    },
    ceremony: {
      title: "Ceremony Details",
      icon: "Church",
      color: "text-accent",
      questions: [
        {
          id: 5,
          question: "How long will the ceremony be?",
          answer: `The ceremony will last approximately 45 minutes, including processional, readings, vows, ring exchange, 
unity ceremony, and recessional. We've planned a meaningful but not overly lengthy service that celebrates our love 
while being mindful of our guests' comfort.`
        },
        {
          id: 6,
          question: "Can I take photos during the ceremony?",
          answer: `We ask that guests refrain from taking photos during the ceremony itself to maintain the sacred atmosphere 
and avoid distracting our professional photographer. However, photos are welcome during the processional, recessional, 
and rice toss afterward. We'll share professional photos with everyone!`
        },
        {
          id: 7,
          question: "Is the ceremony religious?",
          answer: `Yes, we're having a traditional Christian ceremony at St. Mary's Cathedral. The service will include 
readings from scripture, traditional vows, and a blessing. While the ceremony has religious elements, 
all guests are welcome regardless of their faith background.`
        },
        {
          id: 8,
          question: "What if I'm running late?",
          answer: `If you arrive after 4:00 PM, please enter quietly through the side entrance where ushers will help seat you 
in the back. We understand that traffic and parking can be unpredictable, so don't worry - just slip in as discretely as possible.`
        }
      ]
    },
    reception: {
      title: "Reception & Dining",icon: "PartyPopper",color: "text-orange-600",
      questions: [
        {
          id: 9,
          question: "What type of food will be served?",
          answer: `We're serving a three-course plated dinner featuring contemporary American cuisine with seasonal ingredients. 
The menu includes a choice of herb-crusted salmon or beef tenderloin, with vegetarian and dietary restriction options available. 
Cocktail hour will feature gourmet hors d'oeuvres and signature cocktails.`
        },
        {
          id: 10,
          question: "Is there an open bar?",answer: `Yes! We'll have a full open bar serving premium spirits, wine, beer, and signature cocktails throughout the reception until 11:00 PM. Our signature drinks are "Love Potion" (a romantic berry cocktail) and "Eternal Bliss" (a champagne-based drink). 
Non-alcoholic options will also be available.`
        },
        {
          id: 11,
          question: "Can you accommodate dietary restrictions?",
          answer: `Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please let us know about 
any restrictions when you RSVP, or contact us directly if you have specific concerns. Our caterer is experienced with 
various dietary requirements and allergies.`
        },
        {
          id: 12,
          question: "Will there be dancing?",
          answer: `Yes! We'll have a live band for the first hour, followed by a DJ who will keep the party going until 11:00 PM. 
We'll have our first dance, parent dances, and then the floor is yours! We love all types of music and encourage everyone 
to request their favorite songs.`
        }
      ]
    },
    logistics: {
      title: "Travel & Logistics",icon: "MapPin",color: "text-blue-600",
      questions: [
        {
          id: 13,
          question: "Where should out-of-town guests stay?",
          answer: `We've arranged group rates at three hotels near the venues. The Grand Plaza Hotel is closest (0.2 miles) 
with rates of $159/night using code WEDDING2024. Boutique Inn & Suites offers $109/night with code LOVE2024. 
Budget Stay Express has $79/night rates with code CELEBRATE and includes shuttle service.`
        },
        {
          id: 14,
          question: "How do I get from the ceremony to reception?",
          answer: `We're providing complimentary shuttle service! Shuttles will depart from the cathedral 15 minutes after 
the ceremony ends and run every 10 minutes until 6:00 PM. The ride takes about 15 minutes. If you prefer to drive, 
it's about 2 miles between venues with easy directions.`
        },
        {
          id: 15,
          question: "What\'s the weather typically like in June?",
          answer: `June weather in our area is usually perfect for weddings! Expect highs around 78°F and lows around 63°F. 
It's generally sunny with occasional light rain. We recommend bringing a light jacket for evening outdoor photos 
and comfortable shoes for dancing.`
        },
        {
          id: 16,
          question: "Are children welcome?",
          answer: `We love children and they're absolutely welcome at our celebration! The venues are child-friendly, and we'll have kid-friendly meal options available. If you need recommendations for local babysitting services 
for the evening, we're happy to provide some trusted contacts.`
        }
      ]
    }
  };

  const allQuestions = Object.values(faqCategories)?.flatMap(category => 
    category?.questions?.map(q => ({ ...q, category: category?.title, categoryIcon: category?.icon, categoryColor: category?.color }))
  );

  const filteredQuestions = searchTerm 
    ? allQuestions?.filter(q => 
        q?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        q?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    : allQuestions;

  const toggleFAQ = (questionId) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const FAQItem = ({ question, showCategory = false }) => (
    <div 
      className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md ${
        expandedFAQ === question?.id ? 'ring-2 ring-primary/20 shadow-lg' : 'border-border'
      }`}
    >
      <button
        onClick={() => toggleFAQ(question?.id)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
      >
        <div className="flex-1">
          {showCategory && (
            <div className="flex items-center space-x-2 mb-2">
              <Icon name={question?.categoryIcon} size={14} className={question?.categoryColor} />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {question?.category}
              </span>
            </div>
          )}
          <h3 className="font-medium text-foreground text-lg leading-relaxed">
            {question?.question}
          </h3>
        </div>
        <Icon 
          name={expandedFAQ === question?.id ? "ChevronUp" : "ChevronDown"} 
          size={20} 
          className="text-muted-foreground ml-4 transition-transform duration-200" 
        />
      </button>
      
      {expandedFAQ === question?.id && (
        <div className="px-6 pb-6 border-t border-border/50">
          <div className="pt-4">
            <p className="text-muted-foreground leading-relaxed">
              {question?.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We've compiled answers to the most common questions about our wedding day. Can't find what you're looking for? Just ask us!
        </p>
      </div>
      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-colors duration-200"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
      </div>
      {/* Search Results or Categories */}
      {searchTerm ? (
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Found {filteredQuestions?.length} question{filteredQuestions?.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          </div>
          {filteredQuestions?.length > 0 ? (
            <div className="space-y-4">
              {filteredQuestions?.map((question) => (
                <FAQItem key={question?.id} question={question} showCategory />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No questions found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-2 text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Clear search to see all questions
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(faqCategories)?.map(([key, category]) => (
            <div key={key} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center`}>
                  <Icon name={category?.icon} size={20} className={category?.color} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {category?.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category?.questions?.map((question) => (
                  <FAQItem key={question?.id} question={question} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Still Have Questions */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
        <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
          Still Have Questions?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We're here to help! If you can't find the answer you're looking for, don't hesitate to reach out. 
          We want to make sure you have all the information you need for our special day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Mail" size={16} className="mr-2 inline" />
            Email Us
          </button>
          <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200">
            <Icon name="Phone" size={16} className="mr-2 inline" />
            Call Us
          </button>
          <button className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors duration-200">
            <Icon name="MessageSquare" size={16} className="mr-2 inline" />
            Text Message
          </button>
        </div>
      </div>
      {/* Quick Tips */}
      <div className="bg-muted/30 rounded-2xl p-6">
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center">
          <Icon name="Lightbulb" size={20} className="mr-2 text-primary" />
          Quick Tips for Wedding Day
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground text-sm">Arrive Early</p>
              <p className="text-xs text-muted-foreground">Give yourself extra time for parking and seating</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Phone" size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground text-sm">Save Our Numbers</p>
              <p className="text-xs text-muted-foreground">Keep our contact info handy for day-of questions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Camera" size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground text-sm">Share Photos</p>
              <p className="text-xs text-muted-foreground">Tag us in your social media posts!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;