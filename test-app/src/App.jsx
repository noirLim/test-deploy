import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/stockRouter');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <React.Fragment>
      <h1>{data.success ? "success to fetch" : "error"}</h1>
    </React.Fragment>
  )
}

export default App
