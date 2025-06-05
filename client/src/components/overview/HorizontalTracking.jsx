import React from 'react';
import './HorizontalTracking.css';

const HorizontalTracking = () => {
  const steps = [
    { label: 'Application Submitted', date: '01 Nov 2024' },
    { label: 'Verified by SAG Bureau', date: '03 Nov 2024' },
    { label: 'Financial Dept. Released', date: '05 Nov 2024' },
    { label: 'Completed Successfully', date: '07 Nov 2024' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Application Progress</h2>
      <div className="horizontal-tracking">
        {steps.map((step, index) => (
          <div key={index} className="tracking-step">
            <div className="step-icon">
              {index + 1}
            </div>
            <div className="step-details">
              <span className="step-label">{step.label}</span>
              <span className="step-date">{step.date}</span>
            </div>
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTracking;
