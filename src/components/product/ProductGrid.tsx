
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, className }) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
        className
      )}
      role="grid"
      aria-label="Products grid"
    >
      {products.map((product) => (
        <div key={product.id} role="gridcell">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
