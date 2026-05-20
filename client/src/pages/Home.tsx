/*
 * DESIGN: Warm Academic — Home page
 * Hero: Full-bleed image with dark overlay, large display heading
 * Sections: Philosophy, Programs overview, Pathway, Testimonials, CTA
 * Colors: Forest green, warm cream, gold accents
 * Fonts: Cormorant Garamond (display), Nunito Sans (body), Caveat (accents)
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Mic, Globe, PenLine, Brain, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Intersection observer hook for scroll animations
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

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/hero-students-ZMWHH9fj4pfu5srVeJCQZ6.webp";
const DEBATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/debate-team-WbzVv6KPDCmF6z8mH5449e.webp";
const WRITING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/creative-writing-aPazyb2JYqC4ZgpkuLepSQ.webp";
const MUN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/mun-conference-a6iY6BfzySMDsKzWLYjxUd.webp";
const COACHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/coaching-session-ScwJhFg4LBYXYba4Jc4S3x.webp";

const programHighlights = [
  {
    icon: <Mic size={28} />,
    title: "Public Speaking",
    desc: "From body language and vocal projection to structuring persuasive arguments — students learn to own any room with confidence.",
    color: "#1B4332",
  },
  {
    icon: <Users size={28} />,
    title: "Debate & Critical Thinking",
    desc: "Structured debate training that sharpens logical reasoning, empathy for opposing views, and the ability to cut through information overload.",
    color: "#2D6A4F",
  },
  {
    icon: <Globe size={28} />,
    title: "MUN & World Scholar's Cup",
    desc: "A guided pathway through competitive academic programmes — Model United Nations, World Scholar's Cup, and beyond.",
    color: "#1B4332",
  },
  {
    icon: <PenLine size={28} />,
    title: "Creative Writing",
    desc: "Building rich vocabularies and imaginative expression — helping younger students find their unique voice on the page.",
    color: "#2D6A4F",
  },
  {
    icon: <Brain size={28} />,
    title: "Critical Analysis",
    desc: "Navigating today's information landscape: evaluating sources, understanding bias, and forming well-reasoned positions on complex issues.",
    color: "#1B4332",
  },
  {
    icon: <BookOpen size={28} />,
    title: "English Communication",
    desc: "A holistic approach covering vocabulary, comprehension, oral fluency, and written expression across all academic levels.",
    color: "#2D6A4F",
  },
];

const pathway = [
  {
    stage: "Lower Primary",
    years: "P1 – P3",
    focus: "Foundation",
    skills: ["Vocabulary building", "Storytelling & creative writing", "Confident self-expression", "Body language basics"],
    accent: "#A8C5A0",
  },
  {
    stage: "Upper Primary",
    years: "P4 – P6",
    focus: "Expression",
    skills: ["Public speaking fundamentals", "Structured debate introduction", "Opinion writing", "Listening & empathy skills"],
    accent: "#C9A84C",
  },
  {
    stage: "Junior Secondary",
    years: "S1 – S3",
    focus: "Argumentation",
    skills: ["Formal debate formats", "Critical source evaluation", "MUN preparation", "Persuasive & analytical writing"],
    accent: "#2D6A4F",
  },
  {
    stage: "Senior Secondary",
    years: "S4 – S6",
    focus: "Mastery",
    skills: ["World Scholar's Cup", "Advanced MUN", "Academic essay writing", "Interview & presentation skills"],
    accent: "#1B4332",
  },
];

const testimonials = [
  {
    quote: "My daughter went from dreading class presentations to volunteering to speak first. The transformation in her confidence has been remarkable.",
    name: "Parent of P5 student",
    detail: "Enrolled since P3",
  },
  {
    quote: "The debate coaching gave me tools I use every day — how to listen properly, how to find the flaws in an argument, how to stay calm under pressure.",
    name: "S4 student",
    detail: "MUN delegate, 2 years",
  },
  {
    quote: "What sets this programme apart is the focus on genuine thinking, not just memorising scripts. My son now reads the news and actually has opinions about it.",
    name: "Parent of S2 student",
    detail: "Enrolled since P6",
  },
];

export default function Home() {
  const philosophySection = useInView();
  const programsSection = useInView();
  const pathwaySection = useInView();
  const testimonialsSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FDF6EC" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(15,45,30,0.82) 0%, rgba(15,45,30,0.55) 60%, rgba(15,45,30,0.3) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-2xl">
            <div
              className="inline-block font-accent text-base mb-6 px-4 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(201,168,76,0.25)", color: "#E8C97A", border: "1px solid rgba(201,168,76,0.4)" }}
            >
              Private Coaching · Hong Kong
            </div>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
              style={{ color: "#FDF6EC" }}
            >
              Find Your Voice.
              <br />
              <em className="italic font-light" style={{ color: "#E8C97A" }}>Shape Your World.</em>
            </h1>
            <p
              className="font-body text-lg sm:text-xl leading-relaxed mb-8 animate-fade-up-delay-1"
              style={{ color: "rgba(253,246,236,0.85)" }}
            >
              Expert English communication coaching for students from lower primary through upper secondary — building the critical thinking, empathy, and expressive skills that matter most in the modern world.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#C9A84C", color: "#0F2D1E" }}
              >
                Explore Programmes <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:bg-white/20"
                style={{ border: "1.5px solid rgba(253,246,236,0.6)", color: "#FDF6EC" }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          ref={philosophySection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 ${philosophySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-lg"
                style={{ backgroundColor: "#A8C5A0", opacity: 0.35 }}
              />
              <img
                src={COACHING_IMG}
                alt="One-on-one coaching session"
                className="relative rounded-lg shadow-xl w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-lg p-5 shadow-lg"
                style={{ backgroundColor: "#1B4332" }}
              >
                <p className="font-accent text-lg" style={{ color: "#C9A84C" }}>
                  "The ability to communicate
                </p>
                <p className="font-accent text-lg" style={{ color: "#C9A84C" }}>
                  is the superpower of our age."
                </p>
              </div>
            </div>

            {/* Text */}
            <div
              className={`transition-all duration-700 delay-200 ${philosophySection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
                Our Philosophy
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#1B4332" }}>
                Communication is More Than Words
              </h2>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "#2C2C2C" }}>
                In today's world, students are bombarded with information, opinions, and competing narratives on every critical issue — from climate change to social justice, from technology to global politics. The challenge is no longer accessing information; it is knowing what to do with it.
              </p>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "#2C2C2C" }}>
                At The Voice Academy HK, we guide students to sort through sources, develop genuine empathy in listening, understand multiple perspectives, and ultimately express their own well-reasoned views — with clarity, confidence, and conviction.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#2C2C2C" }}>
                These are not just academic skills. They are the foundations of thoughtful citizenship and a meaningful life.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:gap-3"
                style={{ color: "#1B4332" }}
              >
                Learn more about our approach <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME HIGHLIGHTS ── */}
      <section className="py-24" style={{ backgroundColor: "#F5ECD8" }}>
        <div
          ref={programsSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
              What We Offer
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#1B4332" }}>
              A Complete Communication Education
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto" style={{ color: "#2C2C2C" }}>
              Every programme is tailored to the student's age, level, and goals — building skills progressively from first words to world-stage performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programHighlights.map((prog, i) => (
              <div
                key={prog.title}
                className={`card-lift rounded-xl p-7 transition-all duration-700 ${programsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: "#FDF6EC",
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: "0 4px 20px rgba(27,67,50,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(27,67,50,0.1)", color: prog.color }}
                >
                  {prog.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#1B4332" }}>
                  {prog.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "#1B4332", color: "#FDF6EC" }}
            >
              View All Programmes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STUDENT PATHWAY ── */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          ref={pathwaySection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
              The Journey
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#1B4332" }}>
              A Pathway Through Every Stage
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto" style={{ color: "#2C2C2C" }}>
              We meet students where they are and guide them forward — from building a first vocabulary to competing on the international stage.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-0.5"
              style={{ backgroundColor: "rgba(201,168,76,0.3)", zIndex: 0 }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {pathway.map((stage, i) => (
                <div
                  key={stage.stage}
                  className={`transition-all duration-700 ${pathwaySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Stage indicator */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm shrink-0"
                      style={{ backgroundColor: stage.accent, color: i >= 2 ? "#FDF6EC" : "#1B4332" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-display text-xl font-semibold" style={{ color: "#1B4332" }}>
                        {stage.stage}
                      </div>
                      <div className="font-body text-xs font-medium" style={{ color: "#C9A84C" }}>
                        {stage.years} · {stage.focus}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: "#F5ECD8",
                      borderLeft: `3px solid ${stage.accent}`,
                    }}
                  >
                    <ul className="space-y-2">
                      {stage.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: stage.accent }} />
                          <span className="font-body text-sm" style={{ color: "#2C2C2C" }}>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETITION SPOTLIGHT ── */}
      <section className="py-24" style={{ backgroundColor: "#1B4332" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
                Beyond the Classroom
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#FDF6EC" }}>
                Compete on the World Stage
              </h2>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(253,246,236,0.8)" }}>
                For students who are ready, we prepare them for some of the most prestigious academic competitions in the world — where communication, critical thinking, and global awareness come together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Model United Nations", desc: "Diplomatic debate, global issues, resolution writing" },
                  { name: "World Scholar's Cup", desc: "Collaborative learning, debate, and academic challenge" },
                  { name: "Public Speaking Competitions", desc: "Prepared and impromptu speaking at all levels" },
                  { name: "Debate Tournaments", desc: "British Parliamentary, Asian and other formats" },
                ].map((comp) => (
                  <div
                    key={comp.name}
                    className="rounded-lg p-4"
                    style={{ backgroundColor: "rgba(253,246,236,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    <div className="font-display text-base font-semibold mb-1" style={{ color: "#C9A84C" }}>
                      {comp.name}
                    </div>
                    <div className="font-body text-xs" style={{ color: "rgba(253,246,236,0.65)" }}>
                      {comp.desc}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#C9A84C", color: "#0F2D1E" }}
              >
                See the Full Pathway <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={MUN_IMG}
                alt="Students at Model United Nations conference"
                className="rounded-xl shadow-2xl w-full object-cover"
                style={{ maxHeight: "460px" }}
              />
              <div
                className="absolute -bottom-5 -left-5 rounded-lg p-4 shadow-lg"
                style={{ backgroundColor: "#C9A84C" }}
              >
                <div className="font-display text-2xl font-bold" style={{ color: "#0F2D1E" }}>MUN</div>
                <div className="font-body text-xs font-semibold" style={{ color: "#0F2D1E" }}>Model United Nations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS WE EXPLORE ── */}
      <section className="py-24" style={{ backgroundColor: "#F5ECD8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
              Topics & Themes
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#1B4332" }}>
              The World is the Curriculum
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto" style={{ color: "#2C2C2C" }}>
              We draw on topics that are relevant, engaging, and meaningful — from everyday life to the most pressing global challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Everyday Life", "School & Friendships", "Sports & Health", "Technology & Social Media",
              "Environment & Climate", "Identity & Culture", "Politics & Society", "Science & Innovation",
              "Mental Wellbeing", "Global Economics", "Art & Creativity", "Ethics & Philosophy",
              "Human Rights", "The Future of Work", "Media Literacy", "Relationships",
            ].map((topic, i) => (
              <span
                key={topic}
                className="font-body text-sm px-4 py-2 rounded-full font-medium"
                style={{
                  backgroundColor: i % 3 === 0 ? "rgba(27,67,50,0.1)" : i % 3 === 1 ? "rgba(201,168,76,0.18)" : "rgba(168,197,160,0.35)",
                  color: "#1B4332",
                  border: "1px solid rgba(27,67,50,0.12)",
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          ref={testimonialsSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <div className="font-accent text-xl mb-3" style={{ color: "#C9A84C" }}>
              What Families Say
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: "#1B4332" }}>
              Voices of Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`card-lift rounded-xl p-8 relative transition-all duration-700 ${testimonialsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: "#FDF6EC",
                  boxShadow: "0 4px 24px rgba(27,67,50,0.1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className="font-display text-6xl leading-none mb-4 absolute -top-2 left-6"
                  style={{ color: "rgba(201,168,76,0.35)", fontStyle: "italic" }}
                >
                  "
                </div>
                <p className="font-body text-sm leading-relaxed mb-6 pt-4" style={{ color: "#2C2C2C" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: "#1B4332", color: "#FDF6EC" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold" style={{ color: "#1B4332" }}>
                      {t.name}
                    </div>
                    <div className="font-body text-xs" style={{ color: "#C9A84C" }}>
                      {t.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaSection.ref}
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#0F2D1E" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-700 ${ctaSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="font-accent text-xl mb-4" style={{ color: "#C9A84C" }}>
              Begin the Journey
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold mb-6 leading-tight" style={{ color: "#FDF6EC" }}>
              Ready to Give Your Child
              <br />
              <em className="italic font-light" style={{ color: "#E8C97A" }}>a Voice That Matters?</em>
            </h2>
            <p className="font-body text-lg mb-10" style={{ color: "rgba(253,246,236,0.75)" }}>
              Book a free 30-minute consultation to discuss your child's goals and find the right programme for them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-body font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: "#C9A84C", color: "#0F2D1E" }}
              >
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-body font-semibold text-base transition-all duration-200 hover:bg-white/10"
                style={{ border: "1.5px solid rgba(253,246,236,0.4)", color: "#FDF6EC" }}
              >
                Explore Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
