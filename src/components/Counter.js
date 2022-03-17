import {useState} from 'react';
const Counter = () => {
  console.log('Render Counter Hooks')
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default Counter;
