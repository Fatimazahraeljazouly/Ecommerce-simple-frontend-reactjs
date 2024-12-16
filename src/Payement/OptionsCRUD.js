import React from 'react'
import { MdOutlinePayment } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";

import { Link } from 'react-router-dom';
const OptionsCRUD = () => {
  return (
    <div className='container mx-auto mt-11'>
      <div className="grid grid-cols-2 place-items-center gap-6">
        <div>
          <h1 className='text-center text-[24px] mb-4 font-poppins font-bold text-primary ' >Payment BY Credit Card</h1>
          <button className="bg-primary hover:bg-thi text-white font-bold py-2 px-4 rounded transition delay-200">
            <Link to={'/list-articles'}>
            <MdOutlinePayment  className='hover:text-primary text-thi' size={240}/>

            </Link>
          </button>
        </div>
        <div>
          <h1 className='text-center text-[24px] mb-4 font-poppins font-bold text-primary'>Payment BY PayPal</h1>
          <button className="bg-primary hover:bg-thi text-white font-bold py-2 px-4 rounded transition delay-200">
            <Link to={'/search-article'}>
            <FaPaypal  className='hover:text-primary text-thi' size={240}/>

            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptionsCRUD
