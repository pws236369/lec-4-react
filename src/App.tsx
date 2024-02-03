import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Logo } from './Logo';
import { Counter } from './Counter';
import { useState } from 'react';

// App Component
function App() {
  // State variable and updater function
  const [count, setCount] = useState(0);

  // Event handler function
  const handleClick = () => {
    console.log('Click happened');
    setCount((count) => count + 1);
  };
  return (
    <>
      <div>
        <Logo
          href="https://vitejs.dev"
          src={viteLogo}
          alt="Vite logo"
          className="logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className="logo react"
        />
      </div>
      <h1>Vite + React</h1>
      <h2>Counter: {count}</h2>
      <Counter handleClick={handleClick} />
    </>
  );
}

export default App;
