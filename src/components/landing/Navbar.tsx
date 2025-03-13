
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              SaaSify
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Use Cases <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuLabel className="text-primary font-medium">By Organization Size</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/enterprise" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">E</span>
                    </div>
                    <div>
                      <div className="font-medium">Enterprise Teams</div>
                      <div className="text-xs text-muted-foreground">For large organizations with complex needs</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/startups" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">S</span>
                    </div>
                    <div>
                      <div className="font-medium">Startups & SMBs</div>
                      <div className="text-xs text-muted-foreground">For growing businesses on a budget</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuLabel className="text-primary font-medium">By Profession</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/content-creators" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">C</span>
                    </div>
                    <div>
                      <div className="font-medium">Content Creators</div>
                      <div className="text-xs text-muted-foreground">Streamline your content production workflow</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/entrepreneurs" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">E</span>
                    </div>
                    <div>
                      <div className="font-medium">Entrepreneurs</div>
                      <div className="text-xs text-muted-foreground">Manage multiple ventures efficiently</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/accountants" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-medium">Accountants & Finance</div>
                      <div className="text-xs text-muted-foreground">Organize financial workflows and reporting</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <Link to="/usecases/agencies" className="w-full flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <span className="text-primary font-semibold text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-medium">Agencies & Consultants</div>
                      <div className="text-xs text-muted-foreground">Manage client projects and deliverables</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="py-2">
                <Link to="/usecases" className="w-full text-primary font-medium flex items-center justify-center">
                  View All Use Cases
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log in</Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all">
            Sign up free
          </Button>
        </div>
      </div>
    </header>
  );
};
