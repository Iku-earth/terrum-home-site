import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    image: "/nature_walk.jpg",
    title: "Nature Walks",
    description:
      "Explore the beauty of Bengaluru's natural surroundings and learn about local flora and fauna.",
  },
  {
    image: "/Reading_community.jpg",
    title: "Themed Meet-ups",
    description:
      "Connect with like-minded individuals and participate in themed discussions and activities.",
  },
  {
    image: "/WeekendsInNature.jpg",
    title: "Weekends in Nature",
    description:
      "Escape the city's hustle and bustle and reconnect with nature at Cubbon Park. Every Sunday, join a vibrant community for a relaxing and rejuvenating experience.",
    comingSoon: false
  }
];

const EventGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((event, index) => (
        <EventCard
          key={index}
          image={event.image}
          title={event.title}
          description={event.description}
          comingSoon={event.comingSoon}
        />
      ))}
    </div>
  );
};

export default EventGrid;
