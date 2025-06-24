import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const BudgetPage = () => {
  // Mock budget data
  const monthlyBudget = {
    totalBudget: 3000,
    totalSpent: 2245.67,
    remaining: 754.33
  };

  const budgetCategories = [
    {
      id: '1',
      name: 'Food & Dining',
      budgeted: 600,
      spent: 485.32,
      icon: '🍽️',
      color: 'blue',
      transactions: 23
    },
    {
      id: '2',
      name: 'Transportation',
      budgeted: 400,
      spent: 378.45,
      icon: '🚗',
      color: 'green',
      transactions: 12
    },
    {
      id: '3',
      name: 'Shopping',
      budgeted: 300,
      spent: 425.80,
      icon: '🛍️',
      color: 'red',
      transactions: 8
    },
    {
      id: '4',
      name: 'Entertainment',
      budgeted: 200,
      spent: 156.90,
      icon: '🎬',
      color: 'purple',
      transactions: 6
    },
    {
      id: '5',
      name: 'Utilities',
      budgeted: 250,
      spent: 234.56,
      icon: '⚡',
      color: 'orange',
      transactions: 4
    },
    {
      id: '6',
      name: 'Healthcare',
      budgeted: 150,
      spent: 89.75,
      icon: '🏥',
      color: 'teal',
      transactions: 2
    },
    {
      id: '7',
      name: 'Personal Care',
      budgeted: 100,
      spent: 67.43,
      icon: '💄',
      color: 'pink',
      transactions: 5
    },
    {
      id: '8',
      name: 'Miscellaneous',
      budgeted: 200,
      spent: 407.46,
      icon: '📦',
      color: 'gray',
      transactions: 11
    }
  ];

  const savingsGoals = [
    {
      id: '1',
      name: 'Emergency Fund',
      target: 10000,
      current: 6500,
      monthlyContribution: 500,
      icon: '🚨',
      dueDate: '2024-12-31'
    },
    {
      id: '2',
      name: 'Vacation',
      target: 3000,
      current: 1200,
      monthlyContribution: 300,
      icon: '✈️',
      dueDate: '2024-08-15'
    },
    {
      id: '3',
      name: 'New Car',
      target: 25000,
      current: 8750,
      monthlyContribution: 650,
      icon: '🚙',
      dueDate: '2025-06-30'
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
      gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.gray[type];
  };

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Budget & Planning"
          subtext="Track your spending, manage budgets, and reach your financial goals."
        />
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Budget Overview */}
        <section className="stats-card">
          <h2 className="text-lg sm:text-xl font-bold gradient-text mb-4 sm:mb-6">📊 Monthly Budget Overview</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">💰</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Budget</p>
                  <p className="text-xl font-bold text-blue-600">${monthlyBudget.totalBudget.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 text-lg">💸</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-xl font-bold text-red-600">${monthlyBudget.totalSpent.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg">💵</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Remaining</p>
                  <p className="text-xl font-bold text-green-600">${monthlyBudget.remaining.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Budget Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Budget Used</span>
              <span className="text-gray-900">{((monthlyBudget.totalSpent / monthlyBudget.totalBudget) * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((monthlyBudget.totalSpent / monthlyBudget.totalBudget) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Budget Categories */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">📋 Budget Categories</h2>
            <button className="button-primary text-sm">Add Category</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {budgetCategories.map((category) => {
              const percentage = (category.spent / category.budgeted) * 100;
              const isOverBudget = category.spent > category.budgeted;
              
              return (
                <div key={category.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${getColorClasses(category.color, 'bg')} rounded-lg flex items-center justify-center text-lg`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.transactions} transactions</p>
                      </div>
                    </div>
                    {isOverBudget && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        Over Budget
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Spent</span>
                      <span className={`font-semibold ${isOverBudget ? 'text-red-600' : 'text-gray-900'}`}>
                        ${category.spent.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Budget</span>
                      <span className="font-semibold text-gray-900">${category.budgeted.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Remaining</span>
                      <span className={`font-semibold ${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
                        ${(category.budgeted - category.spent).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Used</span>
                      <span className="text-gray-900">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isOverBudget 
                            ? 'bg-gradient-to-r from-red-500 to-red-600' 
                            : `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600`
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="button-secondary flex-1 text-xs">Edit Budget</button>
                    <button className="button-secondary flex-1 text-xs">View Details</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Savings Goals */}
        <section className="stats-card">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold gradient-text">🎯 Savings Goals</h2>
            <button className="button-primary text-sm">Add Goal</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {savingsGoals.map((goal) => {
              const percentage = (goal.current / goal.target) * 100;
              const monthsRemaining = Math.ceil((goal.target - goal.current) / goal.monthlyContribution);
              
              return (
                <div key={goal.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                        {goal.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{goal.name}</h3>
                        <p className="text-sm text-gray-600">Target: {new Date(goal.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current</span>
                      <span className="font-semibold text-green-600">${goal.current.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Target</span>
                      <span className="font-semibold text-gray-900">${goal.target.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly</span>
                      <span className="font-semibold text-blue-600">${goal.monthlyContribution.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Est. Months</span>
                      <span className="font-semibold text-gray-900">{monthsRemaining}</span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="button-primary flex-1 text-xs">Add Money</button>
                    <button className="button-secondary flex-1 text-xs">Edit Goal</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BudgetPage 