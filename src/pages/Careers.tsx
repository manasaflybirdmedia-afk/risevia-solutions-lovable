import { useState } from "react";
import { z } from "zod";
import { Briefcase, MapPin, Clock, ArrowRight, Upload, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/PageHeader";
import { toast } from "@/hooks/use-toast";

const sampleJobs = [
  { title: "Senior Software Engineer", industry: "IT & Healthcare", location: "Hyderabad / Remote", type: "Full-time" },
  { title: "Registered Nurse (ICU)", industry: "IT & Healthcare", location: "Bangalore", type: "Contract" },
  { title: "Civil Project Manager", industry: "Engineering & Architecture", location: "Guntur", type: "Full-time" },
  { title: "Financial Analyst", industry: "Finance & Accounting", location: "Mumbai", type: "Full-time" },
  { title: "HR Business Partner", industry: "Business & Administration", location: "Pune", type: "Full-time" },
  { title: "Hotel Operations Manager", industry: "Hospitality", location: "Goa", type: "Full-time" },
  { title: "Policy Research Analyst", industry: "Public Sector", location: "Delhi", type: "Contract" },
  { title: "DevOps Engineer", industry: "IT & Healthcare", location: "Remote", type: "Full-time" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone required").max(20),
  role: z.string().trim().min(1, "Preferred role required").max(150),
  message: z.string().trim().max(1000).optional(),
});

const Careers = () => {
  const [query, setQuery] = useState("");
  const [resumeName, setResumeName] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const filtered = sampleJobs.filter((j) =>
    [j.title, j.industry, j.location].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  const onApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({ title: "Please check the form", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    if (!resumeName) {
      toast({ title: "Resume required", description: "Please upload your resume.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Application submitted", description: "Our recruiters will review and reach out shortly." });
      (e.target as HTMLFormElement).reset();
      setResumeName("");
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <PageHeader
        badge="Careers"
        title="Find your next career move"
        subtitle="Explore opportunities across industries and locations. Upload your resume — our recruiters will match you with roles that fit."
        ctaLabel="Apply Now"
        ctaTo="#apply"
      />

      {/* Job search */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">Open positions</h2>
              <p className="text-muted-foreground mt-1">Curated opportunities across our partner network.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search role, industry, location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No matching positions. Try a different keyword.</p>
            )}
            {filtered.map((job) => (
              <Card
                key={job.title}
                className="group p-5 md:p-6 border-border/60 hover:border-primary/30 hover:shadow-card-soft transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-smooth">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {job.industry}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                    </div>
                  </div>
                  <Button asChild variant="hero" size="sm">
                    <a href="#apply">Apply Now <ArrowRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply / upload resume */}
      <section id="apply" className="py-20 bg-secondary/40 scroll-mt-24">
        <div className="container grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Submit Your Profile</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-5 text-foreground">
              Upload your resume
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Don't see the right role? Send us your resume and our recruiters will match you with
              opportunities — including roles before they're posted.
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li>• Personalised matching by industry experts</li>
              <li>• Resume and interview preparation guidance</li>
              <li>• Confidential, secure profile handling</li>
            </ul>
          </div>

          <Card className="p-6 md:p-8 shadow-elegant border-border/60">
            <form onSubmit={onApply} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" name="phone" type="tel" required maxLength={20} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="role">Preferred role *</Label>
                <Input id="role" name="role" required maxLength={150} placeholder="e.g. Frontend Developer" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Brief about you</Label>
                <Textarea id="message" name="message" rows={3} maxLength={1000} className="mt-1.5" />
              </div>
              <div>
                <Label>Upload resume *</Label>
                <label
                  htmlFor="resume"
                  className="mt-1.5 flex flex-col items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary hover:bg-accent/40 transition-smooth"
                >
                  <Upload className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {resumeName || "Click to upload (PDF, DOC, DOCX)"}
                  </span>
                  <span className="text-xs text-muted-foreground">Max 5 MB</span>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Submitting..." : <>Submit Application <ArrowRight className="h-4 w-4" /></>}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Careers;
