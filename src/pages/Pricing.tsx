
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const plans = [
    {
      title: "Starter",
      monthlyPrice: "$9",
      annualPrice: "$90",
      description: "Perfect for individuals and small teams just getting started.",
      features: [
        "Up to 5 team members",
        "Basic task management",
        "5GB storage",
        "Email support",
        "Basic reporting",
        "1 workspace"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      title: "Professional",
      monthlyPrice: "$29",
      annualPrice: "$290",
      description: "Ideal for growing teams that need more features and flexibility.",
      features: [
        "Up to 20 team members",
        "Advanced task management",
        "25GB storage",
        "Priority support",
        "Custom workflows",
        "Analytics dashboard",
        "API access",
        "Multiple workspaces"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      title: "Enterprise",
      monthlyPrice: "$99",
      annualPrice: "$990",
      description: "For large organizations with complex needs and security requirements.",
      features: [
        "Unlimited team members",
        "Advanced security",
        "Unlimited storage",
        "24/7 support",
        "Custom integrations",
        "Advanced analytics",
        "Dedicated account manager",
        "SSO authentication",
        "Audit logs",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <section className="py-12 md:py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Pricing
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works best for you and your team. All plans include a 14-day free trial.
                </p>
              </motion.div>
              
              <div className="flex items-center space-x-4 mt-4">
                <div className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                  Monthly
                </div>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  <span className="sr-only">Toggle billing cycle</span>
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <div className="flex items-center">
                  <div className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                    Annual
                  </div>
                  <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    Save 20%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`flex flex-col h-full ${
                    plan.popular 
                      ? 'border-primary shadow-lg relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:opacity-20 before:blur-xl' 
                      : 'shadow-md'
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-gradient-to-r from-primary to-purple-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.title}</CardTitle>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-bold">{billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}</span>
                        <span className="text-muted-foreground">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                      </div>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md' 
                            : ''
                        }`} 
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block rounded-lg border bg-muted/50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Need a custom plan?</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Contact our sales team to create a plan that's perfect for your specific needs.
                </p>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find answers to common questions about our pricing and plans.
              </p>
            </div>
            
            <div className="mx-auto max-w-3xl space-y-4 mt-8">
              {[
                {
                  question: "Can I change plans later?",
                  answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle."
                },
                {
                  question: "Is there a limit to how many team members I can add?",
                  answer: "The number of team members you can add depends on your plan. The Starter plan allows up to 5 members, Professional up to 20, and Enterprise has no limit. If you need more team members on the Starter or Professional plans, you can add additional seats for a small fee per user."
                },
                {
                  question: "Do you offer discounts for nonprofits or educational institutions?",
                  answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we can also arrange for invoice-based billing with net-30 terms."
                }
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
