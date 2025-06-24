import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'

const Transfer = () => {
  const loggedIn = { firstName: 'Thabiso', lastName: 'Phefo', email: 'phefothabiso@gmail.com' };
  
  // Mock account data
  const accounts = [
    {
      id: '1',
      availableBalance: 1250.35,
      currentBalance: 1250.35,
      officialName: 'Chase Bank Checking',
      mask: '1234',
      institutionId: 'ins_1',
      name: 'Chase Checking',
      type: 'depository',
      subtype: 'checking',
      appwriteItemId: 'item_1',
      sharableId: 'share_1',
    },
    {
      id: '2',
      availableBalance: 500.50,
      currentBalance: 500.50,
      officialName: 'Bank of America Savings',
      mask: '5678',
      institutionId: 'ins_2',
      name: 'BofA Savings',
      type: 'depository',
      subtype: 'savings',
      appwriteItemId: 'item_2',
      sharableId: 'share_2',
    }
  ];

  return (
    <section className="payment-transfer bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">💸</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">Payment Transfer</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Send money securely and instantly to friends, family, or businesses. 
            Fill out the details below to complete your transfer.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Details</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Account</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Review</span>
            </div>
          </div>
        </div>

        <PaymentTransferForm accounts={accounts} />
      </div>
    </section>
  )
}

export default Transfer
