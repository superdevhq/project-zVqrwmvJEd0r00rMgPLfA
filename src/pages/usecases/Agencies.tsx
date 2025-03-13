
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Users, BarChart3, Clock, FileCheck, Globe, MessageSquare } from "lucide-react";

const Agencies = () => {
  const benefits = [
    {
      title: "Client Management",
      description: "Organize all your clients with custom fields, communication history, and document storage for each account.",
      icon: <Users className="h-12 w-12 text-primary" />
    },
    {
      title: "Project Tracking",
      description: "Monitor project progress, deadlines, and resource allocation across all your client engagements.",
      icon: <FileCheck className="h-12 w-12 text-primary" />
    },
    {
      title: "Time & Resource Management",
      description: "Track billable hours, manage team capacity, and optimize resource allocation for maximum profitability.",
      icon: <Clock className="h-12 w-12 text-primary" />
    },
    {
      title: "Client Reporting",
      description: "Generate professional, branded reports that showcase your results and the value you deliver.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />
    },
    {
      title: "Multi-Channel Management",
      description: "Coordinate campaigns and deliverables across multiple platforms and channels from a single dashboard.",
      icon: <Globe className="h-12 w-12 text-primary" />
    },
    {
      title: "Client Communication",
      description: "Streamline client approvals, feedback, and communication with integrated messaging and notification tools.",
      icon: <MessageSquare className="h-12 w-12 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      role: "CEO, Wilson Creative Agency",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=DW",
      quote: "SaaSify has transformed how we manage client projects. We've increased our capacity by 30% without adding headcount, and our clients love the transparency and communication the platform enables."
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director, Global Consulting Group",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=MR",
      quote: "Managing consultants across multiple client projects used to be a nightmare. With SaaSify, we have complete visibility into resource allocation, project status, and profitability in real-time."
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
                  Agency & Consultant Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Deliver Better Client Results
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  SaaSify helps agencies and consultants manage client projects, track deliverables, and showcase results with powerful tools designed for client service businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  No credit card required for 14-day trial
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
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Agency+Dashboard" 
                    alt="Agency Dashboard" 
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
                TRUSTED BY LEADING AGENCIES & CONSULTANTS
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {["Creative Partners", "Strategy Group", "Digital Experts", "Consulting Pro", "Agency Collective"].map((company, index) => (
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
                  Agency Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tools Built for Client Service Businesses
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify provides everything you need to manage client relationships, deliver projects, and grow your agency or consulting practice.
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
        
        {/* Client Portal Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                  <img 
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Client+Portal" 
                    alt="Client Portal" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-6"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Client Portal
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Elevate Your Client Experience
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Provide your clients with a branded portal where they can track project progress, approve deliverables, and access reports.
                </p>
                <ul className="space-y-3">
                  {[
                    "Branded client dashboards",
                    "Real-time project status updates",
                    "Deliverable approval workflows",
                    "Secure file sharing and storage",
                    "Integrated messaging and feedback"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary shrink-0 mt-0.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
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
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hear From Agency Leaders
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how agencies and consultants are using SaaSify to transform their client service and grow their businesses.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
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
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </motion.div>
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

export default Agencies;
