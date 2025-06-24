import HeaderBox from  '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import TransactionsTable from '@/components/TransactionsTable';

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
      <div className="home-content">
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

        <section className="recent-transactions stats-card">
          <header className="flex items-center justify-between">
            <h2 className="recent-transactions-label gradient-text">Recent transactions</h2>
            <a 
              href="/transaction-history"
              className="button-secondary"
            >
              View all
            </a>
          </header>
          <div className="recent-transactions-content mt-6">
            <TransactionsTable transactions={recentTransactions} />
          </div>
        </section>
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={recentTransactions}
        banks={accounts.map(account => ({
          ...account,
          $id: account.id,
          accountId: account.id,
          bankId: `bank_${account.id}`,
          accessToken: `access_${account.id}`,
          fundingSourceUrl: `https://api-sandbox.dwolla.com/funding-sources/${account.id}`,
          userId: loggedIn.userId,
        }))}
      />
    </section>
  )
}

export default Home
