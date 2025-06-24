import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const BillsPage = () => {
  // Mock bills data
  const upcomingBills = [
    {
      id: '1',
      name: 'Electric Company',
      category: 'Utilities',
      amount: 127.45,
      dueDate: '2024-02-10',
      status: 'Pending',
      autopay: true,
      accountFrom: 'Chase Checking',
      logo: '⚡'
    },
    {
      id: '2',
      name: 'Internet Provider',
      category: 'Utilities',
      amount: 89.99,
      dueDate: '2024-02-12',
      status: 'Pending',
      autopay: true,
      accountFrom: 'Chase Checking',
      logo: '🌐'
    },
    {
      id: '3',
      name: 'Credit Card Payment',
      category: 'Credit Cards',
      amount: 125.00,
      dueDate: '2024-02-15',
      status: 'Pending',
      autopay: false,
      accountFrom: 'BofA Savings',
      logo: '💳'
    },
    {
      id: '4',
      name: 'Netflix Subscription',
      category: 'Entertainment',
      amount: 15.99,
      dueDate: '2024-02-18',
      status: 'Pending',
      autopay: true,
      accountFrom: 'Chase Checking',
      logo: '🎬'
    }
  ];

  const recentPayments = [
    {
      id: '1',
      name: 'Water Company',
      amount: 56.78,
      paidDate: '2024-01-28',
      status: 'Paid',
      category: 'Utilities',
      logo: '💧'
    },
    {
      id: '2',
      name: 'Phone Bill',
      amount: 95.00,
      paidDate: '2024-01-25',
      status: 'Paid',
      category: 'Communications',
      logo: '📱'
    },
    {
      id: '3',
      name: 'Gas Company',
      amount: 78.34,
      paidDate: '2024-01-22',
      status: 'Paid',
      category: 'Utilities',
      logo: '🔥'
    }
  ];

  const recurringPayments = [
    {
      id: '1',
      name: 'Spotify Premium',
      amount: 9.99,
      frequency: 'Monthly',
      nextDate: '2024-02-08',
      category: 'Entertainment',
      logo: '🎵'
    },
    {
      id: '2',
      name: 'Gym Membership',
      amount: 45.00,
      frequency: 'Monthly',
      nextDate: '2024-02-14',
      category: 'Health & Fitness',
      logo: '💪'
    },
    {
      id: '3',
      name: 'Insurance Premium',
      amount: 120.00,
      frequency: 'Monthly',
      nextDate: '2024-02-20',
      category: 'Insurance',
      logo: '🛡️'
    }
  ];

  const totalUpcoming = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const totalPaid = recentPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalRecurring = recurringPayments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Bills & Payments"
          subtext="Manage your bills, schedule payments, and track your expenses."
        />
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Bills Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-lg">📋</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming Bills</p>
                <p className="text-lg font-bold text-gray-900">${totalUpcoming.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">✅</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Paid This Month</p>
                <p className="text-lg font-bold text-gray-900">${totalPaid.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">🔄</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Recurring</p>
                <p className="text-lg font-bold text-gray-900">${totalRecurring.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">AutoPay Active</p>
                <p className="text-lg font-bold text-gray-900">{upcomingBills.filter(b => b.autopay).length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Bills */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">📋 Upcoming Bills</h2>
            <button className="button-primary text-sm">Add Bill</button>
          </div>
          
          <div className="space-y-4">
            {upcomingBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    {bill.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{bill.name}</h3>
                    <p className="text-sm text-gray-600">{bill.category} • Due {new Date(bill.dueDate).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500">From: {bill.accountFrom}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${bill.amount.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                      {bill.autopay && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          AutoPay
                        </span>
                      )}
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                        {bill.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button className="button-primary text-xs px-3 py-1">Pay Now</button>
                    <button className="button-secondary text-xs px-3 py-1">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Payments */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">✅ Recent Payments</h2>
            <a href="/transaction-history" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </a>
          </div>
          
          <div className="space-y-4">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl">
                    {payment.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{payment.name}</h3>
                    <p className="text-sm text-gray-600">{payment.category} • Paid {new Date(payment.paidDate).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-green-600">${payment.amount.toFixed(2)}</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recurring Payments */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">🔄 Recurring Payments</h2>
            <button className="button-secondary text-sm">Manage AutoPay</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {recurringPayments.map((payment) => (
              <div key={payment.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                      {payment.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{payment.name}</h3>
                      <p className="text-sm text-gray-600">{payment.category}</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">${payment.amount.toFixed(2)}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="text-gray-900">{payment.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Next Payment:</span>
                    <span className="text-gray-900">{new Date(payment.nextDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="button-secondary flex-1 text-xs">Pause</button>
                  <button className="button-secondary flex-1 text-xs">Modify</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BillsPage 