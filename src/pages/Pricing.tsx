import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Choose the Perfect Plan for Your Business
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Starter Plan */}
            <Card className="hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small businesses getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to 1,000 leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic lead scoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Email automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Standard support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic analytics</span>
                  </div>
                </div>
                <Button variant="professional" className="w-full" asChild>
                  <a href="https://salescentri.com/pricing/plans-overview?utm_source=trailhopper.com&utm_medium=pricing&utm_campaign=partner_network">
                    Start Starter Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-primary shadow-hero animate-scale-in relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  Professional
                  <Star className="ml-2 h-5 w-5 text-yellow-500 fill-current" />
                </CardTitle>
                <CardDescription>Ideal for growing sales teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">$149</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to 10,000 leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced lead scoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Multi-channel automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>API access</span>
                  </div>
                </div>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://salescentri.com/pricing/plans-overview?utm_source=trailhopper.com&utm_medium=pricing&utm_campaign=partner_network">
                    Start Professional Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large organizations with custom needs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">Custom</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom scoring models</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>White-label options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>SLA guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>On-premise option</span>
                  </div>
                </div>
                <Button variant="professional" className="w-full" asChild>
                  <a href="https://salescentri.com/pricing/enterprise-custom?utm_source=trailhopper.com&utm_medium=pricing&utm_campaign=partner_network">
                    Contact Sales
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                  <CardDescription>
                    Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                  <CardDescription>
                    Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                  <CardDescription>
                    We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing and wire transfers.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Join thousands of businesses already using Trailhopper iLMS to boost their sales performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry?utm_source=trailhopper.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;