"use client";

import Image from "next/image";

interface ExperienceCardProps {
    color: string;
    title: string;
    description: string;
    gif?: string;
}

export function ExperienceCard({
                                   color,
                                   title,
                                   description,
                                   gif,
                               }: ExperienceCardProps) {
    return (
        <div
            className={`${color} text-black h-full w-full`}
        >
            {gif && (
                <div className="relative h-[472px] w-full">
                    <Image src={gif} alt={title} fill className="object-contain"/>
                </div>
            )}
            <h3 className="text-4xl font-bold mb-2 h-20">{title}</h3>
            <p className="text-xl opacity-90 mb-8 mt-4">{description}</p>
        </div>
    );
}
