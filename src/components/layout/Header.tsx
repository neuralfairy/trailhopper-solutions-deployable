import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-xl text-foreground">Trailhopper</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="professional" size="sm" asChild>
              <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=header&utm_campaign=partner_network">
                Free Trial
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=header&utm_campaign=partner_network">
                Book Demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="professional" size="sm" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=mobile&utm_campaign=partner_network">
                    Free Trial
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=mobile&utm_campaign=partner_network">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};