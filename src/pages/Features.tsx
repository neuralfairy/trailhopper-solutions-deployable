import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Shield, Zap, BarChart3, MessageSquare, ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              🔥 Advanced iLMS Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Powerful Features for Modern Sales Teams
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Everything you need to streamline lead management, boost conversions, and accelerate your sales cycle.
            </p>
            <Button variant="cta" size="xl" asChild className="animate-scale-in">
              <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=trailhopper.com&utm_medium=features&utm_campaign=partner_network">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Core iLMS Capabilities
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Our comprehensive lead management system covers every aspect of your sales pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Intelligent Lead Scoring</CardTitle>
                <CardDescription>
                  AI-powered algorithms analyze lead behavior, engagement, and demographics to assign priority scores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Behavioral scoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Demographic analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Custom scoring rules</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Automated Follow-ups</CardTitle>
                <CardDescription>
                  Smart automation sequences that know when and how to engage leads at the perfect moment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Email sequences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">SMS campaigns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Smart timing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Comprehensive reporting and insights to optimize your lead management strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Conversion tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">ROI analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Team performance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Seamless collaboration tools that keep your entire sales team aligned and productive.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lead assignment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Activity tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Notes & comments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-grade security with comprehensive compliance to protect your sensitive data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">SOC 2 compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">GDPR ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Data encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Multi-Channel Engagement</CardTitle>
                <CardDescription>
                  Connect with leads across all channels with unified messaging and tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Email integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">SMS/WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Social media</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              See These Features in Action
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Experience the power of Trailhopper iLMS with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=features_cta&utm_campaign=partner_network">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=features_cta&utm_campaign=partner_network">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;