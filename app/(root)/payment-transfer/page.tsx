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
    <section className="payment-transfer bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center py-6 sm:py-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">💸</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold gradient-text">Payment Transfer</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Send money securely and instantly to friends, family, or businesses. 
            Fill out the details below to complete your transfer.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-4 bg-white rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-md overflow-x-auto">
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Details</span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Account</span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Review</span>
            </div>
          </div>
        </div>

        <PaymentTransferForm accounts={accounts} />
      </div>
    </section>
  )
}

export default Transfer
