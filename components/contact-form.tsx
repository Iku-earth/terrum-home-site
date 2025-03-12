"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-contact-us-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast("Message sent!");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Name <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="bg-white/80 text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Email{" "}
                <span className="text-gray-300 text-sm font-normal">
                  (optional)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className="bg-white/80 text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Phone Number{" "}
                <span className="text-gray-300 text-sm font-normal">
                  (optional)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="(123) 456-7890"
                  {...field}
                  className="bg-white/80 text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Message <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What would you like to tell us?"
                  className="bg-white/80 text-black min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#FFB703] hover:bg-yellow-500 text-black font-bold rounded-full transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
