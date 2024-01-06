import React from 'react';
import Counter from '../components/Counter';

export default function CountIt() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: 'green' }}>Lets Count! </h1>
      <Counter />
    </div>
  );
}
