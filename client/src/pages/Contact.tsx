/*
 * DESIGN: Warm Academic — Contact page
 * Enquiry form, contact details, FAQ
 * Colors: Forest green, warm cream, gold accents
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "What age groups do you teach?",
    a: "We work with students from lower primary (P1) through upper secondary (S6). Each programme is tailored to the student's age, level, and goals.",
  },
  {
    q: "Do you offer 1-on-1 coaching or only group classes?",
    a: "We offer both. Many students benefit from a combination — group classes for the dynamics of debate and discussion, and 1-on-1 sessions for focused skill development and personalised feedback.",
  },
  {
    q: "How do I know which programme is right for my child?",
    a: "We offer a free 30-minute consultation to discuss your child's current level, goals, and interests. We'll recommend the most suitable programme and format based on that conversation.",
  },
  {
    q: "Where are classes held?",
    a: "We offer classes at locations across Hong Kong Island and Kowloon, as well as online sessions for students who prefer remote learning or have scheduling constraints.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most students and parents notice meaningful improvements in confidence and communication within the first 4–6 weeks. Deeper skills — critical thinking, debate technique, advanced writing — develop over a longer period of consistent practice.",
  },
  {
    q: "Do you prepare students for specific competitions?",
    a: "Yes. We offer dedicated preparation programmes for Model United Nations, the World Scholar's Cup, public speaking competitions, and debate tournaments. These are available to students who have completed foundational programmes or who already have relevant experience.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentAge: "",
    programme: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FBFF" }}>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden mt-28"
        style={{ backgroundColor: "#0F5A8F" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="font-display text-5xl lg:text-6xl font-semibold mb-4 leading-tight" style={{ color: "#F8FBFF" }}>
            Let's Start a Conversation
          </h1>
          <p className="font-body text-lg max-w-2xl" style={{ color: "rgba(253,246,236,0.8)" }}>
            We offer a free 30-minute consultation to learn about your child and find the right programme. No pressure, no obligation — just a conversation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6" style={{ color: "#0F5A8F" }}>
                  Contact Details
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: <Mail size={20} />,
                      label: "Email",
                      value: "HKMr.Michael@gmail.com",
                      href: "mailto:HKMr.Michael@gmail.com",
                    },
                    {
                      icon: <Phone size={20} />,
                      label: "Phone / WhatsApp",
                      value: "+852 5418 5811",
                      href: "tel:+85298765432",
                    },
                    {
                      icon: <MapPin size={20} />,
                      label: "Locations",
                      value: "Hong Kong Island & Kowloon\nOnline sessions also available",
                      href: null,
                    },
                    {
                      icon: <Clock size={20} />,
                      label: "Hours",
                      value: "Mon – Fri: 2pm – 9pm\nSat – Sun: 9am – 6pm",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(27,67,50,0.1)", color: "#0F5A8F" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#2E9FD8" }}>
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-sm transition-colors hover:text-forest"
                            style={{ color: "#1A2332" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm whitespace-pre-line" style={{ color: "#1A2332" }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "#0F5A8F" }}
              >
                <div className="font-accent text-lg mb-2" style={{ color: "#2E9FD8" }}>
                  Free Consultation
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.85)" }}>
                  Not sure where to start? Book a free 30-minute consultation. We'll discuss your child's goals, current level, and the best programme for them — with no obligation.
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="rounded-xl p-12 text-center"
                  style={{ backgroundColor: "#E8F2FB", border: "1px solid rgba(27,67,50,0.1)" }}
                >
                  <CheckCircle2 size={56} className="mx-auto mb-6" style={{ color: "#1B7AB8" }} />
                  <h3 className="font-display text-3xl font-semibold mb-3" style={{ color: "#0F5A8F" }}>
                    Thank You!
                  </h3>
                  <p className="font-body text-base" style={{ color: "#1A2332" }}>
                    We've received your enquiry and will be in touch within 24 hours to arrange your free consultation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl p-8 space-y-6"
                  style={{ backgroundColor: "#E8F2FB", border: "1px solid rgba(27,67,50,0.08)" }}
                >
                  <h2 className="font-display text-2xl font-semibold" style={{ color: "#0F5A8F" }}>
                    Enquiry Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "#F8FBFF",
                          border: "1.5px solid rgba(27,67,50,0.2)",
                          color: "#1A2332",
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "#F8FBFF",
                          border: "1.5px solid rgba(27,67,50,0.2)",
                          color: "#1A2332",
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "#F8FBFF",
                          border: "1.5px solid rgba(27,67,50,0.2)",
                          color: "#1A2332",
                        }}
                        placeholder="+852 5418 5811"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                        Student's Age / Year Group *
                      </label>
                      <select
                        name="studentAge"
                        required
                        value={formData.studentAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "#F8FBFF",
                          border: "1.5px solid rgba(27,67,50,0.2)",
                          color: formData.studentAge ? "#1A2332" : "#888",
                        }}
                      >
                        <option value="" disabled>Select year group</option>
                        <option value="p1-p3">Lower Primary (P1–P3)</option>
                        <option value="p4-p6">Upper Primary (P4–P6)</option>
                        <option value="s1-s3">Junior Secondary (S1–S3)</option>
                        <option value="s4-s6">Senior Secondary (S4–S6)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                      Programme of Interest
                    </label>
                    <select
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "#F8FBFF",
                        border: "1.5px solid rgba(27,67,50,0.2)",
                        color: formData.programme ? "#1A2332" : "#888",
                      }}
                    >
                      <option value="">Not sure yet / Please advise</option>
                      <option value="creative-expression">Creative Expression & Writing</option>
                      <option value="public-speaking">Public Speaking</option>
                      <option value="debate">Debate & Critical Thinking</option>
                      <option value="mun">Model United Nations Preparation</option>
                      <option value="wsc">World Scholar's Cup Preparation</option>
                      <option value="university">University Preparation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold mb-1.5" style={{ color: "#0F5A8F" }}>
                      Tell Us About Your Child
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg font-body text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: "#F8FBFF",
                        border: "1.5px solid rgba(27,67,50,0.2)",
                        color: "#1A2332",
                      }}
                      placeholder="Any background on your child's current level, goals, interests, or specific challenges you'd like to address..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: "#0F5A8F", color: "#F8FBFF" }}
                  >
                    Send Enquiry & Request Free Consultation
                  </button>

                  <p className="font-body text-xs text-center" style={{ color: "#888" }}>
                    We respond to all enquiries within 24 hours. Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#E8F2FB" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              Common Questions
            </div>
            <h2 className="font-display text-4xl font-semibold" style={{ color: "#0F5A8F" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: "#F8FBFF", border: "1px solid rgba(27,67,50,0.1)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-body font-semibold text-sm" style={{ color: "#0F5A8F" }}>
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      backgroundColor: openFaq === i ? "#0F5A8F" : "rgba(27,67,50,0.1)",
                      color: openFaq === i ? "#F8FBFF" : "#0F5A8F",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                >
                  <p className="px-6 pb-5 font-body text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
