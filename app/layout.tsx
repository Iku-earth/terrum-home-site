import { LandingHeader } from "@/components/home-page-header";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "Terrum",
  description: "One Earth, One Community - Taking Action for Climate Change",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable}`}>
        <div className="flex flex-col min-h-screen bg-black">
          <LandingHeader />
          {children}
          <footer className="w-full grid grid-flow-col gap-5 justify-center mb-5 text-gray-400">
            <Link
              href="https://discord.gg/c4869U2JjK"
              className="group transition duration-300"
            >
              Discord
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
            </Link>
            <Link
              href="https://www.instagram.com/terrum.in/"
              className="group transition duration-300"
            >
              Instagram
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
            </Link>
            <Link
              href="/privacy/policy"
              className="group transition duration-300"
            >
              Privacy Policy
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
