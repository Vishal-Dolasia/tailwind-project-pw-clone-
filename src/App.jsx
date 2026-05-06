import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
       {/* Navbar goes here */}
      <nav className='w-full h-14 flex bg-indigo-200 justify-between items-center px-4 md:px-5'>
        <div className='text-2xl text-purple-700 font-bold'>  
          PW Skills
        </div>
        <ul className='m-5 font-semibold text-black  gap-2 justify-between md:flex hidden '>
          <li className='cursor-pointer mx-3.5'>
            Home
          </li>
          <li className='cursor-pointer mx-3.5'>
            About
          </li>
          <li className='cursor-pointer mx-3.5'>
            Contact Us
          </li>
        </ul>
        <button className='cursor-pointer bg-blue-700 rounded-lg p-2 hidden md:block'>
          <div className='text-white font-bold justify-center items-center'>
            Login/SignUp
          </div>
        </button>
          <div className='text-2xl font-semibold block md:hidden'>
            <a href ='#'>&#8801;</a>
          </div>
      </nav> 
      {/* Navbar finishes here */}


      {/* Img section begins here */}
      <div className="w-full h-auto">
        <img className ="w-full md:block hidden"src="https://images.pexels.com/photos/37001447/pexels-photo-37001447.jpeg?_gl=1*gp94jg*_ga*MTI3MzQ0MzY0My4xNzc4MDUxMzQz*_ga_8JE65Q40S6*czE3NzgwNTEzNDMkbzEkZzEkdDE3NzgwNTE1NDEkajYwJGwwJGgw" alt="" 
        />
        <img className="w-full md:hidden block" src="https://images.pexels.com/photos/8984453/pexels-photo-8984453.jpeg?_gl=1*gp94jg*_ga*MTI3MzQ0MzY0My4xNzc4MDUxMzQz*_ga_8JE65Q40S6*czE3NzgwNTEzNDMkbzEkZzEkdDE3NzgwNTE1NDEkajYwJGwwJGgw" alt= "" 
        />
      </div>
      {/* Img section ends here */}


      {/* Our Students section begins here */}
      <div className='bg-black w-full h-auto'>
        <p className='text-3xl md:text-4xl text-indigo-800 font-bold text-center'>
          "Pure Hardwork, No Shortcuts!"
        </p>
        <div>
          
        </div>
      </div>
      </>
  )
}

export default App
