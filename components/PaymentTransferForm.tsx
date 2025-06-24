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
    <div className="max-w-4xl mx-auto space-y-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Transfer Details Section */}
        <div className="stats-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <div>
              <h2 className="text-20 font-bold gradient-text">
                Transfer Details
              </h2>
              <p className="text-14 text-gray-600">
                Enter recipient information and transfer amount
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Recipient&apos;s Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter recipient's full name"
                value={form.name}
                onChange={handleInputChange}
                className="form-input-enhanced h-12 text-16"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Recipient&apos;s Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleInputChange}
                className="form-input-enhanced h-12 text-16"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="shareableId" className="text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Receiver&apos;s Account ID
              </label>
              <Input
                id="shareableId"
                name="shareableId"
                type="text"
                placeholder="Enter account identifier"
                value={form.shareableId}
                onChange={handleInputChange}
                className="form-input-enhanced h-12 text-16"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="text-14 font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Transfer Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">$</span>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  value={form.amount}
                  onChange={handleInputChange}
                  className="form-input-enhanced h-12 text-16 pl-8"
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div>
              <h2 className="text-20 font-bold gradient-text">
                Select Source Account
              </h2>
              <p className="text-14 text-gray-600">
                Choose the account you want to transfer funds from
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-14 font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Choose Your Account
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    form.senderBank === account.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setForm(prev => ({ ...prev, senderBank: account.id }))}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      form.senderBank === account.id ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                    }`}>
                      {form.senderBank === account.id && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{account.name}</div>
                      <div className="text-sm text-gray-600">****{account.mask}</div>
                      <div className="text-sm font-medium text-green-600">
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <div>
              <h2 className="text-20 font-bold gradient-text">
                Review & Transfer
              </h2>
              <p className="text-14 text-gray-600">
                Confirm your transfer details before proceeding
              </p>
            </div>
          </div>

          {/* Transfer Summary */}
          {form.amount && form.name && form.senderBank && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-4">Transfer Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">To:</span>
                  <span className="font-medium text-gray-800">{form.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-xl text-green-600">${form.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">From:</span>
                  <span className="font-medium text-gray-800">
                    {accounts.find(acc => acc.id === form.senderBank)?.name || 'Selected Account'}
                  </span>
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="button-primary w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl"
            disabled={isLoading || !form.amount || !form.name || !form.senderBank || !form.email || !form.shareableId}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Processing Transfer...
              </>
            ) : (
              <>
                <span className="mr-2">🚀</span>
                Transfer ${form.amount || '0.00'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentTransferForm; 