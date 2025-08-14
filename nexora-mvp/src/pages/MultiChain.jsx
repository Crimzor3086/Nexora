import React, { useState } from 'react';
import Card from '../components/Card';
import { Tabs } from '../components/Tabs';

const chains = [
  { key: 'eth', label: 'Ethereum' },
  { key: 'sol', label: 'Solana' },
  { key: 'btc', label: 'Bitcoin' },
];

const MultiChain = () => {
  const [active, setActive] = useState('eth');

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <Card title="Multi-Chain">
        <Tabs tabs={chains} active={active} onChange={setActive} />
        <div className="mt-4 text-text-secondary-dark">Active: {active}</div>
      </Card>
    </div>
  );
};

export default MultiChain;
