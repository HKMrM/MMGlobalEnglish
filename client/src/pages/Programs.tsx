/*
 * DESIGN: Warm Academic — Programs page
 * Detailed programme cards, age-group tabs, competition pathway
 * Colors: Forest green, warm cream, gold accents
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Trophy, Star } from "lucide-react";
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

const DEBATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/debate-team-WbzVv6KPDCmF6z8mH5449e.webp";
const WRITING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/creative-writing-aPazyb2JYqC4ZgpkuLepSQ.webp";
const MUN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/mun-conference-a6iY6BfzySMDsKzWLYjxUd.webp";

const ageGroups = [
  {
    id: "lower-primary",
    label: "Lower Primary",
    years: "P1 – P3",
    tagline: "Building the Foundation",
    color: "#7CB9D9",
    textColor: "#0F5A8F",
    bgColor: "rgba(168,197,160,0.15)",
    programs: [
      {
        title: "Little Voices: Creative Expression",
        desc: "A joyful introduction to language and storytelling. Students build vocabulary through games, stories, and imaginative play. We nurture each child's unique voice and help them express their many creative ideas with growing confidence.",
        skills: [
          "Vocabulary expansion through storytelling",
          "Creative writing: characters, settings, plots",
          "Show-and-tell and oral presentation basics",
          "Body language and confident posture",
          "Listening and responding to peers",
        ],
        format: "Small group (3–5 students) or 1-on-1",
      },
      {
        title: "My First Speech",
        desc: "Designed specifically for young learners, this programme introduces the fundamentals of public speaking in a warm, encouraging environment. Students learn that their ideas are worth sharing — and that speaking up is something to be proud of.",
        skills: [
          "Speaking in front of a small audience",
          "Eye contact and voice projection",
          "Simple speech structure (beginning, middle, end)",
          "Expressing opinions on everyday topics",
          "Overcoming nervousness through practice",
        ],
        format: "Small group (3–5 students)",
      },
    ],
  },
  {
    id: "upper-primary",
    label: "Upper Primary",
    years: "P4 – P6",
    tagline: "Developing Expression",
    color: "#2E9FD8",
    textColor: "#0A3A5C",
    bgColor: "rgba(201,168,76,0.12)",
    programs: [
      {
        title: "The Confident Communicator",
        desc: "Students at this level are ready to tackle more complex ideas and learn how to structure and deliver them effectively. We work on both written and spoken communication, helping students develop a clear, confident personal style.",
        skills: [
          "Structured public speaking (prepared & impromptu)",
          "Opinion writing and persuasive essays",
          "Introduction to debate: for and against arguments",
          "Active listening and empathetic response",
          "Discussing topics from school life to current events",
        ],
        format: "Small group (4–6 students) or 1-on-1",
      },
      {
        title: "Debate Foundations",
        desc: "An introduction to the art of structured debate. Students learn how arguments are built, how to anticipate counterarguments, and how to listen carefully to opposing views — skills that are just as valuable in everyday life as in competition.",
        skills: [
          "Basic debate formats and rules",
          "Building and structuring arguments",
          "Rebuttal and counterargument techniques",
          "Research and source evaluation basics",
          "Topics: school life, health, technology, environment",
        ],
        format: "Small group (4–6 students)",
      },
    ],
  },
  {
    id: "junior-secondary",
    label: "Junior Secondary",
    years: "S1 – S3",
    tagline: "Sharpening Argumentation",
    color: "#1B7AB8",
    textColor: "#F8FBFF",
    bgColor: "rgba(45,106,79,0.1)",
    programs: [
      {
        title: "Advanced Debate & Critical Thinking",
        desc: "At this level, students engage with genuinely complex and controversial topics. We teach them to navigate information overload, identify bias, evaluate sources critically, and construct sophisticated arguments that acknowledge nuance and complexity.",
        skills: [
          "British Parliamentary and Asian debate formats",
          "Critical evaluation of news and media sources",
          "Understanding logical fallacies",
          "Developing empathy for opposing perspectives",
          "Topics: politics, environment, science, social issues",
        ],
        format: "Small group (4–6 students) or 1-on-1",
      },
      {
        title: "MUN Preparation",
        desc: "A comprehensive preparation programme for Model United Nations conferences. Students learn the language of diplomacy, how to research and represent a country's position, and how to negotiate, draft resolutions, and speak persuasively in a formal setting.",
        skills: [
          "UN structure and committee procedures",
          "Country research and position papers",
          "Formal speech-making and points of order",
          "Resolution drafting and negotiation",
          "Global issues: climate, security, human rights",
        ],
        format: "Small group (4–6 students)",
      },
    ],
  },
  {
    id: "senior-secondary",
    label: "Senior Secondary",
    years: "S4 – S6",
    tagline: "Achieving Mastery",
    color: "#0F5A8F",
    textColor: "#F8FBFF",
    bgColor: "rgba(27,67,50,0.08)",
    programs: [
      {
        title: "World Scholar's Cup Preparation",
        desc: "Comprehensive preparation for the World Scholar's Cup — one of the world's most prestigious academic competitions. Students develop deep knowledge across multiple disciplines while honing their debate, writing, and collaborative skills.",
        skills: [
          "Multi-subject academic knowledge building",
          "Collaborative debate and team strategy",
          "Scholar's Bowl preparation",
          "Essay writing under competition conditions",
          "Global and interdisciplinary thinking",
        ],
        format: "Small group (3–5 students)",
      },
      {
        title: "University Preparation: Communication Skills",
        desc: "For students preparing for university applications and beyond. We work on personal statements, interview preparation, academic writing, and the communication skills that will serve them throughout higher education and their careers.",
        skills: [
          "Personal statement and essay writing",
          "University interview preparation",
          "Academic essay structure and argumentation",
          "Presentation and seminar skills",
          "Professional communication foundations",
        ],
        format: "1-on-1 intensive coaching",
      },
    ],
  },
];

const competitions = [
  {
    name: "Model United Nations (MUN)",
    level: "S1 – S6",
    desc: "Students represent countries in simulated UN committees, debating global issues and drafting resolutions. Develops diplomacy, research, formal speaking, and negotiation skills.",
    icon: "🌐",
  },
  {
    name: "World Scholar's Cup",
    level: "P5 – S6",
    desc: "A global academic competition combining collaborative debate, team challenge, and scholar's bowl across multiple subject areas. One of the most prestigious student competitions in the world.",
    icon: "🏆",
  },
  {
    name: "Public Speaking Competitions",
    level: "P1 – S6",
    desc: "From school-level competitions to inter-school and open competitions. We prepare students for both prepared speeches and impromptu speaking challenges.",
    icon: "🎤",
  },
  {
    name: "Debate Tournaments",
    level: "P3 – S6",
    desc: "British Parliamentary, Asian Parliamentary, and other formats. We prepare students for inter-school and open tournaments at all levels of competition.",
    icon: "⚖️",
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState("lower-primary");
  const competitionsSection = useInView();
  const activeGroup = ageGroups.find((g) => g.id === activeTab)!;

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

          <h1 className="font-display text-5xl lg:text-6xl font-semibold mb-4 leading-tight" style={{ color: "#F8FBFF" }}>
            Tailored to Every Stage
          </h1>
          <p className="font-body text-lg max-w-2xl" style={{ color: "rgba(253,246,236,0.8)" }}>
            From a child's first speech to competing at international MUN conferences — every programme is designed to meet students exactly where they are and take them further than they imagined.
          </p>
        </div>
      </section>

      {/* Age Group Tabs */}
      <section className="sticky top-16 md:top-20 z-40 shadow-sm" style={{ backgroundColor: "#E8F2FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {ageGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className="flex-shrink-0 px-5 py-4 font-body text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap"
                style={{
                  borderBottomColor: activeTab === group.id ? "#0F5A8F" : "transparent",
                  color: activeTab === group.id ? "#0F5A8F" : "#4A4A4A",
                  backgroundColor: "transparent",
                  fontWeight: activeTab === group.id ? 700 : 400,
                }}
              >
                <span>{group.label}</span>
                <span
                  className="ml-2 text-xs px-2 py-0.5 rounded-full font-body"
                  style={{
                    backgroundColor: activeTab === group.id ? "rgba(27,67,50,0.12)" : "rgba(0,0,0,0.06)",
                    color: activeTab === group.id ? "#0F5A8F" : "#666",
                  }}
                >
                  {group.years}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Content */}
      <section className="py-20" style={{ backgroundColor: "#F8FBFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div
              className="inline-block font-accent text-lg px-4 py-1.5 rounded-full mb-3"
              style={{
                backgroundColor: activeGroup.bgColor,
                color: activeGroup.textColor === "#F8FBFF" ? activeGroup.color : activeGroup.textColor,
              }}
            >
              {activeGroup.tagline}
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold" style={{ color: "#0F5A8F" }}>
              {activeGroup.label} Programmes
              <span className="font-body text-base font-normal ml-3" style={{ color: "#2E9FD8" }}>
                {activeGroup.years}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeGroup.programs.map((prog, i) => (
              <div
                key={prog.title}
                className="rounded-xl overflow-hidden shadow-sm card-lift"
                style={{ backgroundColor: "#F8FBFF", border: "1px solid rgba(27,67,50,0.1)" }}
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: activeGroup.color }}
                />
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#0F5A8F" }}>
                    {prog.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#1A2332" }}>
                    {prog.desc}
                  </p>

                  <div className="mb-6">
                    <div className="font-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#2E9FD8" }}>
                      Skills Developed
                    </div>
                    <ul className="space-y-2">
                      {prog.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "#1B7AB8" }} />
                          <span className="font-body text-sm" style={{ color: "#1A2332" }}>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="grid grid-cols-2 gap-4 pt-5"
                    style={{ borderTop: "1px solid rgba(27,67,50,0.1)" }}
                  >
                    <div>
                      <div className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#2E9FD8" }}>
                        Format
                      </div>
                      <div className="font-body text-sm" style={{ color: "#1A2332" }}>
                        {prog.format}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "#0F5A8F", color: "#F8FBFF" }}
            >
              Enquire About This Programme <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Pathway */}
      <section className="py-24" style={{ backgroundColor: "#E8F2FB" }}>
        <div
          ref={competitionsSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
                Competition Pathway
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-5 leading-tight" style={{ color: "#0F5A8F" }}>
                From Classroom to World Stage
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: "#1A2332" }}>
                For students who are ready to take their skills beyond the classroom, we offer dedicated preparation for some of the world's most prestigious academic competitions. These experiences build not just communication skills, but resilience, global awareness, and lifelong friendships.
              </p>
            </div>
            <div className="relative">
              <img
                src={MUN_IMG}
                alt="Model United Nations conference"
                className="rounded-xl shadow-xl w-full object-cover"
                style={{ maxHeight: "380px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {competitions.map((comp, i) => (
              <div
                key={comp.name}
                className={`card-lift rounded-xl p-7 transition-all duration-700 ${competitionsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: "#F8FBFF",
                  boxShadow: "0 4px 20px rgba(27,67,50,0.08)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="text-3xl mb-4">{comp.icon}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold" style={{ color: "#0F5A8F" }}>
                    {comp.name}
                  </h3>
                  <span
                    className="font-body text-xs px-2.5 py-1 rounded-full ml-3 shrink-0 font-medium"
                    style={{ backgroundColor: "rgba(27,67,50,0.1)", color: "#0F5A8F" }}
                  >
                    {comp.level}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="py-24" style={{ backgroundColor: "#0F5A8F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={DEBATE_IMG}
                alt="Students in debate"
                className="rounded-xl shadow-2xl w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div>
              <div className="font-accent text-xl mb-3" style={{ color: "#2E9FD8" }}>
                How We Teach
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#F8FBFF" }}>
                Personalised. Progressive. Purposeful.
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Small Groups & 1-on-1",
                    desc: "Every student receives individual attention. Small group sizes ensure personalised feedback and a safe space to take risks.",
                  },
                  {
                    title: "Real-World Topics",
                    desc: "We use topics that genuinely matter — from everyday school life to global issues — so students are always engaged and motivated.",
                  },
                  {
                    title: "Structured Progression",
                    desc: "Each programme builds on the last. Skills are introduced, practised, and refined over time — creating lasting competence, not temporary performance.",
                  },
                  {
                    title: "Empathy as a Core Skill",
                    desc: "We teach students to genuinely listen and understand perspectives different from their own — a skill as valuable in life as in debate.",
                  },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <Star size={18} className="mt-1 shrink-0" style={{ color: "#2E9FD8" }} />
                    <div>
                      <div className="font-body font-semibold text-sm mb-1" style={{ color: "#F8FBFF" }}>
                        {point.title}
                      </div>
                      <div className="font-body text-sm" style={{ color: "rgba(253,246,236,0.7)" }}>
                        {point.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: "#2E9FD8", color: "#0A3A5C" }}
                >
                  Book a Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
