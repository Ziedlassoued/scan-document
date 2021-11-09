import React from 'react';

function Styleguide() {
  return (
    <div>
      <h2>Colors</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <div
          style={{
            width: 50,
            height: 50,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            background: 'var(--color-enable)',
            borderRadius: '50%',
          }}
        ></div>
      </div>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>

      <h2>Button</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'var(--color-primary)',
          }}
        ></button>
        <button
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'var(--color-enable)',
          }}
        ></button>
      </div>
    </div>
  );
}
export default Styleguide;
