import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary-dark/85" />
      </div>
      <div className="container relative py-20 md:py-24 text-center text-primary-foreground">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5 max-w-3xl mx-auto leading-tight">
          Ready to build a stronger workforce?
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Whether you're hiring or job hunting, Risevia connects you with the right opportunity — fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="accent" size="lg">
            <Link to="/employers">Hire Talent</Link>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link to="/careers">Find Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
