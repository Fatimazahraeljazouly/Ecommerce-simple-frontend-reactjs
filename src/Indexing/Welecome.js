import React from 'react'
import img2 from '../images/home_img.png'
const Welecome = () => {
  return (
    <div className='container mx-auto mt-11  '>
      <div className='flex flex-1 gap-5 '>
        <img  className='rounded-md w-[700px]' src={img2} alt="home" />
        <div>
            <h1 className='text-[28px] font-bold font-averia text-primary'>Welcome in the E-commerce website Management</h1>
            <p className='text-[16px] text-secondary '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error repellendus rem, perferendis nihil, itaque impedit repellat tenetur veritatis odio est, ipsum temporibus deleniti vitae omnis unde fugit dolorem accusantium?</p>
        </div>
      </div>
    </div>
  )
}

export default Welecome
