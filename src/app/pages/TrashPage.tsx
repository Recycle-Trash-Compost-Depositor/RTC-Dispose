import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, XCircle, ChevronDown, AlertTriangle, Info, Trash2 } from "lucide-react";

const categories = [
  {
    label: "Food & Kitchen",
    color: "bg-[#d9cfc4]",
    accepted: [
      "Meat, bones & seafood scraps",
      "Dairy products (cheese, butter, yogurt)",
      "Oily or greasy food waste",
      "Candy wrappers & chip bags",
      "Disposable cups & plates (wax-coated)",
      "Coffee pods & tea bags with staples",
    ],
    notAccepted: [
      "Vegetable & fruit scraps (compost instead)",
      "Coffee grounds & paper filters (compost)",
      "Eggshells (compost instead)",
      "Recyclable glass jars & bottles",
      "Aluminum cans & foil (recycle instead)",
    ],
    note: "Many food scraps belong in compost, not trash. Check the compost guide for what's accepted.",
  },
  {
    label: "Household Items",
    color: "bg-[#d0cac0]",
    accepted: [
      "Broken ceramics & pottery",
      "Mirrors & window glass (wrapped safely)",
      "Broken light bulbs (wrapped)",
      "Worn-out clothing & textiles (non-donatable)",
      "Rubber gloves & cleaning sponges",
      "Disposable razors",
      "Pens, markers & highlighters",
      "Tape & stickers",
    ],
    notAccepted: [
      "Working electronics (e-waste drop-off)",
      "Clothing in good condition (donate)",
      "Usable furniture (donate or bulk pickup)",
      "Batteries (hazardous waste)",
      "CFL & fluorescent bulbs (hazardous waste)",
    ],
    note: "Electronics, batteries, and fluorescent bulbs require special hazardous waste disposal.",
  },
  {
    label: "Hygiene & Health",
    color: "bg-[#cec9be]",
    accepted: [
      "Diapers & sanitary products",
      "Bandages & medical tape",
      "Cotton balls & swabs",
      "Disposable gloves",
      "Face masks (non-N95)",
      "Prescription blister packs",
      "Empty medication bottles (labels removed)",
    ],
    notAccepted: [
      "Sharps & needles (sharps container required)",
      "Unused medications (pharmacy take-back)",
      "N95 respirators (check local rules)",
      "COVID-19 rapid tests (check local rules)",
    ],
    note: "Needles and sharps must never go in regular trash. Use a certified sharps disposal container.",
  },
  {
    label: "Hazardous Materials",
    color: "bg-[#c8c2b8]",
    accepted: [
      "Empty aerosol cans (fully empty, cap off)",
      "Dried-out paint cans (lid off to dry)",
      "Small amounts of pet waste (bagged)",
    ],
    notAccepted: [
      "Motor oil & automotive fluids (auto shop drop-off)",
      "Paint (liquid) — take to hazmat facility",
      "Pesticides & herbicides (hazmat facility)",
      "Pool chemicals (hazmat facility)",
      "Propane tanks & gas canisters",
      "Batteries — all types (hazmat or retail drop-off)",
      "Fluorescent & CFL bulbs (hazmat facility)",
      "Smoke detectors (manufacturer take-back)",
    ],
    note: "Hazardous materials require special disposal. Search your city's hazardous waste program for drop-off locations.",
  },
];

const tips = [
  {
    icon: <Trash2 className="w-5 h-5" />,
    title: "Bag it securely",
    body: "Always use tied, leak-proof bags for trash. Loose waste attracts pests and can create health and safety hazards for collection workers.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Wrap sharp objects",
    body: "Broken glass, razors, and other sharp items must be wrapped in newspaper or placed in a sealed box before going in the bin. Never toss loose sharps.",
  },
  {
    icon: <Info className="w-5 h-5" />,
    title: "Don't overfill the bin",
    body: "Lids must close fully for collection. If your bin is overflowing, hold non-urgent items for next week or check if your city offers bulk pickup.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Last resort only",
    body: "Trash is the last stop. Before binning something, ask: can it be recycled, composted, donated, or taken to a special drop-off? Landfill space is finite.",
  },
];

const faqs = [
  {
    q: "Can I put broken glass in the trash?",
    a: "Yes, but only if it is wrapped safely. Place broken glass in several layers of newspaper, seal it with tape, and put it in a rigid cardboard box if possible. Label it 'broken glass' so collectors are warned.",
  },
  {
    q: "What do I do with old medications?",
    a: "Do not flush medications or put them in the trash unless the label specifically says to. Instead, use a pharmacy take-back program or DEA-authorized collection site. Many pharmacies have in-store drop boxes.",
  },
  {
    q: "How do I dispose of batteries?",
    a: "Batteries should never go in household trash. Most grocery and hardware stores have free drop-off boxes for AA, AAA, and other household batteries. Car batteries go back to auto shops or retailers.",
  },
  {
    q: "Can I throw away motor oil or paint?",
    a: "No. Liquid paint and motor oil are hazardous. Take them to your city's household hazardous waste (HHW) facility. Dried latex paint in an open can is generally accepted in trash — leave the lid off until fully dry.",
  },
  {
    q: "What about needles and syringes?",
    a: "Sharps must be placed in a certified puncture-resistant sharps container. Once full, seal it and take it to a sharps drop-off location — many pharmacies and clinics accept them.",
  },
  {
    q: "Can I put cat or dog waste in the trash?",
    a: "Yes, pet waste in a sealed bag can go in your regular trash bin. Do not compost pet waste — it contains pathogens that standard home composting cannot eliminate.",
  },
];

export default function TrashPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-[#8a7a6a]/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#6b5d4f]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6b5d4f]" style={{ fontFamily: "'DM Mono', monospace" }}>
              Trash Guide
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-[0.95] text-primary mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What goes in the{" "}
            <span style={{ color: "#6b5d4f" }}>trash bin?</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Trash is the last resort — anything that can't be recycled, composted, or donated.
            This guide covers what truly belongs in the bin, and what requires special disposal.
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

      {/* Reduce first banner */}
      <div className="mx-6 md:mx-16 mb-2 rounded-2xl bg-[#e8e0d4] border border-[#c8bfb0] px-6 py-4 flex items-start gap-3 max-w-5xl md:mx-auto" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <AlertTriangle className="w-5 h-5 text-[#6b5d4f] shrink-0 mt-0.5" />
        <p className="text-sm text-[#4a3f35]">
          <strong>Trash is the last resort.</strong> Before binning something, check whether it belongs in{" "}
          <Link to="/recycling" className="underline underline-offset-2 hover:text-primary transition-colors">recycling</Link>{" "}
          or{" "}
          <Link to="/compost" className="underline underline-offset-2 hover:text-primary transition-colors">compost</Link>.
          Only use the trash bin when no other option applies.
        </p>
      </div>

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
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === i
                    ? "bg-[#4a3f35] text-[#f5f0e8] border-[#4a3f35]"
                    : "border-border hover:bg-muted text-muted-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {categories.map((cat, i) =>
            activeTab !== i ? null : (
              <div key={cat.label} className="grid md:grid-cols-2 gap-6">
                {/* Accepted */}
                <div className={`${cat.color} rounded-3xl p-8 border border-[#b8afa4]`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#4a3f35] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#f5f0e8]" />
                    </div>
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ✓ Goes in Trash
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.accepted.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#6b5d4f] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not accepted */}
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#c0392b] flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ✗ Does Not Belong
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
                    <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
                      {cat.note}
                    </p>
                  )}
                </div>
              </div>
            )
          )}

          {/* Summary grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(i)}
                className={`${c.color} rounded-2xl p-5 text-left border transition-all hover:shadow-md ${
                  activeTab === i ? "border-[#4a3f35] ring-2 ring-[#4a3f35]/20" : "border-[#b8afa4]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {i + 1} of 4
                </p>
                <p className="font-bold text-primary text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.accepted.length} items listed</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-[#6b5d4f]" style={{ fontFamily: "'DM Mono', monospace" }}>
              Before you bin it
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Safe trash disposal tips
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#6b5d4f]/10 flex items-center justify-center text-[#6b5d4f] mb-4">
                  {tip.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hazardous reference */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-[#6b5d4f]" style={{ fontFamily: "'DM Mono', monospace" }}>
              Special disposal
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Never put these in trash
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              These items require dedicated drop-off or take-back programs. Putting them in trash risks contamination, fires, and harm to workers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { item: "Batteries", where: "Retailer drop-off (Best Buy, Home Depot, Staples)", icon: "🔋" },
              { item: "Motor Oil", where: "Auto parts stores or service stations", icon: "🛢️" },
              { item: "Paint (liquid)", where: "Household hazardous waste facility or PaintCare", icon: "🎨" },
              { item: "Medications", where: "Pharmacy take-back or DEA collection site", icon: "💊" },
              { item: "Sharps & Needles", where: "Sharps container → pharmacy or clinic drop-off", icon: "💉" },
              { item: "Electronics", where: "E-waste recycler or retailer take-back program", icon: "📱" },
              { item: "Fluorescent Bulbs", where: "Hardware store drop-off (Home Depot, Lowe's)", icon: "💡" },
              { item: "Propane Tanks", where: "Exchange programs at hardware or grocery stores", icon: "🔥" },
              { item: "Pesticides", where: "Household hazardous waste facility", icon: "☠️" },
            ].map((h) => (
              <div key={h.item} className="bg-card rounded-2xl p-5 border border-border flex items-start gap-4">
                <span className="text-2xl shrink-0">{h.icon}</span>
                <div>
                  <p className="font-bold text-primary mb-1">{h.item}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-16 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-[#6b5d4f]" style={{ fontFamily: "'DM Mono', monospace" }}>
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
                  <div className="px-6 pb-5 pt-3 text-muted-foreground text-sm leading-relaxed border-t border-border">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
