// API client for EcoSprout Packaging
import { Product, BlogPost, TeamMember, ContactForm, ApiResponse } from '@/types';
import { 
  getMockProducts, 
  getMockProduct, 
  getMockBlogPosts, 
  getMockBlogPost, 
  getMockTeamMembers,
  mockApiDelay 
} from './mockData';

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Products API
  async getProducts(): Promise<Product[]> {
    try {
      return await this.request<Product[]>('/products');
    } catch {
      // Fallback to mock data if API is unavailable
      return await getMockProducts();
    }
  }

  async getProduct(id: string): Promise<Product | null> {
    try {
      return await this.request<Product>(`/products/${id}`);
    } catch {
      // Fallback to mock data if API is unavailable
      return await getMockProduct(id);
    }
  }

  // Blog API
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      return await this.request<BlogPost[]>('/blog');
    } catch {
      // Fallback to mock data if API is unavailable
      return await getMockBlogPosts();
    }
  }

  async getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
      return await this.request<BlogPost>(`/blog/${slug}`);
    } catch {
      // Fallback to mock data if API is unavailable
      return await getMockBlogPost(slug);
    }
  }

  // Team API
  async getTeamMembers(): Promise<TeamMember[]> {
    try {
      return await this.request<TeamMember[]>('/team');
    } catch {
      // Fallback to mock data if API is unavailable
      return await getMockTeamMembers();
    }
  }

  // Contact API
  async submitContactForm(data: ContactForm): Promise<ApiResponse<null>> {
    try {
      return await this.request<ApiResponse<null>>('/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch {
      // Mock success response if API is unavailable
      await mockApiDelay();
      return {
        data: null,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        success: true,
      };
    }
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();

// Export individual methods for convenience
export const {
  getProducts,
  getProduct,
  getBlogPosts,
  getBlogPost,
  getTeamMembers,
  submitContactForm,
} = apiClient;