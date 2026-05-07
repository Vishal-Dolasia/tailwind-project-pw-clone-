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
        <div className='flex justify-center items-center flex-col gap-3 '>
          <p className='text-3xl md:text-4xl text-indigo-800 font-bold mt-4'>
          "Pure Hardwork, No Shortcuts!"
          </p>
          <div className='w-36 border-b-4 border-amber-300 rounded-2xl'>
          </div>
        </div>


        <div className='flex flex-wrap gap-8 mt-18 justify-evenly'>

          <div className='flex flex-col justify-center items-center'>
            <img className=' w-50 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-3xl text-white font-extrabold'>
              600+
            </p>
            <p className='text-2xl text-gray-400 font-bold'>
              Different Courses
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className=' w-50 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-3xl text-white font-extrabold'>
              700,000+
            </p>
            <p className='text-2xl text-gray-400 font-bold'>
              Students Enrolled
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className=' w-50 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-3xl text-white font-extrabold'>
              10,000+
            </p>
            <p className='text-2xl text-gray-400 font-bold'>
              Successfull Transition
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col gap-3 '>
          <p className='text-3xl md:text-4xl text-indigo-800 font-bold mt-20'>
          Our Products
          </p>
          <div className='w-36 border-b-4 border-amber-300 rounded-2xl'>
          </div>
        </div>


        <div className='flex gap-3 flex-wrap mt-18 justify-evenly'>

          <div className='flex flex-col justify-center items-center border-2 border-amber-50 p-2'>
            <img className=' w-36 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-2xl text-white font-extrabold'>
              600+
            </p>
            <p className='text-1xl text-gray-400 font-bold'>
              Different Courses
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border-2 border-amber-50 p-2'>
            <img className=' w-36 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-2xl text-white font-extrabold'>
              600+
            </p>
            <p className='text-1xl text-gray-400 font-bold'>
              Different Courses
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border-2 border-amber-50 p-2'>
            <img className=' w-36 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-2xl text-white font-extrabold'>
            600+
            </p>
            <p className='text-1xl text-gray-400 font-bold'>
            Different Courses
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border-2 border-amber-50 p-2'>
            <img className=' w-36 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-2xl text-white font-extrabold'>
              600+
            </p>
            <p className='text-1xl text-gray-400 font-bold'>
              Different Courses
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border-2 border-amber-50 p-2'>
            <img className=' w-36 rounded-full'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSPhVSS89q7ETeBxlwMKaKSxb14dBx7K4kw&s'>
            </img>
            <p className='text-2xl text-white font-extrabold'>
              600+
            </p>
            <p className='text-1xl text-gray-400 font-bold'>
              Different Courses
            </p>
          </div>
        </div>


      </div>
      {/* Our Students section ends here */}

      {/*footer section begins here */}

      <footer className='bg-gray-800 flex w-full px-4 text white pt-8 flex-col md:flex-row flex-wrap justify-around'>
        <div>
          <img className="w-40 h-16 rounded-full" src="data:image/png;base64,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">
          </img>
          <p className='text-white'>
            Email us: support@pwsills.com
          </p>
          <img className="w-20 rounded-full"src="https://media.istockphoto.com/id/942287864/vector/iso-9001-2015-label-certification-new-version.jpg?s=612x612&w=0&k=20&c=BNxlzWbGc3v4GbNRSwqPrSpXQmabbjVLpxPXGMhvOaQ=">
          </img>
        </div>

        <div className='text-amber-50'>
          <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <p>About us</p>
          <p>FAQS</p>
          <p>Privacy Policy</p>
        </div>

        <div className='text-amber-50'>
          <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <p>About us</p>
          <p>FAQS</p>
          <p>Privacy Policy</p>
        </div>

        <div className='text-amber-50'>
          <h2 className='font-bold text-xl mt-4'>Products</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <p>PW Skills Lab</p>
          <p>Job Portal </p>
          <p>Experience Portal</p>
          <p>Become an affiliate</p>
          <p>Hall of frame</p>
        </div>
        <div className='text-amber-50'>
          <h2 className='font-bold text-xl mt-4'>Links</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <p>Discord Channel</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </footer>
      {/*footer section ends here */}
      </>
  )
}

export default App
