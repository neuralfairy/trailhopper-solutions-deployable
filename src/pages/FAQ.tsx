import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "What is iLMS (Lead Management System)?",
          answer: "iLMS is an intelligent lead management system that helps businesses streamline their sales process by automatically scoring leads, managing follow-ups, and providing insights to increase conversion rates. It uses AI-powered algorithms to analyze lead behavior and prioritize your sales efforts."
        },
        {
          question: "How quickly can I get started with Trailhopper?",
          answer: "You can get started immediately with our 14-day free trial. The initial setup takes less than 30 minutes, and our onboarding team will help you import your existing leads and configure your scoring rules within the first week."
        },
        {
          question: "Do I need technical expertise to use the platform?",
          answer: "Not at all! Trailhopper is designed for business users with an intuitive interface. While advanced features are available for technical users, the core functionality can be managed by anyone on your sales or marketing team."
        },
        {
          question: "Can I import my existing leads and data?",
          answer: "Yes, we provide comprehensive data import tools that support CSV files, direct CRM integrations, and API connections. Our support team will assist you with the migration process to ensure no data is lost."
        }
      ]
    },
    {
      title: "Features & Functionality",
      questions: [
        {
          question: "How does the lead scoring algorithm work?",
          answer: "Our AI-powered lead scoring analyzes multiple factors including demographic information, behavioral data, engagement history, and custom criteria you define. The system continuously learns and improves its accuracy based on your actual conversion outcomes."
        },
        {
          question: "What integrations are available?",
          answer: "Trailhopper integrates with popular CRM systems (Salesforce, HubSpot, Pipedrive), email platforms (Gmail, Outlook), marketing tools (Mailchimp, Marketo), and communication platforms (Slack, Teams). We also provide REST APIs for custom integrations."
        },
        {
          question: "Can I customize the automation workflows?",
          answer: "Absolutely! You can create custom automation workflows for different lead types, set up trigger-based actions, customize email sequences, and define specific follow-up schedules. Our visual workflow builder makes it easy to design complex automation without coding."
        },
        {
          question: "What analytics and reporting features are included?",
          answer: "Our analytics suite includes conversion tracking, ROI analysis, team performance metrics, lead source attribution, and custom dashboard creation. You can generate automated reports and export data for further analysis."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      questions: [
        {
          question: "What's included in the free trial?",
          answer: "The 14-day free trial includes full access to all Professional plan features: up to 1,000 leads, advanced lead scoring, multi-channel automation, analytics, and priority support. No credit card required to start."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly. You'll never lose access to your data when changing plans."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "No setup fees or hidden costs. Our pricing is transparent with all features clearly listed for each plan. Additional charges only apply for premium add-ons or usage that exceeds your plan limits."
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer: "Yes, we offer a 20% discount for annual billing on all plans. We also provide special pricing for non-profits, educational institutions, and startups in our accelerator program."
        }
      ]
    },
    {
      title: "Security & Compliance",
      questions: [
        {
          question: "How do you protect my data?",
          answer: "We use bank-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on AWS with multiple security certifications including SOC 2 Type II compliance."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant. We provide data processing agreements, maintain detailed audit logs, support data portability, and honor deletion requests. Our privacy controls help you manage consent and data retention."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure AWS data centers with multiple redundancy layers. We offer data residency options for customers with specific geographic requirements. All data is backed up daily with point-in-time recovery capabilities."
        },
        {
          question: "What about API security?",
          answer: "All API endpoints use OAuth 2.0 authentication with rate limiting and monitoring. We provide API keys with granular permissions and maintain comprehensive audit logs of all API access."
        }
      ]
    },
    {
      title: "Support & Training",
      questions: [
        {
          question: "What support options are available?",
          answer: "We offer multiple support channels: live chat (business hours), email support (24-hour response), phone support for Professional+ plans, and a comprehensive knowledge base. Enterprise customers get dedicated support managers."
        },
        {
          question: "Do you provide training and onboarding?",
          answer: "Yes! All customers receive guided onboarding with setup assistance. We offer live training sessions, recorded webinars, detailed documentation, and for Enterprise customers, personalized training programs for your team."
        },
        {
          question: "How can I request new features?",
          answer: "We welcome feature requests through our customer portal, support channels, or during regular check-ins. Our product team reviews all requests and prioritizes development based on customer needs and product strategy."
        },
        {
          question: "What if I need help with data migration?",
          answer: "Our customer success team provides free migration assistance for all paid plans. We'll help you map your data, test the import process, and ensure everything works correctly before going live."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              ❓ Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Get Answers to Your iLMS Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Everything you need to know about Trailhopper's lead management system.
            </p>
            <Button variant="cta" size="xl" asChild className="animate-scale-in">
              <a href="https://salescentri.com/contact/support-request/live-chat?utm_source=trailhopper.com&utm_medium=faq&utm_campaign=partner_network">
                Chat with Support
                <MessageSquare className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center">
                  <HelpCircle className="mr-3 h-6 w-6 text-primary" />
                  Quick Search
                </CardTitle>
                <CardDescription className="text-center">
                  Can't find what you're looking for? Try searching our knowledge base.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    className="flex-1 px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="hero" asChild>
                    <a href="https://salescentri.com/docs/user-guide?utm_source=trailhopper.com&utm_medium=faq&utm_campaign=partner_network">
                      Search
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-bold text-sm">{sectionIndex + 1}</span>
                  </div>
                  {section.title}
                </h2>
                
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${sectionIndex}-${index}`} className="px-6">
                          <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Our support team is here to help you succeed with Trailhopper iLMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers from our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat?utm_source=trailhopper.com&utm_medium=faq&utm_campaign=partner_network">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>
                  Speak directly with our technical experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" className="w-full" asChild>
                  <a href="tel:+15095550123">
                    Call (509) 555-0123
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Send detailed questions for comprehensive answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=trailhopper.com&utm_medium=faq&utm_campaign=partner_network">
                    Submit Ticket
                  </a>
                </Button>
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
              Ready to Experience Trailhopper iLMS?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Start your free trial today and see how intelligent lead management can transform your sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=trailhopper.com&utm_medium=faq_cta&utm_campaign=partner_network">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="professional" size="xl" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=trailhopper.com&utm_medium=faq_cta&utm_campaign=partner_network">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;