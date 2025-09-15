// Product card component for EcoSprout Packaging
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Recycle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const getCategoryColor = (category: Product['category']) => {
    switch (category) {
      case 'boxes':
        return 'bg-primary/10 text-primary';
      case 'bags':
        return 'bg-accent/10 text-accent';
      case 'containers':
        return 'bg-success/10 text-success';
      case 'wrapping':
        return 'bg-secondary/10 text-secondary-foreground';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getSustainabilityIcons = () => {
    const icons = [];
    if (product.sustainability.biodegradable) {
      icons.push({ icon: Leaf, tooltip: 'Biodegradable' });
    }
    if (product.sustainability.recyclable) {
      icons.push({ icon: Recycle, tooltip: 'Recyclable' });
    }
    if (product.sustainability.certifications.length > 0) {
      icons.push({ icon: Award, tooltip: 'Certified' });
    }
    return icons;
  };

  return (
    <div className={cn(
      "gradient-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300 group overflow-hidden",
      featured && "ring-2 ring-primary/20 shadow-glow"
    )}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-2 right-2 gradient-primary px-2 py-1 rounded text-xs text-primary-foreground font-medium">
            Featured
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium capitalize",
            getCategoryColor(product.category)
          )}>
            {product.category}
          </span>
          
          {/* Sustainability Icons */}
          <div className="flex space-x-1">
            {getSustainabilityIcons().map(({ icon: Icon, tooltip }, index) => (
              <div key={index} className="group/tooltip relative">
                <Icon className="h-4 w-4 text-success" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  {tooltip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Name & Description */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <ul className="text-xs text-muted-foreground space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-success rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">
              ${product.price}
            </span>
            <span className="text-xs text-muted-foreground">per unit</span>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-xs"
            >
              <Link to={`/products/${product.id}`}>
                Details
              </Link>
            </Button>
            <Button
              variant="nature"
              size="sm"
              disabled={!product.inStock}
              className="text-xs"
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};