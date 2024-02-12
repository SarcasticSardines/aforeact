import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { MadFetch } from '../services/DataServices';

export default function PageFiveComponent() {


    const [adject1, setAdject1] = useState('');
    const [charaName, setCharaName] = useState('');
    const [adject2, setAdject2] = useState('');
    const [noun1, setNoun1] = useState('');
    const [noun2, setNoun2] = useState('');
    const [noun3, setNoun3] = useState('');
    const [color1, setColor1] = useState('');
    const [noun4, setNoun4] = useState('');
    const [adject3, setAdject3] = useState('');
    const [noun5, setNoun5] = useState('');
    const [adject4, setAdject4] = useState('');
    const [onomat1, setOnomat1] = useState('');
    const [adject5, setAdject5] = useState('');
    const [color2, setColor2] = useState('');
    const [noun6, setNoun6] = useState('');
    const [noun7, setNoun7] = useState('');
    const [result, setResult] = useState("");

    const MadResult = async (e) => {
        if(e.key === "Enter"){
            if(adject1 === "" || charaName === "" || adject2 === "" || noun1 === "" || noun2 === "" || noun3 === "" || color1 === "" || noun4 === "" || adject3 === "" || noun5 === "" || adject4 === "" || onomat1 === "" || adject5 === "" || color2 === "" || noun6 === "" || noun7 === ""){
                setResult("Please enter a value into all input fields and try again.")
            }else{
                const response = await MadFetch(adject1, charaName, adject2, noun1, noun2, noun3, color1, noun4, adject3, noun5, adject4, onomat1, adject5, color2, noun6, noun7);
                setResult(response)
            }
        }
    }

    const getAdject1 = async (e) => {
        setAdject1(e.target.value)
    }

    const getCharaName = async (e) => {
        setCharaName(e.target.value)
    }

    const getAdject2 = async (e) => {
        setAdject2(e.target.value)
    }

    const getNoun1 = async (e) => {
        setNoun1(e.target.value)
    }

    const getNoun2 = async (e) => {
        setNoun2(e.target.value)
    }

    const getNoun3 = async (e) => {
        setNoun3(e.target.value)
    }

    const getColor1 = async (e) => {
        setColor1(e.target.value)
    }

    const getNoun4 = async (e) => {
        setNoun4(e.target.value)
    }

    const getAdject3 = async (e) => {
        setAdject3(e.target.value)
    }

    const getNoun5 = async (e) => {
        setNoun5(e.target.value)
    }

    const getAdject4 = async (e) => {
        setAdject4(e.target.value)
    }
    const getOnomat = async (e) => {
        setOnomat1(e.target.value)
    }

    const getAdject5 = async (e) => {
        setAdject5(e.target.value)
    }

    const getColor2 = async (e) => {
        setColor2(e.target.value)
    }

    const getNoun6 = async (e) => {
        setNoun6(e.target.value)
    }

    const getNoun7 = async (e) => {
        setNoun7(e.target.value)
    }




  return (
    <div>
        <div className="flex justify-end lg:justify-start mt-5 mr-5 lg:ml-5 lg:mb-20 mb-12">
        <Link to={"/"}>
            <button className="myGreen px-4"> <span className="text-center text-2xl pixel"> &lt;- Back </span> </button>
        </Link>
    </div>

    <h1 className="text-white text-7xl text-center pixel mx-3">Futurama Madlibs</h1>
    <div className=" flex justify-center text-white text-start pixel mt-14 text-2xl lg:mx-64 mx-5">
        <p>Welcome to Futurama Madlibs. In this play mode, you may enter the type of word stated in each field. Similar to traditional madlibs, the program will then return a story using your words!</p>
    </div>

    <div>
        <div className="lg:flex lg:justify-center lg:mt-28 mt-14">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad1" className="lg:h-28 h-14 w-80 pixel lg:mr-64 " type="text" placeholder="Adjective here" onChange={getAdject1}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad2" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Name here" onChange={getCharaName}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad3" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Adjective here" onChange={getAdject2}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad4" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Noun here" onChange={getNoun1}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad5" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Noun here" onChange={getNoun2}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad6" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Noun here" onChange={getNoun3}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad7" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Color here" onChange={getColor1}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad8" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Noun here" onChange={getNoun4}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad9" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Adjective here" onChange={getAdject3}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad10" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Noun here" onChange={getNoun5}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad11" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Adjective here" onChange={getAdject4}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad12" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Onomatopoeia here" onChange={getOnomat}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad13" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Adjective here" onChange={getAdject5}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad14" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Color here" onChange={getColor2}></input> </div>
         </div>
         <div className="lg:flex lg:justify-center lg:mt-28 mt-10">
            <div className="flex justify-center mb-10 lg:mb-0"> <input id="Mad15" className="lg:h-28 h-14 w-80 pixel lg:mr-64" type="text" placeholder="Noun here" onChange={getNoun6}></input> </div>
    
            <div className="flex justify-center mt-10 lg:mt-0"> <input id="Mad16" className="lg:h-28 h-14 w-80 pixel lg:ml-64" type="text" placeholder="Noun here" onChange={getNoun7}></input> </div>
         </div>
    </div>

    <div className="mt-16">
        <div className="flex justify-center">
            <Link id="MadBtn">
                <button className="px-12 py-4 myGreen" onClick={MadResult}> <span className="pixel text-3xl">Finish!</span> </button>
            </Link>
        </div>
    </div>


    <div className="flex justify-center lg:mb-28 mb-12"> <div className="bg-white h-28 lg:mt-28 mt-20 lg:max-w-2xl mx-5 lg:ml-10 lg:w-1/3 w-96 rounded-xl">
        <p id="MadRep" className="text-start mx-2 my-3 pixel">{result}</p>
    </div> </div>

    </div>
  )
}
