import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  description,
  comingSoon = false,
}) => {
  return (
    <div className="relative flex-grow-0 basis-full sm:basis-[350px] md:basis-[450px] lg:basis-[500px] mb-6 group">
      {/* Shadow Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[25px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none rounded-lg"></div>
      {/* Coming Soon Ribbon */}
      {comingSoon && (
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-bold z-20">
          Coming Soon
        </div>
      )}
      {/* Card Content */}
      <div className="relative rounded-lg bg-gradient-to-br from-[#071D2B] to-[#2B4C6F] text-white transform transition-transform duration-300 group-hover:scale-[1.02] h-full flex flex-col">
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-40 sm:h-48 object-cover"
        />
        <div className="p-4 flex-grow">
          <h3 className="text-md sm:text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
