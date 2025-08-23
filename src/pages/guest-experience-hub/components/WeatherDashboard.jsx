import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WeatherDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentWeather = {
    temperature: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    uvIndex: 6,
    feelsLike: 75,
    icon: "CloudSun"
  };

  const forecast = [
    {
      date: "Today",
      day: "Friday",
      high: 75,
      low: 62,
      condition: "Partly Cloudy",
      icon: "CloudSun",
      precipitation: 10,
      wind: 8
    },
    {
      date: "Tomorrow",
      day: "Saturday",
      high: 78,
      low: 65,
      condition: "Sunny",
      icon: "Sun",
      precipitation: 0,
      wind: 6
    },
    {
      date: "Wedding Day",
      day: "Sunday",
      high: 82,
      low: 68,
      condition: "Perfect",
      icon: "Sun",
      precipitation: 0,
      wind: 5,
      isWeddingDay: true
    },
    {
      date: "Monday",
      day: "Monday",
      high: 79,
      low: 66,
      condition: "Partly Cloudy",
      icon: "CloudSun",
      precipitation: 15,
      wind: 7
    },
    {
      date: "Tuesday",
      day: "Tuesday",
      high: 76,
      low: 63,
      condition: "Light Rain",
      icon: "CloudRain",
      precipitation: 60,
      wind: 12
    }
  ];

  const packingRecommendations = {
    clothing: [
      { item: "Light jacket or cardigan", reason: "Evening temperatures may drop" },
      { item: "Comfortable walking shoes", reason: "Outdoor ceremony and reception" },
      { item: "Sunglasses", reason: "Bright sunny conditions expected" },
      { item: "Light, breathable fabrics", reason: "Warm daytime temperatures" }
    ],
    accessories: [
      { item: "Umbrella (optional)", reason: "Low chance of rain" },
      { item: "Sunscreen SPF 30+", reason: "High UV index expected" },
      { item: "Hat or fascinator", reason: "Outdoor ceremony protection" },
      { item: "Portable fan", reason: "Warm afternoon temperatures" }
    ]
  };

  const getWeatherIcon = (iconName) => {
    const iconMap = {
      "Sun": "Sun",
      "CloudSun": "CloudSun",
      "CloudRain": "CloudRain",
      "Cloud": "Cloud"
    };
    return iconMap?.[iconName] || "Sun";
  };

  const getTemperatureColor = (temp) => {
    if (temp >= 80) return "text-error";
    if (temp >= 70) return "text-warning";
    if (temp >= 60) return "text-success";
    return "text-primary";
  };

  const getPrecipitationColor = (precip) => {
    if (precip >= 50) return "text-error";
    if (precip >= 20) return "text-warning";
    return "text-success";
  };

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
            Weather Dashboard
          </h2>
          <p className="text-muted-foreground">
            Stay prepared with weather updates and packing suggestions
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Last updated</div>
          <div className="text-sm font-medium">2 hours ago</div>
        </div>
      </div>
      {/* Current Weather */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 mb-6 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Current Weather</h3>
            <p className="text-sm text-muted-foreground">Wedding venue area</p>
          </div>
          <Icon name={getWeatherIcon(currentWeather?.icon)} size={48} className="text-primary" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className={`text-3xl font-bold ${getTemperatureColor(currentWeather?.temperature)} mb-1`}>
              {currentWeather?.temperature}°F
            </div>
            <div className="text-xs text-muted-foreground">Temperature</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground mb-1">
              {currentWeather?.feelsLike}°F
            </div>
            <div className="text-xs text-muted-foreground">Feels like</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground mb-1">
              {currentWeather?.humidity}%
            </div>
            <div className="text-xs text-muted-foreground">Humidity</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground mb-1">
              {currentWeather?.windSpeed} mph
            </div>
            <div className="text-xs text-muted-foreground">Wind</div>
          </div>
        </div>
      </div>
      {/* 5-Day Forecast */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {forecast?.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`p-4 rounded-xl border transition-all duration-200 text-center ${
                day?.isWeddingDay
                  ? 'bg-accent/10 border-accent text-accent hover:bg-accent/20'
                  : selectedDay === index
                  ? 'bg-primary/10 border-primary text-primary' :'bg-background border-border text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="text-sm font-medium mb-2">
                {day?.date}
                {day?.isWeddingDay && (
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Icon name="Heart" size={12} className="text-accent" />
                    <span className="text-xs">Wedding Day</span>
                  </div>
                )}
              </div>
              <Icon name={getWeatherIcon(day?.icon)} size={24} className="mx-auto mb-2" />
              <div className="text-xs text-muted-foreground mb-1">{day?.condition}</div>
              <div className="flex items-center justify-center gap-1 text-sm">
                <span className="font-semibold">{day?.high}°</span>
                <span className="text-muted-foreground">{day?.low}°</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Selected Day Details */}
      <div className="bg-background rounded-xl p-6 border border-border mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {forecast?.[selectedDay]?.date} Details
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Thermometer" size={20} className="text-primary" />
            <div>
              <div className="text-sm font-medium">Temperature</div>
              <div className="text-xs text-muted-foreground">
                High {forecast?.[selectedDay]?.high}° / Low {forecast?.[selectedDay]?.low}°
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Droplets" size={20} className="text-primary" />
            <div>
              <div className="text-sm font-medium">Precipitation</div>
              <div className={`text-xs ${getPrecipitationColor(forecast?.[selectedDay]?.precipitation)}`}>
                {forecast?.[selectedDay]?.precipitation}% chance
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Wind" size={20} className="text-primary" />
            <div>
              <div className="text-sm font-medium">Wind Speed</div>
              <div className="text-xs text-muted-foreground">
                {forecast?.[selectedDay]?.wind} mph
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Packing Recommendations */}
      <div className="bg-background rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Packing Recommendations
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <Icon name="Shirt" size={16} className="text-primary" />
              Clothing Essentials
            </h4>
            <div className="space-y-3">
              {packingRecommendations?.clothing?.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{item?.item}</div>
                    <div className="text-xs text-muted-foreground">{item?.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <Icon name="Briefcase" size={16} className="text-primary" />
              Accessories & Extras
            </h4>
            <div className="space-y-3">
              {packingRecommendations?.accessories?.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{item?.item}</div>
                    <div className="text-xs text-muted-foreground">{item?.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;