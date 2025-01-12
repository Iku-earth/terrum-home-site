"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExperienceCard } from "../experience-card";

interface ExperienceData {
  color: string;
  title: string;
  description: string;
  gif?: string;
}

const experiences: ExperienceData[] = [
  {
    color: "bg-[#BF3005]",
    title: "card games",
    description: "A fun-filled evening of card games and socialising.",
    gif: "/cards.gif",
  },
  {
    color: "bg-[#F9D05E]",
    title: "dance for a cause",
    description:
      "Participate in a dance-a-thon to raise funds for a worthy cause.",
    gif: "/dance.gif",
  },
  {
    color: "bg-[#C2D9E8]",
    title: "low waste travel experience",
    description:
      "Learn tips and tricks for sustainable travel and explore eco-friendly stay.",
    gif: "/low-waste.gif",
  },
];

export function ExperienceCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="w-full max-w-4xl mx-auto sm:block md:hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {experiences.map((experience, index) => (
            <CarouselItem key={index}>
              <ExperienceCard {...experience} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
