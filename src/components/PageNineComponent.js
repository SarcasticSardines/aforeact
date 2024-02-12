import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { MagicFetch } from '../services/DataServices';

export default function PageNineComponent() {


  const [myQuestion, setMyQuestion] = useState('');
  const [result, setResult] = useState("");

  const MagicResult = async (e) => {
    if(e.key === "Enter"){
      if(myQuestion === ""){
        setResult("Please enter a question into the input field and try again.")
      }else{
        const response = await MagicFetch(myQuestion);
        setResult(response)
      }
    }
  }

  const getMyQuestion = async (e) =>{
    setMyQuestion(e.target.value)
  }


  return (
    <div>
      
    <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myViolet px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Magic 8 Ball</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Magic 8 Ball. In this play mode, simply type your question into the field below. The program will then consult the magic 8 ball and give you its sage advice on the matter.</p>
    </div>

    <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-28 mt-16"> <input id="MagicInp" class="lg:w-1/4 lg:h-28 h-14 w-80 pixel" type="text" placeholder="Question here" onChange={getMyQuestion} onKeyDown={MagicResult}></input> </div>

    <div className="flex justify-center lg:justify-end lg:mr-56 lg:mb-28 mb-12"> <div className="bg-white h-28 mt-28 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="MagicRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

    </div>
  )
}
