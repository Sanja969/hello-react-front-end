import { useState, useEffect } from 'react';

const Greeting = () => {
  const url = 'http://127.0.0.1:3000/greetings';
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((greeting) => setGreeting(greeting.text));
  
  }, []);

  return (
    <h3>{greeting}</h3>
  )
}

export default Greeting;