import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import weddingConfig from '../../../config/wedding.json';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date(weddingConfig?.date?.weddingDateISO);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate?.getTime() - now?.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft?.days, icon: 'Calendar' },
    { label: 'Hours', value: timeLeft?.hours, icon: 'Clock' },
    { label: 'Minutes', value: timeLeft?.minutes, icon: 'Timer' },
    { label: 'Seconds', value: timeLeft?.seconds, icon: 'Zap' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 card-shadow overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <Icon name="Heart" size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-5 sparkle-float">
        <Icon name="Sparkles" size={80} className="text-accent" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Until We Say "I Do"
          </h2>
          <p className="text-muted-foreground font-medium">
            {weddingConfig?.date?.display}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits?.map((unit, index) => (
            <div
              key={unit?.label}
              className={`bg-background/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-border/50 countdown-box`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={unit?.icon} size={24} className="text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                {unit?.value?.toString()?.padStart(2, '0')}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {unit?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
            <Icon name="Heart" size={16} className="animate-pulse" />
            <span className="font-medium text-sm">
              The countdown to forever begins now
            </span>
            <Icon name="Heart" size={16} className="animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
