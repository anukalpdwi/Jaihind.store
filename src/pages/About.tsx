import { Shield, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-orange-100">
            Learn more about J & K Enterprises - Jai Hind Army Store
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Jai Hind Army Store, operated by J & K Enterprises, has been a trusted name in providing premium quality uniforms and equipment. Located in the heart of Rewa, Madhya Pradesh, we have built our reputation on unwavering commitment to quality, authenticity, and customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in supplying authentic uniforms for the Indian Army, NCC cadets, Police personnel, educational institutions, and sports teams. Our extensive catalog also includes military gear, scientific equipment, and accessories that meet the highest standards of quality and durability.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With years of experience in the industry, we understand the importance of precision, reliability, and professionalism. Every product we offer is carefully selected and inspected to ensure it meets the expectations of our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                We guarantee authentic products made from premium materials with superior craftsmanship. Every item undergoes strict quality checks before reaching you.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Experience</h3>
              <p className="text-gray-700">
                Years of serving institutions and individuals have made us experts in understanding and fulfilling diverse uniform requirements across sectors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-700">
                Our customers are at the heart of everything we do. We provide personalized service, expert guidance, and support throughout your purchasing journey.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pride & Precision</h3>
              <p className="text-gray-700">
                We serve with military precision and take pride in equipping those who serve our nation, educational institutions, and communities.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-left max-w-2xl mx-auto text-lg">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Authentic products sourced from trusted manufacturers</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Competitive pricing without compromising on quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Fast and reliable delivery across India</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Expert consultation for bulk orders and customization</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Dedicated customer support via WhatsApp and email</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Trusted by institutions and individuals nationwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
