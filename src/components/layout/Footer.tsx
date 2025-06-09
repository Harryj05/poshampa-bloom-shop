import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-poshampa-brown text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About POSHAMPA</h3>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/8ee30a71-3fa7-4d95-85f3-0cfad84e1af0.png" 
                alt="POSHAMPA" 
                className="h-12 w-auto bg-white rounded-md p-1 mb-3" 
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Discover natural beauty and wellness products that nourish your body and soul. 
              POSHAMPA brings you ethically sourced, high-quality health and beauty solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-poshampa-amber transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-poshampa-amber transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-poshampa-amber transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-poshampa-amber transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-poshampa-amber transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-poshampa-amber transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-poshampa-amber transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-poshampa-amber transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-poshampa-amber transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-poshampa-amber mt-0.5" />
                <span className="text-gray-300">123 Beauty Lane, Wellness City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-poshampa-amber" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-poshampa-amber" />
                <span className="text-gray-300">contact@poshampa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} POSHAMPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
