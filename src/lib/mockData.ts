// Mock data for EcoSprout Packaging
import { Product, BlogPost, TeamMember } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'EcoBox Premium',
    description: 'Our flagship biodegradable shipping box made from 100% recycled cardboard with water-based inks. Perfect for e-commerce businesses looking to reduce their environmental impact while maintaining professional presentation.',
    shortDescription: 'Premium biodegradable shipping box with elegant design',
    price: 2.99,
    images: ['/src/assets/products-hero.jpg'],
    category: 'boxes',
    features: [
      '100% recycled cardboard',
      'Water-based inks only',
      'Easy assembly design',
      'Custom branding available',
      'Tear-resistant construction'
    ],
    sustainability: {
      biodegradable: true,
      recyclable: true,
      compostable: true,
      certifications: ['FSC Certified', 'SFI Certified', 'Cradle to Cradle']
    },
    dimensions: {
      length: 30,
      width: 20,
      height: 15,
      unit: 'cm'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Compostable Food Containers',
    description: 'Revolutionary plant-based food containers that break down completely in home compost systems within 90 days. Made from renewable sugarcane fibers and corn starch.',
    shortDescription: 'Plant-based containers for sustainable food service',
    price: 1.25,
    images: ['/src/assets/products-hero.jpg'],
    category: 'containers',
    features: [
      'Home compostable in 90 days',
      'Microwave and freezer safe',
      'Leak-proof design',
      'Made from sugarcane fiber',
      'Non-toxic materials'
    ],
    sustainability: {
      biodegradable: true,
      recyclable: false,
      compostable: true,
      certifications: ['BPI Certified', 'OK Compost HOME', 'ASTM D6400']
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Recycled Paper Bags',
    description: 'Stylish and durable paper bags crafted from post-consumer recycled paper. Available in various sizes with reinforced handles for heavy-duty use.',
    shortDescription: 'Durable recycled paper bags with reinforced handles',
    price: 0.85,
    images: ['/src/assets/products-hero.jpg'],
    category: 'bags',
    features: [
      'Post-consumer recycled paper',
      'Reinforced twisted handles',
      'Water-resistant coating',
      'Multiple size options',
      'Custom printing available'
    ],
    sustainability: {
      biodegradable: true,
      recyclable: true,
      compostable: true,
      certifications: ['FSC Certified', 'Recycled Content Verified']
    },
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Beeswax Food Wraps',
    description: 'Natural alternative to plastic wrap made with organic cotton infused with sustainably sourced beeswax, tree resin, and jojoba oil.',
    shortDescription: 'Natural beeswax wraps replace plastic food storage',
    price: 15.99,
    images: ['/src/assets/products-hero.jpg'],
    category: 'wrapping',
    features: [
      'Organic cotton base',
      'Natural beeswax coating',
      'Reusable up to 1 year',
      'Various pattern designs',
      'Self-adhesive properties'
    ],
    sustainability: {
      biodegradable: true,
      recyclable: false,
      compostable: true,
      certifications: ['GOTS Certified', 'Fair Trade']
    },
    inStock: true,
    featured: true
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Packaging: Trends for 2024',
    slug: 'future-sustainable-packaging-2024',
    excerpt: 'Discover the latest innovations in eco-friendly packaging and how businesses are leading the charge toward a circular economy.',
    content: `
# The Future of Sustainable Packaging: Trends for 2024

The packaging industry is undergoing a revolutionary transformation as businesses and consumers alike demand more environmentally responsible solutions. As we look toward 2024, several key trends are shaping the future of sustainable packaging.

## Plant-Based Materials Leading the Way

One of the most exciting developments is the rise of plant-based packaging materials. From seaweed-based films to mushroom packaging, these innovations offer biodegradable alternatives that break down naturally without harming the environment.

## Circular Economy Principles

More companies are adopting circular economy principles, designing packaging that can be reused, recycled, or composted. This approach minimizes waste and maximizes resource efficiency.

## Smart Packaging Integration

Technology is playing an increasingly important role in sustainable packaging. Smart labels and QR codes help consumers understand how to properly dispose of packaging materials.

## Consumer Education and Engagement

Successful sustainable packaging initiatives require consumer buy-in. Companies are investing in education campaigns to help customers understand the environmental benefits of their packaging choices.

The future of packaging is bright, and sustainability is no longer an option—it's a necessity for businesses that want to thrive in the modern marketplace.
    `,
    author: {
      name: 'Sarah Green',
      avatar: '/src/assets/team-hero.jpg',
      bio: 'Sustainable packaging expert with 10+ years in environmental design'
    },
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['sustainability', 'innovation', 'trends', 'circular-economy'],
    image: '/src/assets/hero-bg.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'How to Choose the Right Biodegradable Packaging for Your Business',
    slug: 'choose-biodegradable-packaging-business',
    excerpt: 'A comprehensive guide to selecting sustainable packaging solutions that align with your business needs and environmental goals.',
    content: `
# How to Choose the Right Biodegradable Packaging for Your Business

Selecting the right biodegradable packaging for your business requires careful consideration of multiple factors. This guide will help you make informed decisions that benefit both your bottom line and the environment.

## Assess Your Product Requirements

Start by evaluating your specific product needs:
- Protection level required
- Shelf life considerations
- Storage conditions
- Transportation requirements

## Understand Different Material Options

Various biodegradable materials offer different benefits:
- **Cardboard**: Excellent for shipping boxes
- **Cornstarch**: Great for food containers
- **Bamboo**: Ideal for utensils and plates
- **Seaweed**: Perfect for wrapping materials

## Consider Your Customer Base

Your customers' values and expectations play a crucial role in packaging selection. Today's consumers increasingly prefer brands that demonstrate environmental responsibility.

## Evaluate Cost Implications

While sustainable packaging may have higher upfront costs, consider long-term benefits including brand loyalty, reduced waste disposal fees, and potential tax incentives.

## Implementation Strategy

Roll out sustainable packaging gradually, starting with your most popular products and gathering customer feedback along the way.
    `,
    author: {
      name: 'Mike Thompson',
      avatar: '/src/assets/team-hero.jpg',
      bio: 'Business sustainability consultant and packaging strategist'
    },
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['business', 'biodegradable', 'selection-guide', 'strategy'],
    image: '/src/assets/products-hero.jpg',
    featured: false
  },
  {
    id: '3',
    title: 'The Science Behind Compostable Packaging Materials',
    slug: 'science-compostable-packaging-materials',
    excerpt: 'Explore the fascinating science that makes packaging materials break down naturally and return nutrients to the soil.',
    content: `
# The Science Behind Compostable Packaging Materials

Understanding the science behind compostable packaging helps us appreciate the innovation and engineering that goes into creating these eco-friendly solutions.

## What Makes Packaging Compostable?

Compostability depends on the molecular structure of materials and how microorganisms can break them down:

### Polymer Chains
Traditional plastics have strong polymer chains that resist decomposition. Compostable materials use weaker bonds that microorganisms can easily break.

### Microbial Action
Specific bacteria and fungi in compost environments produce enzymes that break down compostable materials into water, CO2, and organic matter.

## Testing Standards

Compostable packaging must meet strict standards:
- **ASTM D6400**: American standard for compostability
- **EN 13432**: European standard for compostability
- **AS 4736**: Australian standard for compostability

## Time and Conditions

Most compostable packaging breaks down within 90-180 days under proper composting conditions:
- Temperature: 50-60°C
- Humidity: 50-60%
- Adequate oxygen levels
- Proper carbon-nitrogen ratio

## Environmental Benefits

When properly composted, these materials contribute to soil health by adding organic matter and nutrients, completing the natural cycle.
    `,
    author: {
      name: 'Dr. Emma Wilson',
      avatar: '/src/assets/team-hero.jpg',
      bio: 'Materials scientist specializing in biodegradable polymers'
    },
    publishedAt: '2024-01-05',
    readTime: 6,
    tags: ['science', 'compostable', 'materials', 'environment'],
    image: '/src/assets/hero-bg.jpg',
    featured: true
  }
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Green',
    position: 'CEO & Founder',
    bio: 'Environmental engineer turned entrepreneur with a passion for sustainable solutions. Sarah founded EcoSprout after 15 years in traditional packaging, determined to create a better future for our planet.',
    image: '/src/assets/team-hero.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahgreen',
      twitter: 'https://twitter.com/sarahgreen',
      email: 'sarah@ecosprout.com'
    }
  },
  {
    id: '2',
    name: 'Mike Thompson',
    position: 'Head of Sustainability',
    bio: 'Leading our mission to minimize environmental impact through innovative packaging solutions. Mike brings 12 years of experience in sustainable business practices and circular economy principles.',
    image: '/src/assets/team-hero.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/mikethompson',
      email: 'mike@ecosprout.com'
    }
  },
  {
    id: '3',
    name: 'Dr. Emma Wilson',
    position: 'Chief Technology Officer',
    bio: 'Materials scientist with expertise in biodegradable polymers and packaging innovation. Emma leads our R&D efforts to develop next-generation sustainable packaging materials.',
    image: '/src/assets/team-hero.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/emmawilson',
      email: 'emma@ecosprout.com'
    }
  },
  {
    id: '4',
    name: 'James Rodriguez',
    position: 'Head of Operations',
    bio: 'Ensuring our sustainable packaging reaches customers efficiently while maintaining our commitment to environmental responsibility. James optimizes our supply chain for minimal ecological impact.',
    image: '/src/assets/team-hero.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/jamesrodriguez',
      email: 'james@ecosprout.com'
    }
  }
];

// Mock API responses
export const mockApiDelay = (ms: number = 800) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const getMockProducts = async (): Promise<Product[]> => {
  await mockApiDelay();
  return mockProducts;
};

export const getMockProduct = async (id: string): Promise<Product | null> => {
  await mockApiDelay();
  return mockProducts.find(product => product.id === id) || null;
};

export const getMockBlogPosts = async (): Promise<BlogPost[]> => {
  await mockApiDelay();
  return mockBlogPosts;
};

export const getMockBlogPost = async (slug: string): Promise<BlogPost | null> => {
  await mockApiDelay();
  return mockBlogPosts.find(post => post.slug === slug) || null;
};

export const getMockTeamMembers = async (): Promise<TeamMember[]> => {
  await mockApiDelay();
  return mockTeamMembers;
};