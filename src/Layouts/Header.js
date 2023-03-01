import React from 'react'
import "./navbar.css";



function Header() {



  return (
    <div className='navbar'>
        
        <h1 className='font-Phudu text-2xl mr-80'>Weather-App</h1>


        <div className='navlink'>
            <button type='submit' class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Logout
            </button>
        </div>

    </div>
   
  )
}

export default Header
