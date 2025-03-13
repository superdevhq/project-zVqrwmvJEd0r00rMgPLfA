
import { motion } from "framer-motion";

export const Clients = () => {
  const clients = [
    "Acme Inc.",
    "Globex",
    "Initech",
    "Umbrella",
    "Stark Industries",
    "Wayne Enterprises"
  ];

  return (
    <section className="py-12 border-t border-b border-gray-200 dark:border-gray-800 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            TRUSTED BY COMPANIES WORLDWIDE
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl font-semibold text-gray-400 dark:text-gray-600"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
