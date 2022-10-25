import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from' ./components/Greeting.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<p>Get random greeting message app</p>} />
      </Routes>
      <Routes>
        <Route exact path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
