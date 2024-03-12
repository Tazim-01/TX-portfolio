import React from 'react'

const EducationTab = () => {
  return (
    <div className=''>
        <div className='md:m-14 mt-20 text-center'>
            <div className=' text-designColor'>1998 - 2010</div>
            <div className=' text-white text-5xl uppercase font-bold'>Education Qualification</div></div>
            
            
            <div className='md:flex md:justify-between md:m-20 m-5'>
            <div className='group mb-5 md:mb-0 ml-6 md:ml-0'>
                 <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[350px] bg-[#202226] group-hover:bg-gradient-to-tr from-black to-primaryColor/80'>
                  <div className='flex justify-between'>
                  <div className='text-2xl text-white uppercase font-bold'>SSC<span className=' text-lightText text-lg ml-2'>(Science)</span></div>
                  <div className='text-red-600 shadow-sm shadow-black rounded-lg p-2'>4.94/5</div>
           </div>
           <p className='text-md text-lightText mb-10 group-hover:text-white'>National Ideal School (2021 - 2023)</p>
           <p className='md:text-xl text-lg text-lightText group-hover:text-white'>I completed my S.S.C from National Ideal school (2021-2023)
           </p>
       </div>
       </div>



       <div className='group ml-6 md:ml-0'>
                 <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[350px] bg-[#202226] group-hover:bg-gradient-to-tr from-black to-primaryColor/80'>
                  <div className='flex justify-between'>
                  <div className='text-2xl text-white uppercase font-bold'>HSC<span className=' text-lightText text-lg ml-2'>(Science)</span></div>
                  <div className='text-red-600 shadow-sm shadow-black rounded-lg p-2'>Null/5</div>
           </div>
           <p className='text-md text-lightText mb-8 group-hover:text-white'>Dhaka Imperial College(Ongoing)</p>
           <p className='md:text-xl text-lg text-lightText group-hover:text-white'>Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
           </p>
       </div>
       </div>
            </div>
    </div>
        
  )
}

export default EducationTab