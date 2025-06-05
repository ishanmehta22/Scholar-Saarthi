// Notifications.js
import React from 'react';

function Notifications() {
	const notifications = [
		{
			id: 1,
			message: "Document verification in process.",
			date: "2024-11-10",
			status: "In Progress",
		},
		{
			id: 2,
			message: "Your application was successfully submitted.",
			date: "2024-11-01",
			status: "Completed",
		},
	];

	return (
		<div className="p-6 bg-gray-800 rounded-lg shadow-md text-gray-100">
			<h2 className="text-2xl font-semibold mb-4">Notifications</h2>
			<div className="space-y-4">
				{notifications.map((notification) => (
					<div key={notification.id} className="bg-gray-700 p-4 rounded-lg">
						<p className="text-lg">{notification.message}</p>
						<p className="text-sm text-gray-400">
							{notification.date} | Status: {notification.status}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Notifications;
