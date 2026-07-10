import { Outlet, NavLink } from "react-router";
import { Recycle, Trash2, Leaf, Sparkles, Info, Home } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" />, activeBg: "bg-primary/15 text-primary border-primary/30", end: true },
  { to: "/recycling", label: "Recycling", icon: <Recycle className="w-4 h-4" />, activeBg: "bg-accent/15 text-accent border-accent/30" },
  { to: "/compost", label: "Compost", icon: <Leaf className="w-4 h-4" />, activeBg: "bg-[#7a5c1e]/15 text-[#7a5c1e] border-[#7a5c1e]/30" },
  { to: "/trash", label: "Trash", icon: <Trash2 className="w-4 h-4" />, activeBg: "bg-[#4a3f35]/15 text-[#4a3f35] border-[#4a3f35]/30" },
  { to: "/benefits", label: "Benefits", icon: <Sparkles className="w-4 h-4" />, activeBg: "bg-accent/15 text-accent border-accent/30" },
  { to: "/about", label: "About", icon: <Info className="w-4 h-4" />, activeBg: "bg-primary/15 text-primary border-primary/30" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Recycle className="w-4 h-4 text-accent" strokeWidth={2.5} />
            <Leaf className="w-4 h-4 text-[#7a5c1e]" strokeWidth={2.5} />
            <Trash2 className="w-4 h-4 text-[#4a3f35]" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-primary text-sm tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
            RTC Dispose
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {navItems.map(({ to, label, icon, activeBg, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? `${activeBg} border-current`
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                }`
              }
            >
              {icon}
              <span className="hidden md:inline">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground py-10 px-6 text-center">
        <div className="flex justify-center gap-3 mb-3">
          <Recycle className="w-5 h-5 text-accent" strokeWidth={1.5} />
          <Leaf className="w-5 h-5 text-[#c8a84b]" strokeWidth={1.5} />
          <Trash2 className="w-5 h-5 text-[#a89580]" strokeWidth={1.5} />
        </div>
        <p className="font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          RTC Dispose
        </p>
        <p className="text-sm text-primary-foreground/60 mb-5">
          Your guide to recycling, composting, and trash disposal.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/50">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className="hover:text-primary-foreground transition-colors">
              {label}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  );
}
