// ApplicationStatus.jsx
import React from 'react';

function ApplicationStatus() {
  const application = {
    status: "Pending Review",
    submittedDate: "2024-11-01",
    lastUpdated: "2024-11-10",
    nextStep: "Awaiting Review by Scholarship Committee",
  };

  return (
    <div className="w-full bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Application Status
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4 w-full">
          <div className="bg-gray-700 p-4 rounded w-full">
            Status: {application.status}
          </div>
          <div className="bg-gray-700 p-4 rounded w-full">
            Submitted On: {application.submittedDate}
          </div>
        </div>
        <div className="space-y-4 w-full">
          <div className="bg-gray-700 p-4 rounded w-full">
            Last Updated: {application.lastUpdated}
          </div>
          <div className="bg-gray-700 p-4 rounded w-full">
            Next Step: {application.nextStep}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center w-full">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full md:w-auto">
          View Application Details
        </button>
      </div>
    </div>
  );
}

export default ApplicationStatus;