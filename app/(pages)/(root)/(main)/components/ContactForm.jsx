"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()

    .refine((val) => !val || /^[0-9+\-()\s]{7,20}$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      messege: "",
    },
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  async function onSubmit(values) {
    try {
      await new Promise((r) => setTimeout(r, 700));

      toast.success(
        "Thanks, Messent sent successfully, we will get back to you soon"
      );
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="relative overflow-hidden py-14">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left side text */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-black">
              CONTACT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Let’s talk food, catering, or locations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
              Send us a message and we’ll get back quickly. If you’re asking
              about today’s schedule, include your city.
            </p>

            <div className="mt-8 flex gap-4 items-center text-sm text-black">
              <div className="rounded-2xl border border-black/10 bg-[#8F2E2F] backdrop-blur p-5 text-center w-[200px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 mb-[12px] mx-auto">
                  <Mail className="h-5 w-5 text-white" />
                </div>{" "}
                <p className="font-semibold text-white">Email</p>
                <p className="text-white ">hello@fdtruck.com</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-[#8F2E2F]  backdrop-blur p-5 text-center w-[200px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 py-2 mb-[12px] mx-auto">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-white ">+1 (000) 000-0000</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <Field
                  label="Name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  inputProps={register("name")}
                />
                {/* Email */}
                <Field
                  label="Email"
                  placeholder="you@email.com"
                  error={errors.email?.message}
                  inputProps={register("email")}
                  type="email"
                />
              </div>

              {/* Phone */}
              <Field
                label="Phone "
                placeholder="+1 555 123 4567"
                error={errors.phone?.message}
                inputProps={register("phone")}
              />

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-black">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need (catering, schedule, menu, etc.)"
                  className="w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black placeholder:text-black/40
                             outline-none ring-0 focus:border-black/25 focus:bg-black/[0.07]"
                  {...register("message")}
                />
                {errors.message?.message ? (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <button
                disabled={isSubmitting}
                className="btn-hover color-2 rounded-full px-6 py-3 font-semibold w-full"
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-xs text-black/60">
                By submitting, you agree to be contacted back about your
                request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

function Field({ label, error, inputProps, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black placeholder:text-black/40
                   outline-none ring-0 focus:border-black/25 focus:bg-black/[0.07]"
        {...inputProps}
      />
      {error ? (
        <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
