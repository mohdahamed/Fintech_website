import React, { useState } from 'react';
import { CreditCard, Lock, X } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, amount = 0 }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    cardholderName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    if (name === 'cvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful payment
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setCardData({ cardNumber: '', expiryMonth: '', expiryYear: '', cvc: '', cardholderName: '' });
      }, 2000);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-2xl max-w-md w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex justify-between items-start sm:items-center gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-bold truncate">Complete Payment</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Secure checkout powered by Stripe</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white flex-shrink-0 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">✓</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h3>
              <p className="text-slate-600 text-sm sm:text-base">Your transaction has been processed securely.</p>
            </div>
          ) : (
            <form onSubmit={handlePayment} className="space-y-3 sm:space-y-4">
              {/* Amount Display */}
              <div className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-200">
                <p className="text-slate-600 text-xs sm:text-sm">Amount</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">${amount.toFixed(2)}</p>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={cardData.cardholderName}
                  onChange={handleCardChange}
                  placeholder="John Doe"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 ring-emerald-500 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <CreditCard size={16} /> Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardData.cardNumber}
                  onChange={handleCardChange}
                  placeholder="4242 4242 4242 4242"
                  maxLength="19"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 ring-emerald-500 font-mono"
                  required
                />
              </div>

              {/* Expiry & CVC Row */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Expiry Month</label>
                  <input
                    type="number"
                    name="expiryMonth"
                    min="1"
                    max="12"
                    value={cardData.expiryMonth}
                    onChange={handleCardChange}
                    placeholder="MM"
                    maxLength="2"
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Year</label>
                  <input
                    type="number"
                    name="expiryYear"
                    min="24"
                    max="35"
                    value={cardData.expiryYear}
                    onChange={handleCardChange}
                    placeholder="YY"
                    maxLength="2"
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1">
                    CVC <Lock size={12} />
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={cardData.cvc}
                    onChange={handleCardChange}
                    placeholder="123"
                    maxLength="4"
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 ring-emerald-500 font-mono"
                    required
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Lock size={14} className="text-green-600 shrink-0 mt-0.5" />
                <p>Your payment information is encrypted and secure. We never store your card details.</p>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95"
              >
                {isProcessing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
              </button>

              {/* Test Info */}
              <p className="text-xs text-slate-500 text-center mt-4">
                Test card: <span className="font-mono">4242 4242 4242 4242</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
