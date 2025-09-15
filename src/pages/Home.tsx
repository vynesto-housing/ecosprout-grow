// Home page for EcoSprout Packaging
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Recycle, Shield, Award, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import productsImage from '@/assets/products-hero.jpg';

export const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Biodegradable',
      description: 'All our products break down naturally, leaving no harmful residue'
    },
    {
      icon: Recycle,
      title: 'Fully Recyclable',
      description: 'Circular design means materials can be reused and repurposed'
    },
    {
      icon: Shield,
      title: 'Protective & Durable',
      description: 'Eco-friendly doesn\'t mean compromising on product protection'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'FSC, BPI, and ASTM certified sustainable packaging solutions'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Packages Delivered' },
    { value: '500+', label: 'Happy Clients' },
    { value: '95%', label: 'Carbon Reduction' },
    { value: '24/7', label: 'Customer Support' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'GreenTech Solutions',
      content: 'EcoSprout\'s packaging transformed our brand image. Customers love our commitment to sustainability.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Organic Foods Co.',
      content: 'The quality is outstanding and the environmental impact is minimal. Perfect for our organic products.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Eco Fashion Brand',
      content: 'Professional, reliable, and truly sustainable. Our customers notice the difference immediately.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Sustainable Packaging
            <span className="block text-accent-foreground">for a Greener Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with biodegradable, eco-friendly packaging solutions 
            that protect your products and our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <Link to="/products" className="flex items-center">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose EcoSprout?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge sustainability with premium quality to deliver 
              packaging solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="gradient-card p-8 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 text-center group">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Premium Packaging Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                From biodegradable shipping boxes to compostable food containers, 
                our comprehensive range covers all your sustainable packaging needs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Biodegradable shipping boxes',
                  'Compostable food containers',
                  'Recycled paper bags',
                  'Natural beeswax wraps'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="nature" size="lg">
                <Link to="/products" className="flex items-center">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={productsImage}
                alt="EcoSprout sustainable packaging products"
                className="rounded-lg shadow-large w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 gradient-primary p-6 rounded-lg shadow-glow">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of businesses making a positive environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="gradient-card p-8 rounded-lg shadow-medium hover:shadow-large transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join the sustainable packaging revolution today. Get a custom quote 
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};