// HelpSupport.js
import React from 'react';

function HelpSupport() {
	const faq = [
		{ question: "How can I track my application?", answer: "Use the Application Timeline to track your current application status." },
		{ question: "What documents do I need?", answer: "Refer to the Application Summary for required documents." },
		{ question: "Who can I contact for support?", answer: "For assistance, contact support@example.com or call (123) 456-7890." },
	];

	return (
		<div className="p-6 bg-gray-800 rounded-lg shadow-md text-gray-100">
			<h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
			<div>
				<h3 className="text-lg font-medium mb-2">Frequently Asked Questions</h3>
				<div className="space-y-4">
					{faq.map((item, index) => (
						<div key={index} className="bg-gray-700 p-4 rounded-lg">
							<p className="font-medium">{item.question}</p>
							<p className="text-gray-400">{item.answer}</p>
						</div>
					))}
				</div>
			</div>
			<div className="mt-4">
				<button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500">
					Contact Support
				</button>
			</div>
		</div>
	);
}

export default HelpSupport;
