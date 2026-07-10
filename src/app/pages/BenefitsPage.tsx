import { useNavigate } from "react-router";
import { Recycle, Leaf, Trash2, ArrowRight, TrendingDown, Droplets, Zap, DollarSign, Globe, Users } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    stat: "95%",
    label: "Less energy",
    title: "Recycling saves massive energy",
    body: "Producing aluminum from recycled cans uses 95% less energy than smelting new aluminum from bauxite ore. Steel from scrap saves 60%, glass 30%, and paper up to 40%.",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    stat: "~1.9B",
    label: "Tonnes of CO₂ avoided annually",
    title: "Fewer greenhouse gas emissions",
    body: "Landfilling organic waste produces methane — a greenhouse gas 80× more potent than CO₂ over 20 years. Composting and recycling redirect that waste into resources instead.",
    color: "bg-[#dde8c0]",
    accent: "#4a8a20",
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    stat: "50%",
    label: "Less water in paper production",
    title: "Recycling conserves water",
    body: "Making paper from recycled fiber uses roughly half the water required for virgin paper. Recycled steel production uses 40% less water than processing raw iron ore.",
    color: "bg-[#e0d9b8]",
    accent: "#7a5c1e",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    stat: "8M",
    label: "Tonnes of plastic enter oceans yearly",
    title: "Keeps plastic out of oceans",
    body: "Properly recycled plastics usually never reach waterways. Of the plastic that does enter oceans, much comes from improperly disposed single-use items — exactly what recycling programs target.",
    color: "bg-[#d4c9a8]",
    accent: "#2d5a27",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    stat: "$236B",
    label: "US recycling industry revenue",
    title: "Recycling creates jobs & economy",
    body: "The U.S. recycling and reuse industry employs over 1.1 million workers and generates $236 billion in gross annual sales. For every 1 job in landfilling, recycling creates 10.",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  },
  {
    icon: <Users className="w-6 h-6" />,
    stat: "30%",
    label: "Of landfill is food waste",
    title: "Composting regenerates soil",
    body: "Compost enriches soil with nutrients, improves water retention, and reduces the need for synthetic fertilizers. One ton of compost can replace up to 6 lbs of chemical fertilizer.",
    color: "bg-[#e4d9b8]",
    accent: "#7a5c1e",
  },
];

const comparisons = [
  { material: "Aluminum Can", recycled: "60 days", landfill: "200–500 years", icon: "🥫" },
  { material: "Glass Bottle", recycled: "30 days", landfill: "1 million years", icon: "🍶" },
  { material: "Newspaper", recycled: "1–6 weeks", landfill: "2–6 weeks (but methane forms)", icon: "📰" },
  { material: "Plastic Bottle", recycled: "Reused in weeks", landfill: "450+ years", icon: "🧴" },
  { material: "Food Scraps", recycled: "2–6 months (compost)", landfill: "Decades + methane", icon: "🥦" },
  { material: "Cardboard", recycled: "2–3 weeks", landfill: "2 months (if dry)", icon: "📦" },
];

const guides = [
  { path: "/recycling", label: "Recycling Guide", icon: Recycle, color: "#2d5a27", bg: "bg-[#c8d5b9]" },
  { path: "/compost", label: "Compost Guide", icon: Leaf, color: "#7a5c1e", bg: "bg-[#e0d9b8]" },
  { path: "/trash", label: "Trash Guide", icon: Trash2, color: "#4a3f35", bg: "bg-[#d9cfc4]" },
];

export default function BenefitsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[700px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-[400px] h-[300px] rounded-full bg-secondary/40 blur-2xl" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-widest font-semibold text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
              Why it matters
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-[0.95] text-primary mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The benefits of{" "}
            <span className="text-accent">disposing right.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Recycling, composting, and proper trash disposal aren't just feel-good habits — they have
            measurable, documented impact on energy use, emissions, water, jobs, and the health of ecosystems.
          </p>
        </div>
      </section>

      {/* Stat cards */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-primary mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            By the numbers
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className={`${b.color} rounded-3xl p-8 border border-border hover:shadow-xl transition-shadow`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-[#f5f0e8]" style={{ backgroundColor: b.accent }}>
                  {b.icon}
                </div>
                <p className="text-4xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif", color: b.accent }}>
                  {b.stat}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {b.label}
                </p>
                <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decomposition comparison */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              Decomposition times
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recycled vs. landfilled
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              The difference between recycling something and throwing it away can be measured in centuries.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Material</th>
                  <th className="text-left py-3 px-4 font-semibold" style={{ color: "#2d5a27" }}>Recycled / Composted</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#c0392b]">In Landfill</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.material} className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                    <td className="py-4 px-4">
                      <span className="mr-2">{row.icon}</span>
                      <span className="font-medium text-foreground">{row.material}</span>
                    </td>
                    <td className="py-4 px-4 font-semibold" style={{ color: "#2d5a27" }}>{row.recycled}</td>
                    <td className="py-4 px-4 text-[#c0392b] font-semibold">{row.landfill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Impact breakdown */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              The big picture
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Small habits, outsized impact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The average American generates about 4.9 pounds of waste per day. Of that, the EPA estimates
              roughly 32% is recycled or composted — but up to 75% could be diverted from landfills with
              proper sorting.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That gap — between what we recycle and what we could recycle — represents millions of tons
              of recoverable materials buried underground each year. Closing it doesn't require new
              technology. It requires awareness and habit.
            </p>
            <div className="space-y-4">
              {[
                { label: "Waste currently recycled or composted", pct: 32, color: "#2d5a27" },
                { label: "Waste that could be diverted with better sorting", pct: 75, color: "#7ab648" },
                { label: "Waste that truly must go to landfill", pct: 25, color: "#8a7a6a" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{bar.label}</span>
                    <span className="font-bold text-foreground">{bar.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${bar.pct}%`, backgroundColor: bar.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌳", value: "17", unit: "trees saved", sub: "per ton of recycled paper" },
              { emoji: "💧", value: "7,000", unit: "gallons of water", sub: "saved per ton of recycled paper" },
              { emoji: "⚡", value: "4,000", unit: "kWh of electricity", sub: "saved recycling 1 ton of aluminum" },
              { emoji: "🌍", value: "1 ton", unit: "less CO₂", sub: "composting 1 ton of food vs. landfill" },
            ].map((card) => (
              <div key={card.unit} className="bg-card rounded-2xl p-5 border border-border">
                <div className="text-3xl mb-3">{card.emoji}</div>
                <p className="text-2xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{card.value}</p>
                <p className="text-sm font-semibold text-foreground">{card.unit}</p>
                <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to guides */}
      <section className="px-6 md:px-16 py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to start?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
            Pick a bin and learn exactly what goes inside.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {guides.map(({ path, label, icon: Icon, color, bg }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`${bg} flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105`}
                style={{ color }}
              >
                <Icon className="w-4 h-4" />
                {label}
                <ArrowRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
