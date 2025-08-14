import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../utils/auth';
import { useToast } from '../components/ToastProvider';

const Settings = () => {
  const { user, updateUser } = useAuth();
  const toast = useToast();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const save = () => {
    updateUser({ name, email });
    toast.success('Settings saved');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card title="Profile Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Display Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@nexora.dev" />
          </div>
        </div>
        <div className="mt-4">
          <Button onClick={save}>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
