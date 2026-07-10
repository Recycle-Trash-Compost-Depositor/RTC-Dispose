import { useState } from "react";
import { CheckCircle, XCircle, ChevronDown, AlertTriangle, Leaf, Info } from "lucide-react";

const categories = [
  {
    label: "Fruit & Vegetables",
    color: "bg-[#dde8c0]",
    accepted: [
      "Fruit scraps & peels (citrus too)",
      "Vegetable trimmings & peels",
      "Corn cobs & husks",
      "Avocado pits & skins",
      "Moldy or overripe produce",
      "Spoiled salad greens",
      "Fruit pits & seeds",
    ],
    notAccepted: [
      "Produce contaminated with pesticide residue (check local rules)",
    ],
    note: "Fruit and vegetable scraps are the backbone of compost — virtually all of them are welcome.",
  },
  {
    label: "Grains & Baked Goods",
    color: "bg-[#e0d9b8]",
    accepted: [
      "Bread, tortillas & crackers (stale or moldy)",
      "Pasta & rice (cooked or uncooked)",
      "Oatmeal & cereal",
      "Coffee grounds & paper filters",
      "Tea leaves & paper tea bags",
      "Eggshells",
    ],
    notAccepted: [
      "Heavily salted or heavily seasoned foods",
      "Bread with meat or dairy toppings",
    ],
    note: "Plain baked goods and grains break down well. Avoid items loaded with oil, salt, or animal products.",
  },
  {
    label: "Paper & Yard Waste",
    color: "bg-[#d8e4c4]",
    accepted: [
      "Dry leaves & grass clippings",
      "Garden trimmings & weeds (without seeds)",
      "Wood chips & small branches",
      "Unbleached paper towels & napkins",
      "Cardboard (shredded, no wax)",
      "Paper bags & newspaper",
      "Wood ash (small amounts)",
    ],
    notAccepted: [
      "Diseased plants (can spread pathogens)",
      "Weeds that have gone to seed",
      "Glossy or coated paper",
      "Treated or painted wood",
    ],
    note: "Browns (carbon-rich materials like paper and dry leaves) balance the greens. Aim for roughly 3 parts brown to 1 part green.",
  },
  {
    label: "What Never Goes In",
    color: "bg-[#e8ddd0]",
    accepted: [],
    notAccepted: [
      "Meat, poultry & fish (attracts pests)",
      "Dairy products — milk, cheese, butter",
      "Oils, fats & grease",
      "Pet waste — cats, dogs (pathogens)",
      "Diseased or insect-ridden plants",
      "Coal or charcoal ash",
      "Glossy paper & cardboard with wax coating",
      "Anything treated with pesticides",
      "Human or animal feces",
    ],
    note: "These items either attract pests, contain harmful pathogens, or introduce chemicals that damage the compost.",
  },
];

const tips = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Balance greens & browns",
    body: "Compost needs roughly 3 parts carbon-rich 'browns' (dry leaves, paper) for every 1 part nitrogen-rich 'greens' (food scraps). Too many greens and it gets slimy and smelly.",
  },
  {
    icon: <Info className="w-5 h-5" />,
    title: "Keep it moist",
    body: "Your compost pile should feel like a wrung-out sponge — damp but not dripping. Too dry slows breakdown; too wet creates odors and anaerobic conditions.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Chop it up",
    body: "Smaller pieces break down faster. Chop or tear food scraps and shred cardboard before adding. The more surface area, the quicker microbes can get to work.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Turn regularly",
    body: "Aerate your pile by turning it with a fork every 1–2 weeks. This introduces oxygen, speeds decomposition, and prevents odors from building up.",
  },
];

const faqs = [
  {
    q: "Can I compost citrus peels and onions?",
    a: "Yes. The myth that citrus and onions harm compost is outdated. In a healthy, active pile they break down fine. In very large quantities they can slow things slightly — just mix them in with other materials.",
  },
  {
    q: "Why does my compost smell bad?",
    a: "A rotten or ammonia smell usually means too many greens (nitrogen) and not enough browns (carbon), or the pile is too wet and compacted. Add dry leaves or shredded cardboard and turn it to introduce air.",
  },
  {
    q: "How long does composting take?",
    a: "Anywhere from 2 months to a year, depending on pile size, materials, moisture, and how often you turn it. Hot composting with regular turning can produce finished compost in 4–8 weeks.",
  },
  {
    q: "Can I compost in an apartment?",
    a: "Yes — vermicomposting (worm bins) works well in small spaces with no outdoor access. A well-maintained worm bin produces no odor and can sit under the sink or in a cabinet.",
  },
  {
    q: "What does finished compost look like?",
    a: "Ready compost is dark brown, crumbly, and smells earthy — like forest floor. You shouldn't be able to identify individual food scraps. If materials are still recognizable, give it more time.",
  },
  {
    q: "Can I compost paper towels and napkins?",
    a: "Yes, as long as they haven't been used to clean up chemicals, heavy grease, or toxic substances. Plain food-soiled paper towels compost well.",
  },
];

