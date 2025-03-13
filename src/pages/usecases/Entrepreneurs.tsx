
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Briefcase, TrendingUp, Clock, DollarSign, Lightbulb, Users } from "lucide-react";

const Entrepreneurs = () => {
  const benefits = [
    {
      title: "Multiple Venture Management",
      description: "Manage all your business ventures from a single dashboard with customizable workspaces for each project.",
      icon: <Briefcase className="h-12 w-12 text-primary" />
    },
    {
      title: "Growth Tracking",
      description: "Monitor key metrics across all your ventures to identify opportunities and make data-driven decisions.",
      icon: <TrendingUp className="h-12 w-12 text-primary" />
    },
    {
      title: "Time Optimization",
      description: "Streamline your workflow with automation tools that handle repetitive tasks so you can focus on strategy.",
      icon: <Clock className="h-12 w-12 text-primary" />
    },
    {
      title: "Financial Overview",
      description: "Track revenue, expenses, and profitability across all your ventures with integrated financial dashboards.",
      icon: <DollarSign className="h-12 w-12 text-primary" />
    },
    {
      title: "Idea Incubator",
      description: "Capture, develop, and test new business ideas with our structured innovation framework.",
      icon: <Lightbulb className="h-12 w-12 text-primary" />
    },
    {
      title: "Team Collaboration",
      description: "Coordinate with team members, contractors, and partners across multiple ventures with unified communication tools.",
      icon: <Users className="h-12 w-12 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Serial Entrepreneur, 5 Successful Startups",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=MR",
      quote: "As someone running multiple businesses simultaneously, SaaSify has been a game-changer. I can switch between ventures seamlessly and keep everything organized in one place."
    },
    {
      name: "Jessica Wong",
      role: "Founder & Angel Investor",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=JW",
      quote: "The financial tracking features have given me unprecedented visibility across my portfolio of businesses. I can quickly see which ventures need attention and where to allocate resources."
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
                  Entrepreneur Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Manage Multiple Ventures with Ease
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  SaaSify helps entrepreneurs juggle multiple businesses, projects, and teams with a unified platform that brings clarity to complexity.
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
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Entrepreneur+Dashboard" 
                    alt="Entrepreneur Dashboard" 
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
                TRUSTED BY SUCCESSFUL ENTREPRENEURS
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {["VentureX", "Founder's Club", "StartupLab", "EntrepreneurHub", "BusinessForge"].map((company, index) => (
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
                  Entrepreneur Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tools Built for Multi-Venture Entrepreneurs
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify provides everything you need to manage multiple businesses efficiently and scale your entrepreneurial empire.
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
        
        {/* Multi-Venture Dashboard Section */}
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
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Multi-Venture+Dashboard" 
                    alt="Multi-Venture Dashboard" 
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
                  Multi-Venture Dashboard
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  All Your Ventures in One View
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Get a comprehensive overview of all your businesses with our multi-venture dashboard. Track key metrics, upcoming tasks, and important deadlines across all your projects.
                </p>
                <ul className="space-y-3">
                  {[
                    "Customizable KPI tracking for each venture",
                    "Cross-venture resource allocation",
                    "Unified calendar and task management",
                    "Comparative performance analytics",
                    "Integrated financial reporting"
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
                  Entrepreneur Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hear From Fellow Entrepreneurs
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how entrepreneurs like you are using SaaSify to manage multiple ventures and scale their businesses.
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

export default Entrepreneurs;
