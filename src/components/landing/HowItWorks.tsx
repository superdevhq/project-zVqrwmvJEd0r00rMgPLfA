
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds. No credit card required to get started with our 14-day free trial."
    },
    {
      number: "02",
      title: "Set Up Your Workspace",
      description: "Customize your workspace, invite team members, and import your existing data with our easy-to-use tools."
    },
    {
      number: "03",
      title: "Create Your First Project",
      description: "Set up your first project, define milestones, and start assigning tasks to your team members."
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor progress in real-time, get insights from analytics, and optimize your workflow for maximum efficiency."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
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
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
              Get Started in Minutes
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our intuitive platform makes it easy to get up and running quickly. Follow these simple steps to transform your workflow.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex rounded-lg border bg-background p-1 shadow-sm">
              <a href="#" className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium bg-primary text-white shadow-sm">
                Watch Demo
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium">
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
