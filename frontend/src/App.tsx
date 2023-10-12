import './App.css'
import NavtoolBar from "./Components/Navbar/NavtoolBar.tsx";
import {useEffect, useState} from "react";

function App() {
  const[darkMode, setDarkMode]  =useState(false);
  useEffect(()=>{
      if(darkMode){
          document.documentElement.classList.add('dark');
      }
      else{
          document.documentElement.classList.remove('dark');
      }
  },[darkMode])
  return (
      <div className="h-screen w-full bg-white dark:bg-gray-800">
          <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 m-4 bg-blue-500 text-white dark:bg-blue-300 dark:text-gray-800"
          >
              Toggle Dark Mode
          </button>
          {<NavtoolBar/>}
      </div>

  )
}

export default App
