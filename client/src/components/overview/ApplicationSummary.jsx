// ApplicationSummary.js
import React from 'react';

function ApplicationSummary() {
	const applicationDetails = {
		id: "SCH12345",
		appliedOn: "2024-11-01",
		status: "Under Review",
		approvedAmount: "INR 50,000",
		documents: ["ID Proof", "Address Proof", "Income Certificate"],
	};

	return (
		<div className="p-6 bg-gray-800 rounded-lg shadow-md text-gray-100">
			<h2 className="text-2xl font-semibold mb-4">Application Summary</h2>
			<div className="bg-gray-700 p-4 rounded-lg">
				<p><strong>Application ID:</strong> {applicationDetails.id}</p>
				<p><strong>Applied On:</strong> {applicationDetails.appliedOn}</p>
				<p><strong>Status:</strong> {applicationDetails.status}</p>
				<p><strong>Approved Amount:</strong> {applicationDetails.approvedAmount}</p>
				<h3 className="text-lg font-medium mt-4">Submitted Documents</h3>
				<ul className="list-disc ml-5">
					{applicationDetails.documents.map((doc, index) => (
						<li key={index}>{doc}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ApplicationSummary;