export default function CompostPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const compostBrown = "#7a5c1e";
  const compostAccent = "#c8a84b";

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" style={{ backgroundColor: `${compostAccent}18` }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: compostAccent }} />
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'DM Mono', monospace", color: compostBrown }}>
              Compost Guide
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-[0.95] text-primary mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What goes in the{" "}
            <span style={{ color: compostBrown }}>compost bin?</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Composting transforms food scraps and yard waste into rich soil — but only when the
            right materials go in. This guide covers exactly what belongs in the bin, and what doesn't.
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
            By category
          </h2>
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all border"
                style={
                  activeTab === i
                    ? { backgroundColor: compostBrown, color: "#f5f0e8", borderColor: compostBrown }
                    : {}
                }
              >
                {activeTab !== i && <span className="text-muted-foreground">{c.label}</span>}
                {activeTab === i && c.label}
              </button>
            ))}
          </div>

          {categories.map((cat, i) =>
            activeTab !== i ? null : (
              <div key={cat.label} className="grid md:grid-cols-2 gap-6">
                {cat.accepted.length > 0 ? (
                  <div className={`${cat.color} rounded-3xl p-8 border border-[#b8c49a]`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: compostBrown }}>
                        <CheckCircle className="w-5 h-5 text-[#f5f0e8]" />
                      </div>
                      <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                        ✓ Compost This
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {cat.accepted.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: compostAccent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-card rounded-3xl p-8 border border-border flex flex-col justify-center">
                    <p className="text-muted-foreground text-sm italic">Nothing in this category belongs in compost.</p>
                  </div>
                )}
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#c0392b] flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ✗ Keep Out
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
                  {cat.note && (
                    <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">{cat.note}</p>
                  )}
                </div>
              </div>
            )
          )}

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(i)}
                className={`${c.color} rounded-2xl p-5 text-left border transition-all hover:shadow-md`}
                style={activeTab === i ? { borderColor: compostBrown, outline: `2px solid ${compostBrown}33` } : { borderColor: "#c8bfa4" }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {i + 1} of 4
                </p>
                <p className="font-bold text-primary text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.accepted.length > 0 ? `${c.accepted.length} items accepted` : "Avoid all"}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Greens vs Browns explainer */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: compostBrown }}>
              The fundamentals
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Greens vs. Browns
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Healthy compost is a balance of nitrogen-rich "greens" and carbon-rich "browns." Too much of either causes problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#d8e8b8] rounded-3xl p-8 border border-[#a8c880]">
              <div className="text-3xl mb-4">🥦</div>
              <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Greens (Nitrogen)</h3>
              <p className="text-sm text-muted-foreground mb-4">Moist, fresh materials that provide nitrogen and fuel microbial activity.</p>
              <ul className="space-y-2 text-sm">
                {["Fruit & vegetable scraps", "Coffee grounds", "Fresh grass clippings", "Plant trimmings", "Eggshells"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a8a20] shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#e8d8a8] rounded-3xl p-8 border border-[#c8b870]">
              <div className="text-3xl mb-4">🍂</div>
              <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Browns (Carbon)</h3>
              <p className="text-sm text-muted-foreground mb-4">Dry, fibrous materials that provide carbon, add structure, and prevent odors.</p>
              <ul className="space-y-2 text-sm">
                {["Dry leaves", "Cardboard & newspaper (shredded)", "Paper bags & paper towels", "Straw & wood chips", "Paper egg cartons"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: compostBrown }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 p-5 bg-background rounded-2xl border border-border text-sm text-muted-foreground text-center">
            Aim for <strong className="text-foreground">3 parts brown</strong> to <strong className="text-foreground">1 part green</strong> by volume for a balanced, odor-free pile.
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: compostBrown }}>
              Best practices
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tips for a healthy pile
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${compostAccent}20`, color: compostBrown }}>
                  {tip.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-16 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: compostBrown }}>
              Common questions
            </p>
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
