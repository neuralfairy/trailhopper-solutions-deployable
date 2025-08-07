import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Let's Discuss Your Lead Management Needs
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Ready to transform your sales process? Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Book a Demo</CardTitle>
                <CardDescription>
                  See Trailhopper iLMS in action with a personalized demonstration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers from our support team via live chat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-hero transition-all duration-300 animate-scale-in text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Sales Inquiry</CardTitle>
                <CardDescription>
                  Speak directly with our sales team about your specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/sales-inquiry?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Contact Sales
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" action="https://salescentri.com/get-started/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your lead management needs..." 
                      rows={4}
                      required 
                    />
                  </div>
                  <input type="hidden" name="utm_source" value="trailhopper.com" />
                  <input type="hidden" name="utm_medium" value="contact_form" />
                  <input type="hidden" name="utm_campaign" value="partner_network" />
                  <Button type="submit" variant="hero" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    Office Location
                  </CardTitle>
                  <CardDescription>
                    <div className="space-y-2 text-base">
                      <div>Trailhopper Solutions</div>
                      <div>123 Tech Boulevard, Suite 400</div>
                      <div>Spokane, WA 99201</div>
                      <div>United States</div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    Phone & Email
                  </CardTitle>
                  <CardDescription className="space-y-3 text-base">
                    <div>
                      <div className="font-medium">Sales Inquiries:</div>
                      <div>+1 (509) 555-0123</div>
                      <div>sales@trailhopper.com</div>
                    </div>
                    <div>
                      <div className="font-medium">Customer Support:</div>
                      <div>+1 (509) 555-0124</div>
                      <div>support@trailhopper.com</div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                  <CardDescription className="space-y-2 text-base">
                    <div>Monday - Friday: 8:00 AM - 6:00 PM PST</div>
                    <div>Saturday: 9:00 AM - 2:00 PM PST</div>
                    <div>Sunday: Closed</div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      Emergency support available 24/7 for Enterprise customers
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Options */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              More Ways to Get Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-lg">Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides and tutorials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" size="sm" asChild>
                  <a href="https://salescentri.com/docs/user-guide?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    View Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-lg">Submit Ticket</CardTitle>
                <CardDescription>
                  Technical support and bug reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" size="sm" asChild>
                  <a href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Create Ticket
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-lg">Partnership</CardTitle>
                <CardDescription>
                  Explore partnership opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" size="sm" asChild>
                  <a href="https://salescentri.com/contact/partnerships/partner-inquiry?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Partner With Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-lg">Custom Quote</CardTitle>
                <CardDescription>
                  Enterprise pricing and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" size="sm" asChild>
                  <a href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=trailhopper.com&utm_medium=contact&utm_campaign=partner_network">
                    Get Quote
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;