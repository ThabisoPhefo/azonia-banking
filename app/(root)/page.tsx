import HeaderBox from  '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import TransactionsTable from '@/components/TransactionsTable';
import BankCard from '@/components/BankCard';

const Home = () => {
  const loggedIn = {
    $id: '1',
    email: 'phefothabiso@gmail.com',
    userId: 'user_1',
    dwollaCustomerUrl: 'https://api-sandbox.dwolla.com/customers/test',
    dwollaCustomerId: 'customer_1',
    firstName: 'Thabiso',
    lastName: 'Phefo',
    address1: '123 Main St',
    city: 'Johannesburg',
    state: 'GP',
    postalCode: '2000',
    dateOfBirth: '1990-01-01',
    ssn: '1234',
  };

  // Mock accounts data
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

  // Mock recent transactions
  const recentTransactions = [
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
    }
  ];

  const totalCurrentBalance = accounts.reduce((total, account) => {
    return total + account.currentBalance;
  }, 0);

  return (
    <section className="home">
      <div className="home-content max-w-none">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext= "Access and manage your finances and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={accounts}
            totalBanks={accounts.length}
            totalCurrentBalance={totalCurrentBalance}
          />
        </header>

        {/* User Profile & Quick Actions */}
        <section className="stats-card mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-2xl font-bold">
                  {loggedIn?.firstName?.charAt(0)}{loggedIn?.lastName?.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {loggedIn?.firstName} {loggedIn?.lastName}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{loggedIn?.email}</p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <a href="/payment-transfer" className="button-primary flex-1 sm:flex-none text-center">
                💸 Transfer
              </a>
              <a href="/my-banks" className="button-secondary flex-1 sm:flex-none text-center">
                🏦 Banks
              </a>
            </div>
          </div>
        </section>

        {/* Bank Cards Section */}
        <section className="stats-card mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">💳 Your Bank Cards</h2>
            <a href="/my-banks" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {accounts.slice(0, 2).map((account) => (
              <div key={account.id} className="card-hover">
                <BankCard
                  account={account}
                  userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                  showBalance={true}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">💰</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Balance</p>
                <p className="text-lg font-bold text-gray-900">${totalCurrentBalance.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">🏛️</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Banks</p>
                <p className="text-lg font-bold text-gray-900">{accounts.length}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">📊</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Transactions</p>
                <p className="text-lg font-bold text-gray-900">{recentTransactions.length}</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-lg font-bold text-gray-900">
                  {recentTransactions.filter(t => t.pending).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <section className="recent-transactions stats-card">
          <header className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="recent-transactions-label gradient-text">📈 Recent Transactions</h2>
            <a 
              href="/transaction-history"
              className="button-secondary"
            >
              View all
            </a>
          </header>
          <div className="recent-transactions-content">
            <TransactionsTable transactions={recentTransactions} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home
