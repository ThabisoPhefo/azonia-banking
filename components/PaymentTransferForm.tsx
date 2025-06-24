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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
      <div className="stats-card">
        <div className="payment-transfer_form-content">
          <div className="payment-transfer_form-details">
            <h2 className="text-18 font-semibold gradient-text">
              Transfer details
            </h2>
            <p className="text-16 font-normal text-gray-600">
              Provide any specific details or notes related to the transfer
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="payment-transfer_form-item">
              <label htmlFor="name" className="text-14 font-medium text-gray-900">
                Recipient&apos;s Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter recipient's name"
                value={form.name}
                onChange={handleInputChange}
                className="form-input-enhanced"
                required
              />
            </div>

            <div className="payment-transfer_form-item">
              <label htmlFor="email" className="text-14 font-medium text-gray-900">
                Recipient&apos;s Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter recipient's email"
                value={form.email}
                onChange={handleInputChange}
                className="input-class"
                required
              />
            </div>

            <div className="payment-transfer_form-item">
              <label htmlFor="shareableId" className="text-14 font-medium text-gray-900">
                Receiver&apos;s Plaid Shareable Id
              </label>
              <Input
                id="shareableId"
                name="shareableId"
                type="text"
                placeholder="Enter the public account number"
                value={form.shareableId}
                onChange={handleInputChange}
                className="input-class"
                required
              />
            </div>

            <div className="payment-transfer_form-item">
              <label htmlFor="amount" className="text-14 font-medium text-gray-900">
                Amount
              </label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={form.amount}
                onChange={handleInputChange}
                className="input-class"
                min="0.01"
                step="0.01"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="payment-transfer_form-item pb-6 pt-5">
        <div className="payment-transfer_form-content">
          <div className="payment-transfer_form-details">
            <h2 className="text-18 font-semibold text-gray-900">
              Bank account details
            </h2>
            <p className="text-16 font-normal text-gray-600">
              Select the bank account you want to transfer funds from
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="payment-transfer_form-item">
              <label htmlFor="senderBank" className="text-14 font-medium text-gray-900">
                Select Source Bank
              </label>
              <select
                id="senderBank"
                name="senderBank"
                value={form.senderBank}
                onChange={handleInputChange}
                className="input-class"
                required
              >
                <option value="">Select a bank account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.name} - {account.mask}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-transfer_btn-box">
        <Button
          type="submit"
          className="button-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Transferring...
            </>
          ) : (
            'Transfer Funds'
          )}
        </Button>
      </div>
    </form>
  );
};

export default PaymentTransferForm; 