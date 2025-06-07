import React from 'react';
import ProductGrid from '@/components/product/ProductGrid';

const allProducts = [
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

const Products = () => {
  return (
    <main>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">All Products</h1>
          <ProductGrid products={allProducts} />
        </div>
      </section>
    </main>
  );
};

export default Products; 