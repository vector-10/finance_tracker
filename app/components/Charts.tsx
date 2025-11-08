'use client';

export default function Charts() {
  // Mock chart data - replace with real chart library later
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const incomeData = [4000, 4500, 3800, 5200, 4800, 5000];
  const expenseData = [3200, 3800, 2900, 4100, 3500, 3200];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Income vs Expenses Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
        <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart will be implemented with chart library</p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Food</span>
            <span className="font-medium">$800</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Transport</span>
            <span className="font-medium">$400</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Entertainment</span>
            <span className="font-medium">$300</span>
          </div>
        </div>
      </div>
    </div>
  );
}