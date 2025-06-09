import React from 'react';
import ProductGrid from '@/components/product/ProductGrid';
import allProducts from '@/data/products';

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