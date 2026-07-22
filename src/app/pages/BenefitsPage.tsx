import { useNavigate } from "react-router";
import {
  Recycle,
  Leaf,
  Trash2,
  ArrowRight,
  TrendingDown,
  Droplets,
  Zap,
  DollarSign,
  Globe,
  Users,
} from "lucide-react";

/*
=========================================================
Sources
=========================================================
[1] U.S. Department of Energy
https://www.energy.gov

[2] U.S. EPA – Facts and Figures about Materials, Waste and Recycling
https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling

[3] EPA WARM Model
https://www.epa.gov/warm

[4] UNEP – From Pollution to Solution
https://www.unep.org/resources/pollution-solution-global-assessment-marine-litter-and-plastic-pollution

[5] World Bank – What a Waste 2.0
https://datatopics.worldbank.org/what-a-waste/

[6] Institute of Scrap Recycling Industries (ISRI)
https://www.isri.org

[7] USDA Composting
https://www.usda.gov

[8] USGS Mineral Commodity Summaries
https://www.usgs.gov
*/

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    stat: "95%",
    label: "Less energy",
    title: "Recycling saves massive energy",
    body:
      "Producing aluminum from recycled cans uses about 95% less energy than producing new aluminum from bauxite ore.[1] Recycling steel saves approximately 60–74% of energy, glass around 30%, and recycled paper uses significantly less energy than paper made from virgin wood pulp.[1][2]",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  },

  {
    icon: <TrendingDown className="w-6 h-6" />,
    stat: "1.8B+",
    label: "Metric tons CO₂e reduced",
    title: "Recycling lowers greenhouse gas emissions",
    body:
      "Recycling reduces greenhouse gas emissions by avoiding raw material extraction and manufacturing. Composting also prevents methane emissions from landfilled food waste, one of the most powerful greenhouse gases over short time scales.[3][5]",
    color: "bg-[#dde8c0]",
    accent: "#4a8a20",
  },

  {
    icon: <Droplets className="w-6 h-6" />,
    stat: "50%",
    label: "Less water",
    title: "Recycling conserves water",
    body:
      "Manufacturing paper from recycled fiber generally requires considerably less water than producing paper from virgin pulp. Recycling metals also substantially reduces industrial water consumption.[2][8]",
    color: "bg-[#e0d9b8]",
    accent: "#7a5c1e",
  },

  {
    icon: <Globe className="w-6 h-6" />,
    stat: "≈11M",
    label: "Metric tons of plastic enter oceans yearly",
    title: "Keeping plastics out of nature",
    body:
      "An estimated 11 million metric tons of plastic enter aquatic ecosystems each year. Recycling, reducing consumption, and proper disposal all help prevent plastic pollution.[4]",
    color: "bg-[#d4c9a8]",
    accent: "#2d5a27",
  },

  {
    icon: <DollarSign className="w-6 h-6" />,
    stat: "681K",
    label: "Jobs supported",
    title: "Recycling strengthens the economy",
    body:
      "According to the U.S. EPA's REI Report, recycling and reuse activities support over 681,000 jobs, generate more than $37 billion in wages, and contribute over $5 billion in tax revenue annually.[2]",
    color: "bg-[#c8d5b9]",
    accent: "#2d5a27",
  },

  {
    icon: <Users className="w-6 h-6" />,
    stat: "24%",
    label: "MSW is food waste",
    title: "Composting improves soil",
    body:
      "Food scraps are among the largest components of municipal solid waste. Compost enriches soil, improves water retention, and returns nutrients to the earth while reducing landfill methane emissions.[2][7]",
    color: "bg-[#e4d9b8]",
    accent: "#7a5c1e",
  },
];

const comparisons = [
  {
    material: "Aluminum Can",
    recycled: "Back on shelves in ~60 days",
    landfill: "200–500 years",
    icon: "🥫",
  },
  {
    material: "Newspaper",
    recycled: "1–6 weeks",
    landfill: "Weeks to months (little oxygen slows decay)",
    icon: "📰",
  },
  {
    material: "Plastic Bottle",
    recycled: "1–3 months",
    landfill: "450+ years",
    icon: "🧴",
  },
  {
    material: "Food Scraps",
    recycled: "2–6 months (compost)",
    landfill: "Can persist for decades while producing methane",
    icon: "🥦",
  },
  {
    material: "Cardboard",
    recycled: "2–4 weeks",
    landfill: "Several months depending on landfill conditions",
    icon: "📦",
  },
];

