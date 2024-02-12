import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SumFetch } from '../services/DataServices';

export default function PageTwoComponent() {


    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const SumResult = async (e) => {
        if(e.key === "Enter"){
            if(num1 === "" || num2 === ""){
                setResult("Please enter a number value into both input fields and try again.")
            }else{
            const response = await SumFetch(num1, num2);
            setResult(response)
            }
        }
    }

    const getNumOne = async (e) => {
        setNum1(e.target.value)
    }

    const getNumTwo = async (e) => {
        setNum2(e.target.value)
    }



  return (
    <div>
      <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
          <button className="myRed px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
      </div>

      <h1 className="text-white text-7xl text-center pixel mx-3">Simple Sums</h1>
      <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Simple Sums. In this play mode, you may enter two numbers in the fields below. The program will then return those numbers added together.</p>
      </div>

      <div className="lg:flex lg:justify-center lg:mt-28 mt-16">
        <div className="flex justify-center mb-10 lg:mb-0"> <input id="SumInp1" className="lg:h-28 h-14 w-80 pixel lg:mr-80" type="text" placeholder="Number here" onChange={getNumOne} onKeyDown={SumResult}></input> </div>

        <div className="flex justify-center mt-10 lg:mt-0"> <input id="SumInp2" className="lg:h-28 h-14 w-80 pixel lg:ml-80" type="text" placeholder="Number here" onChange={getNumTwo} onKeyDown={SumResult}></input> </div>
      </div>

      <div className="flex justify-center lg:mb-28 mb-12"> <div className="bg-white h-28 lg:mt-28 mt-20 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="SumRep" className="text-start mx-2 my-3 pixel">{result}</p>
      </div> </div>

    </div>
  )
}