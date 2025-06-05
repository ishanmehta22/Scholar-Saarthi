import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const timelineData = [
  { month: "Jan", Submitted: 200, InReview: 150, Approved: 100, Rejected: 20 },
  { month: "Feb", Submitted: 300, InReview: 250, Approved: 150, Rejected: 30 },
  { month: "Mar", Submitted: 400, InReview: 350, Approved: 200, Rejected: 40 },
  { month: "Apr", Submitted: 500, InReview: 400, Approved: 300, Rejected: 50 },
  { month: "May", Submitted: 450, InReview: 380, Approved: 320, Rejected: 45 },
];

const ApplicationTimelineChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Scholarship Application Timeline
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#E5E7EB" />
            <YAxis stroke="#E5E7EB" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Submitted"
              stroke="#6366F1"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="InReview" stroke="#8B5CF6" />
            <Line type="monotone" dataKey="Approved" stroke="#10B981" />
            <Line type="monotone" dataKey="Rejected" stroke="#EF4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ApplicationTimelineChart;
