
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-bold text-xl">SaaSify</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Workflow with SaaSify
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">Get Started</Button>
                <Button size="lg" variant="outline">Book a Demo</Button>
              </div>
              <div className="mt-12 w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides all the tools you need to manage your business efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Task Management",
                  description: "Create, assign, and track tasks with ease. Keep your team on the same page.",
                  icon: "📋"
                },
                {
                  title: "Team Collaboration",
                  description: "Work together in real-time with comments, file sharing, and more.",
                  icon: "👥"
                },
                {
                  title: "Analytics Dashboard",
                  description: "Get insights into your team's performance with detailed analytics.",
                  icon: "📊"
                },
                {
                  title: "Automated Workflows",
                  description: "Set up automations to handle repetitive tasks and save time.",
                  icon: "⚙️"
                },
                {
                  title: "Integrations",
                  description: "Connect with your favorite tools and services for a seamless experience.",
                  icon: "🔄"
                },
                {
                  title: "Mobile Access",
                  description: "Access your workspace from anywhere with our mobile apps.",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background shadow-sm">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works best for you and your team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              {[
                {
                  title: "Starter",
                  price: "$9",
                  description: "Perfect for individuals and small teams just getting started.",
                  features: ["Up to 5 team members", "Basic task management", "5GB storage", "Email support"],
                  cta: "Get Started",
                  popular: false
                },
                {
                  title: "Professional",
                  price: "$29",
                  description: "Ideal for growing teams that need more features and flexibility.",
                  features: ["Up to 20 team members", "Advanced task management", "25GB storage", "Priority support", "Custom workflows", "Analytics"],
                  cta: "Get Started",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$99",
                  description: "For large organizations with complex needs and security requirements.",
                  features: ["Unlimited team members", "Advanced security", "Unlimited storage", "24/7 support", "Custom integrations", "Advanced analytics", "Dedicated account manager"],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.popular ? 'border-primary shadow-md relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  quote: "SaaSify has completely transformed how our team works together. We're more productive than ever.",
                  author: "Sarah Johnson",
                  role: "Product Manager, TechCorp"
                },
                {
                  quote: "The analytics dashboard alone is worth the price. We've gained so much insight into our workflow.",
                  author: "Michael Chen",
                  role: "CTO, StartupX"
                },
                {
                  quote: "I can't imagine running our business without SaaSify now. It's become an essential part of our daily operations.",
                  author: "Emily Rodriguez",
                  role: "Operations Director, GrowthCo"
                }
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col space-y-4 rounded-lg border p-6 bg-background shadow-sm">
                  <div className="text-xl">"</div>
                  <p className="flex-1 text-gray-500 dark:text-gray-400">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 mt-12">
              {[
                {
                  question: "How does the 14-day trial work?",
                  answer: "Our 14-day trial gives you full access to all features with no credit card required. At the end of the trial, you can choose a plan that works for you or your account will automatically switch to the free plan with limited features."
                },
                {
                  question: "Can I change plans later?",
                  answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle."
                },
                {
                  question: "Is there a limit to how many team members I can add?",
                  answer: "The number of team members you can add depends on your plan. The Starter plan allows up to 5 members, Professional up to 20, and Enterprise has no limit."
                },
                {
                  question: "Do you offer discounts for nonprofits or educational institutions?",
                  answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information."
                },
                {
                  question: "How secure is my data?",
                  answer: "We take security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is SOC 2 compliant."
                }
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of teams that use SaaSify to streamline their workflow.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">Start Free Trial</Button>
                <Button size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="font-bold text-xl">SaaSify</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Streamline your workflow with our all-in-one platform for team collaboration and project management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Product</h3>
              <nav className="flex flex-col gap-2">
                <a href="#features" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Features</a>
                <a href="#pricing" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Pricing</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Integrations</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Changelog</a>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Company</h3>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">About</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Blog</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Careers</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Contact</a>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Resources</h3>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Documentation</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Help Center</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Community</a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">Webinars</a>
              </nav>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2023 SaaSify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
