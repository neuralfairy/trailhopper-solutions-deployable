import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Shield, Star, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              🚀 Professional Lead Management System
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Streamline & Score Your Leads for 
              <span className="text-primary-light"> Efficient Sales</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Trailhopper's iLMS (Lead Management System) helps B2B companies optimize their sales pipeline 
              with intelligent lead scoring and automated follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=hero&utm_campaign=partner_network">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=hero&utm_campaign=partner_network">
                  Book Live Demo
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4 animate-fade-in">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Companies Trust Us</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Increase in Lead Conversion</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Faster Sales Cycles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Why Choose Trailhopper iLMS?
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Our intelligent lead management system transforms how you handle prospects, 
              from initial contact to closed deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Intelligent Lead Scoring</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze lead behavior and assign priority scores for maximum conversion rates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Automated Follow-ups</CardTitle>
                <CardDescription>
                  Never miss a lead with intelligent automation that knows when and how to follow up.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-grade security with SOC 2 compliance ensures your data stays protected.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Trailhopper's iLMS increased our lead conversion by 45% in just 3 months. 
                  The intelligent scoring system helped us focus on high-value prospects."
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">VP of Sales, TechCorp</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The automated follow-up features saved our team 20 hours per week. 
                  We're closing deals faster than ever before."
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Mike Chen</div>
                  <div className="text-sm text-muted-foreground">Sales Director, InnovateLabs</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Join hundreds of companies already using Trailhopper iLMS to streamline their lead management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=cta&utm_campaign=partner_network">
                  Start Free Trial Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry?utm_source=trailhopper.com&utm_medium=cta&utm_campaign=partner_network">
                  Talk to Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;