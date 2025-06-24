import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable'

const TransactionHistory = () => {
  const loggedIn = { firstName: 'Thabiso', lastName: 'Phefo', email: 'phefothabiso@gmail.com' };
  
  // Mock transaction data
  const transactions = [
    {
      id: '1',
      $id: '1',
      name: 'Starbucks Coffee',
      paymentChannel: 'online',
      type: 'debit',
      accountId: 'acc1',
      amount: 4.35,
      pending: false,
      category: 'Food and Drink',
      date: '2024-01-15',
      image: '',
      $createdAt: '2024-01-15T10:30:00Z',
      channel: 'online',
      senderBankId: 'bank1',
      receiverBankId: 'bank2',
    },
    {
      id: '2',
      $id: '2',
      name: 'Direct Deposit',
      paymentChannel: 'bank',
      type: 'credit',
      accountId: 'acc1',
      amount: 2500.00,
      pending: false,
      category: 'Transfer',
      date: '2024-01-14',
      image: '',
      $createdAt: '2024-01-14T09:00:00Z',
      channel: 'bank',
      senderBankId: 'bank2',
      receiverBankId: 'bank1',
    },
    {
      id: '3',
      $id: '3',
      name: 'Amazon Purchase',
      paymentChannel: 'online',
      type: 'debit',
      accountId: 'acc1',
      amount: 89.99,
      pending: true,
      category: 'Transfer',
      date: '2024-01-13',
      image: '',
      $createdAt: '2024-01-13T15:45:00Z',
      channel: 'online',
      senderBankId: 'bank1',
      receiverBankId: 'bank3',
    },
    {
      id: '4',
      $id: '4',
      name: 'Uber Ride',
      paymentChannel: 'online',
      type: 'debit',
      accountId: 'acc1',
      amount: 12.50,
      pending: false,
      category: 'Travel',
      date: '2024-01-12',
      image: '',
      $createdAt: '2024-01-12T18:30:00Z',
      channel: 'online',
      senderBankId: 'bank1',
      receiverBankId: 'bank4',
    },
    {
      id: '5',
      $id: '5',
      name: 'Bank Fee',
      paymentChannel: 'bank',
      type: 'debit',
      accountId: 'acc1',
      amount: 5.00,
      pending: false,
      category: 'Bank Fees',
      date: '2024-01-11',
      image: '',
      $createdAt: '2024-01-11T08:00:00Z',
      channel: 'bank',
      senderBankId: 'bank1',
      receiverBankId: 'bank1',
    }
  ];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="balance-card">
          <div className="flex flex-col gap-2">
            <h2 className="text-base sm:text-18 font-bold text-white">
              💳 Account Details
            </h2>
            <div className="flex flex-col gap-1">
              <p className="text-sm sm:text-14 text-blue-100">
                🏦 Bank: Chase Bank
              </p>
              <p className="text-sm sm:text-14 font-semibold text-white">
                📊 Account: ****1234
              </p>
            </div>
          </div>
        </div>

        <section className="stats-card">
          <h2 className="text-lg sm:text-20 font-semibold gradient-text mb-4 sm:mb-6">
            📈 Recent Transactions
          </h2>
          <div className="w-full overflow-x-auto">
            <TransactionsTable transactions={transactions} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory
