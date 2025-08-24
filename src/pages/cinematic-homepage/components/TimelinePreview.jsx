import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TimelinePreview = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      title: "First Meeting",
      date: "March 2019",
      description:
        "A chance encounter at the local coffee shop that changed everything",
      image:
        "https://images.unsplash.com/photo-1597427681188-3ef80f2631ff?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Coffee",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      title: "First Date",
      date: "April 2019",
      description:
        "Dinner under the stars at the pier, where we talked until sunrise",
      image:
        "https://images.unsplash.com/photo-1597685046918-cb86c4d730d5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Star",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Moving In",
      date: "January 2021",
      description: "Our first home together, filled with laughter and love",
      image:
        "https://images.squarespace-cdn.com/content/v1/547fac52e4b0e3ea019574f0/1597090102055-Q47ABP4ALTVFL079UCBH/couple-holding-hands-at-wedding.jpg",
      icon: "Home",
      color: "from-blue-400 to-purple-500",
    },
    {
      id: 4,
      title: "The Proposal",
      date: "December 2022",
      description:
        "On the beach where we had our first kiss, under a blanket of stars",
      image:
        "https://images.unsplash.com/photo-1597427681159-1bcf700dbf28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Heart",
      color: "from-primary to-accent",
    },
    {
      id: 5,
      title: "Wedding Planning",
      date: "2023 - 2024",
      description:
        "Creating our dream wedding with every detail filled with love",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Calendar",
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section className="py-20 overflow-hidden overflow-x-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="px-6 mx-auto overflow-y-hidden max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold font-heading md:text-5xl text-foreground">
            Our Love Story Timeline
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Every love story is beautiful, but ours is our favorite. Discover
            the moments that brought us together.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Timeline Line */}
          <div className="absolute w-1 h-full transform -translate-x-1/2 rounded-full pointer-events-none left-1/2 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <div className="space-y-24">
            {milestones?.map((milestone, index) => (
              <motion.div
                key={milestone?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredMilestone(milestone?.id)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <motion.div
                    className="p-6 overflow-hidden transition-all duration-300 cursor-pointer bg-card rounded-2xl romantic-shadow hover:shadow-lg"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-3 space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${milestone?.color} flex items-center justify-center`}
                      >
                        <Icon name={milestone?.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-heading text-foreground">
                          {milestone?.title}
                        </h3>
                        <p className="font-medium text-primary">
                          {milestone?.date}
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {milestone?.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone?.color} border-4 border-background shadow-lg`}
                    animate={{
                      scale: hoveredMilestone === milestone?.id ? 1.3 : 1,
                      boxShadow:
                        hoveredMilestone === milestone?.id
                          ? "0 0 20px rgba(212, 165, 116, 0.5)"
                          : "0 4px 16px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Image */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] group max-w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={milestone?.image}
                      alt={milestone?.title}
                      className="object-cover w-full h-full max-w-full"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="space-y-8 lg:hidden">
          {milestones?.map((milestone, index) => (
            <motion.div
              key={milestone?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                {/* Timeline Node */}
                <div className="flex-shrink-0 mt-2">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone?.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon name={milestone?.icon} size={20} color="white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="p-4 mb-4 overflow-hidden bg-card rounded-xl romantic-shadow">
                    <h3 className="mb-1 text-lg font-semibold font-heading text-foreground">
                      {milestone?.title}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-primary">
                      {milestone?.date}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {milestone?.description}
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] max-w-full">
                    <Image
                      src={milestone?.image}
                      alt={milestone?.title}
                      className="object-cover w-full h-full max-w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < milestones?.length - 1 && (
                <div className="absolute w-px h-16 pointer-events-none left-6 top-12 bg-gradient-to-b from-primary to-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelinePreview;
