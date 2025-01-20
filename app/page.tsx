import Image from "next/image";
import {Metadata} from "next";
import WelcomeSection from "@/components/landing/welcome-section";
import {mynerve} from "@/utils/fonts";
import OurFocusSection from "@/components/landing/our-focus-section";
import EventsPage from "@/components/landing/events-and-experiences-section";
import EmployeeManagamentSection from "@/components/landing/employee-management-section";
import SupportASocialOrganisationSection from "@/components/landing/support-a-social-organisation";
import OpenSourceDatabaseSection from "@/components/landing/open-source-database-section";
import LandingFooter from "@/components/footer";
import LandingHeader from "@/components/landing/header";

export const metadata: Metadata = {
    title: "Terrum",
    description:
        "Terrum is a community-driven platform empowering individuals to take meaningful climate action through engaging events, volunteer opportunities, and inspiring stories. Join us on a journey toward a sustainable future.",
    keywords: [
        "Climate action",
        "Sustainability",
        "Community",
        "Environmental activism",
        "Volunteering",
        "Nature walks",
        "Eco-friendly initiatives",
        "Abhishek AN",
        "Renuka Pooja",
    ],
    icons: {
        icon: "/terrum_circle_64x64.ico",
        apple: "/terrum_circle_64x64.png",
    },
    openGraph: {
        title: "Join Terrum – One Earth, One Community",
        locale: "en_US",
        description:
            "Connect with change-makers and activists at Terrum to combat climate change together. Share your journey, attend events, and inspire action.",
        url: "https://terrum.in",
        type: "website",
        images: [
            {
                url: "https://terrum.in/og-image.png",
                width: 1200,
                height: 630,
                alt: "Terrum Banner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@terrum_in",
        title: "Terrum – Join the Movement for Climate Action",
        description:
            "Connect with passionate individuals for impactful climate action. Terrum offers volunteer opportunities, community events, and resources for sustainable living.",
        images: [
            "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
        ],
    },
};

export default function Home() {
    return (
        <>
            <div className="min-h-screen relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Hands joined together in unity"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{backgroundColor: "#3F3E3E", opacity: "0.5"}}
                    />
                </div>

                {/* Navigation */}
                <LandingHeader/>

                {/* Hero Content */}
                <main
                    className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight">
                        empowering community,
                        <br/>
                        fostering sustainability.
                    </h1>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://chat.whatsapp.com/FnDMWzV9tcaBz0sVmzh0An"
                        className="mt-8 px-8 py-3 bg-[#FFB703] hover:bg-yellow-500 text-black font-bold rounded-full transition-colors"
                    >
                        JOIN THE COMMUNITY
                    </a>
                    <div className="mt-16 text-white text-center">
                        <Image
                            src="/arrow-up.svg"
                            width={62}
                            height={77}
                            alt="Arrow up"
                            className="mx-auto mb-2"
                        />
                        <p className={`text-2xl font-bold ${mynerve.className}`}>
                            #WeekendInNature
                        </p>
                    </div>
                </main>
            </div>
            <WelcomeSection/>
            <OurFocusSection/>
            <EventsPage/>
            <EmployeeManagamentSection/>
            <SupportASocialOrganisationSection/>
            <OpenSourceDatabaseSection/>
            <LandingFooter/>
        </>
    );
}
