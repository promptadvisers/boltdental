import React from 'react';

export function CompensationBreakdown() {
  return (
    <div className="mt-6 text-sm text-gray-500">
      <p>* Compensation breakdown:</p>
      <ul className="list-disc ml-5 mt-2">
        <li>Base salary as entered</li>
        <li>$2,000 bonus per year of experience</li>
        <li>$50 bonus per monthly procedure</li>
        <li>$1,500 bonus per additional certification</li>
      </ul>
    </div>
  );
}