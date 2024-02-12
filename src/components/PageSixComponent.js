import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { EOFetch } from '../services/DataServices';

export default function PageSixComponent() {


    const [myNum, setMyNum] = useState('');
    const [result, setResult] = useState("");

    const OddEvenResult = async (e) => {
        if(e.key === "Enter"){
            if(myNum === ""){
                setResult("Please enter a value into the input field and try again.")
            }else{
                const response = await EOFetch(myNum);
                setResult(response)
            }
        }
    }

    const getMyNum = async (e) =>{
        setMyNum(e.target.value)
    }


  return (
    <div>

      <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myTeal px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Odd or Even?</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Odd or Even? In this play mode, all you need to do is enter a number in the field below. The program will then tell you if your number is an odd or an even number.</p>
    </div>

    <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-28 mt-16"> <input id="OddInp" className="lg:w-1/4 lg:h-28 h-14 w-80 pixel" type="text" placeholder="Number here" onChange={getMyNum} onKeyDown={OddEvenResult}></input> </div>

    <div className="flex justify-center lg:justify-end lg:mr-56 lg:mb-28 mb-12"> <div className="bg-white h-28 mt-28 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="OddRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

    </div>
  )
}
