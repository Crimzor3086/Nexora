import React, { useState } from 'react';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import { useToast } from '../components/ToastProvider';

const steps = ['Email', 'Documents', 'Selfie', 'Approval'];

const Identity = () => {
  const [current, setCurrent] = useState(1);
  const [progress, setProgress] = useState(0);
  const toast = useToast();
  const pct = (current / steps.length) * 100;

  const onUpload = (file) => {
    if (!file) return;
    toast.info(`Uploading ${file.name}...`);
    setProgress(0);
    let p = 0;
    const timer = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(timer);
        toast.success('Upload complete');
      }
    }, 150);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card title="Verification Progress">
        <div className="mb-3 flex items-center justify-between text-sm">
          <div className="text-text-secondary-dark">Step {current} of {steps.length}</div>
          <div className="text-accent-gold font-semibold">{Math.round(pct)}%</div>
        </div>
        <ProgressBar value={pct} />
        <div className="mt-4 flex gap-2">
          <Button onClick={() => setCurrent((c) => Math.max(1, c - 1))} variant="secondary">Back</Button>
          <Button onClick={() => setCurrent((c) => Math.min(steps.length, c + 1))}>Next</Button>
        </div>
      </Card>
      <Card title="Document Upload">
        <div className="space-y-3">
          <input type="file" onChange={(e) => onUpload(e.target.files?.[0])} className="block" />
          <ProgressBar value={progress} />
        </div>
      </Card>
    </div>
  );
};

export default Identity;
