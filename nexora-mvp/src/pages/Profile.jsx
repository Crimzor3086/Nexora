import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card title="Profile">
        <div className="flex items-center gap-4">
          <img src="/icons/user-icon.svg" alt="User" className="h-12 w-12" />
          <div className="flex-1">
            <p className="text-accent-gold font-semibold">Jane Doe</p>
            <p className="text-text-secondary-dark">jane@nexora.dev</p>
          </div>
          <Button variant="secondary">Edit</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
