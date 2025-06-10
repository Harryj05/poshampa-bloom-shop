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
    <main className="min-h-screen bg-poshampa-cream flex items-center justify-center py-12 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl flex flex-col md:flex-row gap-10 items-center border-2 border-poshampa-amber">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-xl shadow-md border-4 border-poshampa-cream" />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2 text-poshampa-brown tracking-tight leading-tight">{product.name}</h1>
          <div className="text-poshampa-amber font-semibold mb-2 text-lg">{product.category}</div>
          <div className="text-2xl font-bold mb-4 text-poshampa-brown">${product.price.toFixed(2)}</div>
          <pre className="whitespace-pre-wrap mb-6 text-poshampa-charcoal text-base leading-relaxed bg-poshampa-cream/60 p-4 rounded-lg border border-poshampa-amber/30 font-medium" style={{fontFamily: 'inherit'}}>{description}</pre>
          <div className="flex items-center gap-4 mb-6">
            <Button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-poshampa-brown text-white hover:bg-poshampa-amber">-</Button>
            <span className="font-bold text-xl text-poshampa-brown">{quantity}</span>
            <Button onClick={() => setQuantity(q => q + 1)} className="bg-poshampa-brown text-white hover:bg-poshampa-amber">+</Button>
          </div>
          <Button 
            className="bg-poshampa-amber hover:bg-poshampa-brown text-white font-bold px-8 py-3 rounded-lg text-lg shadow-md transition-colors duration-200" 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDescription; 