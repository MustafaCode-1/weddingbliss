import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WeatherForecast = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [currentWeather, setCurrentWeather] = useState(null);

  const weddingDate = new Date('2025-06-15');
  
  const weatherForecast = [
    {
      date: "June 13, 2025",
      day: "Friday",
      temp: { high: 78, low: 62 },
      condition: "Partly Cloudy",
      icon: "CloudSun",
      humidity: 45,
      wind: "8 mph",
      precipitation: 10,
      description: "Perfect weather for rehearsal dinner"
    },
    {
      date: "June 14, 2025",
      day: "Saturday",
      temp: { high: 82, low: 65 },
      condition: "Sunny",
      icon: "Sun",
      humidity: 40,
      wind: "6 mph",
      precipitation: 5,
      description: "Beautiful day for pre-wedding activities"
    },
    {
      date: "June 15, 2025",
      day: "Sunday - Wedding Day",
      temp: { high: 80, low: 64 },
      condition: "Partly Sunny",
      icon: "CloudSun",
      humidity: 42,
      wind: "7 mph",
      precipitation: 15,
      description: "Perfect wedding weather!",
      isWeddingDay: true
    },
    {
      date: "June 16, 2025",
      day: "Monday",
      temp: { high: 75, low: 60 },
      condition: "Mostly Sunny",
      icon: "Sun",
      humidity: 48,
      wind: "9 mph",
      precipitation: 20,
      description: "Great for post-wedding brunch"
    }
  ];

  const attireRecommendations = {
    ceremony: {
      title: "Ceremony Attire",
      time: "3:00 PM - 4:00 PM",
      recommendations: [
        "Light fabrics recommended for outdoor ceremony",
        "Sunglasses for bright afternoon sun",
        "Comfortable shoes for garden walking",
        "Light jacket for air-conditioned spaces"
      ]
    },
    reception: {
      title: "Reception Attire",
      time: "5:00 PM - 10:00 PM",
      recommendations: [
        "Evening temperatures will be comfortable",
        "Light wrap or shawl for later in the evening",
        "Dancing shoes recommended",
        "No need for heavy coats"
      ]
    }
  };

  useEffect(() => {
    // Simulate current weather update
    setCurrentWeather({
      location: "Rosewood Manor, CA",
      temp: 72,
      condition: "Sunny",
      icon: "Sun",
      lastUpdated: "2 hours ago"
    });
  }, []);

  const getWeatherIcon = (iconName) => {
    const iconMap = {
      "Sun": "Sun",
      "CloudSun": "CloudSun",
      "Cloud": "Cloud",
      "CloudRain": "CloudRain"
    };
    return iconMap?.[iconName] || "Sun";
  };

  const getConditionColor = (condition) => {
    const colorMap = {
      "Sunny": "text-yellow-500",
      "Partly Sunny": "text-yellow-400",
      "Partly Cloudy": "text-blue-400",
      "Cloudy": "text-gray-400",
      "Rainy": "text-blue-600"
    };
    return colorMap?.[condition] || "text-gray-400";
  };

  return (
    <div className="space-y-8">
      {/* Current Weather */}
      {currentWeather && (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                Current Weather
              </h3>
              <p className="text-muted-foreground text-sm">
                {currentWeather?.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground">
                {currentWeather?.temp}°F
              </div>
              <div className="text-sm text-muted-foreground">
                Updated {currentWeather?.lastUpdated}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Icon name={getWeatherIcon(currentWeather?.icon)} size={32} className="text-yellow-500" />
            </div>
            <div>
              <div className="font-semibold text-foreground">
                {currentWeather?.condition}
              </div>
              <div className="text-sm text-muted-foreground">
                Perfect weather for wedding preparations!
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Weather Forecast */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Wedding Weekend Forecast
          </h3>
          <p className="text-muted-foreground">
            Plan your perfect wedding weekend attire
          </p>
        </div>

        {/* Forecast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {weatherForecast?.map((day, index) => (
            <div
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`relative p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                day?.isWeddingDay
                  ? 'bg-primary/5 border-primary/30 ring-2 ring-primary/20'
                  : selectedDay === index
                  ? 'bg-accent/5 border-accent/30 card-shadow'
                  : 'bg-card border-border hover:border-primary/20 hover:card-shadow'
              }`}
            >
              {day?.isWeddingDay && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={12} className="text-white" />
                </div>
              )}
              
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  {day?.day}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {day?.date}
                </div>
                
                <div className="w-12 h-12 mx-auto mb-3 bg-muted/20 rounded-full flex items-center justify-center">
                  <Icon 
                    name={getWeatherIcon(day?.icon)} 
                    size={24} 
                    className={getConditionColor(day?.condition)}
                  />
                </div>
                
                <div className="text-lg font-bold text-foreground mb-1">
                  {day?.temp?.high}°
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {day?.temp?.low}°
                </div>
                <div className="text-xs text-muted-foreground">
                  {day?.condition}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-heading text-lg font-semibold text-foreground">
              {weatherForecast?.[selectedDay]?.day} Details
            </h4>
            <div className="flex items-center space-x-2">
              <Icon name={getWeatherIcon(weatherForecast?.[selectedDay]?.icon)} size={20} className={getConditionColor(weatherForecast?.[selectedDay]?.condition)} />
              <span className="text-sm font-medium text-foreground">
                {weatherForecast?.[selectedDay]?.condition}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <Icon name="Thermometer" size={20} className="text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Temperature</div>
              <div className="font-semibold text-foreground">
                {weatherForecast?.[selectedDay]?.temp?.high}° / {weatherForecast?.[selectedDay]?.temp?.low}°
              </div>
            </div>
            
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <Icon name="Droplets" size={20} className="text-blue-500 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Humidity</div>
              <div className="font-semibold text-foreground">
                {weatherForecast?.[selectedDay]?.humidity}%
              </div>
            </div>
            
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <Icon name="Wind" size={20} className="text-green-500 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Wind</div>
              <div className="font-semibold text-foreground">
                {weatherForecast?.[selectedDay]?.wind}
              </div>
            </div>
            
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <Icon name="CloudRain" size={20} className="text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Rain Chance</div>
              <div className="font-semibold text-foreground">
                {weatherForecast?.[selectedDay]?.precipitation}%
              </div>
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-primary mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-1">Weather Note</h5>
                <p className="text-sm text-muted-foreground">
                  {weatherForecast?.[selectedDay]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Attire Recommendations */}
      <div className="bg-background rounded-2xl p-6 md:p-8 card-shadow">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
          Attire Recommendations
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(attireRecommendations)?.map(([key, section]) => (
            <div key={key} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Shirt" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {section?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {section?.time}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {section?.recommendations?.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {rec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;