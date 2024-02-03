import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Define the type for the props
type LogoProps = {
  href: string;
  src: string;
  alt: string;
  className?: string; // Optional property
};

// Logo Component with typed props
const Logo: React.FC<LogoProps> = ({ href, src, alt, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} className={className} alt={alt} />
    </a>
  );
};

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

// Footer Text Component
function FooterText() {
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  );
}

// App Component
function App() {
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
      <Counter /> <Counter />
      <Counter />
      <FooterText />
    </>
  );
}

export default App;
