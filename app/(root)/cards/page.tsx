import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const CardsPage = () => {
  const loggedIn = { firstName: 'Thabiso', lastName: 'Phefo' };
  
  // Mock credit cards data
  const creditCards = [
    {
      id: '1',
      name: 'Chase Sapphire Preferred',
      type: 'Credit Card',
      number: '**** **** **** 8842',
      balance: 1245.50,
      limit: 15000,
      dueDate: '2024-02-15',
      minPayment: 125.00,
      availableCredit: 13754.50,
      apr: 18.99,
      rewards: 'Travel Points',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Bank of America Cash Rewards',
      type: 'Credit Card',
      number: '**** **** **** 2156',
      balance: 567.89,
      limit: 8000,
      dueDate: '2024-02-20',
      minPayment: 57.00,
      availableCredit: 7432.11,
      apr: 16.24,
      rewards: 'Cash Back',
      status: 'Active'
    }
  ];

  const debitCards = [
    {
      id: '1',
      name: 'Chase Checking',
      type: 'Debit Card',
      number: '**** **** **** 1234',
      accountBalance: 1250.35,
      status: 'Active',
      dailyLimit: 500,
      usedToday: 120.00
    },
    {
      id: '2',
      name: 'BofA Savings',
      type: 'Debit Card',
      number: '**** **** **** 5678',
      accountBalance: 500.50,
      status: 'Active',
      dailyLimit: 300,
      usedToday: 0
    }
  ];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Cards & Credit"
          subtext="Manage your credit cards, debit cards, and credit information."
        />
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Credit Score Overview */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">📊 Credit Overview</h2>
            <button className="button-secondary text-sm">View Full Report</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Credit Score</p>
                  <p className="text-xl font-bold text-green-600">742</p>
                  <p className="text-xs text-green-600">Excellent</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">💳</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Credit Limit</p>
                  <p className="text-xl font-bold text-blue-600">$23,000</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-lg">💰</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Balance</p>
                  <p className="text-xl font-bold text-orange-600">$1,813.39</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-lg">📈</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Credit Utilization</p>
                  <p className="text-xl font-bold text-purple-600">7.9%</p>
                  <p className="text-xs text-green-600">Good</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Cards */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">💳 Credit Cards</h2>
            <button className="button-primary text-sm">Apply for Card</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {creditCards.map((card) => (
              <div key={card.id} className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">{card.name}</h3>
                    <p className="text-sm text-gray-600">{card.number}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {card.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Balance</span>
                    <span className="font-semibold text-red-600">${card.balance.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Available Credit</span>
                    <span className="font-semibold text-green-600">${card.availableCredit.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Credit Limit</span>
                    <span className="font-semibold text-gray-900">${card.limit.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Min Payment Due</span>
                    <span className="font-semibold text-orange-600">${card.minPayment.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Due Date</span>
                    <span className="font-semibold text-gray-900">{new Date(card.dueDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">APR</span>
                    <span className="font-semibold text-gray-900">{card.apr}%</span>
                  </div>
                  
                  {/* Progress bar for credit utilization */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Credit Used</span>
                      <span className="text-gray-900">{((card.balance / card.limit) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(card.balance / card.limit) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="button-primary flex-1 text-sm">Pay Now</button>
                    <button className="button-secondary flex-1 text-sm">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Debit Cards */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">💳 Debit Cards</h2>
            <button className="button-secondary text-sm">Request New Card</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {debitCards.map((card) => (
              <div key={card.id} className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">{card.name}</h3>
                    <p className="text-sm text-gray-600">{card.number}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {card.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Balance</span>
                    <span className="font-semibold text-green-600">${card.accountBalance.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Daily ATM Limit</span>
                    <span className="font-semibold text-gray-900">${card.dailyLimit.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Used Today</span>
                    <span className="font-semibold text-orange-600">${card.usedToday.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Remaining Today</span>
                    <span className="font-semibold text-blue-600">${(card.dailyLimit - card.usedToday).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="button-secondary flex-1 text-sm">Freeze Card</button>
                    <button className="button-secondary flex-1 text-sm">Card Settings</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardsPage 