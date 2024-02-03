import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Logo } from './Logo';
import { Counter } from './Counter';

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
      <Counter />
    </>
  );
}

export default App;
