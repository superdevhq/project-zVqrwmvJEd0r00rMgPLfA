
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { CheckCircle, Users, Shield, BarChart3, Zap, Globe } from "lucide-react";

const Enterprise = () => {
  const benefits = [
    {
      title: "Enterprise-grade Security",
      description: "Advanced security features including SSO, role-based access control, audit logs, and data encryption at rest and in transit.",
      icon: <Shield className="h-12 w-12 text-primary" />
    },
    {
      title: "Scalable Team Management",
      description: "Support for unlimited users, departments, and projects with hierarchical team structures and custom permissions.",
      icon: <Users className="h-12 w-12 text-primary" />
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics dashboards with custom metrics, data export, and integration with BI tools.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />
    },
    {
      title: "Global Deployment",
      description: "Multi-region deployment options, data residency controls, and 24/7 global support for international teams.",
      icon: <Globe className="h-12 w-12 text-primary" />
    },
    {
      title: "Enterprise API & Integrations",
      description: "Robust API with higher rate limits, webhooks, and pre-built integrations with enterprise software ecosystems.",
      icon: <Zap className="h-12 w-12 text-primary" />
    },
    {
      title: "Dedicated Success Team",
      description: "Personalized onboarding, training, and a dedicated customer success manager to ensure your team's success.",
      icon: <CheckCircle className="h-12 w-12 text-primary" />
    }
  ];

  const caseStudies = [
    {
      company: "Global Financial Corp",
      logo: "https://placehold.co/100x100/f5f5f5/666666.png?text=GFC",
      quote: "SaaSify helped us streamline operations across 12 countries and 5,000+ employees, resulting in a 35% increase in productivity and significant cost savings.",
      author: "Sarah Johnson, CIO"
    },
    {
      company: "TechGiant Industries",
      logo: "https://placehold.co/100x100/f5f5f5/666666.png?text=TGI",
      quote: "The enterprise security features and custom workflows allowed us to meet our strict compliance requirements while improving collaboration between engineering teams.",
      author: "Michael Chen, VP of Engineering"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-6"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Enterprise Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Empower Your Enterprise with Advanced Collaboration
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  SaaSify Enterprise provides the security, scalability, and customization that large organizations need to transform their workflows and drive efficiency at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
                    Schedule a Demo
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5" />
                  <img 
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Enterprise+Dashboard" 
                    alt="Enterprise Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Trusted By Section */}
        <section className="py-12 bg-muted/30 border-y border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                TRUSTED BY LEADING ENTERPRISES WORLDWIDE
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {["Fortune 500 Corp", "Global Tech", "Enterprise Inc", "Mega Industries", "World Finance"].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl font-semibold text-gray-400 dark:text-gray-600"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Enterprise Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built for Enterprise Scale and Security
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify Enterprise is designed to meet the unique challenges of large organizations with advanced features and capabilities.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Enterprise Case Studies
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how leading enterprises have transformed their operations with SaaSify.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-xl bg-white dark:bg-gray-800/50 p-8 shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={study.logo} 
                        alt={study.company} 
                        className="w-16 h-16 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{study.company}</h3>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                      "{study.quote}"
                    </p>
                    <p className="font-semibold">{study.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
        
        {/* Enterprise Features Comparison */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Enterprise vs. Standard Features
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how our Enterprise plan compares to our standard offerings.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Professional</th>
                    <th className="py-4 px-6 text-center bg-primary/5 font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Team Members", pro: "Up to 20", enterprise: "Unlimited" },
                    { feature: "Storage", pro: "25GB", enterprise: "Unlimited" },
                    { feature: "Security", pro: "Standard", enterprise: "Advanced (SSO, RBAC, Audit)" },
                    { feature: "Support", pro: "Priority Email", enterprise: "24/7 Dedicated Support" },
                    { feature: "SLA", pro: "99.9% uptime", enterprise: "99.99% uptime + Guarantees" },
                    { feature: "Custom Integrations", pro: "Limited", enterprise: "Full Access" },
                    { feature: "API Rate Limits", pro: "Standard", enterprise: "Enterprise-grade" },
                    { feature: "Data Residency", pro: "Limited", enterprise: "Full Control" },
                    { feature: "Custom Branding", pro: "Basic", enterprise: "Advanced" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-800">
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">{row.pro}</td>
                      <td className="py-4 px-6 text-center bg-primary/5 font-semibold">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Enterprise;
