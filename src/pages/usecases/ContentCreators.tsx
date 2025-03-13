
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Video, Image, Calendar, MessageSquare, BarChart3, Layers } from "lucide-react";

const ContentCreators = () => {
  const benefits = [
    {
      title: "Content Calendar",
      description: "Plan and schedule your content across multiple platforms with our intuitive drag-and-drop calendar interface.",
      icon: <Calendar className="h-12 w-12 text-primary" />
    },
    {
      title: "Media Management",
      description: "Organize your photos, videos, and graphics in one central location with powerful tagging and search capabilities.",
      icon: <Image className="h-12 w-12 text-primary" />
    },
    {
      title: "Video Production",
      description: "Streamline your video workflow from storyboarding to publishing with collaborative editing tools and feedback systems.",
      icon: <Video className="h-12 w-12 text-primary" />
    },
    {
      title: "Audience Engagement",
      description: "Manage comments and messages across all your platforms in one unified inbox to boost engagement and save time.",
      icon: <MessageSquare className="h-12 w-12 text-primary" />
    },
    {
      title: "Performance Analytics",
      description: "Track your content performance with detailed analytics that help you understand what resonates with your audience.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />
    },
    {
      title: "Content Repurposing",
      description: "Easily transform your content for different platforms to maximize reach without duplicating your workload.",
      icon: <Layers className="h-12 w-12 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "Alex Morgan",
      role: "YouTube Creator, 1.2M Subscribers",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=AM",
      quote: "SaaSify has completely transformed my content workflow. I used to spend hours juggling different tools, but now everything is in one place. My production time has been cut in half!"
    },
    {
      name: "Sophia Chen",
      role: "Lifestyle Blogger & Instagram Influencer",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=SC",
      quote: "The content calendar and analytics features have been game-changers for my business. I can plan months ahead and understand exactly what content performs best with my audience."
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
                  Content Creator Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  Create Better Content, Faster
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  SaaSify helps content creators streamline their workflow, organize their media, and grow their audience with powerful tools designed specifically for creators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
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
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Content+Creator+Dashboard" 
                    alt="Content Creator Dashboard" 
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
                TRUSTED BY LEADING CONTENT CREATORS
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {["CreatorStudio", "InfluencerHub", "ContentPro", "MediaMakers", "StudioFlow"].map((company, index) => (
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
                  Creator Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tools Built for Content Creators
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify provides everything you need to streamline your content creation process from ideation to publication.
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
        
        {/* Workflow Section */}
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
                  Creator Workflow
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Streamline Your Content Creation Process
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From idea to publication, SaaSify helps you manage every step of your content creation journey.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />
                
                {/* Workflow steps */}
                {[
                  {
                    title: "Ideation & Planning",
                    description: "Brainstorm content ideas, organize them into campaigns, and schedule them on your content calendar.",
                    image: "https://placehold.co/600x400/f5f5f5/666666.png?text=Ideation"
                  },
                  {
                    title: "Content Creation",
                    description: "Create your content with integrated tools for writing, image editing, and video production.",
                    image: "https://placehold.co/600x400/f5f5f5/666666.png?text=Creation"
                  },
                  {
                    title: "Review & Collaboration",
                    description: "Get feedback from team members or clients with our collaborative review tools.",
                    image: "https://placehold.co/600x400/f5f5f5/666666.png?text=Review"
                  },
                  {
                    title: "Publishing & Promotion",
                    description: "Schedule and publish your content across multiple platforms from one central dashboard.",
                    image: "https://placehold.co/600x400/f5f5f5/666666.png?text=Publishing"
                  },
                  {
                    title: "Analytics & Optimization",
                    description: "Track performance metrics and gain insights to optimize your future content strategy.",
                    image: "https://placehold.co/600x400/f5f5f5/666666.png?text=Analytics"
                  }
                ].map((step, index) => (
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
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
                        <img src={step.image} alt={step.title} className="w-full h-auto" />
                      </div>
                    </div>
                    
                    {/* Step marker - only visible on md and up */}
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
                  Creator Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hear From Fellow Creators
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how content creators like you are using SaaSify to streamline their workflow and grow their audience.
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

export default ContentCreators;
