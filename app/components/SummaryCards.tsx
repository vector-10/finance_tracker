'use client';
import { useState, useEffect } from 'react';

export default function SummaryCards() {
  const [summary, setSummary] = useState({ income: 0, expenses: 0, balance: 0 });

  useEffect(() => {

    setSummary({ income: 5000, expenses: 3200, balance: 1800 });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Income</p>
            <p className="text-2xl font-bold text-green-600">${summary.income}</p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <span className="text-green-600 text-xl">📈</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Expenses</p>
            <p className="text-2xl font-bold text-red-600">${summary.expenses}</p>
          </div>
          <div className="p-3 bg-red-100 rounded-full">
            <span className="text-red-600 text-xl">📉</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Balance</p>
            <p className={`text-2xl font-bold ${summary.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${summary.balance}
            </p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <span className="text-blue-600 text-xl">💰</span>
          </div>
        </div>
      </div>
    </div>
  );
}