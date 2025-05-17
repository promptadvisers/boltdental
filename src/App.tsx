import React, { useState } from 'react';
import { DollarSign, Stethoscope } from 'lucide-react';
import { InputField } from './components/InputField';
import { CompensationResult } from './components/CompensationResult';
import { CompensationBreakdown } from './components/CompensationBreakdown';
import { calculateTotalCompensation } from './utils/calculations';

function App() {
  const [baseSalary, setBaseSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [procedures, setProcedures] = useState('');
  const [certifications, setCertifications] = useState('');
  
  const totalCompensation = calculateTotalCompensation(
    baseSalary,
    experience,
    procedures,
    certifications
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8 overflow-hidden rounded-xl h-40">
            <img
              src="https://images.unsplash.com/photo-1588774060651-f077a7b7fcb9?auto=format&fit=crop&w=1200&q=60"
              alt="Dental office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Stethoscope className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Dental Compensation Calculator</h1>
          </div>
          
          <div className="space-y-6">
            <InputField
              label="Base Salary (Annual)"
              value={baseSalary}
              onChange={setBaseSalary}
              placeholder="Enter base salary"
              icon={DollarSign}
            />

            <InputField
              label="Years of Experience"
              value={experience}
              onChange={setExperience}
              placeholder="Enter years of experience"
            />

            <InputField
              label="Average Monthly Procedures"
              value={procedures}
              onChange={setProcedures}
              placeholder="Enter number of procedures"
            />

            <InputField
              label="Additional Certifications"
              value={certifications}
              onChange={setCertifications}
              placeholder="Enter number of certifications"
            />
          </div>

          <div className="mt-8">
            <CompensationResult amount={totalCompensation} />
          </div>

          <CompensationBreakdown />
        </div>
      </div>
    </div>
  );
}

export default App;