import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function OpenSourceDatabaseSection() {
    return (
        <div className="bg-[#435D41]">
            <div className="bg-[#7D4546] rounded-tl-[30px] rounded-tr-[30px]">
                <div className="container px-4 py-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Text Section */}
                        <div className="space-y-8">
                            <div className="relative">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                    open source database
                                </h1>
                                <Image
                                    src="/open-source-database-flower.svg"
                                    alt="Decorative leaf"
                                    width={88}
                                    height={127}
                                    className="absolute -top-0 right-0 max-w-[60px] max-h-[90px] md:max-w-[88px] md:max-h-[127px]"
                                />
                            </div>
                            <div className="text-white/90 text-lg leading-relaxed max-w-xl">
                                Explore our database of non-profits, sustainable businesses, and
                                their products.
                                <ul className="list-disc list-inside">
                                    <li>
                                        Find opportunities to volunteer, collaborate, or support
                                        these organisations.
                                    </li>
                                    <li>
                                        Explore the offline themed communities near you that you can
                                        participate in
                                    </li>
                                    <li>Contribute to volunteer to the database</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://resources.terrum.in/" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-black rounded-full px-8 py-6 text-lg font-bold">
                                        Explore
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative aspect-[4/3] lg:aspect-square">
                            <Image
                                src="/open-source-database-vector.png"
                                alt="People engaged in outdoor activities"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
