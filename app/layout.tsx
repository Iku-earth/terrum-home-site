import {montserrat} from "@/utils/fonts";
import "./globals.css";

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
        <body className={`${montserrat.className}`}>
        <div className="flex flex-col">
            {children}
            <script
                defer
                src={process.env.NEXT_PUBLIC_UMAMI_SRC}
                data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            />
        </div>
        </body>
        </html>
    );
}