const guides = [
  {
    path: "/recycling",
    label: "Recycling Guide",
    icon: Recycle,
    color: "#2d5a27",
    bg: "bg-[#c8d5b9]",
  },
  {
    path: "/compost",
    label: "Compost Guide",
    icon: Leaf,
    color: "#7a5c1e",
    bg: "bg-[#e0d9b8]",
  },
  {
    path: "/trash",
    label: "Trash Guide",
    icon: Trash2,
    color: "#4a3f35",
    bg: "bg-[#d9cfc4]",
  },
];

const references = [
  {
    id: 1,
    title: "U.S. Department of Energy – Energy Saver",
    url: "https://www.energy.gov",
  },
  {
    id: 2,
    title: "U.S. EPA – Facts and Figures about Materials, Waste and Recycling",
    url: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling",
  },
  {
    id: 3,
    title: "EPA Waste Reduction Model (WARM)",
    url: "https://www.epa.gov/warm",
  },
  {
    id: 4,
    title: "UNEP – From Pollution to Solution",
    url: "https://www.unep.org/resources/pollution-solution-global-assessment-marine-litter-and-plastic-pollution",
  },
  {
    id: 5,
    title: "World Bank – What a Waste 2.0",
    url: "https://datatopics.worldbank.org/what-a-waste/",
  },
  {
    id: 6,
    title: "Institute of Scrap Recycling Industries",
    url: "https://www.isri.org",
  },
  {
    id: 7,
    title: "USDA Composting Resources",
    url: "https://www.usda.gov",
  },
  {
    id: 8,
    title: "USGS Mineral Commodity Summaries",
    url: "https://www.usgs.gov",
  },
];

