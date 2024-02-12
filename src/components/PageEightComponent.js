import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { RNumFetch } from '../services/DataServices';

export default function PageEightComponent() {


  const [reverseNum, setReverseNum] = useState('');
  const [result, setResult] = useState("");

  const NumResult = async (e) => {
    if(e.key === "Enter"){
      if(reverseNum === ""){
        setResult("Please enter a numerical value into the input field and try again.")
      }else{
        const response = await RNumFetch(reverseNum);
        setResult(response)
      }
    }
  }

  const getReverseNum = async (e) =>{
    setReverseNum(e.target.value)
  }


  return (
    <div>

<div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myBlue px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Reverse My Numbers!</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Reverse My Numbers! In this play mode, you can enter any number of your choosing in the field below. The program will then return the number- but in reverse!</p>
    </div>

    <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-28 mt-16"> <input id="NumInp" className="lg:w-1/4 lg:h-28 h-14 w-80 pixel" type="text" placeholder="Number here" onChange={getReverseNum} onKeyDown={NumResult}></input> </div>

    <div className="flex justify-center lg:justify-end lg:mr-56 lg:mb-28 mb-12"> <div className="bg-white h-28 mt-28 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="NumRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>
      
    </div>
  )
}