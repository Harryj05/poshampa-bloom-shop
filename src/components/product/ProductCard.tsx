import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart, Product } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  const navigate = useNavigate();
  return <Card className="overflow-hidden transition-all hover:shadow-md cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <CardContent className="pt-4">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
        <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-poshampa-amber hover:bg-poshampa-amber/90" onClick={e => { e.stopPropagation(); addToCart(product); }}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>;
};

export default ProductCard;