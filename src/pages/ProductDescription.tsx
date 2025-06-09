import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import allProducts from '@/data/products';

const aquaTonicDescription = `Acha Tonic – Hydration Tonic\n\nIngredients:\nAqua (Water), Glycerine, Rose Extract, Citric Acid\n\nPurpose:\nAcha Tonic is your go-to hydration boost. Enriched with humectant-rich glycerine and calming rose extract, this tonic deeply replenishes skin moisture levels while restoring the skin's natural glow. Citric acid works gently to balance pH and refine skin texture, leaving it fresh, dewy, and revitalized.\n\nHow to Use:\nApply with a gentle tap-tap technique using clean fingertips or a cotton pad. Let the tonic absorb naturally into your skin—ideal for post-cleansing and pre-moisturizer use.`;

const ProductDescription = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  // Use special description for Aqua Tonic
  const description = product.name === 'Aqua Tonic' ? aquaTonicDescription : product.description;

  return (
    <main className="min-h-screen bg-poshampa-cream flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl flex flex-col md:flex-row gap-8 items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg shadow" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-muted-foreground mb-2">{product.category}</div>
          <div className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</div>
          <pre className="whitespace-pre-wrap mb-4 text-gray-700">{description}</pre>
          <div className="flex items-center gap-4 mb-4">
            <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
            <span className="font-bold text-lg">{quantity}</span>
            <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
          </div>
          <Button className="bg-poshampa-amber hover:bg-poshampa-amber/90" onClick={() => addToCart({ ...product, quantity })}>
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDescription; 