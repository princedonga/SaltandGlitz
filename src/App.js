import React, { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import Preloader from './Components/Preloader';
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  // Adjust time as needed

    return () => clearTimeout(timer);  // Cleanup on unmount
  }, []);

  return (
    <div>
      {loading ? <Preloader /> : <Layout />}
    </div>
  );
};

export default App;
