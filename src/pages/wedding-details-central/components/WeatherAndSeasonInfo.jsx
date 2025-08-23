import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WeatherAndSeasonInfo = () => {
  const [selectedMonth, setSelectedMonth] = useState(6); // June

  const weatherData = {
    6: { // June
      month: "June",
      avgHigh: 78,
      avgLow: 63,
      precipitation: "3.2 inches",
      humidity: "65%",
      description: "Perfect wedding weather with warm days and comfortable evenings. Light rain possible.",
      conditions: ["Mostly Sunny", "Warm Days", "Cool Evenings", "Light Breeze"],
      recommendations: [
        "Light jacket for evening outdoor photos",
        "Comfortable walking shoes for garden areas", 
        "Sunglasses for daytime events",
        "Light layers for temperature changes"
      ]
    }
  };

  const currentWeather = weatherData?.[selectedMonth];

  const weeklyForecast = [
    {
      date: "June 10",
      day: "Monday",
      high: 76,
      low: 61,
      condition: "Partly Cloudy",
      icon: "CloudSun",
      precipitation: "10%"
    },
    {
      date: "June 11", 
      day: "Tuesday",
      high: 79,
      low: 64,
      condition: "Sunny",
      icon: "Sun",
      precipitation: "5%"
    },
    {
      date: "June 12",
      day: "Wednesday", 
      high: 81,
      low: 66,
      condition: "Sunny",
      icon: "Sun",
      precipitation: "0%"
    },
    {
      date: "June 13",
      day: "Thursday",
      high: 77,
      low: 63,
      condition: "Light Rain",
      icon: "CloudRain",
      precipitation: "60%"
    },
    {
      date: "June 14",
      day: "Friday",
      high: 75,
      low: 62,
      condition: "Partly Cloudy",
      icon: "CloudSun", 
      precipitation: "20%"
    },
    {
      date: "June 15",
      day: "Saturday",
      high: 78,
      low: 63,
      condition: "Perfect!",
      icon: "Sun",
      precipitation: "5%",
      isWeddingDay: true
    },
    {
      date: "June 16",
      day: "Sunday",
      high: 80,
      low: 65,
      condition: "Sunny",
      icon: "Sun",
      precipitation: "0%"
    }
  ];

  const packingChecklist = {
    clothing: [
      { item: "Light jacket or wrap", essential: true },
      { item: "Comfortable walking shoes", essential: true },
      { item: "Formal attire for ceremony", essential: true },
      { item: "Cocktail attire for reception", essential: true },
      { item: "Layers for temperature changes", essential: false },
      { item: "Rain jacket or umbrella", essential: false }
    ],
    accessories: [
      { item: "Sunglasses", essential: true },
      { item: "Sunscreen SPF 30+", essential: true },
      { item: "Comfortable bag for dancing", essential: false },
      { item: "Phone charger", essential: true },
      { item: "Camera for memories", essential: false },
      { item: "Tissues (happy tears!)", essential: false }
    ]
  };

  const seasonalTips = [
    {
      icon: "Thermometer",
      title: "Temperature Comfort",
      tip: "Expect warm afternoons (75-80°F) and cooler evenings (60-65°F). Perfect for outdoor ceremonies!"
    },
    {
      icon: "CloudRain",
      title: "Rain Preparedness", 
      tip: "June averages 3-4 rainy days. We have covered areas and umbrellas available if needed."
    },
    {
      icon: "Sun",
      title: "Sun Protection",
      tip: "Ceremony starts at 4 PM with good shade, but bring sunglasses for outdoor photos."
    },
    {
      icon: "Wind",
      title: "Gentle Breezes",
      tip: "Light evening breezes are common. Consider hairstyles that work with natural movement."
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-4xl font-bold text-foreground">
          Weather & Season Guide
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plan your perfect wedding guest experience with our weather insights and packing recommendations.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Month Overview */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-6 border border-primary/20">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {currentWeather?.month} Weather
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{currentWeather?.avgHigh}°</p>
                  <p className="text-sm text-muted-foreground">High</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">{currentWeather?.avgLow}°</p>
                  <p className="text-sm text-muted-foreground">Low</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Precipitation</span>
                <span className="font-medium text-foreground">{currentWeather?.precipitation}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Humidity</span>
                <span className="font-medium text-foreground">{currentWeather?.humidity}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {currentWeather?.description}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-foreground mb-3">Typical Conditions</h4>
              <div className="flex flex-wrap gap-2">
                {currentWeather?.conditions?.map((condition, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Wedding Week Forecast
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {weeklyForecast?.map((day, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 rounded-xl transition-all duration-300 ${
                    day?.isWeddingDay 
                      ? 'bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/30 shadow-lg' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  {day?.isWeddingDay && (
                    <div className="mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        WEDDING DAY
                      </span>
                    </div>
                  )}
                  
                  <p className="text-sm font-medium text-foreground">{day?.day}</p>
                  <p className="text-xs text-muted-foreground mb-3">{day?.date}</p>
                  
                  <div className="mb-3">
                    <Icon 
                      name={day?.icon} 
                      size={24} 
                      className={day?.isWeddingDay ? 'text-primary' : 'text-muted-foreground'} 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{day?.high}°</span>
                      <span className="text-muted-foreground">{day?.low}°</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{day?.condition}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Droplets" size={10} />
                      <span>{day?.precipitation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Seasonal Tips */}
      {/* <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-6">
          Seasonal Considerations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasonalTips?.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={tip?.icon} size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{tip?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip?.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* Packing Checklist */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center">
            <Icon name="ShirtIcon" size={20} className="mr-2 text-primary" />
            Clothing Essentials
          </h3>
          
          <div className="space-y-3">
            {packingChecklist?.clothing?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item?.essential 
                    ? 'border-primary bg-primary/10' :'border-muted-foreground/30'
                }`}>
                  {item?.essential && <Icon name="Check" size={12} className="text-primary" />}
                </div>
                <span className={`text-sm ${
                  item?.essential ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {item?.item}
                </span>
                {item?.essential && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Essential
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center">
            <Icon name="Briefcase" size={20} className="mr-2 text-accent" />
            Accessories & Extras
          </h3>
          
          <div className="space-y-3">
            {packingChecklist?.accessories?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item?.essential 
                    ? 'border-accent bg-accent/10' :'border-muted-foreground/30'
                }`}>
                  {item?.essential && <Icon name="Check" size={12} className="text-accent" />}
                </div>
                <span className={`text-sm ${
                  item?.essential ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {item?.item}
                </span>
                {item?.essential && (
                  <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                    Essential
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Weather Updates */}
      {/* <div className="bg-muted/30 rounded-2xl p-6 text-center">
        <Icon name="CloudSun" size={24} className="text-primary mx-auto mb-3" />
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
          Stay Updated
        </h3>
        <p className="text-muted-foreground mb-4">
          We'll send weather updates closer to the wedding date and have backup plans ready for any conditions.
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
          <Icon name="Bell" size={16} className="mr-2 inline" />
          Get Weather Alerts
        </button>
      </div> */}
    </section>
  );
};

export default WeatherAndSeasonInfo;