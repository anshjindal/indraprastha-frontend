"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "textarea" | "select";
  options?: readonly string[];
  required?: boolean;
  placeholder?: string;
  wide?: boolean;
};

type Props = {
  subject: string;
  fields: FormField[];
  intro?: string;
};

export function EnquiryForm({ subject, fields, intro }: Props) {
  const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "whatsapp";
    const data = new FormData(event.currentTarget);

    const lines = fields
      .map((field) => {
        const value = String(data.get(field.name) ?? "").trim();
        return value ? `${field.label}: ${value}` : null;
      })
      .filter(Boolean);
    const body = `${subject}\n\n${lines.join("\n")}`;

    if (channel === "whatsapp") {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `${subject} – ${site.name}`,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSent(channel);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold/30 bg-white p-6 shadow-lg shadow-maroon/5 md:p-8"
    >
      <h3 className="text-xl font-bold text-maroon">{subject}</h3>
      {intro ? <p className="mt-2 text-sm text-ink/70">{intro}</p> : null}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `f-${field.name}`;
          const common = {
            id,
            name: field.name,
            required: field.required,
            placeholder: field.placeholder,
            className: "field",
          };
          return (
            <label
              key={field.name}
              htmlFor={id}
              className={`block text-sm font-semibold text-maroon ${
                field.wide || field.type === "textarea" ? "sm:col-span-2" : ""
              }`}
            >
              {field.label}
              {field.required ? <span className="text-saffron"> *</span> : null}
              <span className="mt-1.5 block font-normal text-ink">
                {field.type === "textarea" ? (
                  <textarea {...common} rows={4} />
                ) : field.type === "select" ? (
                  <select {...common} defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    {field.options?.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input {...common} type={field.type ?? "text"} min={field.type === "number" ? 0 : undefined} />
                )}
              </span>
            </label>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          value="whatsapp"
          className="rounded-full bg-[#1f9d55] px-6 py-3 text-sm font-bold text-white hover:bg-[#177a42]"
        >
          Send on WhatsApp
        </button>
        <button
          type="submit"
          value="email"
          className="rounded-full border border-maroon/30 px-6 py-3 text-sm font-bold text-maroon hover:border-saffron hover:text-saffron"
        >
          Send by Email
        </button>
      </div>
      <p className="mt-4 text-xs text-ink/60" aria-live="polite">
        {sent
          ? `Your ${sent === "whatsapp" ? "WhatsApp" : "email"} app should now open with your details filled in — just press send. Our team will get back to you soon.`
          : "Your details open in WhatsApp or your email app, ready to send to our team. Nothing is stored on this website."}
      </p>
    </form>
  );
}
