```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Avoid logging 'count' directly in the dependency array
  }, []); // Empty dependency array

  // Log conditionally outside the useEffect dependency array
  useEffect(() => {
    if (count % 5 === 0) {
      console.log('Count is a multiple of 5:', count);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```