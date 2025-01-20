import {mynerve} from "@/utils/fonts";
import Image from "next/image";
import WarningStripes from "../warning-stripes";

export default function WelcomeSection() {
    return (
        <section className="bg-[#7D4546] flex flex-col">
            {/* Welcome Content */}
            <div className="flex flex-col items-center justify-center pt-24 md:py-24 px-4 relative">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span
                className="inline-block relative text-black"
                style={{
                    backgroundImage: 'url("/welcome-bg.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
              Welcome
            </span>
                        to Terrum
                    </h2>
                    <p className="text-white text-xl md:text-2xl leading-relaxed font-semibold">
                        Terrum is a community platform uniting climate activists and
                        change-makers in a gamified journey to combat the climate crisis.
                        Share your initiatives, inspire others, and take meaningful climate
                        action together.
                    </p>
                </div>

                {/* Decorative blobs */}
                <div className="relative md:flex justify-between items-center w-screen md:mt-12 z-10">
                    <div className="flex h-[233px] gap-0 md:gap-1 w-full">
                        <Image
                            src="/group.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-1/3 md:w-1/5 order-2 md:order-none"
                        />
                        <Image
                            src="/group-1.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-1/3 md:w-1/5 hidden md:block"
                        />
                        <Image
                            src="/group-2.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-1/3 md:w-1/5 order-1 md:order-none"
                        />
                        <Image
                            src="/group-3.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-1/3 md:w-1/5 order-3 md:order-none"
                        />
                        <Image
                            src="/group-4.svg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-1/3 md:w-1/5 hidden md:block"
                        />
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center h-[60vh] md:h-[80vh] w-full -mt-28 md:-mt-56">
                <Image
                    src="/grass-reading.jpg"
                    alt="Person relaxing on grass"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative flex flex-col text-center p-4 z-10 mb-36 md:mb-12">
                    <p
                        className={`text-[#FFB703] font-bold text-3xl italic ${mynerve.className}`}
                    >
                        Sorry,
                    </p>
                    <h2 className="text-[#FFB703] text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mt-16">
                        Terrum is not another
                        <br/>
                        book reading community,
                    </h2>
                </div>
            </div>
            <div className="relative w-full">
                {/* Warning stripes - top */}
                <WarningStripes/>

                {/* Main content */}
                <div
                    className="relative bg-[#435D41] px-6 py-12 min-h-[400px] flex flex-col items-center justify-center text-center">
                    {/* Text content */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#FFB703] mb-8">
                        Terrum is about
                        <br/>
                        sustainability &<br/>
                        environment action.
                    </h1>

                    {/* Jackie Shroff image and Join button */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* Character image */}
                        <div className="block md:absolute md:bottom-0 md:left-8 order-1 md:order-none">
                            <Image
                                src="/jackie-shroff.png"
                                alt="Sustainability advocate"
                                width={300} // Mobile size
                                height={300}
                                className="md:w-96 md:h-auto w-72 h-auto" // Responsive size
                                priority
                            />
                        </div>

                        {/* Join button */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://chat.whatsapp.com/FnDMWzV9tcaBz0sVmzh0An"
                            className="order-2 md:order-none md:mt-8 px-8 py-3 bg-[#FFB703] hover:bg-yellow-500 text-black font-bold rounded-full transition-colors"
                        >
                            Join Now
                        </a>
                    </div>

                    <div className="mt-5 text-white text-center">
                        <Image
                            src="/arrow-up.svg"
                            width={62}
                            height={77}
                            alt="Arrow up"
                            className="mx-auto mb-2"
                        />
                        <p className={`text-2xl font-bold ${mynerve.className}`}>
                            #PedhLagaoBhidu
                        </p>
                    </div>
                </div>

                {/* Leaf image */}
                <div className="absolute top-12 right-0">
                    <img src="/leaf-bidu.png" alt="Green leaf" className="w-20 md:w-64"/>
                </div>

                {/* Warning stripes - bottom */}
                <WarningStripes/>
            </div>
        </section>
    );
}
