
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Rocket, TrendingUp, Clock, DollarSign, Lightbulb, Users } from "lucide-react";

const Startups = () => {
  const benefits = [
    {
      title: "Quick Implementation",
      description: "Get up and running in minutes, not months. Our intuitive platform requires minimal setup and training.",
      icon: <Rocket className="h-12 w-12 text-primary" />
    },
    {
      title: "Scalable Growth",
      description: "Start small and scale as you grow. Our flexible plans adapt to your changing needs without disruption.",
      icon: <TrendingUp className="h-12 w-12 text-primary" />
    },
    {
      title: "Time Efficiency",
      description: "Automate repetitive tasks and streamline workflows to focus on what matters most - building your business.",
      icon: <Clock className="h-12 w-12 text-primary" />
    },
    {
      title: "Cost-Effective",
      description: "Affordable plans with predictable pricing. No hidden fees or expensive hardware requirements.",
      icon: <DollarSign className="h-12 w-12 text-primary" />
    },
    {
      title: "Innovation Enabler",
      description: "Built-in templates and best practices to help your team innovate faster and stay ahead of the competition.",
      icon: <Lightbulb className="h-12 w-12 text-primary" />
    },
    {
      title: "Team Collaboration",
      description: "Foster collaboration with intuitive tools that keep your team aligned and productive, even when remote.",
      icon: <Users className="h-12 w-12 text-primary" />
    }
  ];

  const testimonials = [
    {
      company: "GrowFast",
      logo: "https://placehold.co/100x100/f5f5f5/666666.png?text=GF",
      quote: "As a startup with limited resources, SaaSify helped us operate like a much larger company. We've been able to streamline our processes and focus on growth.",
      author: "Emily Rodriguez, Founder & CEO"
    },
    {
      company: "InnovateTech",
      logo: "https://placehold.co/100x100/f5f5f5/666666.png?text=IT",
      quote: "The automation features alone saved our small team hundreds of hours. SaaSify has been a game-changer for our productivity and collaboration.",
      author: "David Kim, CTO"
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
                  Startup Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Accelerate Your Startup's Growth
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  SaaSify helps startups and small businesses work smarter, move faster, and scale efficiently with affordable, powerful collaboration tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    See How It Works
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
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Startup+Dashboard" 
                    alt="Startup Dashboard" 
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
                TRUSTED BY INNOVATIVE STARTUPS
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {["LaunchPad", "StartupX", "GrowthCo", "InnovateTech", "NextGen"].map((company, index) => (
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
                  Startup Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built for Startups and SMBs
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify provides the tools you need to compete with larger companies without the enterprise price tag.
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
        
        {/* Testimonials Section */}
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
                  Startup Success Stories
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how startups like yours have accelerated their growth with SaaSify.
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
                        src={testimonial.logo} 
                        alt={testimonial.company} 
                        className="w-16 h-16 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.company}</h3>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Read More Success Stories
              </Button>
            </div>
          </div>
        </section>
        
        {/* Growth Journey Section */}
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
                  Your Startup Growth Journey
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify grows with you at every stage of your business.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />
                
                {/* Timeline items */}
                {[
                  {
                    stage: "Early Stage",
                    title: "Build Your Foundation",
                    description: "Get organized with basic project management, task tracking, and team collaboration tools.",
                    features: ["5 team members", "Basic task management", "File sharing", "Email support"]
                  },
                  {
                    stage: "Growth Stage",
                    title: "Scale Your Operations",
                    description: "Add structure and efficiency with advanced workflows, reporting, and integrations.",
                    features: ["20 team members", "Custom workflows", "Analytics dashboard", "API access", "Priority support"]
                  },
                  {
                    stage: "Expansion Stage",
                    title: "Optimize and Expand",
                    description: "Support your growing team with enterprise features at a fraction of enterprise costs.",
                    features: ["Unlimited team members", "Advanced security", "Custom integrations", "Dedicated support"]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="md:w-1/2 flex justify-center">
                      <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-md max-w-md">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                          {item.stage}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Timeline marker - only visible on md and up */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Startups;
