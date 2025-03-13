
import { motion } from "framer-motion";
import { useState } from "react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "SaaSify has completely transformed how our team works together. We're more productive than ever, and the analytics dashboard gives us insights we never had before. The customer support team is also incredibly responsive.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=SJ",
      company: "TechCorp"
    },
    {
      quote: "The analytics dashboard alone is worth the price. We've gained so much insight into our workflow and identified bottlenecks we didn't even know existed. Our productivity has increased by 35% since implementing SaaSify.",
      author: "Michael Chen",
      role: "CTO, StartupX",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=MC",
      company: "StartupX"
    },
    {
      quote: "I can't imagine running our business without SaaSify now. It's become an essential part of our daily operations. The automation features have saved us countless hours of manual work, and the mobile app lets us stay productive on the go.",
      author: "Emily Rodriguez",
      role: "Operations Director, GrowthCo",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=ER",
      company: "GrowthCo"
    },
    {
      quote: "We evaluated several project management tools before choosing SaaSify, and it was definitely the right decision. The interface is intuitive, the features are comprehensive, and the pricing is transparent. Highly recommended!",
      author: "David Kim",
      role: "Engineering Manager, InnovateTech",
      avatar: "https://placehold.co/100x100/f5f5f5/666666.png?text=DK",
      company: "InnovateTech"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
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
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what our customers have to say about their experience with SaaSify.
            </p>
          </motion.div>
        </div>
        
        <div className="mt-12 relative">
          <div className="mx-auto max-w-4xl">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl bg-white dark:bg-gray-800/50 p-8 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[activeIndex].author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['TechCorp', 'StartupX', 'GrowthCo', 'InnovateTech'].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white dark:bg-gray-800/30 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="text-xl font-bold text-gray-400 dark:text-gray-600">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
