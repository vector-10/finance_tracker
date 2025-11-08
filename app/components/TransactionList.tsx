'use client';
import { useState, useEffect } from 'react';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 50, type: 'expense', category: 'food', date: '2024-11-08', notes: 'Lunch' },
    { id: 2, amount: 3000, type: 'income', category: 'salary', date: '2024-11-01', notes: 'Monthly salary' },
    { id: 3, amount: 25, type: 'expense', category: 'transport', date: '2024-11-07', notes: 'Bus fare' }
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium capitalize">{transaction.category}</span>
                <span className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {transaction.date} • {transaction.notes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}