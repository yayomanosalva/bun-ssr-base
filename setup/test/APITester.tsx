import { useState } from 'react';

export function APITester() {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/test');
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse('Error: ' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>API Tester</h3>
      <button onClick={testAPI} disabled={loading}>
        {loading ? 'Testing...' : 'Test API'}
      </button>
      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Response:</strong>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}