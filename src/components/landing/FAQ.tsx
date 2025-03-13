
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does the 14-day trial work?",
      answer: "Our 14-day trial gives you full access to all features with no credit card required. You can explore the platform, invite team members, and test all the features to see if SaaSify is right for you. At the end of the trial, you can choose a plan that works for you or your account will automatically switch to the free plan with limited features."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle. We believe in flexibility and want to make sure you're always on the right plan for your needs."
    },
    {
      question: "Is there a limit to how many team members I can add?",
      answer: "The number of team members you can add depends on your plan. The Starter plan allows up to 5 members, Professional up to 20, and Enterprise has no limit. If you need more team members on the Starter or Professional plans, you can add additional seats for a small fee per user."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs. We're committed to supporting organizations that are making a positive impact."
    },
    {
      question: "How secure is my data?",
      answer: "We take security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We use AWS for hosting with multiple redundancies and backups. We regularly undergo security audits and penetration testing to ensure your data is protected. Our platform is SOC 2 compliant and we offer additional security features like SSO and 2FA."
    },
    {
      question: "Can I import data from other tools?",
      answer: "Yes, we offer data import tools for most popular project management and collaboration platforms. Our import wizards make it easy to bring in your existing projects, tasks, and team members. If you need help with a complex migration, our customer success team is available to assist you."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include access to our help center, documentation, and community forums. The Starter plan includes email support with a 24-hour response time. The Professional plan adds priority email support with a 4-hour response time during business hours. The Enterprise plan includes 24/7 phone and email support with a dedicated account manager."
    },
    {
      question: "Do you have an API?",
      answer: "Yes, we offer a comprehensive REST API that allows you to integrate SaaSify with your existing tools and workflows. The API is available on the Professional and Enterprise plans. We also offer webhooks for real-time event notifications and integrations with popular platforms through Zapier and our native integrations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
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
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our platform. If you don't see your question here, feel free to contact us.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <div className="inline-flex gap-4">
            <a href="#" className="inline-flex items-center text-primary hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact Support
            </a>
            <a href="#" className="inline-flex items-center text-primary hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
