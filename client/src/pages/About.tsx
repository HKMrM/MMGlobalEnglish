/*
 * DESIGN: Warm Academic — About page
 * Philosophy, approach, values, and the story behind the academy
 * Colors: Forest green, warm cream, gold accents
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Heart, Lightbulb, MessageSquare, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const COACHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/tutor-coaching-discussion-nbRT673BhjkycP75MCmGre.webp";
const WRITING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/creative-writing-aPazyb2JYqC4ZgpkuLepSQ.webp";

const values = [
  {
    icon: <MessageSquare size={24} />,
    title: "Voice",
    desc: "Every student has something worth saying. Our first job is to help them believe that — and then give them the tools to say it well.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Critical Thought",
    desc: "In a world of information overload, the ability to think clearly, question assumptions, and evaluate evidence is the most important skill we can teach.",
  },
  {
    icon: <Heart size={24} />,
    title: "Empathy",
    desc: "Great communicators are great listeners first. We teach students to genuinely understand perspectives different from their own — not just to win arguments, but to grow as people.",
  },
  {
    icon: <Target size={24} />,
    title: "Purpose",
    desc: "Communication without purpose is just noise. We help students develop the clarity of thought that makes every word count — in the classroom, in competition, and in life.",
  },
];

export default function About() {
  const storySection = useInView();
  const valuesSection = useInView();
  const approachSection = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FBFF" }}>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden mt-20"
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
            Why We Do This Work
          </h1>
          <p className="font-body text-lg max-w-2xl" style={{ color: "rgba(253,246,236,0.8)" }}>
            We believe that the ability to communicate — clearly, thoughtfully, and with genuine empathy — is the defining skill of our time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" style={{ backgroundColor: "#F8FBFF" }}>
        <div
          ref={storySection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${storySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
                Our Story
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#0F5A8F" }}>
                Born from a Belief in Young Voices
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#1A2332" }}>
                <p>
                  MM Global English was founded in Hong Kong with a simple but powerful conviction: that every young person has ideas worth sharing — and that the skills to share them well can be taught, nurtured, and developed at any age.
                </p>
                <p>
                  We work with students from lower primary through to upper secondary, meeting them at their level and walking with them through each stage of their development. For the youngest students, that might mean helping them write their first story or stand up and speak in front of a small group without fear. For older students, it might mean preparing for a Model United Nations conference or the World Scholar's Cup.
                </p>
                <p>
                  What connects every programme is a commitment to genuine communication — not just performing well on a test, but developing the real capacity to think clearly, listen deeply, and express oneself with confidence and conviction.
                </p>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${storySection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-lg"
                style={{ backgroundColor: "rgba(201,168,76,0.2)" }}
              />
              <img
                src={COACHING_IMG}
                alt="Coaching session"
                className="relative rounded-lg shadow-xl w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge We Address */}
      <section className="py-24" style={{ backgroundColor: "#E8F2FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              The Challenge
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6" style={{ color: "#0F5A8F" }}>
              The Modern Communication Crisis
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                heading: "Information Overload",
                body: "Today's students are exposed to more information, more opinions, and more competing narratives than any generation before them. On every major issue — climate, politics, technology, health — there are dozens of conflicting voices, each claiming authority. The challenge is not finding information; it is knowing what to do with it.",
                accent: "#7CB9D9",
              },
              {
                heading: "The Empathy Deficit",
                body: "Social media and algorithm-driven content have made it easier than ever to live inside an echo chamber — to hear only views that confirm what we already believe. We teach students to genuinely engage with perspectives different from their own, not just to win arguments, but because it makes them better thinkers and better people.",
                accent: "#2E9FD8",
              },
              {
                heading: "The Confidence Gap",
                body: "Many students have rich inner worlds — fascinating ideas, genuine opinions, creative visions — but lack the skills and confidence to express them. We bridge that gap, giving students the technical skills and the personal confidence to share what they think and feel, in any context.",
                accent: "#1B7AB8",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl p-8"
                style={{
                  backgroundColor: "#F8FBFF",
                  borderTop: `4px solid ${item.accent}`,
                  boxShadow: "0 4px 20px rgba(27,67,50,0.07)",
                }}
              >
                <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: "#0F5A8F" }}>
                  {item.heading}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#1A2332" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "#F8FBFF" }}>
        <div
          ref={valuesSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              What We Stand For
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#0F5A8F" }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`card-lift rounded-xl p-7 text-center transition-all duration-700 ${valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: "#E8F2FB",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(27,67,50,0.12)", color: "#0F5A8F" }}
                >
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#0F5A8F" }}>
                  {value.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24" style={{ backgroundColor: "#0F5A8F" }}>
        <div
          ref={approachSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
                What We Discuss
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#F8FBFF" }}>
                Topics That Matter at Every Age
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "rgba(253,246,236,0.8)" }}>
                We believe students are most engaged — and learn most deeply — when they are discussing things that genuinely matter to them. Our topics are carefully chosen to be age-appropriate, intellectually stimulating, and connected to the real world.
              </p>
              <div className="space-y-6">
                {[
                  {
                    level: "Younger Students",
                    topics: "Everyday life, school and friendships, sports and hobbies, favourite books and stories, animals and nature, fairness and kindness",
                    color: "#7CB9D9",
                  },
                  {
                    level: "Intermediate Students",
                    topics: "Technology and social media, health and wellbeing, the environment, cultural identity, relationships, current events in Hong Kong",
                    color: "#2E9FD8",
                  },
                  {
                    level: "Advanced Students",
                    topics: "Global politics, climate change, economic inequality, human rights, science and ethics, the future of work, media literacy and misinformation",
                    color: "#F8FBFF",
                  },
                ].map((item) => (
                  <div key={item.level} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="font-body font-semibold text-sm mb-1" style={{ color: item.color }}>
                        {item.level}
                      </div>
                      <div className="font-body text-sm" style={{ color: "rgba(253,246,236,0.65)" }}>
                        {item.topics}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={WRITING_IMG}
                alt="Student engaged in creative writing"
                className="rounded-xl shadow-2xl w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div
                className="absolute -top-5 -right-5 rounded-xl p-5 shadow-lg"
                style={{ backgroundColor: "#2E9FD8" }}
              >
                <p className="font-accent text-base leading-snug" style={{ color: "#0A3A5C" }}>
                  "Every great speech
                  <br />
                  begins with a great idea."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#E8F2FB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-5" style={{ color: "#0F5A8F" }}>
            Let's Talk About Your Child
          </h2>
          <p className="font-body text-lg mb-8" style={{ color: "#1A2332" }}>
            Every student is different. We'd love to learn about your child's goals, interests, and current level — and find the right programme to help them grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-body font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "#0F5A8F", color: "#F8FBFF" }}
          >
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
