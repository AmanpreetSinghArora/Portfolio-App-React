import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Intro, Services, Skills, Projects} from './components'

function App() {

  const [userData,setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const userInfo = json.user;
        //console.log(userInfo);
        setUserData(userInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
        //console.log("error");
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <Intro userData={userData}/>
      <Services userData={userData}/>
      <Skills userData={userData}/>
      <Projects userData={userData}/>
    </>
  )
}

export default App
