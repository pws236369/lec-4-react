import { useState } from 'react';

export function Counter() {
  // State variable and updater function
  const [count, setCount] = useState(0);

  // Event handler function
  const handleClick = () => {
    console.log('Click happened');
    setCount((count) => count + 1);
  };

  // JSX - Rendered output
  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
