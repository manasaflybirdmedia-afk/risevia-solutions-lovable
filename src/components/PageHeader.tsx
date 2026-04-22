import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  badge?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const PageHeader = ({ title, subtitle, badge, ctaLabel, ctaTo }: Props) => {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary-glow)) 0%, transparent 40%)' }} />
      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl animate-fade-in-up">
          {badge && (
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary-foreground/15 backdrop-blur">
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">{subtitle}</p>
          {ctaLabel && ctaTo && (
            <Link
              to={ctaTo}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-smooth shadow-card-soft"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
