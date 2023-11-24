import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render

    // Update the document title using the count state
    document.title = `Count: ${count}`;

    // Clean-up function (optional)
    return () => {
      // This code runs before the component unmounts
      // Perform any necessary cleanup here
    };
  }, [count]); // The effect will re-run whenever 'count' changes

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default MyComponent;
