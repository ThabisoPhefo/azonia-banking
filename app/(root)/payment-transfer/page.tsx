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
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts} />
      </section>
    </section>
  )
}

export default Transfer
