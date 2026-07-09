import { useState } from "react";
import { CheckCircle, XCircle, ChevronDown, AlertTriangle, Info, Recycle } from "lucide-react";

const categories = [
  {
    label: "Paper & Cardboard",
    color: "bg-[#d4c9a8]",
    accepted: [
      "Cardboard boxes (flattened)",
      "Newspaper & magazines",
      "Office paper & envelopes",
      "Paper bags",
      "Cereal & cracker boxes",
      "Egg cartons (paper)",
      "Paper towel & toilet paper tubes",
      "Phone books & catalogs",
    ],
    notAccepted: [
      "Greasy pizza boxes",
      "Paper towels & napkins (used)",
      "Wax-coated paper",
      "Shredded paper (bag it separately)",
      "Tissues & paper plates",
    ],
  },
  {
    label: "Plastic",
    color: "bg-[#c8d5b9]",
    accepted: [
      "Water & soda bottles (#1 PET)",
      "Milk jugs & detergent bottles (#2 HDPE)",
      "Yogurt tubs & deli containers (#5 PP)",
      "Shampoo & conditioner bottles",
      "Plastic jars & tubs (clean)",
      "Juice & sports drink bottles",
    ],
    notAccepted: [
      "Plastic bags & wraps (return to store)",
      "Styrofoam / foam packaging",
      "Plastic straws & utensils",
      "Chip bags & candy wrappers",
      "Cling wrap",
      "Motor oil containers",
    ],
  },
  {
    label: "Glass",
    color: "bg-[#b8ccb4]",
    accepted: [
      "Glass food & beverage bottles",
      "Glass jars (pasta sauce, jam, etc.)",
      "Wine & beer bottles",
      "Clear, green, and brown glass",
    ],
    notAccepted: [
      "Broken glass (wrap & trash for safety)",
      "Window glass & mirrors",
      "Ceramics & pottery",
      "Light bulbs",
      "Pyrex / heat-resistant glass",
      "Crystal",
    ],
  },
  {
    label: "Metal",
    color: "bg-[#c5d0b0]",
    accepted: [
      "Aluminum cans (soda, beer, sparkling water)",
      "Steel & tin cans (soup, vegetables)",
      "Empty aerosol cans (caps removed)",
      "Aluminum foil & foil trays (clean)",
      "Metal bottle caps",
    ],
    notAccepted: [
      "Scrap metal & wiring (take to scrap yard)",
      "Paint cans with dried paint",
      "Propane tanks",
      "Needles & sharps",
      "Pots, pans & bakeware",
    ],
  },
];

const tips = [
  {
    icon: <Recycle className="w-5 h-5" />,
    title: "Empty & rinse",
    body: "A quick rinse is enough — just remove food residue. You don't need to scrub. Dirty containers can contaminate an entire load.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "No wishful recycling",
    body: "If you're not sure an item is recyclable, put it in the trash. Contamination from non-recyclables is one of the biggest problems in recycling.",
  },
  {
    icon: <Info className="w-5 h-5" />,
    title: "Flatten cardboard",
    body: "Break down boxes before placing them in the bin. Flat cardboard takes up far less space and helps the collection truck hold more.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Keep lids on",
    body: "Screw caps and lids back on bottles before recycling. Small caps can jam sorting machinery, but attached lids go right through.",
  },
];

const faqs = [
  {
    q: "Do I need to remove labels from bottles and cans?",
    a: "No. Labels are removed automatically during the recycling process. Just rinse the container and you're good to go.",
  },
  {
    q: "Can I recycle shredded paper?",
    a: "Most curbside programs don't accept loose shredded paper — it's too small for sorting machines. Place shredded paper in a sealed paper bag and check if your local facility accepts it.",
  },
  {
    q: "What do the numbers on plastic bottles mean?",
    a: "The number inside the recycling symbol (1–7) identifies the plastic resin type. #1 (PET) and #2 (HDPE) are the most widely accepted. #3–#7 vary by municipality — check your local guidelines.",
  },
  {
    q: "Can I recycle broken glass?",
    a: "No — broken glass is a safety hazard for sorting workers. Wrap it in newspaper, place in a sealed bag, and put it in the trash.",
  },
  {
    q: "Are aerosol cans recyclable?",
    a: "Yes, if they are completely empty. Remove the cap and place the can in your recycling bin. Never puncture an aerosol can.",
  },
];

export default function RecyclingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-widest font-semibold text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
              Recycling Guide
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-[0.95] text-primary mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What goes in the{" "}
            <span className="text-accent">recycling bin?</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Not everything with a recycling symbol is actually recyclable curbside. This guide
            breaks down exactly what belongs in your blue bin — and what doesn't — by material type.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => {
                  setActiveTab(i);
                  document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main guide */}
      <section id="guide" className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            By material
          </h2>
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${activeTab === i ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted text-muted-foreground"}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {categories.map((cat, i) =>
            activeTab !== i ? null : (
              <div key={cat.label} className="grid md:grid-cols-2 gap-6">
                <div className={`${cat.color} rounded-3xl p-8 border border-border`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ✓ Accepted
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.accepted.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#c0392b] flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ✗ Not Accepted
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.notAccepted.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#c0392b] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
                    Items marked "not accepted" may be recyclable through special drop-off programs. Check your local municipality.
                  </p>
                </div>
              </div>
            )
          )}

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(i)}
                className={`${c.color} rounded-2xl p-5 text-left border transition-all hover:shadow-md ${activeTab === i ? "border-primary ring-2 ring-primary/20" : "border-border"}`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {i + 1} of 4
                </p>
                <p className="font-bold text-primary text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.accepted.length} items accepted</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Before you toss it in</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>The golden rules of recycling</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-4">{tip.icon}</div>
                <h3 className="font-bold text-primary mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plastic decoder */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Plastic decoder</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>What do the numbers mean?</h2>
            <p className="text-muted-foreground mt-3 max-w-xl">The number stamped inside the recycling symbol tells you which resin the plastic is made of. Acceptance varies by city.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
            {[
              { num: "1", name: "PET", ex: "Water bottles", accepted: true },
              { num: "2", name: "HDPE", ex: "Milk jugs", accepted: true },
              { num: "3", name: "PVC", ex: "Pipes, vinyl", accepted: false },
              { num: "4", name: "LDPE", ex: "Plastic bags", accepted: false },
              { num: "5", name: "PP", ex: "Yogurt tubs", accepted: true },
              { num: "6", name: "PS", ex: "Styrofoam", accepted: false },
              { num: "7", name: "Other", ex: "Mixed resins", accepted: false },
            ].map((p) => (
              <div key={p.num} className={`rounded-2xl p-4 border text-center ${p.accepted ? "bg-[#c8d5b9] border-primary/20" : "bg-muted border-border"}`}>
                <div className={`text-2xl font-black mb-1 ${p.accepted ? "text-primary" : "text-muted-foreground"}`} style={{ fontFamily: "'Playfair Display', serif" }}>#{p.num}</div>
                <div className={`text-xs font-bold mb-1 ${p.accepted ? "text-primary" : "text-muted-foreground"}`} style={{ fontFamily: "'DM Mono', monospace" }}>{p.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{p.ex}</div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.accepted ? "bg-accent/20 text-primary" : "bg-background text-muted-foreground"}`}>
                  {p.accepted ? "✓ Usually OK" : "✗ Usually No"}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">* Acceptance varies by municipality. Always verify with your local recycling program.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-16 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Common questions</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden bg-background">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-muted transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-3 text-muted-foreground text-sm leading-relaxed border-t border-border">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
