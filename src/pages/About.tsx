import { Target, Eye, Award, Users, Globe, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="Building careers, powering businesses"
        subtitle="Risevia Solutions LLP is a multi-industry workforce and staffing partner committed to connecting the right talent with the right opportunity — every time."
      />

      {/* Overview */}
      <section className="py-20 md:py-24">
        <div className="container max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Story</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-6 text-foreground">
            A people-first staffing partner
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Risevia Solutions LLP was founded with a simple belief — that great organisations are built
              by great people. We work as an extension of our clients' teams, helping them build agile,
              high-performing workforces across IT, Healthcare, Engineering, Finance, Hospitality and the
              Public Sector.
            </p>
            <p>
              For job seekers, we offer more than placements — we offer career partnerships. With personalised
              guidance and access to a wide network of opportunities, we help individuals take the next
              meaningful step in their professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower businesses and individuals by delivering reliable, expert workforce solutions that fuel growth, innovation, and meaningful careers.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become the most trusted multi-industry staffing partner — recognised for the depth of our expertise, the strength of our network, and the integrity of our service.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-8 md:p-10 gradient-card border-border/60 hover:shadow-card-soft transition-smooth">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 mb-4 text-foreground">
              The Risevia advantage
            </h2>
            <p className="text-muted-foreground text-lg">
              Three pillars that make us a trusted workforce partner.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "Consistent, on-time delivery with transparent communication and accountability throughout the engagement." },
              { icon: Award, title: "Industry Expertise", desc: "Specialist recruiters with deep domain knowledge across six core verticals — no generalist guesswork." },
              { icon: Globe, title: "Wide Network", desc: "Pan-India and international talent reach, with active and passive candidate pipelines ready to deploy." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group p-8 border-border/60 hover:border-primary/30 hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary mb-5 group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
