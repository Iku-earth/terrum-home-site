import Image from "next/image";
import {VectorUnderline} from "@/components/vector-underline";

export default function OurFocusSection() {
    return (
        <div className="bg-[#8B4F52]">
            <div className="text-white px-4 py-16 md:px-8">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-20 text-center">
          <span
              className="inline-block relative md:text-5xl text-4xl font-bold text-black px-8 py-2"
              style={{
                  backgroundImage: 'url("/welcome-bg.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
              }}
          >
            Our Focus
          </span>
                </div>

                {/* Theme Based Communities Section */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-32">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4">
                            theme based local communities
                            <VectorUnderline/>
                        </h2>
                        <p className="text-lg opacity-90">
                            Join a network of individuals who care deeply about
                            sustainability, social causes, and making a difference. Whether
                            you&apos;re passionate about reducing waste, renewable energy, or
                            community building, this is your space to share ideas,
                            collaborate, and grow.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/theme-based-local-communities.png"
                            alt="Community members reading together"
                            width={500}
                            height={400}
                            className="w-full"
                        />
                    </div>
                </section>

                {/* Events & Experience Section */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-32">
                    <div className="relative order-2 md:order-1">
                        <Image
                            src="/events-and-experiences.png"
                            alt="People enjoying outdoor activities"
                            width={500}
                            height={400}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4">
                            events & experience
                            <VectorUnderline/>
                        </h2>
                        <p className="text-lg opacity-90">
                            Explore workshops, hands-on activities, and immersive experiences
                            that bring people together. From nature walks and up cycling
                            workshops to skill-sharing sessions, every event is an opportunity
                            to learn, create, and connect.
                        </p>
                    </div>
                </section>

                {/* Support for Social Organizations Section */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-32">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4">
                            support for social organizations
                            <VectorUnderline/>
                        </h2>
                        <p className="text-lg opacity-90">
                            Make a meaningful contribution by offering your expertise and time
                            to social organizations striving to create change. Help amplify
                            their mission and leave a lasting impact through volunteering,
                            partnerships, or creative collaborations.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/support-for-social-organisations.png"
                            alt="Hands joined together in unity"
                            width={500}
                            height={400}
                            className="w-full"
                        />
                    </div>
                </section>

                {/* Sustainable Living Section */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative order-2 md:order-1">
                        <Image
                            src="/sustainable-living.png"
                            alt="Hands holding a fern leaf"
                            width={500}
                            height={400}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-4">
                            sustainable living
                            <VectorUnderline/>
                        </h2>
                        <p className="text-lg opacity-90">
                            Dive into resources, guides, and tips to adopt eco-conscious
                            habits in your daily life. From composting and energy conservation
                            to mindful consumption, learn how small actions can lead to a big
                            impact.
                        </p>
                    </div>
                </section>
            </div>

            {/* Striped Warning Banner */}
            <div
                className="h-4 w-full bg-gradient-to-r from-white from-50% to-[#1AFF44] to-50% bg-[length:40px_40px]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, white 0px, white 20px, #1AFF44 20px, #1AFF44 40px)",
                }}
            />
        </div>
    );
}
