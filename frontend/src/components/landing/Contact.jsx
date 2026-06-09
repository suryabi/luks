import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "IT Consulting",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Left side */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
            Get in touch
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
            Let&apos;s <span className="gradient-text">build something</span> exceptional.
          </h2>
          <p className="text-lg text-[#C9B7B9] leading-relaxed mt-6 max-w-md">
            Whether you have a roadmap or just a hard problem, we&apos;d love to
            hear about it. A senior partner will respond within one business day.
          </p>

          <div className="space-y-5 mt-10">
            {[
              { Icon: Mail, k: "Email", v: "hello@lukssolutions.com" },
              { Icon: Phone, k: "Phone", v: "+1 (415) 555 — 0142" },
              {
                Icon: MapPin,
                k: "Headquarters",
                v: "London · Bengaluru · New York",
              },
            ].map((r) => (
              <div key={r.k} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg border border-red-500/25 bg-[#1F0B0E] flex items-center justify-center shrink-0">
                  <r.Icon className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#A38F91]">
                    {r.k}
                  </div>
                  <div className="text-white mt-1">{r.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="relative p-8 sm:p-10 rounded-2xl border border-red-500/15 bg-[#1F0B0E]/70 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Full name"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={onChange}
                testid="contact-input-name"
              />
              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={onChange}
                testid="contact-input-email"
              />
              <Field
                label="Company"
                name="company"
                placeholder="Acme Inc."
                value={form.company}
                onChange={onChange}
                testid="contact-input-company"
              />
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-[#A38F91] font-semibold">
                  Interested in
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={onChange}
                  data-testid="contact-input-interest"
                  className="bg-[#150708] border border-red-500/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40"
                >
                  {[
                    "IT Consulting",
                    "Software Services",
                    "Product Development",
                    "Cloud & DevOps",
                    "Data & Analytics",
                    "SAP HCM / HANA",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-[#150708]">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label className="text-xs tracking-[0.2em] uppercase text-[#A38F91] font-semibold">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="A few sentences on goals, context and timing."
                data-testid="contact-input-message"
                className="bg-[#150708] border border-red-500/15 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#6f5b5d] focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 resize-none"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#A38F91] max-w-sm">
                By submitting, you agree to be contacted by a Luks Solutions
                partner about your enquiry.
              </p>
              <button
                type="submit"
                data-testid="contact-submit"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)] transition-all"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message received
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", placeholder, value, onChange, testid }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs tracking-[0.2em] uppercase text-[#A38F91] font-semibold">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testid}
      className="bg-[#150708] border border-red-500/15 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#6f5b5d] focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40"
    />
  </div>
);

export default Contact;
