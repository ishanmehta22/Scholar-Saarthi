import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle,CircleCheckBig, Trash2, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/ScholarshipStatusChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
	return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Applications" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Approvals Pending"
            icon={Package}
            value={	234}
            color="#6366F1"
          />
          <StatCard
            name="Viewed Today"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Approved Today"
            icon={CircleCheckBig}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Rejected Today"
            icon={Trash2}
            value={"3"}
            color="#EF4444"
          />
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};
export default ProductsPage;
