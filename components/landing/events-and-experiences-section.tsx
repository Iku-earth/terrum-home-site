"use client";

import Image from "next/image";
import {ExperienceCard} from "@/components/experience-card";
import Link from "next/link";
import {mynerve} from "@/utils/fonts";
import {ExperienceCarousel} from "./experience-carousel";

export default function EventsPage() {
    const activities = [
        {
            title: "nature walks",
            image: "/nature-walks.png",
        },
        {
            title: "themed meetups",
            image: "/themed-meetups.png",
        },
        {
            title: "weekends in nature",
            image: "/weekends-in-nature.png",
        },
        {
            title: "community activities",
            image: "/community-activities.png",
        },
        {
            title: "relaxation",
            image: "/relaxation.png",
        },
        {
            title: "learning opportunities",
            image: "/learning-opportunities.png",
        },
    ];

    return (
        <div className="bg-[#435D41] text-white" id="events-and-experiences-section">
            {/* Sticky header container */}
            <div className="sticky top-0 z-50 bg-[#435D41] p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    events and experiences
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {activities.map((activity, index) => (
                        <div key={index} className="relative group overflow-hidden">
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                width={626}
                                height={431}
                                className="w-full h-[431px] transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    {activity.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Now Banner */}
                <div className="w-full bg-[#F93EBF] p-2 overflow-hidden">
                    <div className="flex whitespace-nowrap">
            <span className="text-black">
              ♣ Join Now ✶ Join Now ✿ Join Now ♠ Join Now ♣ Join Now ✶ Join Now
              ✿ Join Now ♠ Join Now ♣ Join Now ✶ Join Now ✿ Join Now ♠ Join Now
              ♣ Join Now ✶ Join Now ✿ Join Now ♠ Join Now
            </span>
                    </div>
                </div>

                {/* Yellow Strip */}
                <div className="h-2 bg-[#EFFB3F]"></div>

                {/* More Activities Section */}
                <div className="text-center mt-12 mb-12">
                    <h2 className="text-3xl md:text-4xl italic mb-8">
                        ondu nimiṣha, we have more! 😎
                    </h2>

                    <ExperienceCarousel/>

                    <div className="w-full md:grid md:grid-cols-3 hidden">
                        <ExperienceCard
                            color="bg-[#BF3005]"
                            title="card games"
                            description="A fun-filled evening of card games and socialising."
                            gif="/cards.gif"
                        />
                        <ExperienceCard
                            color="bg-[#F9D05E]"
                            title="dance for a cause"
                            description="Participate in a dance-a-thon to raise funds for a worthy cause."
                            gif="/dance.gif"
                        />
                        <ExperienceCard
                            color="bg-[#C2D9E8]"
                            title="low waste travel experience"
                            description="Learn tips and tricks for sustainable travel and explore eco-friendly stay."
                            gif="/low-waste.gif"
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link
                        href="/events"
                        className="px-8 py-3 bg-[#FFB703] hover:bg-yellow-500 text-black font-semibold rounded-full transition-colors inline-flex items-center justify-center text-lg "
                    >
                        View Events Calendar
                    </Link>
                    <Image
                        src="/arrow-up.svg"
                        width={62}
                        height={77}
                        alt="Arrow up"
                        className="mx-auto mb-2 mt-4"
                    />
                    <p className={`mt-3 mb-8 text-2xl ${mynerve.className}`}>
                        #Letsgooo!{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
