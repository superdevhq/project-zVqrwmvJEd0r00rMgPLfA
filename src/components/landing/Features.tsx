
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Task Management",
      description: "Create, assign, and track tasks with ease. Keep your team on the same page with real-time updates and progress tracking.",
      icon: "📋"
    },
    {
      title: "Team Collaboration",
      description: "Work together in real-time with comments, file sharing, and integrated messaging. Break down silos and improve communication.",
      icon: "👥"
    },
    {
      title: "Analytics Dashboard",
      description: "Get insights into your team's performance with detailed analytics. Track productivity, identify bottlenecks, and optimize workflows.",
      icon: "📊"
    },
    {
      title: "Automated Workflows",
      description: "Set up automations to handle repetitive tasks and save time. Create custom triggers and actions to streamline your processes.",
      icon: "⚙️"
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools and services for a seamless experience. Over 100+ integrations available with our API.",
      icon: "🔄"
    },
    {
      title: "Mobile Access",
      description: "Access your workspace from anywhere with our mobile apps. Stay productive on the go with full-featured iOS and Android apps.",
      icon: "📱"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>
      
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
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform provides all the tools you need to manage your business efficiently and scale with confidence.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
