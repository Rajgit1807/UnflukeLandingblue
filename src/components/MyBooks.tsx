import React from 'react'
import bookImage from "./../assets/images/book.png"
import { Link } from 'react-router-dom';

const MyBooks = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-16 pb-16 pt-7 md:pb-28 md:pt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Book Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bookImage}
            alt="51 Trading Strategies Book"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            51 Trading<span className="hidden md:inline"><br /></span> Strategies
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            This is a book to read, revisit, and master. A guide filled with strategies you'll analyze and apply repeatedly. Each page offers insights that sharpen your trading skills. You'll find yourself underlining key lessons and reflecting on them often.
          </p>

          <p className="text-gray-800 font-medium mb-6 italic">BY Assem Singhal</p>
          <a href='https://go.zebralearn.com/51-trading-strategies?_gl=1*x83d94*_ga*MTI0NDk3MDUzOC4xNzA3MjI1ODkz*_ga_21G196HESG*MTcwNzIyNTg5My4xLjEuMTcwNzIyNzAxNy42MC4wLjA.?afc=CVJBPSLA'> 
          <button className="bg-blue-400 hover:bg-blue-500 text-white w-fit font-semibold px-6 py-3 rounded-full transition duration-300  sm:w-auto">
            GET YOUR COPY
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyBooks