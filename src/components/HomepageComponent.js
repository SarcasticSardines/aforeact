import React from 'react';
import { Link } from 'react-router-dom';
import kirby from '../assets/kirby-brella-swing.gif'

export default function HomepageComponent() {
  return (
    <>
      <div className="flex justify-center">
        <img src={kirby} alt="kirby GIF" className="mt-2 mb-9 kirbyH"/>
      </div>

      <h1 className="text-white text-7xl text-center pixel font-semibold">ARCADE MASHUP
      </h1>

      <div className="mt-16 lg:mt-20 mb-8">

        <div className="flex justify-center">
          <Link as={Link} to={"pageOne"}>
            <button className="myPink w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Say Hello</span> </button>
          </Link>
        </div>

        <div className="lg:flex lg:justify-center mt-10">
          <div className="flex justify-center lg:mr-4">
            <Link as={Link} to={"pageTwo"}>
              <button className="myRed w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Simple Sums</span> </button>
            </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:ml-4">
            <Link as={Link} to={"pageThree"}>
              <button className="myOrange w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Make-A-Sentence</span> </button> </Link>
          </div>
        </div>

        <div className="lg:flex lg:justify-center mt-10">
          <div className="flex justify-center lg:mr-4">
            <Link as={Link} to={"pageFour"}>
              <button className="myYellow w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Greater Than Who?</span> </button> </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:mx-4">
            <Link as={Link} to={"pageFive"}>
              <button className="myGreen w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Futurama Madlibs</span> </button> </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:ml-4">
            <Link as={Link} to={"pageSix"}>
              <button className="myTeal w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Odd or Even?</span> </button> </Link>
          </div>
        </div>

        <div className="lg:flex lg:justify-center mt-10 grid">
          <div className="flex justify-center lg:mr-4">
            <Link as={Link} to={"pageSeven"}>
              <button class="myAqua w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Reverse My Words!</span> </button> </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:mx-4">
            <Link as={Link} to={"pageEight"}>
              <button class="myBlue w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Reverse My Numbers!</span> </button> </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:mx-4">
            <Link as={Link} to={"pageNine"}>
              <button className="myViolet w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Magic 8 Ball</span> </button> </Link>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:ml-4">
            <Link as={Link} to={"pageTen"}>
              <button className="myPurple w-72 h-28 px-9 py-4"> <span className="text-center text-4xl pixel">Feed Me!</span> </button> </Link>
          </div>
        </div>
      </div>
    </>
  )
}
