import { useNavigate } from "react-router";
import { Recycle, Leaf, Trash2, Heart, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Keshav Korattur",
    role: "Project Leader",
    bio: "Keshav is an intern, and during his time at his internship, he and 4 other people created a website to inform people about how to properly dispose of their waste. He helped in brainstorming, desiging, and coding the website.",
    initials: "KK",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  },
  {
    name: "Lorenza Day",
    role: "Documentor",
    bio: "Intern at Chociest Fruit during this internship he and 4 other people worked on helping people learn about separating trash from recycling, recycling from compost, and compost from trash.",
    initials: "LD",
    color: "bg-[#e0d9b8]",
    accent: "#602761",
  },

  {
    name: "Xavier Young",
    role: "Github Manager",
    bio: "Xavier is an intern and is the Github Manager for the RTC Dispose project. He has previously created a Portfolio website and one called Math Mastery.",
    initials: "XY",
    color: "bg-[#d9cfc4]",
    accent: "#4a3f35",
  },
  {
    name: "Javion Martinez",
    role: "Frontend Developer",
    bio: "Frontend developer with a passion for creating intuitive user experiences. Javion helps build the interactive elements of the RTC Dispose platform.",
    initials: "JM",
    color: "bg-[#d9cfc4]",
    accent: "#4a3f35",
  },
  {
    name: "Isaac Atkins",
    role: "UI/UX Designer",
    bio: "UI/UX designer with a focus on creating intuitive and engaging user experiences. Isaac helps shape the visual identity and interaction design of the RTC Dispose platform.",
    initials: "IA",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  }
];

const values = [
  {
    icon: "🎯",
    title: "Accuracy over simplicity",
    body: "Recycling rules are local, nuanced, and frequently misunderstood. We'd rather give you the full picture — including caveats — than oversimplify and cause contamination.",
  },
  {
    icon: "🌱",
    title: "Practical over preachy",
    body: "We're not here to lecture. We're here to give you clear, actionable information so disposing right becomes the easy default — not a chore.",
  },
  {
    icon: "🔍",
    title: "Evidence-based",
    body: "Our content is grounded in EPA data, peer-reviewed research, and input from working waste professionals — not recycling myths or wishful thinking.",
  },
  {
    icon: "🤝",
    title: "Community-first",
    body: "Good disposal habits have the biggest impact at scale. We build tools and guides that work for households, schools, offices, and community organizations.",
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-accent/10 blur-3xl -translate-y-1/3" />
        </div>
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-widest font-semibold text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
                About Us
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-[0.95] text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We help people{" "}
              <em className="text-accent not-italic">dispose right.</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              RTC Dispose is a free, open-source platform that helps people sort their waste with confidence. We provide simple guides for recycling, composting, and trash disposal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that most people want to do the right thing — they just need clear information
              to do it. That's why we built this.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Recycle, label: "Recycling", color: "#2d5a27", bg: "bg-[#c8d5b9]" },
              { icon: Leaf, label: "Compost", color: "#7a5c1e", bg: "bg-[#e0d9b8]" },
              { icon: Trash2, label: "Trash", color: "#4a3f35", bg: "bg-[#d9cfc4]" },
            ].map(({ icon: Icon, label, color, bg }) => (
              <div key={label} className={`${bg} rounded-2xl p-5 flex flex-col items-center justify-center aspect-square border border-border`}>
                <Icon className="w-8 h-8 mb-2" style={{ color }} strokeWidth={1.5} />
                <p className="text-xs font-bold" style={{ color }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              Our mission
            </p>
            <blockquote
              className="text-3xl md:text-4xl font-black text-primary leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "To close the gap between what people want to do for the planet and what they
              actually know how to do."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              The recycle, trash, and compost system can be confusing for people who want to dispose their things in a safe manner. We serve to provide a simple, easy-to-use platform that helps people sort their waste with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              What we stand for
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-7 border border-border hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              The people behind it
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className={`${member.color} rounded-3xl p-8 border border-border`}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[#f5f0e8] font-bold text-lg mb-5"
                  style={{ backgroundColor: member.accent }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-primary text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-10 h-10 mx-auto mb-5 text-accent" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's dispose right — together.
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto">
            Explore our guides and start sorting with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-foreground font-bold rounded-full hover:bg-accent/80 transition-colors"
            >
              Explore the guides <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/benefits")}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              See the benefits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}