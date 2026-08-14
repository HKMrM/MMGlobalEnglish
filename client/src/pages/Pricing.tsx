/*
 * DESIGN: Warm Academic — Pricing page
 * Displays session rates and package options
 * Colors: Classy blue, bright cream, sky blue accents
 */
import { Link } from "wouter";
import { Check, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  const pricingOptions = [
    {
      title: "Private Sessions — Wanchai",
      rate: "HKD 800",
      period: "per hour",
      description: "One-on-one personalized coaching in our shared workspace in Wanchai.",
      features: [
        "Customized curriculum",
        "Focused attention on individual challenges",
        "Flexible scheduling",
        "Progress tracking and feedback",
        "Suitable for all age groups and levels",
      ],
      color: "#0F5A8F",
      highlight: true,
    },
    {
      title: "Private Sessions — Remote In-Person",
      rate: "HKD 1,000",
      period: "per hour",
      description: "One-on-one personalized coaching at remote locations across Hong Kong Island, Kowloon, and the New Territories. Travel expenses may apply depending on location.",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Progress tracking and feedback",
        "Available across Hong Kong Island, Kowloon, and New Territories",
        "Travel expenses may apply",
      ],
      color: "#0F5A8F",
      highlight: false,
    },
    {
      title: "Private Sessions — Online",
      rate: "HKD 800",
      period: "per hour",
      description: "One-on-one personalized coaching conducted remotely via video call.",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Progress tracking and feedback",
        "Learn from anywhere",
        "Suitable for all age groups and levels",
      ],
      color: "#0F5A8F",
      highlight: false,
    },
    {
      title: "Group Sessions",
      rate: "HKD 600",
      period: "per hour per student",
      description: "Small group coaching (3+ students) with interactive learning and peer support. Available in-person at Wanchai, remote in-person locations, or online.",
      features: [
        "Collaborative learning environment",
        "Debate and discussion practice",
        "Peer feedback and support",
        "Cost-effective option",
        "Dynamic group interactions",
        "Flexible delivery options",
      ],
      color: "#1B7AB8",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100 mt-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0F5A8F" }}
          >
            Pricing
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Chaperoning services available — pricing can be discussed based on event, location, and time commitment.
          </p>
          <p className="text-base font-semibold text-gray-700 max-w-2xl mx-auto mt-3">
            Suggested session length: 1.5 hours for students.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pricingOptions.map((option, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 transition-all duration-300 ${
                  option.highlight
                    ? "ring-2 shadow-lg transform md:scale-105"
                    : "shadow-md hover:shadow-lg"
                }`}
                style={{
                  borderColor: option.color,
                  backgroundColor: option.highlight ? "#F8FBFF" : "#FFFFFF",
                }}
              >
                {option.highlight && (
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{ backgroundColor: option.color, color: "#F8FBFF" }}
                  >
                    Most Popular
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: option.color }}>
                  {option.title}
                </h3>

                <div className="mb-6">
                  <div className="text-4xl font-bold" style={{ color: option.color }}>
                    {option.rate}
                  </div>
                  <p className="text-gray-600 text-sm">{option.period}</p>
                </div>

                <p className="text-gray-700 mb-6">{option.description}</p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check size={20} style={{ color: option.color, flexShrink: 0 }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-md active:scale-95"
                    style={{
                      backgroundColor: option.color,
                      color: "#F8FBFF",
                    }}
                  >
                    Enquire Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center" style={{ color: "#0F5A8F" }}>
            Special Services
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4" style={{ borderColor: "#0F5A8F" }}>
            <h3 className="font-display text-xl font-bold mb-4" style={{ color: "#0F5A8F" }}>
              Competition Support
            </h3>
            <p className="text-gray-700 mb-4">
              Beyond regular coaching sessions, we offer specialized support for students competing in debate tournaments, Model United Nations conferences, World Scholar's Cup, and other speaking competitions.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="text-2xl" style={{ color: "#2E9FD8" }}>✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800">On-Site Coaching During Competitions</h4>
                  <p className="text-gray-700 text-sm">Real-time coaching and strategy guidance during competition days to help students perform at their best.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl" style={{ color: "#2E9FD8" }}>✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Chaperoning Services</h4>
                  <p className="text-gray-700 text-sm">Full chaperoning support for multi-day competitions, including preparation, guidance between rounds, and post-competition debriefs.</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm italic">
              Both services are available on special request. Please contact us to discuss your competition schedule and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center" style={{ color: "#0F5A8F" }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer package discounts?",
                a: "Yes! We offer discounts for block bookings (e.g., 10+ hours). Please contact us to discuss your specific needs.",
              },
              {
                q: "What are the different session options?",
                a: "We offer private sessions at our Wanchai shared workspace (HKD 800/hour), remote in-person sessions across Hong Kong Island, Kowloon, and the New Territories (HKD 1,000/hour, travel expenses may apply), and online sessions (HKD 800/hour). Group sessions are available at all locations for HKD 600/hour per student (3+ students).",
              },
              {
                q: "What session length do you recommend?",
                a: "We suggest 1.5-hour sessions for students to allow enough time for focused instruction, practice, and feedback. Flexible arrangements can be discussed based on your needs.",
              },
              {
                q: "Do you offer trial sessions?",
                a: "We encourage prospective students to book a consultation first to discuss goals and learning style before committing to sessions.",
              },
              {
                q: "How are group sessions formed?",
                a: "Group sessions are formed based on age, level, and learning goals (minimum 3 students). We ensure groups are balanced and conducive to learning. Group sessions can be held at our Wanchai workspace, at remote in-person locations, or online—please enquire about availability for your preferred location.",
              },
              {
                q: "What is your cancellation policy?",
                a: "We require 24 hours notice for cancellations. Sessions cancelled with less notice may be charged.",
              },
              {
                q: "Where can I attend in-person sessions?",
                a: "We offer in-person sessions at our shared workspace in Wanchai (HKD 800/hour) or at remote locations across Hong Kong Island, Kowloon, and the New Territories (HKD 1,000/hour, travel expenses may apply). We also offer online sessions for maximum flexibility.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#0F5A8F" }}>
                  {item.q}
                </h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "#0F5A8F" }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to discuss your child's learning goals and find the perfect coaching option.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "#0F5A8F", color: "#F8FBFF" }}
            >
              <MessageCircle size={20} />
              Send an Enquiry
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
