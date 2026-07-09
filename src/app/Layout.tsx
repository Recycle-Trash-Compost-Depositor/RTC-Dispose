import { Outlet, NavLink } from "react-router";
import { Recycle, Trash2, Leaf } from "lucide-react";

const navItems = [
  { to: "/recycling", label: "Recycling", icon: <Recycle className="w-4 h-4" />, color: "text-accent", activeBg: "bg-accent/15 text-accent border-accent/30" },
  { to: "/compost", label: "Compost", icon: <Leaf className="w-4 h-4" />, color: "text-[#8a6a2a]", activeBg: "bg-[#8a6a2a]/15 text-[#8a6a2a] border-[#8a6a2a]/30" },
  { to: "/trash", label: "Trash", icon: <Trash2 className="w-4 h-4" />, color: "text-[#6b5d4f]", activeBg: "bg-[#6b5d4f]/15 text-[#6b5d4f] border-[#6b5d4f]/30" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/95 backdrop-blur-sm border-b border-border">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex gap-1">
            <Recycle className="w-4 h-4 text-accent" strokeWidth={2.5} />
            <Leaf className="w-4 h-4 text-[#8a6a2a]" strokeWidth={2.5} />
            <Trash2 className="w-4 h-4 text-[#6b5d4f]" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-primary text-sm tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
            Dispose Right
          </span>
        </NavLink>

        <div className="flex items-center gap-2">
          {navItems.map(({ to, label, icon, activeBg }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? `${activeBg} border-current`
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                }`
              }
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
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
          Dispose Right
        </p>
        <p className="text-sm text-primary-foreground/60 mb-5">
          Your local guide to trash, compost, and recycling.
        </p>
        <div className="flex justify-center gap-6 text-sm text-primary-foreground/50">
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
