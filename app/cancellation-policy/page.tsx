export default function CancellationRefundsPolicy() {
  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="max-w-3xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">
          Cancellation and Refunds Policy
        </h1>
        <p className="mb-4">Last updated: 12-03-2025</p>

        <p className="mb-4">
          At <strong>Terrum</strong>, we strive to provide meaningful
          experiences through our events, volunteer opportunities, and
          sustainable initiatives. We understand that sometimes plans change,
          and we aim to offer a fair cancellation and refund policy.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. Event Cancellations by Users
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              If you need to cancel your participation in a{" "}
              <strong>paid event</strong>, please notify us at least{" "}
              <strong>7 days</strong> in advance to be eligible for a refund.
            </li>
            <li>
              <strong>No refunds</strong> will be issued for cancellations made
              less than <strong>7 days</strong> before the event.
            </li>
            <li>
              If an event offers a <strong>ticket transfer option</strong>, you
              may nominate another person to take your place instead of
              requesting a refund.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Cancellations by Terrum
          </h2>
          <p className="ml-4">
            If an event is canceled by <strong>Terrum</strong> due to unforeseen
            circumstances (weather, low participation, or logistical issues),
            attendees will be given the option of:
          </p>
          <ul className="ml-4 list-disc pl-4">
            <li>
              A <strong>full refund</strong>
            </li>
          </ul>
          <p className="ml-4 mt-2">
            We will notify registered participants as soon as possible regarding
            any cancellations or changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Refund Policy</h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              <strong>Non-refundable Fees:</strong> Certain services, such as{" "}
              <strong>
                membership fees, donations, or contributions to volunteer
                programs
              </strong>
              , are non-refundable.
            </li>
            <li>
              <strong>Processing Time:</strong> Refunds, if applicable, will be
              processed within <strong>10 business days</strong> after approval.
            </li>
            <li>
              <strong>Transaction Fees:</strong> Any payment processing fees
              (bank, credit card, or payment gateway charges) may be deducted
              from the refunded amount.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
          <p className="ml-4">
            If you have any questions regarding cancellations or refunds, please
            contact us at:
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
            We appreciate your understanding and support in creating a positive
            and sustainable community at <strong>Terrum</strong>!
          </p>
        </section>
      </div>
    </div>
  );
}
