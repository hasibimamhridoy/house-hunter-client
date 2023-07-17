import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardDrawer from '../../components/DashboardSidebar/DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardDrawer></DashboardDrawer>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;