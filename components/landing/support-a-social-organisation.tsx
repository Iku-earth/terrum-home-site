import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function SupportASocialOrganisationSection() {
    return (
        <div className="bg-[#7D4546]">
            <div className="bg-[#435D41] rounded-tl-[30px] rounded-tr-[30px]">
                <div className="container px-4 py-24 mx-auto">
                    <div className="flex flex-row lg:gap-8 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-start">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                    <span>support a social</span>
                                    <br/>
                                    <span className="block">organisation</span>
                                </h1>
                                <Image
                                    src="/support-a-social-organisation-leaf-stem.svg"
                                    alt="Decorative leaf"
                                    width={146}
                                    height={163}
                                    className="flex-shrink-0 mt-8 hidden md:block"
                                />
                            </div>
                            <div className="text-white/90 text-lg leading-relaxed max-w-xl">
                                Become an Extended Team Member:
                                <br/>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Volunteer with a non-profit, startup, or business to gain
                                        valuable experience and make a difference.
                                    </li>
                                    <li>
                                        Become an extended team member and contribute your skills to
                                        help them grow. We&apos;re looking for individuals with
                                        expertise in social media, content creation, event
                                        management, volunteer management, and event curation.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    data-umami-event="Sign up to volunteer"
                                    data-umami-event-section="Support a social organisation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://forms.gle/YZ27dmZtWvg6ykpU9"
                                >
                                    <Button
                                        className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-black rounded-full px-8 py-6 text-lg font-bold">
                                        Sign up to volunteer
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] lg:aspect-square">
                            <Image
                                src="/support-a-social-organisation.png?height=800&width=800"
                                alt="People engaged in outdoor activities"
                                height={400}
                                width={370}
                                className="hidden md:block object-contain h-[400px] w-[370px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Logo showcase */}
                <div className="bg-[#F5F5F5]/20 pb-10 hidden">
                    <p className="pt-4 text-center text-white text-2xl">featured in</p>
                    <div className="mt-4 grid grid-cols-4 md:grid-cols-8 gap-4 items-center justify-center">
                        {Array.from({length: 8}).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square bg-white/90 rounded-full"
                                aria-label={`Partner logo ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
