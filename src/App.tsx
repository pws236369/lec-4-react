import './App.css';
import { Logo } from './Logo';
import { Counter } from './Counter';
import { useState } from 'react';
import { logos } from './logos';

// App Component
function App() {
  // State variable and updater function
  const [count, setCount] = useState(0);

  // Event handler function
  const handleClick = () => {
    console.log('Click happened');
    // Waht will be the value of count after clicking the button?
    setCount(count + 1); // 0 + 1 = 1
    setCount(count + 1);
    setCount(count + 1);

    // Fix:
    /*
    setCount((prevCount) => prevCount + 1); // This will work as expected
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    */
  };
  return (
    <>
      <div>
        {logos.map((logo, idx) => (
          // Loop through the logos array and render the Logo component
          <Logo
            key={idx} // Key is required for list items in React to help with rendering performance and identity of elements.
            // Pass the props to the Logo component:
            src={logo.src}
            href={logo.href}
            alt={logo.alt}
            className={logo.className}
          />
          // We could suger it like this: <Logo key={logo.alt} {...logo} />
        ))}
      </div>
      <h1>Vite + React</h1>
      {
        // Rendring only if the count is greater than 0
        count > 0 && <h2>Counter: {count}</h2>
      }
      <Counter handleClick={handleClick} />
    </>
  );
}

export default App;
