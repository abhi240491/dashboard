import React from "react";
import Navbar from './Navbar';
import UserInfo from "./UserInfo";
import CustomerInfo from "./CustomerInfo";
import BestProducts from "./BestProducts";
import BarChart from "./Chart"
function Dashboard() {
  return (
      <div className="bg-light">
        <Navbar />
        <UserInfo/>
        <div className='row h-50'>
            <BarChart/>
            <CustomerInfo/>
            <BestProducts/>
        </div>
    </div>
  );
}

export default Dashboard;
