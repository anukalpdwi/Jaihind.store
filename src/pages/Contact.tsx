import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import PaymentDetails from '../components/PaymentDetails';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = `Contact Form Submission from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:learnwithanukalp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100">
            Get in touch with us for any queries or orders
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 text-lg mb-8">
              Have questions about our products or need assistance with your order? We're here to help! Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-700">
                    Ward No. 43, Krishna Nagar<br />
                    Rewa (M.P.)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+917067894770" className="text-orange-600 hover:text-orange-800 text-lg font-semibold">
                    +91 7067894770
                  </a>
                  <p className="text-gray-600 text-sm">Available on WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:learnwithanukalp@gmail.com" className="text-orange-600 hover:text-orange-800 break-all">
                    learnwithanukalp@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Quick Order via WhatsApp</h3>
              <p className="text-gray-700 mb-4">
                For fastest response, message us directly on WhatsApp!
              </p>
              <a
                href="https://wa.me/917067894770"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-all transform hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {isSubmitted && (
                <div className="mb-6 bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-orange-800 font-semibold">Message Sent!</p>
                    <p className="text-orange-600 text-sm">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <PaymentDetails />
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us on Map</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.5!2d81.3!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA4McKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jai Hind Army Store Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
