export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="max-w-3xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">Shipping Policy</h1>
        <p className="mb-4">Last updated: 15-08-2023</p>

        <p className="mb-4">
          At <strong>Terrum</strong>, we currently do not sell or ship any
          physical products. Our services focus on community engagement,
          sustainability initiatives, volunteer programs, and events.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. No Physical Product Shipping
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Terrum does not offer physical products for sale, and therefore,
              we do not process shipments, deliveries, or logistics related to
              tangible goods.
            </li>
            <li>
              Any services, event registrations, or contributions made through
              our platform are <strong>delivered digitally</strong> or conducted
              in-person as part of our initiatives.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Event and Service Confirmation
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Upon successful registration for an event, volunteer program, or
              service, you will receive a <strong>confirmation email</strong>{" "}
              with details regarding participation.
            </li>
            <li>
              No physical tickets, merchandise, or products will be shipped as
              part of any Terrum offerings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Contact Us</h2>
          <p className="ml-4">
            If you have any questions regarding our services or need
            clarification on any aspect of this policy, please reach out to us:
          </p>
          <p className="ml-4">
            📧{" "}
            <a
              data-umami-event="Send mail"
              data-umami-event-mail-id="abhishek@terrum.in"
              className="text-blue-500"
              href="mailto:abhishek@terrum.in"
            >
              abhishek@terrum.in
            </a>
          </p>
          <p className="ml-4 mt-2">
            Thank you for being part of{" "}
            <strong>Terrum&apos;s sustainable community!</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
