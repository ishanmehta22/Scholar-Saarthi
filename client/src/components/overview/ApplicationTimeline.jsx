// ApplicationTimeline.js
import React from 'react';

function ApplicationTimeline() {
	const stages = [
		{ name: "Submitted", date: "2024-11-01", completed: true },
		{ name: "Under Review", date: "2024-11-10", completed: false },
		{ name: "Approved", date: null, completed: false },
		{ name: "Funds Disbursed", date: null, completed: false },
	];

	return (
		<div className="p-6 bg-gray-800 rounded-lg shadow-md text-gray-100">
			<h2 className="text-2xl font-semibold mb-4">Application Timeline</h2>
			<div className="flex flex-col space-y-4">
				{stages.map((stage, index) => (
					<div key={index} className="flex items-center">
						<div
							className={`w-6 h-6 rounded-full mr-4 ${
								stage.completed ? "bg-green-500" : "bg-gray-500"
							}`}
						></div>
						<div className="flex-1">
							<p className="text-lg font-medium">{stage.name}</p>
							{stage.date ? (
								<p className="text-sm text-gray-400">Completed on {stage.date}</p>
							) : (
								<p className="text-sm text-gray-400">Pending</p>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ApplicationTimeline;
