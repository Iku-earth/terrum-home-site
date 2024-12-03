import EventGrid from "@/components/landing/events-and-experiences/EventGrid";
import VolunteerWithUsSection from "@/components/volunteer-with-us";
import { Metadata } from "next";

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
    <div className="w-full h-max flex flex-col overflow-hidden backdrop-blur-3xl">
      <div className="mt-36">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-slate-200 font-extrabold">
          One Earth, One Community<br></br>
          <p className="h-fit text-3xl font-sans md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#0095D8] to-[#6D8DCB] py-2">
            Taking Action for Climate Change
          </p>
        </h1>
        <p className="text-center lg:w-3/5 mx-auto text-base lg:text-xl text-slate-200 px-2 md:px-16 py-4">
          Terrum is a community platform uniting climate activists and
          change-makers in a gamified journey to combat the climate crisis.
          Share your initiatives, inspire others, and take meaningful climate
          action together.
        </p>
        <div className="w-full h-fit flex flex-col place-items-center my-8 lg:my-12 z-50 focus:outline-none focus:bg-transparent select-none">
          <a
            data-umami-event="Go To Playstore"
            data-umami-event-position="Hero"
            href="https://play.google.com/store/apps/details?id=com.iku"
            target="_blank"
          >
            <p className="w-fit px-12 py-4 rounded-full hover:no-underline text-slate-900 lg:hover:text-slate-200 text-lg font-semibold bg-slate-200 shadow-md lg:hover:shadow-[#0067A9] lg:hover:bg-slate-200 lg:hover:bg-opacity-10 lg::hover:text-[#0067A9] z-[1000] transition-all duration-500 lg:hover:translate-y-[-10px] select-none">
              Download Terrum &nbsp; 🌏
            </p>
          </a>
        </div>
      </div>
      {/* Events and Experiences Section */}
      <div className="w-full h-auto mt-8 px-4 md:px-8" id="events-section">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold ms-2 md:ms-6 mt-4 mb-4 text-center md:text-left">
          Events and Experiences
        </h2>
        <div className="w-full">
          <EventGrid />
        </div>
      </div>
      <VolunteerWithUsSection />
    </div>
  );
}
