import Image from "next/image";
import ContactForm from "@/components/contact-form";
import LandingHeader from "@/components/landing/header";
import LandingFooter from "@/components/footer";

export default function ContactUsPage() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#3F3E3E", opacity: "0.5" }}
          />
        </div>

        {/* Navigation */}
        <LandingHeader />

        {/* Contact Us Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 py-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight">
            Contact Us
          </h1>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-semibold mt-4 max-w-2xl mx-auto">
            We would love to hear from you! Whether you have a question about
            our platform, need assistance, or just want to share your thoughts,
            feel free to reach out.
          </p>

          <div className="mt-8 w-full max-w-lg bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
