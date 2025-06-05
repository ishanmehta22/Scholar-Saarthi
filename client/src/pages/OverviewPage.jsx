import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import ApplicationStatus from '../components/overview/ApplicationStatus';
import ApplicationTimeline from '../components/overview/ApplicationTimeline';
import Notifications from '../components/overview/Notifications';
import ApplicationSummary from '../components/overview/ApplicationSummary';
import HelpSupport from '../components/overview/HelpSupport';
import ApplicationSubmitted from '../components/overview/ApplicationSubmitted';
import VerticalTracking from '../components/overview/VerticalTracking';
import YearlyApplications from '../components/overview/YearlyApplications';

const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState('status');

  const renderPage = () => {
    switch (currentPage) {
      case 'status':
        return (
          <div className="w-full flex flex-col space-y-8">
            {/* Container for all content */}
            <div className="w-full max-w-7xl mx-auto px-6">
              {/* Top Section - Application Status */}
              <ApplicationStatus />
              
              {/* Lower Section - Split into Two Columns */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Section: Yearly Applications */}
                <YearlyApplications setCurrentPage={setCurrentPage} />
                {/* Right Section: Vertical Tracking */}
                <VerticalTracking />
              </div>
            </div>
          </div>
        );
      case 'timeline':
        return <ApplicationTimeline />;
      case 'notifications':
        return <Notifications />;
      case 'summary':
        return <ApplicationSummary />;
      case 'help':
        return <HelpSupport />;
      case 'submitted':
        return <ApplicationSubmitted />;
      default:
        return <ApplicationStatus />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        {/* Content Container */}
        <div className="h-full overflow-auto py-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;


// Sidebar.jsx
// import React from 'react';
// import { BarChart2, Award, ClipboardList, CheckCircle, XCircle } from 'lucide-react';

// const Sidebar = ({ currentPage, setCurrentPage }) => {
//   const menuItems = [
//     { id: 'status', label: 'Application Status', icon: BarChart2 },
//     { id: 'submitted', label: 'Application Submitted', icon: ClipboardList },
//     { id: 'timeline', label: 'Timeline', icon: Award },
//     { id: 'notifications', label: 'Notifications', icon: CheckCircle },
//     { id: 'summary', label: 'Summary', icon: BarChart2 },
//     { id: 'help', label: 'Help & Support', icon: XCircle },
//   ];

//   return (
//     <aside className="w-64 bg-gray-800 p-6">
//       <nav className="space-y-4">
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setCurrentPage(item.id)}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors w-full text-left
//               ${currentPage === item.id ? 'bg-gray-700' : ''}`}
//           >
//             <item.icon className="w-5 h-5" />
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
