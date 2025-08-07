import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp, Users, Shield } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Essential Lead Scoring Strategies for B2B Success",
      excerpt: "Discover how intelligent lead scoring can transform your sales pipeline and increase conversion rates by up to 40%.",
      category: "Lead Management",
      readTime: "5 min read",
      date: "December 15, 2024",
      author: "Sarah Mitchell",
      icon: TrendingUp
    },
    {
      title: "The Future of Sales Automation in 2025",
      excerpt: "Explore upcoming trends in sales automation and how AI-powered tools are reshaping the industry landscape.",
      category: "Industry Insights",
      readTime: "7 min read",
      date: "December 10, 2024",
      author: "David Chen",
      icon: Shield
    },
    {
      title: "Building High-Converting Sales Funnels with iLMS",
      excerpt: "Step-by-step guide to creating sales funnels that convert using modern lead management systems.",
      category: "Best Practices",
      readTime: "6 min read",
      date: "December 5, 2024",
      author: "Lisa Rodriguez",
      icon: Users
    },
    {
      title: "ROI Calculator: Measuring Lead Management Success",
      excerpt: "Learn how to calculate and demonstrate the ROI of your lead management initiatives to stakeholders.",
      category: "Analytics",
      readTime: "4 min read",
      date: "November 28, 2024",
      author: "Mike Johnson",
      icon: TrendingUp
    },
    {
      title: "Integration Best Practices: CRM + iLMS",
      excerpt: "Maximize efficiency by properly integrating your lead management system with existing CRM platforms.",
      category: "Technical",
      readTime: "8 min read",
      date: "November 20, 2024",
      author: "Sarah Mitchell",
      icon: Shield
    },
    {
      title: "Case Study: 300% Lead Conversion Increase",
      excerpt: "How TechCorp transformed their sales process and achieved remarkable growth with intelligent lead management.",
      category: "Case Studies",
      readTime: "6 min read",
      date: "November 15, 2024",
      author: "David Chen",
      icon: Users
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="outline">
              📚 Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Lead Management Insights & Best Practices
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Stay ahead with the latest trends, strategies, and success stories in lead management and sales optimization.
            </p>
            <Button variant="cta" size="xl" asChild className="animate-scale-in">
              <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=trailhopper.com&utm_medium=blog&utm_campaign=partner_network">
                Download Free Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 animate-fade-in">Featured Article</Badge>
            <Card className="hover:shadow-hero transition-all duration-300 animate-scale-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="outline">Lead Management</Badge>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    The Complete Guide to Modern Lead Management
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Everything you need to know about implementing and optimizing lead management systems 
                    for maximum ROI. From initial setup to advanced automation strategies.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>December 20, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Trailhopper Team</span>
                    </div>
                    <span>12 min read</span>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=trailhopper.com&utm_medium=blog_featured&utm_campaign=partner_network">
                      Read Full Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-card rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-24 w-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
                    <p className="text-muted-foreground">
                      Learn from industry leaders and proven strategies
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Expert insights and practical advice to optimize your lead management strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-hero transition-all duration-300 animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <post.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="professional" size="sm" className="w-full group-hover:shadow-button" asChild>
                    <a href="https://salescentri.com/resources/case-studies?utm_source=trailhopper.com&utm_medium=blog&utm_campaign=partner_network">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Stay Updated</CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg">
                  Get the latest lead management insights, industry trends, and best practices 
                  delivered directly to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md text-foreground bg-white border-0 focus:ring-2 focus:ring-primary-light"
                    />
                  </div>
                  <Button variant="cta" className="bg-white text-primary hover:bg-gray-100" asChild>
                    <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=trailhopper.com&utm_medium=newsletter&utm_campaign=partner_network">
                      Subscribe
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-primary-foreground/80 mt-4">
                  No spam, unsubscribe at any time. Join 5,000+ sales professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Additional Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>
                  Real success stories from our customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" asChild>
                  <a href="https://salescentri.com/resources/case-studies?utm_source=trailhopper.com&utm_medium=blog&utm_campaign=partner_network">
                    View Case Studies
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Webinars</CardTitle>
                <CardDescription>
                  Live and recorded training sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars?utm_source=trailhopper.com&utm_medium=blog&utm_campaign=partner_network">
                    Watch Webinars
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hero transition-all duration-300 animate-fade-in-up">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>
                  In-depth industry research and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="professional" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=trailhopper.com&utm_medium=blog&utm_campaign=partner_network">
                    Download Papers
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

export default Blog;