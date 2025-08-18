import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Shield, Star, CheckCircle, Play, Award, Globe, BarChart3, Clock, Zap, Target } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import analyticsVisualization from "@/assets/analytics-visualization.jpg";
import salesPipeline from "@/assets/sales-pipeline.jpg";
import roiGrowth from "@/assets/roi-growth.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 animate-fade-in" variant="outline">
                <Star className="mr-2 h-4 w-4" />
                #1 Rated iLMS Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Streamline & Score Your Leads for 
                <span className="text-primary-light"> Efficient Sales</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up">
                Trailhopper's iLMS (Lead Management System) helps B2B companies optimize their sales pipeline 
                with intelligent lead scoring and automated follow-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
                <Button variant="cta" size="xl" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=hero&utm_campaign=partner_network">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="professional" size="xl" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=hero&utm_campaign=partner_network">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-primary-foreground/80 animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-light" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-light" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <img
                  src={heroDashboard}
                  alt="iLMS Dashboard Interface - Lead Management System"
                  className="rounded-2xl shadow-hero w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-background border rounded-lg p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">287%</div>
                    <div className="text-xs text-muted-foreground">ROI Increase</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg p-4 shadow-card animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">12K+</div>
                    <div className="text-xs text-muted-foreground">Leads Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up">
              Join thousands of companies already using our iLMS platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Leads Processed", value: "500K+", icon: Users, description: "Monthly active leads" },
              { label: "Conversion Rate", value: "34%", icon: Target, description: "Average improvement" },
              { label: "Time Saved", value: "75%", icon: Clock, description: "On manual tasks" },
              { label: "ROI Increase", value: "287%", icon: TrendingUp, description: "Within 6 months" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-button">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
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

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <img
                src={analyticsVisualization}
                alt="Lead Analytics and Scoring Visualization"
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <Badge variant="outline" className="mb-4">
                <Award className="mr-2 h-4 w-4" />
                Advanced Analytics
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Real-time Lead Intelligence
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant insights into lead behavior, engagement patterns, and conversion probability 
                with our advanced analytics dashboard powered by machine learning.
              </p>
              <div className="space-y-4">
                {[
                  "Predictive lead scoring with 94% accuracy",
                  "Real-time engagement tracking",
                  "Automated lead qualification",
                  "Custom scoring models"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=trailhopper.com&utm_medium=features&utm_campaign=partner_network">
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Intelligent Lead Scoring",
                description: "Advanced algorithms analyze lead behavior and assign priority scores for maximum conversion rates.",
                stat: "94% Accuracy"
              },
              {
                icon: Zap,
                title: "Automated Follow-ups",
                description: "Never miss a lead with intelligent automation that knows when and how to follow up.",
                stat: "75% Time Saved"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance ensures your data stays protected.",
                stat: "SOC 2 Certified"
              }
            ].map((feature, index) => (
              <Card key={index} className="relative group hover:shadow-hero transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-button">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs">
                      {feature.stat}
                    </Badge>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
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

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Calculate Your ROI with iLMS
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how much revenue you could generate with our intelligent lead management system. 
                Most customers see a 287% ROI within the first 6 months.
              </p>
              <div className="space-y-6">
                <div className="bg-background border rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">$2.4M</div>
                      <div className="text-sm text-muted-foreground">Annual Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">34%</div>
                      <div className="text-sm text-muted-foreground">Conversion Rate Boost</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://salescentri.com/pricing?utm_source=trailhopper.com&utm_medium=roi&utm_campaign=partner_network">
                    Get Custom ROI Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src={roiGrowth}
                alt="ROI Growth Calculator - Lead Management System"
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in bg-white/10 text-white border-white/20">
              <Globe className="mr-2 h-4 w-4" />
              Join 10,000+ Companies Worldwide
            </Badge>
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
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-primary-foreground/80 animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;