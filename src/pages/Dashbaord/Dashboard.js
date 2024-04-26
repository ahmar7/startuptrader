import React from "react";
import DashboardProfileCard from "../../components/DashboardCard/DashboardProfileCard";
import PortfolioValuesCard from "../../components/DashboardCard/PortfolioValuesCard";
import AssetsCard from "../../components/DashboardCard/AssetsCard";
import IndustryFoucsCard from "../../components/DashboardCard/IndustryFoucsCard";
import { LineChart } from "../../components/Chart/LineChart";
import PerformaceChart from "../../components/DashboardCard/PerformaceChart";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-10 overflow-hidden  w-full main-dashboard">
        <DashboardProfileCard />
        <PortfolioValuesCard />

        <div className="w-full flex lg:flex-row flex-col gap-6">
          <div className="lg:w-[70%] ">
            <AssetsCard />
          </div>
          <div className="lg:w-[30%]">
            <IndustryFoucsCard />
          </div>
        </div>
        <PerformaceChart />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
