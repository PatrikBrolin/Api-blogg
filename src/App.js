import {useEffect, useState} from 'react';
import Post from './components/Post'

import './App.css';

function App() {

  const [apiArray, setApiArray] = useState([])

  useEffect(() =>{
    const fetchData = async () =>{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json();

      setApiArray(data)
    }

    fetchData()
  }, [])


  return(
   <ul>
    {apiArray.map((post,index ) => (
      <Post key={index} {...post}/>
    ))}
   </ul>
  );

}

export default App;
