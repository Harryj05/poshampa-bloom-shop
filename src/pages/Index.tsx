import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/product/ProductGrid';

const featuredProducts = [
  {
    id: 1,
    name: 'POSHAMPA Soap',
    price: 99.0,
    image: '/lovable-uploads/IMG-20250602-WA0032.jpg',
    category: 'Natural Soap',
    description: 'Handcrafted natural soap for gentle cleansing and nourishment.'
  },
  {
    id: 2,
    name: 'Forever 22 Tonic',
    price: 299.0,
    image: '/lovable-uploads/IMG-20250602-WA0033.jpg',
    category: 'Face Serum',
    description: 'Youthful glow serum with rose, lemon, and natural extracts.'
  },
  {
    id: 3,
    name: 'POSHAMPA Spray',
    price: 199.0,
    image: '/lovable-uploads/IMG-20250602-WA0034.jpg',
    category: 'Body Mist',
    description: 'Refreshing body spray for all-day freshness.'
  },
  {
    id: 4,
    name: 'Mouth Bath',
    price: 149.0,
    image: '/lovable-uploads/IMG-20250602-WA0035.jpg',
    category: 'Oral Care',
    description: 'Herbal mouth rinse with turmeric, clove, and natural minerals.'
  },
  {
    id: 5,
    name: 'Herbal Bath Salt',
    price: 129.0,
    image: '/lovable-uploads/IMG-20250602-WA0036.jpg',
    category: 'Bath & Body',
    description: 'Relaxing bath salt blend for a soothing soak.'
  },
  {
    id: 6,
    name: 'Aqua Tonic',
    price: 299.0,
    image: '/lovable-uploads/IMG-20250602-WA0037.jpg',
    category: 'Face Serum',
    description: 'Hydrating aqua tonic with rose and mint for radiant skin.'
  }
];
const Index = () => {
  return <main>
      {/* Hero Section */}
      <section className="relative bg-poshampa-cream min-h-[70vh] flex items-center" role="banner">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Natural Beauty & Wellness Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the power of nature with POSHAMPA's premium range of beauty and health products, ethically sourced and crafted for your well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-poshampa-amber hover:bg-poshampa-amber/90" aria-label="Browse our shop">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" aria-label="Learn more about our products">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img src="/lovable-uploads/8ee30a71-3fa7-4d95-85f3-0cfad84e1af0.png" alt="POSHAMPA" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white" aria-labelledby="featured-products">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 id="featured-products" className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-poshampa-amber hover:text-poshampa-amber/80 flex items-center" aria-label="View all products">
              View All <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Why Choose POSHAMPA */}
      <section className="section-padding bg-poshampa-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose POSHAMPA</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing natural, effective products that enhance your beauty and well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">All Natural</h3>
              <p className="text-gray-600">
                Our products are made with 100% natural ingredients, free from harmful chemicals
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Ethically Sourced</h3>
              <p className="text-gray-600">
                We ensure all our ingredients are sourced in an ethical and sustainable manner
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Dermatologically Tested</h3>
              <p className="text-gray-600">
                All products are tested and approved by dermatologists for safety
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery to your doorstep with careful packaging to ensure product quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About POSHAMPA</h2>
            <p className="text-gray-600 mb-4">
              Founded by Ishita Nassa, POSHAMPA is a passion project turned successful business, dedicated to providing natural beauty and health solutions that work in harmony with your body.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to harness the power of nature to create effective, sustainable products that enhance your natural beauty and improve your overall well-being. We believe that beauty comes from within, and our products are designed to nourish both body and soul.
            </p>
            <Button className="bg-poshampa-amber hover:bg-poshampa-amber/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <img src="/lovable-uploads/8ee30a71-3fa7-4d95-85f3-0cfad84e1af0.png" alt="POSHAMPA Logo" className="max-w-xs w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-poshampa-brown">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive updates on new products, special offers, and beauty tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-poshampa-amber" />
              <Button className="bg-poshampa-amber hover:bg-poshampa-amber/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Index;