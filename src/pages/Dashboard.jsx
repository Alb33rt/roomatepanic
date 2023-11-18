import React, { useEffect } from 'react';
const Dashboard = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Dashboard!</p>
        </div>
    );
};
export default Dashboard;