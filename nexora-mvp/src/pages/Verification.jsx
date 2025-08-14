import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Verification = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <Card title="Verification">
        <p className="text-text-secondary-dark">Complete your identity verification to unlock all features.</p>
        <div className="mt-4">
          <Button onClick={() => setOpen(true)}>Start Verification</Button>
        </div>
      </Card>

      <Card title="Recent Logs">
        <ul className="list-disc list-inside text-text-secondary-dark space-y-1">
          <li>Document upload successful</li>
          <li>Selfie match approved</li>
          <li>Sanctions screening clear</li>
        </ul>
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Begin Verification">
        <p className="text-text-secondary-dark">This is a demo modal for verification.</p>
      </Modal>
    </div>
  );
};

export default Verification;
