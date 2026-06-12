/*
 * DESIGN: Warm Academic — About Mr. Michael page
 * Personal bio, credentials, achievements, and philosophy
 * Colors: Classy blue, bright cream, sky blue accents
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Award, Globe, Music, BookOpen, Users, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useInView(threshold = 0.15) {
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

const MICHAEL_PHOTO = "/manus-storage/michael-professional-photo_c3123d9a.webp";
const MICHAEL_HEADSHOT = "/manus-storage/michael-headshot_e2045cfa.webp";

const achievements = [
  {
    icon: <Trophy size={32} />,
    title: "MUN Coach",
    desc: "Coached award-winning students at NHSMUN in New York City — the largest secondary school Model United Nations conference in the world.",
    color: "#0F5A8F",
  },
  {
    icon: <Award size={32} />,
    title: "Debate Champion Coach",
    desc: "Trained award-winning debate teams for US National Debate Championships and World Scholar's Cup international competitions.",
    color: "#1B7AB8",
  },
  {
    icon: <Globe size={32} />,
    title: "15 Years in Hong Kong",
    desc: "Teaching English communication, public speaking, and debate to students ages 2–18 across Hong Kong's international and local schools.",
    color: "#0F5A8F",
  },
  {
    icon: <Music size={32} />,
    title: "Musician & Performer",
    desc: "Singer with the Hong Kong Bach Choir, bringing musical expression and performance confidence into coaching.",
    color: "#1B7AB8",
  },
  {
    icon: <Users size={32} />,
    title: "Community Leader",
    desc: "Commissioner of the Hong Kong Slow Pitch Softball Association, fostering teamwork and community engagement.",
    color: "#0F5A8F",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Lehigh University Graduate",
    desc: "Specialized in Political Science, Religion, and Musical Performance — bringing interdisciplinary depth to communication coaching.",
    color: "#1B7AB8",
  },
];

export default function AboutMichael() {
  const bioSection = useInView();
  const achievementsSection = useInView();
  const philosophySection = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FBFF" }}>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ backgroundColor: "#0F5A8F" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
            Meet the Coach
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-semibold mb-4 leading-tight" style={{ color: "#F8FBFF" }}>
            Mr. Michael
          </h1>
          <p className="font-body text-lg max-w-2xl" style={{ color: "rgba(253,246,236,0.8)" }}>
            15 years of experience coaching students across Hong Kong — from early learners to award-winning debaters competing on the world stage.
          </p>
        </div>
      </section>

      {/* Bio Section with Professional Photo */}
      <section className="py-24" style={{ backgroundColor: "#F8FBFF" }}>
        <div
          ref={bioSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-center mb-12">
            <img
              src={MICHAEL_HEADSHOT}
              alt="Mr. Michael"
              className="rounded-lg shadow-lg"
              style={{ maxWidth: "280px", height: "auto" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${bioSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
                Background
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#0F5A8F" }}>
                From New York to Hong Kong
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "#1A2332" }}>
                <p>
                  Born and raised in New York, I graduated from Lehigh University with a focus on Political Science, Religion, and Musical Performance. These disciplines shaped how I approach communication coaching — understanding that great speakers must be informed, empathetic, and expressive.
                </p>
                <p>
                  For the past 15 years, I've been based in Hong Kong, working with students ages 2–18 across international and local schools. I've brought that same passion for debate, public speaking, and critical thinking to a new generation of Hong Kong students — many of whom have gone on to compete at the highest levels.
                </p>
                <p>
                  In Hong Kong, I have chaperoned and coached award-winning debate teams competing in the US National Debate Championships and for NHSMUN, the largest secondary school Model United Nations conference in the world. I also coached World Scholar's Cup teams to the World Scholar's Cup Championship at Yale University.
                </p>
                <p>
                  Beyond the classroom, I'm a singer with the Hong Kong Bach Choir and Commissioner of the Hong Kong Slow Pitch Softball Association — because I believe that communication and community engagement happen everywhere, not just in formal settings.
                </p>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${bioSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-lg"
                style={{ backgroundColor: "rgba(46,159,216,0.15)" }}
              />
              <img
                src={MICHAEL_PHOTO}
                alt="Mr. Michael"
                className="relative rounded-lg shadow-xl w-full object-cover"
                style={{ maxHeight: "600px", aspectRatio: "3/4", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-24" style={{ backgroundColor: "#E8F2FB" }}>
        <div
          ref={achievementsSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              Experience & Expertise
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#0F5A8F" }}>
              A Diverse Coaching Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl p-8 transition-all duration-700 ${achievementsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: "#F8FBFF",
                  borderTop: `4px solid ${item.color}`,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24" style={{ backgroundColor: "#F8FBFF" }}>
        <div
          ref={philosophySection.ref}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              My Approach
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8" style={{ color: "#0F5A8F" }}>
              Why I Coach the Way I Do
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                heading: "Help Students Find Their Voice",
                text: "My core belief is simple: every student has something important to say. Whether expressing creative ideas in stories, critical analysis in debates, or arguments in presentations, I help students find the confidence to share their voice clearly and comfortably. Communication is not about being loud — it's about being heard.",
              },
              {
                heading: "Global Exposure, Critical Thinking",
                text: "I want my students to have global exposure and curiosity about the world. But more importantly, I want them to navigate the overwhelming amount of media and information they encounter daily with discernment. I teach students to seek truth and understanding, to think independently, and to limit their reliance on AI in completing meaningful work. I want literate students — not just able to read, but able to read the world.",
              },
              {
                heading: "Transformation Through Proper Tutelage",
                text: "The most rewarding part of my work is seeing students grow and flourish under proper guidance. Watching shy students step out of their comfort zones, watching non-native English speakers gain confidence to give speeches in front of crowds, and knowing I've helped shape positively-contributing members of society who can think independently — that's everything.",
              },
              {
                heading: "Real Success Stories",
                text: "I've had the privilege of coaching international students who gained global worldviews through debate, MUN, and World Scholar's Cup — earning well-deserved accolades at competitions like NHSMUN and WSC Tournament of Champions. I've also worked with local, non-native English speakers who truly came out of their shell, becoming winners in intra-school and inter-school speaking and debate competitions. These transformations are why I do this work.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${philosophySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="p-8 rounded-lg"
                  style={{
                    backgroundColor: "#E8F2FB",
                    borderLeft: `4px solid #0F5A8F`,
                  }}
                >
                  <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#0F5A8F" }}>
                    {item.heading}
                  </h3>
                  <p className="font-body text-base leading-relaxed" style={{ color: "#1A2332" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-24" style={{ backgroundColor: "#E8F2FB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
              Beyond the Classroom
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8" style={{ color: "#0F5A8F" }}>
              A Life Well-Lived
            </h2>
          </div>

          <div className="prose prose-lg max-w-none font-body" style={{ color: "#1A2332" }}>
            <p className="text-base leading-relaxed mb-6">
              I believe that the best teachers are well-rounded people who engage with the world beyond their subject matter. I'm passionate about sports — I play softball and coach in the Hong Kong Slow Pitch Softball Association. I'm an avid hiker who loves exploring Hong Kong's natural beauty. I sing and have performed with choirs and operas, which taught me the power of ensemble work and collaborative expression.
            </p>
            <p className="text-base leading-relaxed">
              I love to travel and experience cultures rich in history, and I'm a passionate cook who enjoys trying new dishes and cuisines. These experiences — whether on a hiking trail, in a concert hall, or around a dinner table — all inform how I teach. They remind me that communication and connection happen everywhere, and that the skills my students learn in debate and public speaking are tools for living a fuller, more engaged life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0F5A8F" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "#F8FBFF" }}>
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(253,246,236,0.8)" }}>
            Book a free 30-minute consultation to discuss your child's goals and find the right programme.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "#2E9FD8", color: "#F8FBFF" }}
            >
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
