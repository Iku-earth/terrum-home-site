import EventGrid from "@/components/landing/events-and-experiences/EventGrid";
import VolunteerWithUsSection from "@/components/volunteer-with-us";

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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ms-2 md:ms-6 mt-4 mb-4 text-center md:text-left">
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
