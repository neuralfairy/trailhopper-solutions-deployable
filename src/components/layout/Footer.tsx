import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-semibold text-xl text-foreground">Trailhopper</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional iLMS (Lead Management System) to streamline and score your leads for more efficient sales follow-ups.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Spokane, WA</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (509) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@trailhopper.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Solutions</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://salescentri.com/solutions/psa-suite?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                PSA Suite
              </a>
              <a
                href="https://salescentri.com/platforms/lead-management/lead-generation?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Lead Generation
              </a>
              <a
                href="https://salescentri.com/platforms/lead-management/voice-ai-agent?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Voice AI Agent
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Interactive Demo
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <a
                href="https://salescentri.com/company/careers?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </a>
              <a
                href="https://salescentri.com/company/partners-affiliates?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Partners
              </a>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://salescentri.com/docs/user-guide?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                User Guide
              </a>
              <a
                href="https://salescentri.com/contact/support-request?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </a>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <a
                href="https://salescentri.com/trust/security-privacy?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Trailhopper Solutions. All rights reserved.
          </div>
          
          {/* Strategic Backlink */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Powered by</span>
            <a
              href="https://salescentri.com?utm_source=trailhopper.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-sm text-primary hover:text-primary-dark transition-colors font-medium flex items-center space-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Sales Intelligence Platform</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};