import Image from "next/image";
import {mynerve} from "@/utils/fonts";

export default function LandingFooter() {
    return (
        <footer
            id="landing-footer"
            className="w-full bg-white my-8 px-4 sm:px-8 md:px-16"
        >
            <div className="flex flex-col space-y-10">
                <div className="relative">
                    <h2
                        className={`text-center text-xl sm:text-2xl md:text-3xl ${mynerve.className}`}
                    >
                        Be a part of Terrum Community Today
                    </h2>
                    <div className="absolute -bottom-40 -translate-y-1/2 left-[calc(50%+15rem)]">
                        <Image
                            src="/community-people.png"
                            alt="Community illustration"
                            width={178}
                            height={420}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Container for the bottom section */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
                    {/* Location */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-lg sm:text-xl">
                        <Image
                            src="/icons/map-pin.svg"
                            alt="Location"
                            width={32}
                            height={32}
                        />
                        <span className="text-sm sm:text-base">
              Bengaluru, Karnataka, India
            </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center items-center gap-6">
                        <a
                            data-umami-event="Open Discord"
                            data-umami-event-section="Footer"
                            href="https://discord.gg/c4869U2JjK"
                            className="hover:opacity-80"
                        >
                            <Image
                                src="/icons/discord.svg"
                                alt="Discord"
                                width={32}
                                height={32}
                            />
                            <span className="sr-only">Discord</span>
                        </a>
                        <a
                            data-umami-event="Open Instagram"
                            data-umami-event-section="Footer"
                            href="https://www.instagram.com/terrum.in/"
                            className="hover:opacity-80"
                        >
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={32}
                                height={32}
                            />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            data-umami-event="Open LinkedIn"
                            data-umami-event-section="Footer"
                            href="https://www.linkedin.com/company/terrum-india/"
                            className="hover:opacity-80"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={32}
                                height={32}
                            />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a data-umami-event="Open X"
                           data-umami-event-section="Footer"
                           href="https://x.com/terrum_in" className="hover:opacity-80">
                            <Image
                                src="/icons/x.svg"
                                alt="X (Previously Twitter)"
                                width={32}
                                height={32}
                            />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-center md:justify-end gap-2 text-lg sm:text-xl">
                        <Image src="/icons/mail.svg" alt="Mail" width={32} height={32}/>
                        <a data-umami-event="Send mail"
                           data-umami-event-section="Footer"
                           data-umami-event-mail-id="contact@terrum.in" href="mailto:contact@terrum.in"
                           className="hover:underline">
                            contact@terrum.in
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