export default function BenefitsPage() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <section className="relative px-6 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[700px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-[400px] h-[300px] rounded-full bg-secondary/40 blur-2xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent" />

            <span
              className="text-xs uppercase tracking-widest font-semibold text-accent"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
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
            Recycling, composting, and proper waste disposal aren't just
            environmentally responsible—they measurably reduce energy use,
            greenhouse gas emissions, water consumption, and demand for raw
            materials while supporting hundreds of thousands of American jobs.
            <sup>[1][2][3]</sup>
          </p>
        </div>
      </section>
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-black text-primary mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            By the Numbers
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`${benefit.color} rounded-3xl p-8 border border-border hover:shadow-xl transition-shadow`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-[#f5f0e8]"
                  style={{
                    backgroundColor: benefit.accent,
                  }}
                >
                  {benefit.icon}
                </div>

                <p
                  className="text-4xl font-black mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: benefit.accent,
                  }}
                >
                  {benefit.stat}
                </p>

                <p
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {benefit.label}
                </p>

                <h3 className="font-bold text-primary mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-16 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">

          <div className="mb-10">

            <p
              className="text-xs uppercase tracking-widest text-accent font-semibold mb-3"
              style={{
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Decomposition Times
            </p>

            <h2
              className="text-3xl md:text-4xl font-black text-primary"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Recycling vs. Landfilling
            </h2>

            <p className="text-muted-foreground mt-3 max-w-xl">
              Materials recycled into new products return to use quickly,
              while those buried in landfills can remain for decades or even
              centuries because landfills are specifically designed to slow
              decomposition.<sup>[2][5]</sup>
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-border">

                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    Material
                  </th>

                  <th
                    className="text-left py-3 px-4 font-semibold"
                    style={{ color: "#2d5a27" }}
                  >
                    Recycled / Composted
                  </th>

                  <th
                    className="text-left py-3 px-4 font-semibold"
                    style={{ color: "#c0392b" }}
                  >
                    If Landfilled
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisons.map((row, index) => (

                  <tr
                    key={row.material}
                    className={`border-b border-border ${
                      index % 2 === 0
                        ? "bg-background"
                        : "bg-muted/30"
                    }`}
                  >

                    <td className="py-4 px-4">
                      <span className="mr-2">{row.icon}</span>
                      <span className="font-medium">
                        {row.material}
                      </span>
                    </td>

                    <td
                      className="py-4 px-4 font-semibold"
                      style={{ color: "#2d5a27" }}
                    >
                      {row.recycled}
                    </td>

                    <td
                      className="py-4 px-4 font-semibold"
                      style={{ color: "#c0392b" }}
                    >
                      {row.landfill}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <p className="text-xs text-muted-foreground mt-4">
              * Decomposition times are approximate and vary depending on
              landfill conditions, oxygen availability, moisture, and
              temperature.<sup>[2][5]</sup>
            </p>

          </div>

        </div>
      </section>
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>

            <p
              className="text-xs uppercase tracking-widest text-accent font-semibold mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              The Big Picture
            </p>

            <h2
              className="text-3xl md:text-4xl font-black text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Small habits, lasting impact
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              According to the U.S. Environmental Protection Agency,
              the average American generates approximately
              <strong> 4.9 pounds of municipal solid waste per day.</strong>
              Roughly one-third of that waste is currently recycled or
              composted, while much of the remainder could be diverted
              through better recycling and composting practices.
              <sup>[2]</sup>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Every aluminum can, cardboard box, food scrap, and plastic
              bottle sorted correctly helps conserve natural resources,
              reduce greenhouse gas emissions, and extend the lifespan of
              landfills. Individual actions may seem small, but when
              multiplied across millions of households they create
              measurable environmental benefits.
              <sup>[2][3]</sup>
            </p>

            <div className="space-y-5">

              {[
                {
                  label: "Municipal waste recycled or composted",
                  pct: 32,
                  color: "#2d5a27",
                },
                {
                  label: "Waste still sent to landfills",
                  pct: 50,
                  color: "#7ab648",
                },
                {
                  label: "Waste sent to combustion with energy recovery",
                  pct: 12,
                  color: "#d4a017",
                },
                {
                  label: "Other management methods",
                  pct: 6,
                  color: "#8a7a6a",
                },
              ].map((bar) => (

                <div key={bar.label}>

                  <div className="flex justify-between text-sm mb-1">

                    <span className="text-muted-foreground">
                      {bar.label}
                    </span>

                    <span className="font-bold text-foreground">
                      {bar.pct}%
                    </span>

                  </div>

                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${bar.pct}%`,
                        backgroundColor: bar.color,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            <p className="text-xs text-muted-foreground mt-5">
              Percentages are based on recent EPA municipal solid waste
              statistics and are rounded for readability.
              <sup>[2]</sup>
            </p>

          </div>
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">

              <div className="text-3xl mb-3">🌳</div>

              <p
                className="text-2xl font-black text-primary"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                17
              </p>

              <p className="text-sm font-semibold">
                Trees saved
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Recycling one ton of paper can save approximately
                seventeen mature trees.
                <sup>[2]</sup>
              </p>

            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">

              <div className="text-3xl mb-3">💧</div>

              <p
                className="text-2xl font-black text-primary"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                7,000
              </p>

              <p className="text-sm font-semibold">
                Gallons of water
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Recycling one ton of paper can save roughly
                7,000 gallons of water.
                <sup>[2]</sup>
              </p>

            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">

              <div className="text-3xl mb-3">⚡</div>

              <p
                className="text-2xl font-black text-primary"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                95%
              </p>

              <p className="text-sm font-semibold">
                Energy savings
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Manufacturing aluminum from recycled material uses
                about 95% less energy than producing new aluminum.
                <sup>[1]</sup>
              </p>

            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">

              <div className="text-3xl mb-3">🌎</div>

              <p
                className="text-2xl font-black text-primary"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                ↓ CO₂
              </p>

              <p className="text-sm font-semibold">
                Lower emissions
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Recycling and composting reduce greenhouse gas emissions
                by lowering the need for raw material extraction and by
                avoiding methane emissions from decomposing organic waste.
                <sup>[3][5]</sup>
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="px-6 md:px-16 py-20 bg-card border-t border-border">

        <div className="max-w-5xl mx-auto">

          <p
            className="text-xs uppercase tracking-widest text-accent font-semibold mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Sources
          </p>

          <h2
            className="text-3xl md:text-4xl font-black text-primary mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            References
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The statistics and claims on this page are based primarily on
            publications from U.S. government agencies and international
            organizations. Some values are rounded for readability.
          </p>

          <div className="space-y-6">

            {references.map((ref) => (

              <div
                key={ref.id}
                className="border-l-4 border-accent pl-5"
              >

                <h3 className="font-semibold text-primary">
                  [{ref.id}] {ref.title}
                </h3>

                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all"
                >
                  {ref.url}
                </a>

              </div>

            ))}

          </div>

          <div className="mt-12 rounded-2xl bg-background border border-border p-6">

            <h3 className="font-bold text-primary mb-3">
              About these statistics
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Recycling and waste-management data change over time as new
              studies are published and recycling rates improve. Where
              possible, this page uses recent information from the U.S.
              Environmental Protection Agency (EPA), U.S. Department of
              Energy (DOE), United Nations Environment Programme (UNEP),
              World Bank, USDA, and USGS. Some figures have been rounded
              for clarity while preserving their overall accuracy.
            </p>

          </div>

        </div>

      </section>
      <section className="px-6 md:px-16 py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">

          <h2
            className="text-3xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to start?
          </h2>

          <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
            Learn what belongs in each bin and make a measurable difference—
            one item at a time.
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