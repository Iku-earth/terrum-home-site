import { notFound } from "next/navigation"

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

