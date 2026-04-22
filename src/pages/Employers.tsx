import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Building2, Users, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/PageHeader";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(100),
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  roles: z.string().trim().min(1, "Role details required").max(500),
  count: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
});

const Employers = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({ title: "Please check the form", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Request received", description: "Our team will reach out within 24 hours." });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <PageHeader
        badge="For Employers"
        title="Hire smarter with Risevia"
        subtitle="From rapid contract staffing to strategic talent acquisition partnerships — we deliver the workforce you need to grow."
        ctaLabel="Request Talent"
        ctaTo="#request"
      />

      {/* Hiring solutions overview */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {[
              { icon: Building2, title: "Enterprise Staffing", desc: "Scalable workforce planning for large organisations with complex needs." },
              { icon: Users, title: "Specialised Talent", desc: "Niche expertise across six industries — sourced, vetted, and ready to deploy." },
              { icon: Clock, title: "Rapid Turnaround", desc: "Average shortlist delivery within 72 hours for most roles." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8 gradient-card border-border/60 hover:shadow-card-soft transition-smooth">
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>

          {/* Request talent form */}
          <div id="request" className="grid gap-12 lg:grid-cols-2 items-start scroll-mt-24">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Request Talent</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-5 text-foreground">
                Tell us who you need
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Share your hiring requirements and our specialist recruiters will get back within 24 hours
                with a tailored staffing proposal.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated account manager",
                  "Pre-screened candidate shortlists",
                  "Flexible engagement models",
                  "Compliance and onboarding support",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 md:p-8 shadow-elegant border-border/60">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" required maxLength={100} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required maxLength={20} className="mt-1.5" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="roles">Roles needed *</Label>
                    <Input id="roles" name="roles" required maxLength={500} placeholder="e.g. Java Developer" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="count">No. of positions</Label>
                    <Input id="count" name="count" maxLength={20} placeholder="e.g. 5" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Additional details</Label>
                  <Textarea id="message" name="message" rows={4} maxLength={1000} className="mt-1.5" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : <>Send Request <Send className="h-4 w-4" /></>}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Become a long-term hiring partner
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join 500+ organisations that rely on Risevia for their workforce strategy.
          </p>
          <Button asChild variant="accent" size="xl">
            <a href="mailto:management@riseviasolutions.com">Talk to our team</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Employers;
