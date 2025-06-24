'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    senderBank: '',
    receiverBank: '',
    shareableId: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setForm({
        name: '',
        email: '',
        amount: '',
        senderBank: '',
        receiverBank: '',
        shareableId: ''
      });
      
      alert('Transfer successful!');
    } catch (error) {
      console.error('Transfer error:', error);
      alert('Transfer failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 pb-8">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Transfer Details Section */}
        <div className="stats-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">1</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-20 font-bold gradient-text">
                Transfer Details
              </h2>
              <p className="text-sm sm:text-14 text-gray-600 mt-1">
                Enter recipient information and transfer amount
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm sm:text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="truncate">Recipient&apos;s Name</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter recipient's full name"
                value={form.name}
                onChange={handleInputChange}
                className="form-input-enhanced h-10 sm:h-12 text-sm sm:text-16"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm sm:text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="truncate">Recipient&apos;s Email Address</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleInputChange}
                className="form-input-enhanced h-10 sm:h-12 text-sm sm:text-16"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="shareableId" className="text-sm sm:text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="truncate">Receiver&apos;s Account ID</span>
              </label>
              <Input
                id="shareableId"
                name="shareableId"
                type="text"
                placeholder="Enter account identifier"
                value={form.shareableId}
                onChange={handleInputChange}
                className="form-input-enhanced h-10 sm:h-12 text-sm sm:text-16"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm sm:text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="truncate">Transfer Amount</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-sm sm:text-base">$</span>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  value={form.amount}
                  onChange={handleInputChange}
                  className="form-input-enhanced h-10 sm:h-12 text-sm sm:text-16 pl-6 sm:pl-8"
                  min="0.01"
                  step="0.01"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bank Account Selection Section */}
        <div className="stats-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">2</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-20 font-bold gradient-text">
                Select Source Account
              </h2>
              <p className="text-sm sm:text-14 text-gray-600 mt-1">
                Choose the account you want to transfer funds from
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <label className="text-sm sm:text-14 font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
              <span className="truncate">Choose Your Account</span>
            </label>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className={`p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    form.senderBank === account.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setForm(prev => ({ ...prev, senderBank: account.id }))}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 flex-shrink-0 ${
                      form.senderBank === account.id ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                    }`}>
                      {form.senderBank === account.id && (
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base truncate">{account.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">****{account.mask}</div>
                      <div className="text-xs sm:text-sm font-medium text-green-600">
                        ${account.currentBalance.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transfer Summary & Submit */}
        <div className="stats-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
          <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">3</span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-20 font-bold gradient-text">
                Review & Transfer
              </h2>
              <p className="text-sm sm:text-14 text-gray-600 mt-1">
                Confirm your transfer details before proceeding
              </p>
            </div>
          </div>

          {/* Transfer Summary */}
          {form.amount && form.name && form.senderBank && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Transfer Summary</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm sm:text-base">To:</span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base text-right ml-2 break-words">{form.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Amount:</span>
                  <span className="font-bold text-lg sm:text-xl text-green-600">${form.amount}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm sm:text-base">From:</span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base text-right ml-2 break-words">
                    {accounts.find(acc => acc.id === form.senderBank)?.name || 'Selected Account'}
                  </span>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="button-primary w-full h-12 sm:h-14 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl"
            disabled={isLoading || !form.amount || !form.name || !form.senderBank || !form.email || !form.shareableId}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                <span className="text-sm sm:text-base">Processing Transfer...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="mr-2">🚀</span>
                <span className="text-sm sm:text-base">Transfer ${form.amount || '0.00'}</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentTransferForm; 