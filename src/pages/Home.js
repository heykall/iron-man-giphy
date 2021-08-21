import React from 'react'
import {
  Link
} from "react-router-dom"


const Home = () => {
  return (
    <>
      <section className="text-blueGray-700 py-4">
        <div className="container flex flex-col px-5 py-12 sm:py-24 mx-auto items-center justify-center">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-title-default sm:text-5xl title-font">
              WELCOME TO YOUR GIPHY
            </h1>
            <div className="flex flex-col px-5 py-4 sm:py-8 mx-auto items-center justify-center">
              <img alt="" src="./giphy_gif.gif" width="500" height="250" className="rounded-xl"/>
            </div>
          </div>
          
        <Link to="/iron-man-giphy" className="text-xl font-semibold text-red-400 uppercase hover:text-black py-4">IRON MAN GIPHY »</Link>
        <Link to="/search-your-giphy" className="text-xl font-semibold text-red-400 uppercase hover:text-black py-4">SEARCH YOUR GIPHY »</Link>
        </div>

      </section>
    </>
  );
}

export default Home