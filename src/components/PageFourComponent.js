import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { GreaterFetch } from '../services/DataServices';

export default function PageFourComponent() {

    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [result, setResult] = useState("");

    const GreaterResult = async (e) => {
        if(e.key === "Enter"){
            if(numA === "" || numB === ""){
                setResult("Please enter a number value into both input fields and try again.")
            }else{
                const response = await GreaterFetch(numA, numB);
                setResult(response)
            }
        }
    }

    const getNumA = async (e) => {
        setNumA(e.target.value)
    }

    const getNumB = async (e) =>{
        setNumB(e.target.value)
    }



  return (
    <div>
       
    <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myYellow px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Greater Than Who?</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Greater Than Who? In this play mode, you may enter a number in each field below. The program will then compare the two numbers using greater than, less than, or equal to symbols.</p>
    </div>

    <div className="lg:flex lg:justify-center lg:mt-28 mt-16">
        <div className="flex justify-center mb-10 lg:mb-0"> <input id="GreaterInp1" className="lg:h-28 h-14 w-80 pixel lg:mr-80" type="text" placeholder="Number here" onChange={getNumA} onKeyDown={GreaterResult}></input> </div>

        <div className="flex justify-center mt-10 lg:mt-0"> <input id="GreaterInp2" className="lg:h-28 h-14 w-80 pixel lg:ml-80" type="text" placeholder="Number here" onChange={getNumB} onKeyDown={GreaterResult}></input> </div>
     </div>

    <div className="flex justify-center lg:mb-28 mb-12"> <div className="bg-white h-28 lg:mt-28 mt-20 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="GreaterRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

    </div>
  )
}