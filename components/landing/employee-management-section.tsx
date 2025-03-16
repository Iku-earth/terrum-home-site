import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function EmployeeEngagementSection() {
    return (
        <div className="bg-[#435D41]" id="employee-engagement-section">
            <div className="bg-[#7D4546] rounded-tl-[30px] rounded-tr-[30px]">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8">
                            <div className="relative">
                                <h1 className="text-5xl mt-16 md:mt-0 md:text-6xl lg:text-7xl font-bold text-white">
                                    employee engagement
                                </h1>
                                <Image
                                    src="/employee-engagement-leaf-stem.svg"
                                    alt="Decorative leaf"
                                    width={146}
                                    height={163}
                                    className="hidden md:block absolute -top-8 right-0"
                                />
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                                Dive into resources, guides, and tips to adopt eco-conscious
                                habits in your daily life. From composting and energy
                                conservation to mindful consumption, learn how small actions can
                                lead to a big impact.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    data-umami-event="List of Activities"
                                    data-umami-event-section="Employee Management"
                                    href="https://drive.google.com/file/d/1YudqlmL-e1SrlxxO54XTdMd5qGDQ_MxN/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-black rounded-full px-8 py-6 text-lg font-bold">
                                        List of Activities
                                    </Button>
                                </a>
                                <a
                                    data-umami-event="Go to footer"
                                    data-umami-event-section="Employee Management"
                                    data-umami-event-button="Event Inquiry"
                                    href="#landing-footer"
                                >
                                    <Button
                                        className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-black rounded-full px-8 py-6 text-lg font-bold">
                                        Event Inquiry
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] lg:aspect-square">
                            <Image
                                src="/landing/employee-engagement.png"
                                alt="People engaged in outdoor activities"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Logo showcase */}
                <div className="bg-[#F5F5F5]/20 pb-10 hidden">
                    <p className="pt-4 text-center text-white text-2xl">
                        loved by and worked with
                    </p>
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
