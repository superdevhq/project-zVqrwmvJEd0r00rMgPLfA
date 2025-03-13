
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Rocket, 
  Video, 
  Briefcase, 
  Calculator, 
  Users,
  ArrowRight
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Enterprise Teams",
      description: "Secure, scalable solutions for large organizations with complex needs.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
      link: "/usecases/enterprise"
    },
    {
      title: "Startups & SMBs",
      description: "Affordable, flexible tools to help growing businesses scale efficiently.",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      link: "/usecases/startups"
    },
    {
      title: "Content Creators",
      description: "Streamline your content production workflow across multiple platforms.",
      icon: <Video className="h-10 w-10 text-primary" />,
      link: "/usecases/content-creators"
    },
    {
      title: "Entrepreneurs",
      description: "Manage multiple ventures efficiently from a single dashboard.",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      link: "/usecases/entrepreneurs"
    },
    {
      title: "Accountants & Finance",
      description: "Organize financial workflows, reporting, and client management.",
      icon: <Calculator className="h-10 w-10 text-primary" />,
      link: "/usecases/accountants"
    },
    {
      title: "Agencies & Consultants",
      description: "Manage client projects, deliverables, and showcase your results.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/usecases/agencies"
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
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Use Cases
                </div>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                  SaaSify for Every Team and Industry
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Discover how SaaSify can be tailored to meet the specific needs of your team, industry, or workflow. Our flexible platform adapts to the way you work.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{useCase.description}</p>
                  <Link 
                    to={useCase.link} 
                    className="mt-auto inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-6"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Custom Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Don't See Your Use Case?
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Our platform is highly customizable and can be adapted to virtually any workflow or industry. Contact our team to discuss your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
                    Contact Sales
                  </Button>
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                  <img 
                    src="https://placehold.co/600x400/f5f5f5/666666.png?text=Custom+Solutions" 
                    alt="Custom Solutions" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Industry Solutions */}
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
                  Industry Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tailored for Your Industry
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SaaSify offers specialized templates and workflows for a wide range of industries.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
              {[
                "Technology", "Marketing", "Education", "Healthcare", 
                "Real Estate", "Legal", "Manufacturing", "Retail", 
                "Non-Profit", "Construction", "Hospitality", "Media"
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-800 text-center hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
                >
                  <p className="font-medium">{industry}</p>
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

export default UseCases;
