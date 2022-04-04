import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import { useState } from 'react'
import TodoList from './TodoList';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
     <TodoList />
     <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
     {showCounter? (<Counter />): ""}
    </div>
  );
}

export default App;
