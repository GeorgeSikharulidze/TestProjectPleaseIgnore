// pages/login.tsx
import React from 'react';
import Login from '@/components/Login';

const LoginPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '33%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '400px',
          padding: '2rem',
        }}
      >
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
