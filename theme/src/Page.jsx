import  './Page.css';
import {useState} from 'react';
import useLocalStorage from 'use-local-storage';
import Toggle from './Component/Toggle';
function Page() {
  const [dark , setisdark]=useLocalStorage('dark',false)
    // const clickme =()=>{
    //     <p>hello</p>
    // }
  return (
    <div className='main-container' data-theme={dark?'dark':'light'}>
        <h2>Dark Theme and Light theme</h2>

        <div className="button">
        <button  d>Click me!</button>

        </div>
        <Toggle ischecked={dark} handlechange={()=>setisdark(!dark)}/>
    </div>
  )
}

export default Page