import { LandingHeader } from "@/components/home-page-header";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Footer from "@/components/footer";

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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#071D2B] to-[#111111]">
          <LandingHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
