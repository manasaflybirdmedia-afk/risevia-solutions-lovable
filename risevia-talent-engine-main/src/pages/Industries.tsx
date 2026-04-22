import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";

const Industries = () => {
  return (
    <>
      <PageHeader
        badge="Industries We Serve"
        title="Specialised staffing across six core sectors"
        subtitle="Deep industry knowledge means better matches, faster placements, and longer-lasting outcomes."
      />

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map(({ icon: Icon, title, description, roles }) => (
              <Card key={title} className="group p-8 gradient-card border-border/60 hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-bounce">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((role) => (
                        <span
                          key={role}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Industries;
