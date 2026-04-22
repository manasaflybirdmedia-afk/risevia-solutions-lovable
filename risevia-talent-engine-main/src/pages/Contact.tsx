import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/PageHeader";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject required").max(150),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const Contact = () => {
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
      toast({ title: "Message sent", description: "We'll respond within one business day." });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  const contacts = [
    { icon: Phone, label: "Call us", value: "9769347777", href: "tel:9769347777" },
    { icon: Mail, label: "Email us", value: "management@riseviasolutions.com", href: "mailto:management@riseviasolutions.com" },
    { icon: MapPin, label: "Visit us", value: "Chandramoulinagar, 3rd Line, Guntur", href: "#map" },
    { icon: Clock, label: "Working hours", value: "Mon – Sat, 9:00 AM – 7:00 PM" },
  ];

  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's start a conversation"
        subtitle="Whether you're hiring, job hunting, or exploring partnerships — our team is ready to help."
      />

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-3">
          {/* Info cards */}
          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <Card className="p-5 gradient-card border-border/60 hover:shadow-card-soft transition-smooth flex gap-4 items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-primary text-primary-foreground shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground mt-1 break-words">{value}</p>
                  </div>
                </Card>
              );
              return href ? (
                <a key={label} href={href} className="block">{content}</a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <Card className="lg:col-span-2 p-6 md:p-10 shadow-elegant border-border/60">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              Send us a message
            </h2>
            <p className="text-muted-foreground mb-6">We typically respond within one business day.</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" maxLength={20} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required maxLength={150} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" required rows={5} maxLength={1000} className="mt-1.5" />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={submitting}>
                {submitting ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="pb-20 scroll-mt-24">
        <div className="container">
          <Card className="overflow-hidden border-border/60 shadow-card-soft">
            <iframe
              title="Risevia Solutions LLP Location"
              src="https://www.google.com/maps?q=Chandramoulinagar+3rd+Line+Guntur&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
