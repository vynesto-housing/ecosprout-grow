// Product details page for EcoSprout Packaging
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Recycle, Award, Shield, CheckCircle, Truck, Clock, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { getProduct } from '@/lib/apiClient';
import { cn } from '@/lib/utils';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button variant="outline" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getSustainabilityFeatures = () => {
    const features = [];
    if (product.sustainability.biodegradable) {
      features.push({ icon: Leaf, text: 'Biodegradable', color: 'text-success' });
    }
    if (product.sustainability.recyclable) {
      features.push({ icon: Recycle, text: 'Recyclable', color: 'text-accent' });
    }
    if (product.sustainability.compostable) {
      features.push({ icon: Package, text: 'Compostable', color: 'text-primary' });
    }
    return features;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="gradient-card p-4 rounded-lg shadow-medium">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedImage === index
                          ? "border-primary shadow-glow"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium capitalize">
                    {product.category}
                  </span>
                  {product.featured && (
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-sm font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Sustainability Features */}
              <div className="gradient-card p-6 rounded-lg shadow-medium">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-success mr-2" />
                  Sustainability Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {getSustainabilityFeatures().map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon className={cn("h-5 w-5", feature.color)} />
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              {product.sustainability.certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sustainability.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div className="gradient-card p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Dimensions
                  </h3>
                  <p className="text-muted-foreground">
                    {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} {product.dimensions.unit}
                  </p>
                </div>
              )}

              {/* Pricing & Purchase */}
              <div className="gradient-card p-6 rounded-lg shadow-medium">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    <span className="text-muted-foreground ml-2">per unit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-warning fill-current" />
                    <span className="text-foreground font-medium">4.8</span>
                    <span className="text-muted-foreground">(124 reviews)</span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-foreground font-medium">Quantity:</label>
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-border min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    disabled={!product.inStock}
                    className="flex-1"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button variant="outline" size="lg">
                    Get Quote
                  </Button>
                </div>

                {/* Shipping Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Truck className="h-4 w-4 mr-2" />
                      Free shipping on orders over $100
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Ships in 2-3 business days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Tabs */}
      <div className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-card p-8 rounded-lg shadow-medium">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Carbon Neutral
                </h3>
                <p className="text-muted-foreground text-sm">
                  Production process offsets 100% of carbon emissions
                </p>
              </div>
              <div className="text-center">
                <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Circular Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Designed for reuse, recycling, and composting
                </p>
              </div>
              <div className="text-center">
                <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Safe Materials
                </h3>
                <p className="text-muted-foreground text-sm">
                  Non-toxic, food-safe materials throughout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};