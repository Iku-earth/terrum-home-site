export default function Home() {
  return (
    <div className="w-full h-max flex flex-grow justify-center items-center overflow-hidden text-center backdrop-blur-3xl px-4">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-slate-200 font-extrabold">
          One Earth, One Community<br></br>
          <p className="h-fit text-3xl font-sans md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#0095D8] to-[#6D8DCB] py-2">
            Taking Action for Climate Change
          </p>
        </h1>
        <p className="lg:w-3/5 mx-auto text-base lg:text-xl text-slate-200 px-2 md:px-16 py-4">
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
    </div>
  );
}
