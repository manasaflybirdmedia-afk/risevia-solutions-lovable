import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/employers", label: "Employers" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow group-hover:scale-105 transition-bounce">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold text-foreground">Risevia</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Solutions LLP</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <RouterNavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-smooth",
                  isActive
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:text-primary hover:bg-accent/60"
                )
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/careers">Find Jobs</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/employers">Hire Talent</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md transition-smooth",
                    isActive
                      ? "text-primary bg-accent"
                      : "text-foreground/80 hover:bg-accent"
                  )
                }
              >
                {item.label}
              </RouterNavLink>
            ))}
            <div className="flex gap-2 pt-3 mt-2 border-t border-border">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link to="/careers" onClick={() => setOpen(false)}>Find Jobs</Link>
              </Button>
              <Button asChild variant="hero" size="sm" className="flex-1">
                <Link to="/employers" onClick={() => setOpen(false)}>Hire Talent</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
