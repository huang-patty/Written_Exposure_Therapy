import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Admin() {
  const [password, setPassword] = useState('');

  const downloadCsv = () => {
    // This simply redirects them to the API link we created above
    window.location.href = `/api/export-subscribers?secret=${password}`;
  };

  return (
    <div className="container mx-auto py-20 max-w-md text-center">
      <h1 className="text-2xl font-bold mb-6">Admin Export</h1>
      <div className="space-y-4">
        <Input 
          type="password" 
          placeholder="Enter Admin Secret" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={downloadCsv} className="w-full">
          Download Subscriber List
        </Button>
      </div>
    </div>
  );
}