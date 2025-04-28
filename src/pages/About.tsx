
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-poshampa-cream py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About POSHAMPA</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of passion for natural beauty and wellness solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                POSHAMPA was founded in 2020 by Ishita Nassa, who had a vision to create natural beauty and health products that truly work. What began as a small passion project in Ishita's kitchen has grown into a trusted brand loved by customers worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                After struggling with skin issues and not finding effective natural solutions in the market, Ishita began researching and experimenting with plant-based ingredients. Her homemade remedies proved so effective that friends and family encouraged her to share them with the world.
              </p>
              <p className="text-gray-600">
                Today, POSHAMPA offers a wide range of beauty and wellness products, all made with carefully selected natural ingredients, ethically sourced and scientifically formulated to provide real results.
              </p>
            </div>
            <div className="relative">
              <div className="bg-poshampa-amber/20 absolute inset-0 transform translate-x-4 translate-y-4 rounded-lg"></div>
              <div className="relative bg-gray-200 rounded-lg aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556255609-53e15bfd2f28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="POSHAMPA Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-poshampa-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making a positive impact on both people and the planet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-poshampa-brown">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At POSHAMPA, our mission is to create effective, natural beauty and wellness products that enhance your natural beauty and improve your overall well-being. We are committed to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Using only the highest quality natural ingredients</li>
                <li>Ensuring all our products are free from harmful chemicals</li>
                <li>Creating sustainable and environmentally friendly solutions</li>
                <li>Making natural beauty accessible to everyone</li>
                <li>Providing exceptional customer service and support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-poshampa-brown">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We envision a world where people no longer have to choose between effectiveness and natural ingredients in their beauty and wellness routines. Our vision includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Becoming the leading natural beauty and wellness brand globally</li>
                <li>Revolutionizing the industry with innovative natural formulations</li>
                <li>Educating consumers about the benefits of natural ingredients</li>
                <li>Creating a positive environmental impact through sustainable practices</li>
                <li>Building a community of health-conscious, empowered individuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-poshampa-amber/20 absolute inset-0 transform -translate-x-4 translate-y-4 rounded-full"></div>
              <div className="relative rounded-full aspect-square overflow-hidden w-3/4 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Ishita Nassa - Founder of POSHAMPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Ishita Nassa</span> is the heart and soul behind POSHAMPA. With a background in biochemistry and a passion for natural wellness, Ishita has dedicated herself to creating products that bridge the gap between traditional wisdom and modern science.
              </p>
              <p className="text-gray-600 mb-4">
                "My journey began when I was struggling with my own skin issues and couldn't find products that were both natural and effective. I started researching ancient beauty recipes and modern scientific studies, testing formulations in my kitchen until I created something that truly worked."
              </p>
              <p className="text-gray-600 mb-6">
                Today, Ishita leads a team of dedicated professionals who share her commitment to quality, sustainability, and customer satisfaction. She remains hands-on in the product development process, ensuring that every POSHAMPA product meets the highest standards.
              </p>
              <Button className="bg-poshampa-amber hover:bg-poshampa-amber/90">
                View Our Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-poshampa-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at POSHAMPA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Natural & Pure</h3>
              <p className="text-gray-600">
                We are committed to using only natural ingredients in their purest form, avoiding harmful chemicals and synthetic additives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality & Effectiveness</h3>
              <p className="text-gray-600">
                We never compromise on quality and ensure that our products deliver real results through carefully formulated ingredients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Ethics & Sustainability</h3>
              <p className="text-gray-600">
                We ethically source our ingredients and maintain sustainable practices throughout our supply chain and manufacturing processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-600">
                We value our customer community and engage with them to continually improve our products and services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in being transparent about our ingredients, processes, and business practices to build trust with our customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-poshampa-amber/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-poshampa-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously research and develop new formulations that combine ancient wisdom with modern scientific advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-poshampa-brown">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Experience the POSHAMPA Difference</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have transformed their beauty and wellness routines with our natural products.
          </p>
          <Button size="lg" className="bg-poshampa-amber hover:bg-poshampa-amber/90">
            Shop Our Products
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
