interface CounterProps {
  handleClick: () => void;
}

export const Counter: React.FC<CounterProps> = ({ handleClick }) => {
  // JSX - Rendered output
  return (
    <div className="card">
      <button onClick={handleClick}> click me!</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
