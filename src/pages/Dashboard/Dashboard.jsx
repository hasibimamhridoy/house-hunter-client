import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {

    const {user} = useAuth()

    if (!user) {
       return <div>Loading.....</div> 
    }

    return (
        <div className = "">
            This dashboard
        </div>
    );
};

export default Dashboard;