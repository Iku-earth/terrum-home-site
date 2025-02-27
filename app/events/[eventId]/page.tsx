import { notFound } from "next/navigation"
import type { Metadata, ResolvingMetadata } from "next";

interface Event {
  name: string
  description: string
  image: {
    alt: string
    presigned_url: string
  }
  venue: string | null
  city: string | null
  locality: string | null
  google_maps_link: string | null
  is_single_day: boolean
  start_date: string
  end_date: string | null
  start_time: string | null
  end_time: string | null
  deleted: boolean
  is_online: boolean
  location: Record<string, any>
  google_form_link: string | null
  payment_link: string | null
  event_uuid: string
}

type MetadataProps = {
  params: { eventId: string };
};

type Props = {
  params: Promise<{ eventId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const eventId = (await params).eventId;

  try {
    const event = await getEvent(eventId);

    // Create a clean description
    const cleanDescription =
      event.description.replace(/\n+/g, " ").slice(0, 200) +
      (event.description.length > 200 ? "..." : "");

    const keywords: string[] = [
      event.name,
      event.venue?.trim() || null,
      event.city?.trim() || null,
      "Terrum",
      "Terrum Events",
      "Sustainability",
      "Sustainable Living",
      "Sustainable Events",
      "Sustainable Activities",
      "Climate Action",
      "Climate Change",
      "Environment",
      "Nature",
      "Biodiversity",
      "Eco-friendly",
      "Eco-conscious",
      "Eco-conscious events",
      "Eco-conscious activities",
      "Community",
      "Community events",
      "Community activities",
      "Community engagement",
      "Community building",
      "Renuka",
      "Renuka Pooja",
      "Abhishek",
      "Abhishek AN",
    ].filter((keyword): keyword is string => Boolean(keyword));

    return {
      title: `${event.name}`,
      description: cleanDescription,
      keywords: keywords,
      icons: {
        icon: "/terrum_circle_64x64.ico",
        apple: "/terrum_circle_64x64.png",
      },
      openGraph: {
        title: `${event.name}`,
        locale: "en_US",
        description: cleanDescription,
        url: `https://terrum.in/events/${eventId}`,
        type: "website",
        images: event.image?.presigned_url
          ? [
              {
                url: event.image.presigned_url,
                width: 1200,
                height: 630,
                alt: event.name,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        site: "@terrum_in",
        title: `${event.name}`,
        description: cleanDescription,
        images: event.image?.presigned_url ? [event.image.presigned_url] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Event Details - Terrum",
      description: "View details about this Terrum event",
    };
  }
}

// Fetch event data from the API
async function getEvent(eventId: string): Promise<Event> {
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/cms/events/?event_uuid=${eventId}`
  );

  if (!res.ok) {
    console.error("Failed to fetch event:", res.statusText);
  }

  return res.json()
}

export default async function EventPage({ params }: { params: Promise<{ eventId: string }> }) {
  // Get the event ID from the URL
  const eventId = (await params).eventId;

  // Fetch the event data
  let event: Event;

  try {
    event = await getEvent(eventId);
  } catch (error) {
    console.error("Error fetching event:", error);
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="flex justify-center items-center h-screen w-screen">
        <iframe
          src={event.google_form_link + "?embedded=true"}
          className="w-full h-full border-0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

