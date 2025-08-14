import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Identity">
          <div className="space-y-2 text-sm text-text-secondary-dark">
            <p><span className="text-accent-gold">Name:</span> Jane Doe</p>
            <p><span className="text-accent-gold">Email:</span> jane@nexora.dev</p>
            <p><span className="text-accent-gold">Status:</span> Verified</p>
          </div>
        </Card>
        <Card title="API Usage">
          <div className="text-sm text-text-secondary-dark">
            <p>Requests today: <span className="text-accent-gold">1,248</span></p>
            <p>Average latency: <span className="text-accent-gold">132ms</span></p>
          </div>
        </Card>
        <Card title="Verification Logs">
          <ul className="text-sm text-text-secondary-dark space-y-1">
            <li>2025-08-14 11:10 - KYC check passed</li>
            <li>2025-08-14 10:54 - Email verified</li>
            <li>2025-08-13 16:21 - Phone verified</li>
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
