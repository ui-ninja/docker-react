import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('import.meta.env.VITE_SOME_KEY', import.meta.env.VITE_SOME_KEY);
  return (
    <main>
      <h1>Counter</h1>
      <button onClick={() => setCount((p) => p + 1)}>
        Button clicked - {count} times
      </button>
    </main>
  );
}

export default App;
