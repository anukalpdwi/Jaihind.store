import { Smartphone, CreditCard, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PaymentDetails() {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const upiId = 'jaihindarmystore@paytm';

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <CreditCard className="h-8 w-8 text-green-700" />
          <h2 className="text-3xl font-bold text-gray-900">Payment Details</h2>
        </div>
        <p className="text-gray-600">
          Scan QR codes or use UPI ID for instant payments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <span>PhonePe</span>
            </h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=jaihindarmystore@paytm%26pn=JaiHindArmyStore"
                alt="PhonePe QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Scan with PhonePe app
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Smartphone className="h-5 w-5 text-green-600" />
              <span>Google Pay</span>
            </h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=jaihindarmystore@paytm%26pn=JaiHindArmyStore"
                alt="Google Pay QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Scan with Google Pay app
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">
          UPI ID
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-white px-6 py-4 rounded-lg border-2 border-green-700 flex-1 max-w-md">
            <p className="text-green-800 font-mono font-bold text-center text-lg break-all">
              {upiId}
            </p>
          </div>
          <button
            onClick={handleCopyUPI}
            className={`px-6 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 ${
              copiedUPI
                ? 'bg-green-600 text-white'
                : 'bg-green-700 text-white hover:bg-green-800'
            }`}
          >
            {copiedUPI ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                <span>Copy UPI ID</span>
              </>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600 text-center mt-4">
          Use this UPI ID to make payments from any UPI app
        </p>
      </div>

      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-bold">Important:</span> After making payment, please send the payment screenshot to our WhatsApp number{' '}
          <a href="https://wa.me/917067894770" className="text-green-700 font-semibold hover:underline">
            +91 7067894770
          </a>{' '}
          for order confirmation.
        </p>
      </div>
    </div>
  );
}
