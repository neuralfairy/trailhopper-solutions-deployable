import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, ArrowRight, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              🏢 About Trailhopper Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Pioneering the Future of Lead Management
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              We're a team of passionate professionals dedicated to revolutionizing how businesses manage and convert their leads.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower sales teams with intelligent lead management tools that eliminate guesswork 
                and maximize conversion rates. We believe every lead has potential, and with the right 
                system, businesses can unlock unprecedented growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in Spokane, Washington, we've been serving businesses nationwide with 
                cutting-edge iLMS solutions that drive real results.
              </p>
            </div>
            <div className="animate-scale-in">
              <Card className="bg-gradient-card border-none shadow-hero">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle>Our Vision</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    To become the world's most trusted lead management platform, enabling businesses 
                    of all sizes to achieve their sales potential through intelligent automation 
                    and data-driven insights.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">5M+</div>
              <div className="text-muted-foreground">Leads Processed</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Average Conversion Increase</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Meet the experts driving innovation in lead management technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle>Sarah Mitchell</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  15+ years in sales technology and business development. Former VP at leading CRM companies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle>David Chen</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  AI and machine learning expert with 12+ years building scalable SaaS platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle>Lisa Rodriguez</CardTitle>
                <CardDescription>VP of Customer Success</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Customer success leader with proven track record of driving adoption and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in everything we do, from product development to customer service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Customer First</CardTitle>
                <CardDescription>
                  Our customers' success is our success. We're committed to their growth and satisfaction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We continuously innovate to stay ahead of market needs and technological advances.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle>Our Location</CardTitle>
                  </div>
                  <CardDescription>
                    Headquartered in beautiful Spokane, Washington, we serve clients across North America 
                    and beyond. Our Pacific Northwest location provides the perfect balance of innovation 
                    and quality of life for our team.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <CardTitle>Our Journey</CardTitle>
                  </div>
                  <CardDescription>
                    Founded in 2020, Trailhopper Solutions has quickly grown from a startup with a vision 
                    to a trusted leader in lead management technology. We're proud of our rapid growth 
                    and continued commitment to innovation.
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
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Experience the difference that intelligent lead management can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=about_cta&utm_campaign=partner_network">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/company/about-us?utm_source=trailhopper.com&utm_medium=about_cta&utm_campaign=partner_network">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;