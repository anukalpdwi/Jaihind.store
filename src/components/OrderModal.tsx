import { useState } from 'react';
import { X, User, Phone, MapPin } from 'lucide-react';
import { Product } from '../types';

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to buy ${product.name} (₹${product.price}).\n\nMy details:\nName: ${formData.name}\nMobile: ${formData.phone}\nAddress: ${formData.address}`;

    const whatsappUrl = `https://wa.me/917067894770?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    onClose();
    setFormData({ name: '', phone: '', address: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all animate-slideUp">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-lg flex items-center justify-between">
          <h2 className="text-xl font-bold">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="hover:bg-orange-600 p-1 rounded transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-2xl font-bold text-orange-700">₹{product.price.toLocaleString('en-IN')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="h-4 w-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone className="h-4 w-4 inline mr-2" />
                Mobile Number
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="h-4 w-4 inline mr-2" />
                Delivery Address
              </label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Enter your complete address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Continue to WhatsApp
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            You will be redirected to WhatsApp to complete your order
          </p>
        </div>
      </div>
    </div>
  );
}
