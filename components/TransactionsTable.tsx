import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor
  } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] ||
    transactionCategoryStyles.default

  const statusClass = category === 'Success' ? 'status-success' : 
                     category === 'Processing' ? 'status-pending' : 
                     'status-failed';

  return (
    <span className={`status-badge ${statusClass}`}>
      <div className={`size-2 rounded-full ${backgroundColor} mr-2`} />
      {category}
    </span>
  )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="min-w-full">
      <Table>
        <TableHeader className="table-header">
          <TableRow>
            <TableHead className="px-1 sm:px-2 text-xs sm:text-sm">Transaction</TableHead>
            <TableHead className="px-1 sm:px-2 text-xs sm:text-sm">Amount</TableHead>
            <TableHead className="px-1 sm:px-2 text-xs sm:text-sm">Status</TableHead>
            <TableHead className="px-1 sm:px-2 text-xs sm:text-sm">Date</TableHead>
            <TableHead className="px-1 sm:px-2 max-md:hidden text-xs sm:text-sm">Channel</TableHead>
            <TableHead className="px-1 sm:px-2 max-md:hidden text-xs sm:text-sm">Category</TableHead>
          </TableRow>
        </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = t.pending ? "Processing" : "Success"
          const amount = t.type === "debit" ? `-$${t.amount}` : `+$${t.amount}`
          const isDebit = t.type === "debit"
          const isCredit = t.type === "credit"

          return (
            <TableRow
              key={t.id}
              className={`transaction-row ${isDebit || amount[0] === "-" ? "hover:bg-red-50/30" : "hover:bg-green-50/30"}`}
            >
              <TableCell className="max-w-[120px] sm:max-w-[250px] pl-1 sm:pl-2 pr-2 sm:pr-10">
                <div className="flex items-center gap-1 sm:gap-3">
                  <h1 className="text-xs sm:text-14 truncate font-semibold text-[#344054]">
                    {t.name}
                  </h1>
                </div>
              </TableCell>

              <TableCell
                className={`pl-1 sm:pl-2 pr-2 sm:pr-10 font-semibold text-xs sm:text-sm ${
                  isDebit || amount[0] === "-"
                    ? "text-[#f04438]"
                    : "text-[#039855]"
                }`}
              >
                {isDebit ? `-$${t.amount}` : `+$${t.amount}`}
              </TableCell>

              <TableCell className="pl-1 sm:pl-2 pr-2 sm:pr-10">
                <CategoryBadge category={status} />
              </TableCell>

              <TableCell className="min-w-20 sm:min-w-32 pl-1 sm:pl-2 pr-2 sm:pr-10 text-xs sm:text-sm">
                <div className="block sm:hidden">
                  {new Date(t.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit'
                  })}
                </div>
                <div className="hidden sm:block">
                  {new Date(t.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                  })}
                </div>
              </TableCell>

              <TableCell className="pl-1 sm:pl-2 pr-2 sm:pr-10 capitalize min-w-20 sm:min-w-24 max-md:hidden text-xs sm:text-sm">
                {t.paymentChannel}
              </TableCell>

              <TableCell className="pl-1 sm:pl-2 pr-2 sm:pr-10 max-md:hidden">
                <CategoryBadge category={t.category} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      </Table>
    </div>
  )
}

export default TransactionsTable 