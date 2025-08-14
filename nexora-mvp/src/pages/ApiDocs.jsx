import React from 'react';
import Card from '../components/Card';

const ApiDocs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <Card title="API Overview">
        <p className="text-text-secondary-dark">Use the Nexora API to integrate identity and verification into your app.</p>
      </Card>
      <Card title="Authentication">
        <pre className="bg-black/60 text-white p-4 rounded-lg overflow-auto text-sm">
curl -X POST https://api.nexora.dev/auth/token \
  -H 'Content-Type: application/json' \
  -d '{"clientId": "...", "clientSecret": "..."}'
        </pre>
      </Card>
    </div>
  );
};

export default ApiDocs;
