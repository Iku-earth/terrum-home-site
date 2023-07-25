import "./globals.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "Terrum",
  description: "One Earth, One Community - Taking Action for Climate Change"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
