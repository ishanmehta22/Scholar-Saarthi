import React from 'react';

const ApplicationSubmitted = () => {
  const applications = [
    { id: 'A123', name: 'John Doe', date: '01 Nov 2024', status: 'Verified' },
    { id: 'A124', name: 'Jane Smith', date: '02 Nov 2024', status: 'Pending' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Applications Submitted</h2>
      <table className="w-full border-collapse border border-gray-700">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Application ID</th>
            <th className="border border-gray-700 px-4 py-2">Applicant Name</th>
            <th className="border border-gray-700 px-4 py-2">Submission Date</th>
            <th className="border border-gray-700 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-800">
              <td className="border border-gray-700 px-4 py-2">{app.id}</td>
              <td className="border border-gray-700 px-4 py-2">{app.name}</td>
              <td className="border border-gray-700 px-4 py-2">{app.date}</td>
              <td className="border border-gray-700 px-4 py-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationSubmitted;
