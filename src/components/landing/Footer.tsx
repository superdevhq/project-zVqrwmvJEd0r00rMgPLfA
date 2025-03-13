
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t py-12 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                SaaSify
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Streamline your workflow with our all-in-one platform for team collaboration and project management.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Product</h3>
            <nav className="flex flex-col gap-2">
              <a href="#features" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Pricing</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Integrations</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Changelog</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Roadmap</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Company</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">About</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Blog</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Careers</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Customers</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Resources</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Documentation</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Help Center</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Community</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Webinars</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Tutorials</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Legal</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">GDPR</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">Security</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 SaaSify. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Language:</span>
            <select className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
