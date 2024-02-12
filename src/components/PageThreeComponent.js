import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SentenceFetch } from '../services/DataServices';

export default function PageThreeComponent() {

    const [myName, setMyName] = useState('');
    const [myZodiac, setMyZodiac] = useState('');
    const [result, setResult] = useState("");

    const SentenceResult = async (e) => {
        if(e.key == "Enter"){
            if(myName === "" || myZodiac === ""){
                setResult("Please enter a value into both input fields and try again.")
            }else{
                const response = await SentenceFetch(myName, myZodiac);
                setResult(response)
            }
        }
    }

    const getMyName = async (e) => {
        setMyName(e.target.value)
    }

    const getMyZodiac = async (e) => {
        setMyZodiac(e.target.value)
    }


  return (
   <div>
    
    <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myOrange px-4"> <span className="text-center text-2xl pixel"> &lt; - Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Make-A-Sentence</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Make-A-Sentence. In this play mode, you may enter your name in the first field, then your zodiac sign in the second. The program then will return a sentence with them.</p>
    </div>

    <div className="lg:flex lg:justify-center lg:mt-28 mt-16">
        <div className="flex justify-center mb-10 lg:mb-0"> <input id="SentenceInp1" className="lg:h-28 h-14 w-80 pixel lg:mr-80" type="text" placeholder="Name here" onChange={getMyName} onKeyDown={SentenceResult}></input> </div>

        <div className="flex justify-center mt-10 lg:mt-0"> <input id="SentenceInp2" className="lg:h-28 h-14 w-80 pixel lg:ml-80" type="text" placeholder="Zodiac here" onChange={getMyZodiac} onKeyDown={SentenceResult}></input> </div>
     </div>

    <div className="flex justify-center lg:mb-28 mb-12"> <div className="bg-white h-28 lg:mt-28 mt-20 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="SentenceRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

   </div>
  )
}