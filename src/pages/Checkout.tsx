import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const QR_CODE_IMAGE = '/lovable-uploads/qr-placeholder.png'; // Replace with your QR code image path

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState<'cod' | 'online' | ''>('');
  const [submitted, setSubmitted] = useState(false);

  const baseTotal = getCartTotal();
  const surgeCharge = paymentMode === 'cod' ? 3 : 0;
  const total = baseTotal + surgeCharge;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-poshampa-cream flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Delivery Address</label>
            <textarea
              className="w-full border rounded p-2"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
              rows={3}
              placeholder="Enter your delivery address"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Payment Mode</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cod"
                  checked={paymentMode === 'cod'}
                  onChange={() => setPaymentMode('cod')}
                  required
                />
                Cash On Delivery (+$3 surge)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="online"
                  checked={paymentMode === 'online'}
                  onChange={() => setPaymentMode('online')}
                  required
                />
                Online Payment
              </label>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {paymentMode === 'online' && (
            <div className="text-center">
              <p className="mb-2 font-medium">Scan the QR to pay</p>
              <img src={QR_CODE_IMAGE} alt="Scan QR for payment" className="mx-auto w-40 h-40 object-contain border rounded" />
            </div>
          )}
          <Button type="submit" className="w-full bg-poshampa-amber hover:bg-poshampa-amber/90">
            Place Order
          </Button>
        </form>
        {submitted && (
          <div className="mt-6 text-center text-green-600 font-bold">
            Thank you for your order! We will process your delivery soon.
          </div>
        )}
      </div>
    </main>
  );
};

export default Checkout; 