import React from 'react';

const VerticalTracking = () => {
  const steps = [
    { label: 'Application Submitted', date: '01 Nov 2024' },
    { label: 'Verified by SAG Bureau', date: '03 Nov 2024' },
    { label: 'Financial Dept. Released', date: '05 Nov 2024' },
    { label: 'Completed Successfully', date: '07 Nov 2024' },
  ];

  return (
    <div className="h-full bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 p-6 text-center border-b border-gray-700">
        Application Progress
      </h2>
      <div className="p-6 flex justify-center">
        <div className="relative border-l-4 border-gray-600 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <div className="absolute -left-[1.65rem] w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-300 text-center">{step.label}</h3>
                <p className="text-sm text-gray-400 mt-1 text-center">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTracking;