import React from 'react';

const YearlyApplications = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const statuses = ['Approved', 'Rejected', 'Pending'];
  const years = Array.from({ length: 10 }, (_, i) => ({
    year: currentYear - i - 1,
    applicationId: `APP-${Math.floor(Math.random() * 10000)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));

  return (
    <div className="h-full bg-gray-800 rounded-lg shadow-lg text-gray-200">
      <h2 className="text-xl font-semibold p-6 border-b border-gray-700">Applications by Year</h2>
      <div className="p-6">
        <div className="overflow-y-auto max-h-[400px] pr-2">
          <ul className="space-y-3">
            {years.map(({ year, applicationId, status }) => (
              <li
                key={year}
                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200 cursor-pointer"
                onClick={() => setCurrentPage('submitted')}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{year}</span>
                  <div className="text-sm">
                    <p className="mb-1">App ID: <span className="text-gray-100">{applicationId}</span></p>
                    <p>Status: <span className={`font-semibold ${
                      status === 'Approved' ? 'text-green-500' : 
                      status === 'Rejected' ? 'text-red-500' : 
                      'text-yellow-500'
                    }`}>{status}</span></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YearlyApplications;