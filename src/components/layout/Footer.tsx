import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/risevia-favicon.svg"
                alt="Risevia Solutions LLP"
                className="h-10 w-10"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold">Risevia</span>
                <span className="text-[10px] font-medium uppercase tracking-widest opacity-70">Solutions LLP</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering businesses and connecting talent across industries with reliable, expert workforce solutions.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 hover:text-primary-glow transition-smooth">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-100 hover:text-primary-glow transition-smooth">Services</Link></li>
              <li><Link to="/industries" className="hover:opacity-100 hover:text-primary-glow transition-smooth">Industries</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 hover:text-primary-glow transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-base">For You</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/employers" className="hover:opacity-100 hover:text-primary-glow transition-smooth">For Employers</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 hover:text-primary-glow transition-smooth">For Job Seekers</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 hover:text-primary-glow transition-smooth">Open Positions</Link></li>
              <li><Link to="/employers" className="hover:opacity-100 hover:text-primary-glow transition-smooth">Request Talent</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-base">Get in Touch</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:9769347777" className="hover:opacity-100">9769347777</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:management@riseviasolutions.com" className="hover:opacity-100 break-all">management@riseviasolutions.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Chandramoulinagar, 3rd Line, Guntur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Risevia Solutions LLP. All rights reserved.</p>
          <p>Workforce & Staffing Solutions Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
