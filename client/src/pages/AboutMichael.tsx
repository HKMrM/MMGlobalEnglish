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

const COACHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/tutor-teaching-one-on-one-5pVwLzJ5TfSXwiof82W5KR.webp";

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

      {/* Bio Section */}
      <section className="py-24" style={{ backgroundColor: "#F8FBFF" }}>
        <div
          ref={bioSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
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
                src={COACHING_IMG}
                alt="Mr. Michael coaching"
                className="relative rounded-lg shadow-xl w-full object-cover"
                style={{ maxHeight: "500px" }}
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
                heading: "Communication is a Skill, Not a Talent",
                text: "Some people are naturally talkative, but that's not the same as being a good communicator. I teach students that clarity, empathy, and structure can be learned and mastered — at any age.",
              },
              {
                heading: "Debate Teaches More Than Winning Arguments",
                text: "When students learn to debate, they learn to research deeply, think critically, listen genuinely to opposing views, and articulate complex ideas under pressure. These skills transfer to every part of their lives.",
              },
              {
                heading: "Confidence Comes From Competence",
                text: "I don't believe in fake confidence. Real confidence comes from knowing you've prepared well, understanding your material, and having practiced in a safe environment. That's what I provide.",
              },
              {
                heading: "Every Student Has a Unique Voice",
                text: "My job isn't to make all students sound the same. It's to help each student find their authentic voice — their unique way of expressing ideas with clarity and conviction.",
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
