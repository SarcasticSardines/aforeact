import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { HelloFetch } from '../services/DataServices';



export default function PageOneComponent() {

    // const [inputField, setInputField] = useState("");
    const [userName, setUserName] = useState('');
    const [result, setResult] = useState("");

    const HelloResult = async (e) => {
        if(e.key === "Enter"){
            if(userName === ""){
                setResult("Please enter a name into the input field.")
            }else{
            const response = await HelloFetch(userName);
            setResult(response)
            }
        }
    }

    const getHello = async (e) =>  {
        setUserName(e.target.value)
    }

  return (
    <div>

      <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
          <button className="myPink px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
      </div>

      <h1 className="text-white text-7xl text-center pixel">Say Hello</h1>
      <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Say Hello! In this play mode, all you need to do is enter your name in the field below. Soon, a message will pop up from the program itself and give you a proper welcome!</p>
      </div>

      <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-28 mt-16"> <input id="helloInp" className="lg:w-1/4 lg:h-28 h-14 w-80 pixel" type="text" placeholder="Name here" onChange={getHello} onKeyDown={HelloResult}></input> </div>

      <div className="flex justify-center lg:justify-end lg:mr-56 lg:mb-28 mb-12"> <div className="bg-white h-28 mt-28 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="helloRep" className="text-start mx-2 my-3 pixel">{result}</p>
      </div> </div>

    </div>
  )
}
