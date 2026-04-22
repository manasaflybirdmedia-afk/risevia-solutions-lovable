import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Building2, Target, Sparkles, Briefcase, UserSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";
import heroImg from "@/assets/hero.jpg";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10K+", label: "Talent Placed" },
  { value: "6", label: "Industries" },
  { value: "98%", label: "Satisfaction" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="Professional team collaboration" width={1600} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="container relative py-20 md:py-32 lg:py-36">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Workforce & Staffing Partner
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Empowering Businesses.<br />
              <span className="text-primary-glow">Connecting Talent.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed mb-8">
              Risevia Solutions LLP delivers tailored workforce and staffing solutions across IT, Healthcare,
              Engineering, Finance, Hospitality and the Public Sector — connecting exceptional talent with
              forward-thinking organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/employers">Hire Talent <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/careers">Find Jobs</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-primary-foreground/15 bg-primary-dark/40 backdrop-blur">
          <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-primary-glow">{s.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-wider opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl text-center animate-fade-in">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 mb-6 text-foreground">
            A trusted partner in workforce excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge the gap between ambitious organisations and high-calibre professionals.
            With deep industry knowledge and a vast talent network, Risevia helps businesses scale
            and helps individuals build meaningful careers.
          </p>
        </div>
      </section>

      {/* Two core services */}
      <section className="pb-20 md:pb-28">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Building2,
              tag: "For Employers",
              title: "Build the team that builds your future",
              desc: "Workforce solutions, staffing services and talent acquisition support — designed to scale with your business needs.",
              cta: "Hire Talent",
              to: "/employers",
            },
            {
              icon: UserSearch,
              tag: "For Job Seekers",
              title: "Find a role that fits your ambition",
              desc: "Access opportunities across multiple industries and locations, with personalised career guidance to help you grow.",
              cta: "Browse Jobs",
              to: "/careers",
            },
          ].map(({ icon: Icon, tag, title, desc, cta, to }) => (
            <Card key={tag} className="group relative overflow-hidden p-8 md:p-10 gradient-card border-border/60 hover:shadow-elegant transition-smooth hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-smooth" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{tag}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>
                <Button asChild variant="hero">
                  <Link to={to}>{cta} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry coverage */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Industries We Serve</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 mb-4 text-foreground">
              Talent across every sector
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialised expertise that spans the industries powering today's economy.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="group p-6 bg-card border-border/60 hover:border-primary/30 hover:shadow-card-soft transition-smooth hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4 group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">Explore All Industries <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Risevia</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 mb-6 text-foreground leading-tight">
              Reliability, expertise and reach — all in one partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just fill positions — we build long-term workforce strategies that align talent
              with business goals.
            </p>
            <ul className="space-y-4">
              {[
                "Deep industry expertise across six sectors",
                "Vetted talent network with rigorous screening",
                "Flexible engagement models — contract, contract-to-hire, permanent",
                "Dedicated account management and post-placement support",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, title: "Wide Talent Pool", desc: "Active and passive candidates across geographies." },
              { icon: Target, title: "Precision Match", desc: "Role-fit assessments beyond the resume." },
              { icon: Briefcase, title: "Industry Focus", desc: "Specialist recruiters per vertical." },
              { icon: Sparkles, title: "Long-term Partner", desc: "Trusted by 500+ businesses." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6 gradient-card border-border/60 hover:shadow-card-soft transition-smooth">
                <Icon className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-display font-bold text-foreground mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
