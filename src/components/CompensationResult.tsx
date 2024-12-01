import React from 'react';
import { Calculator } from 'lucide-react';

interface CompensationResultProps {
  amount: number;
}

export function CompensationResult({ amount }: CompensationResultProps) {
  return (
    <div className="p-6 bg-indigo-50 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-800">Total Compensation</h2>
        </div>
        <div className="text-2xl font-bold text-indigo-600">
          ${amount.toLocaleString()}
        </div>
      </div>
    </div>
  );
}