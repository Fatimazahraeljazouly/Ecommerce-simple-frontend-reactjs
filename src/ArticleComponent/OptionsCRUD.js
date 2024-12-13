import React from 'react'
import { FaListOl } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";

import { Link } from 'react-router-dom';
const OptionsCRUD = () => {
  return (
    <div className='container mx-auto mt-11'>
      <div className="grid grid-cols-3 place-items-center gap-8">
        <div>
          <h1 className='text-center text-[24px] mb-4 font-poppins font-bold text-primary '>Add Article</h1>
          
          <button  className="bg-primary transition delay-200 hover:bg-thi    text-white font-bold py-2 px-4 rounded"> 
          <Link to={'/add-article'}>          
              <MdAddComment className='hover:text-primary text-thi' size={240}/>
          </Link>
          </button>
         
        </div>
        <div>
          <h1 className='text-center text-[24px] mb-4 font-poppins font-bold text-primary ' >Articles List</h1>
          <button className="bg-primary hover:bg-thi text-white font-bold py-2 px-4 rounded transition delay-200">
            <Link to={'/list-articles'}>
            <FaListOl  className='hover:text-primary text-thi' size={240}/>

            </Link>
          </button>
        </div>
        <div>
          <h1 className='text-center text-[24px] mb-4 font-poppins font-bold text-primary'>Search Article</h1>
          <button className="bg-primary hover:bg-thi text-white font-bold py-2 px-4 rounded transition delay-200">
            <Link to={'/search-article'}>
            <MdManageSearch  className='hover:text-primary text-thi' size={240}/>

            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptionsCRUD
