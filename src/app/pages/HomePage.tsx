import { useNavigate } from "react-router";
import { Recycle, Trash2, Leaf, ArrowRight } from "lucide-react";

const bins = [
  {
    path: "/recycling",
    label: "Recycling",
    tagline: "Bottles, cans, cardboard & more",
    icon: Recycle,
    binColor: "#2d5a27",
    binLight: "#7ab648",
    lidColor: "#1e3d1b",
    symbol: "♻",
    bg: "bg-[#c8d5b9]",
    border: "border-[#2d5a27]/30",
    ring: "hover:ring-[#7ab648]/40",
    badge: "bg-accent/20 text-primary border-accent/30",
    description: "Learn what goes in the blue bin — paper, plastic, glass, and metal sorted by type.",
  },
  {
    path: "/compost",
    label: "Compost",
    tagline: "Food scraps & yard waste",
    icon: Leaf,
    binColor: "#7a5c1e",
    binLight: "#c8a84b",
    lidColor: "#4f3a10",
    symbol: "🌱",
    bg: "bg-[#e4d9b8]",
    border: "border-[#7a5c1e]/30",
    ring: "hover:ring-[#c8a84b]/40",
    badge: "bg-[#c8a84b]/20 text-[#4f3a10] border-[#c8a84b]/30",
    description: "Discover which food scraps, yard trimmings, and organics belong in the compost bin.",
  },
  {
    path: "/trash",
    label: "Trash",
    tagline: "Everything else — last resort",
    icon: Trash2,
    binColor: "#4a3f35",
    binLight: "#8a7a6a",
    lidColor: "#2e2720",
    symbol: "🗑",
    bg: "bg-[#d9cfc4]",
    border: "border-[#4a3f35]/30",
    ring: "hover:ring-[#8a7a6a]/40",
    badge: "bg-[#6b5d4f]/15 text-[#3a2e25] border-[#6b5d4f]/30",
    description: "Find out what truly belongs in the trash — and what needs special disposal instead.",
  },
];

function BinIllustration({ binColor, lidColor, binLight, symbol }: { binColor: string; lidColor: string; binLight: string; symbol: string }) {
  return (
    <div className="relative flex flex-col items-center select-none" style={{ width: 120, height: 148 }}>
      {/* Lid */}
      <div
        className="relative z-10 rounded-t-xl"
        style={{
          width: 128,
          height: 20,
          background: lidColor,
          boxShadow: `0 2px 8px ${lidColor}88`,
          marginBottom: -4,
        }}
      >
        {/* Lid handle */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-3 rounded-full"
          style={{ width: 36, height: 12, background: lidColor }}
        />
      </div>
      {/* Body */}
      <div
        className="relative flex flex-col items-center justify-center rounded-b-2xl rounded-t-sm overflow-hidden"
        style={{
          width: 120,
          height: 128,
          background: `linear-gradient(160deg, ${binLight}33 0%, ${binColor} 60%)`,
          backgroundColor: binColor,
          boxShadow: `inset -6px 0 16px rgba(0,0,0,0.25), 0 8px 24px ${binColor}66`,
        }}
      >
        {/* Vertical ridges */}
        {[28, 52, 76, 100].map((x) => (
          <div
            key={x}
            className="absolute top-0 bottom-0"
            style={{
              left: x,
              width: 2,
              background: "rgba(255,255,255,0.07)",
            }}
          />
        ))}
        {/* Symbol */}
        <span className="text-4xl z-10 drop-shadow-md">{symbol}</span>
        {/* Shine */}
        <div
          className="absolute top-3 left-4 rounded-full opacity-20"
          style={{ width: 18, height: 40, background: "white", filter: "blur(6px)" }}
        />
      </div>
      {/* Shadow */}
      <div
        className="rounded-full mt-2 opacity-30 blur-sm"
        style={{ width: 90, height: 10, background: binColor }}
      />
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero text */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest font-semibold text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>
            RTC Dispose
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
        <h1
          className="text-5xl md:text-7xl font-black leading-[0.95] text-primary mb-5 max-w-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where does it{" "}
          <em className="text-accent not-italic">go?</em>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
          Choose a bin to learn exactly what belongs inside — and what doesn't.
        </p>
      </section>

      {/* Bins */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {bins.map(({ path, label, tagline, icon: Icon, binColor, binLight, lidColor, symbol, bg, border, ring, badge, description }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`group ${bg} ${border} ${ring} rounded-3xl border p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:ring-4 focus:outline-none focus:ring-4`}
            >
              {/* Bin illustration */}
              <div className="mb-8 transition-transform duration-300 group-hover:-translate-y-2">
                <BinIllustration binColor={binColor} lidColor={lidColor} binLight={binLight} symbol={symbol} />
              </div>

              {/* Label */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${badge}`}>
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>

              <h2
                className="text-2xl font-black text-primary mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {label} Bin
              </h2>
              <p className="text-sm font-medium text-muted-foreground mb-4">{tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>

              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition-colors"
                style={{ backgroundColor: binColor }}
              >
                See the guide
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Bottom note */}
      <div className="pb-12 text-center">
        <p className="text-xs text-muted-foreground max-w-sm mx-auto">
          Rules vary by municipality. These guides follow general best practices — always check your local program for specifics.
        </p>
      </div>
    </div>
  );
}
