import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'


const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart floating-animation">
            <DoughnutChart accounts={accounts}/>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2 gradient-text">
            Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
            <p className="total-balance-label text-gray-600">
                Total Current balance
            </p>

            <div className="total-balance-amount flex-center gap-2">
                <span className="text-3xl font-bold text-blue-600">$</span>
                <AnimatedCounter amount={totalCurrentBalance}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
