import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FoodFetch } from '../services/DataServices';

export default function PageTenComponent() {

    
    const [myChoice, setMyChoice] = useState('');
    const [result, setResult] = useState("");

    const FoodResult = async (e) => {
        if(e.key === "Enter"){
            if(myChoice === ""){
                setResult("Please enter a numerical value between 1 and 3 into the input field and try again.")
            }else{
                const response = await FoodFetch(myChoice);
                setResult(response)
            }
        }
    }

    const getMyChoice = async (e) =>{
        setMyChoice(e.target.value)
    }



  return (
    <div>
       
    <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myPurple px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Feed Me!</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Feed Me! In this play mode, enter the number that corresponds with the category of food you want. The program will then randomly select one restaurant out of a list of 10 to recommend!</p>
    </div>

    <div className="lg:mt-16 mt-8">
        <div className="lg:flex lg:justify-center">
        <div className="flex justify-center"> <h2 className="text-purple-500 text-5xl text-center pixel mx-5 lg:mr-20">Category 1- Fast Food</h2> </div>
        <div className="flex justify-center"> <h2 class="text-purple-500 text-5xl text-center pixel mx-5 mt-9 lg:mt-0 lg:ml-20">Category 2- SeaFood</h2> </div>
        </div>
        <div>
        <div className="flex justify-center"> <h2 className="text-purple-500 text-5xl text-center pixel mx-5 mt-9">Category 1- Vegetarian</h2> </div> </div>
    </div>


    <div className="flex justify-center lg:justify-start lg:ml-56 lg:mt-28 mt-16"> <input id="FeedInp" className="lg:w-1/4 lg:h-28 h-14 w-80 pixel" type="text" placeholder="Choice number here" onChange={getMyChoice} onKeyDown={FoodResult}></input> </div>

    <div className="flex justify-center lg:justify-end lg:mr-56 lg:mb-28 mb-12"> <div class="bg-white h-28 mt-28 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="FeedRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

    </div>
  )
}
