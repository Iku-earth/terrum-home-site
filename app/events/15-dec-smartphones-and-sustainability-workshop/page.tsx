import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Globe,
  Recycle,
  Lightbulb,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071D2B] to-[#111111] text-gray-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Smartphones and Sustainability Workshop
        </h1>

        <section className="mb-12">
          <Card className="bg-[#0A2A3F] text-gray-200 border-[#1E3A4F]">
            <CardHeader>
              <CardTitle className="text-white text-lg md:text-xl">
                About the Workshop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Join us for an interactive session using the Unboxing Tech
                Toolkit to explore the hidden story of your smartphone—from its
                origins and components to its lifecycle and environmental
                impact.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Workshop Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <HighlightCard
              icon={<Globe className="h-6 w-6 text-blue-400" />}
              title="Global Journey"
              description="Understand the global journey of your smartphone: BUY–USE–DISPOSE."
            />
            <HighlightCard
              icon={<Recycle className="h-6 w-6 text-green-400" />}
              title="Material Flows"
              description="Map material flows and environmental implications."
            />
            <HighlightCard
              icon={<Lightbulb className="h-6 w-6 text-yellow-400" />}
              title="Reflect and Discover"
              description="Reflect on your tech habits and discover steps to be a sustainable consumer."
            />
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-[#0A2A3F] text-gray-200 border-[#1E3A4F]">
            <CardHeader>
              <CardTitle className="text-white text-lg md:text-xl">
                Why Attend?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">
                Gain insights into responsible tech use, learn about sustainable
                phone options, and leave equipped to make conscious choices for
                a sustainable future.
              </p>
            </CardContent>
            <CardFooter>
              <p className="font-semibold text-white text-sm md:text-base">
                Register now to explore how small changes in tech use can make a
                big impact!
              </p>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-[#0A2A3F] text-gray-200 border-[#1E3A4F]">
            <CardHeader>
              <CardTitle className="text-white text-lg md:text-xl">
                Workshop Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  <span>Date: December 15, 2024</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-400" />
                  <span>Time: 4:00 PM to 6:00 PM</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                  <span>Location: Samagata Foundation</span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/uqqeReVDEzdnNUEY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Open Smartphone and Sustainability Workshop Location"
                  className="text-blue-400 hover:underline text-sm md:text-base"
                >
                  View on Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <a
            href="https://rzp.io/rzp/smartphoneworkshop"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-sm md:text-base"
            data-umami-event="Register Smartphone and Sustainability Workshop"
          >
            Register Now
          </a>
        </div>
      </main>
    </div>
  );
}

function HighlightCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-[#0A2A3F] text-gray-200 border-[#1E3A4F]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white text-sm md:text-base">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 text-xs md:text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
