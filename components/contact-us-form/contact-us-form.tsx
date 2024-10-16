"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-4 lg:mx-auto my-8 p-4 md:p-8 bg-[#0C0F16] rounded-lg shadow-lg text-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        Need to contact us?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-2 block w-full bg-gray-800 rounded-md shadow-sm text-white p-3 focus:outline-none"
            placeholder="Pappu Singh"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="topic" className="block text-sm font-medium mb-1">
            What's the topic of your request?
          </label>
          <input
            type="text"
            name="topic"
            id="topic"
            className="mt-2 block w-full bg-gray-800 rounded-md shadow-sm text-white p-3 focus:outline-none"
            placeholder="e.g. Support, Feedback"
            value={formData.topic}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Contact Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 block w-full bg-gray-800 rounded-md shadow-sm focus:outline-none text-white p-3"
            placeholder="pappu@rocks.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="mt-2 block w-full bg-gray-800 rounded-md shadow-sm focus:outline-none text-white p-3"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex rounded-md mx-auto bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 p-[1px]">
          <button
            type="submit"
            className="flex-1 text-sm font-medium bg-[#202125] px-4 py-2 md:px-6 md:py-3 rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
