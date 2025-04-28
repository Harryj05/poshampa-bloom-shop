
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import CartDrawer from '@/components/ui/cart/CartDrawer';
import { useCart } from '@/context/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  
  const cartCount = getCartCount();

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="mr-2 h-12 w-auto">
              <img 
                src="/lovable-uploads/8ee30a71-3fa7-4d95-85f3-0cfad84e1af0.png" 
                alt="POSHAMPA" 
                className="h-full w-auto" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-poshampa-brown hover:text-poshampa-amber font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-poshampa-brown hover:text-poshampa-amber font-medium transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-poshampa-brown hover:text-poshampa-amber font-medium transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="text-poshampa-brown hover:text-poshampa-amber font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            
            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative hidden md:flex">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-poshampa-amber text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </CartDrawer>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-poshampa-brown hover:text-poshampa-amber font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block py-2 text-poshampa-brown hover:text-poshampa-amber font-medium"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-poshampa-brown hover:text-poshampa-amber font-medium"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/faq" 
              className="block py-2 text-poshampa-brown hover:text-poshampa-amber font-medium"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
            
            <div className="flex space-x-4 py-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <CartDrawer />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
