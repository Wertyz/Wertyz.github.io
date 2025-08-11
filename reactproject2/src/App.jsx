import { useState } from 'react'
import MyComponent from "./MyComponent.jsx"

//import './App.css'



function App() {
   


    return <div>

    <div id="SocialButtons" className="container flex h-screen flex-col items-center">

            <form target="_blank" action="https://www.linkedin.com/in/evanlegard">
    <button className='border-2 border-r-red-600 px-8 py-2'>
        LinkedIn
            </button>
        </form>
            <form target="_blank" action="https://store.steampowered.com/app/2185320/Lost_Trials/">
            <button className='border-2 border-r-red-600 px-8 py-2'>
                Lost Trials
            </button>
            </form>
            <form target="_blank" action="https://play.google.com/store/apps/details?id=com.GaslightDash.Minecart">
                <button className='border-2 border-r-red-600 px-8 py-2'>
                    Gaslight Dash
                </button>
            </form>


     </div>
    
        
    </div>
};

export default App
