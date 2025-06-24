import React from 'react'
import BankCard from '@/components/BankCard'
import HeaderBox from '@/components/HeaderBox'

const MyBanks = () => {
  const loggedIn = { firstName: 'Thabiso', lastName: 'Phefo', email: 'phefothabiso@gmail.com' };
  
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

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />

        <div className="stats-card">
          <h2 className="header-2 gradient-text mb-6">
            💳 Your cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts && accounts.map((account: Account) => (
              <div key={account.id} className="card-hover">
                <BankCard
                  account={account}
                  userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                  showBalance={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks
