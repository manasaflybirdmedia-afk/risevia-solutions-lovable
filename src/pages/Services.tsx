import { Link } from "react-router-dom";
import { Users2, ClipboardList, Search, Briefcase, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

const employerServices = [
  { icon: Users2, title: "Workforce Solutions", desc: "End-to-end staffing strategies aligned with your business goals — from headcount planning to deployment." },
  { icon: ClipboardList, title: "Staffing Services", desc: "Contract, contract-to-hire, and permanent staffing models with rapid turnaround and quality assurance." },
  { icon: Search, title: "Talent Acquisition Support", desc: "Specialist recruiters embedded within your hiring process — sourcing, screening, and shortlisting top talent." },
];

const seekerServices = [
  { icon: Briefcase, title: "Multi-Industry Jobs", desc: "Roles across IT, Healthcare, Engineering, Finance, Hospitality and Public Sector." },
  { icon: MapPin, title: "Diverse Locations", desc: "Opportunities across major Indian cities and international markets." },
  { icon: GraduationCap, title: "Career Guidance", desc: "Personalised support to refine your resume, prepare for interviews, and grow your career." },
];

const Services = () => {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Workforce solutions tailored to your goals"
        subtitle="Whether you're hiring or looking for your next role, our services are designed to deliver speed, quality and lasting value."
      />

      {/* Employers */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">For Employers</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-3 text-foreground">
              Build the right team, faster
            </h2>
            <p className="text-muted-foreground text-lg">
              Strategic staffing services that help you scale with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {employerServices.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group p-8 gradient-card border-border/60 hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow mb-5 group-hover:scale-110 transition-bounce">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <Link to="/employers" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-smooth">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="hero" size="lg">
              <Link to="/employers">Request Talent <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Seekers */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">For Job Seekers</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-3 text-foreground">
              Your next opportunity, made simple
            </h2>
            <p className="text-muted-foreground text-lg">
              Access curated opportunities and personalised guidance to power your career.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {seekerServices.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group p-8 bg-card border-border/60 hover:border-primary/30 hover:shadow-card-soft transition-smooth hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary mb-5 group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="hero" size="lg">
              <Link to="/careers">Explore Jobs <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
