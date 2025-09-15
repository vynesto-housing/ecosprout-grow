import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Large 404 */}
        <div className="text-9xl md:text-[12rem] font-bold text-primary/20 mb-8 leading-none">
          404
        </div>
        
        {/* Main Content */}
        <div className="gradient-card p-8 rounded-lg shadow-large">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/" className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/products" 
              className="text-primary hover:text-primary-hover transition-colors underline"
            >
              Our Products
            </Link>
            <Link 
              to="/about" 
              className="text-primary hover:text-primary-hover transition-colors underline"
            >
              About Us
            </Link>
            <Link 
              to="/blog" 
              className="text-primary hover:text-primary-hover transition-colors underline"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-primary hover:text-primary-hover transition-colors underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;