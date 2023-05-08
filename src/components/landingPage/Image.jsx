import React from 'react'

function Image() {
  return (
    <div className='relative h-[200px] w-[200px] rounded-full overflow-hidden sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]'>
        <img src="./src/assets/forHome.png" alt="PeterHome" className='absolute bg-gradient-to-br from-containerColor to-textColor h-full w-full object-cover z-10'/>
    </div>
  )
}

export default Image

// px-[0.5rem] sm:mb-0 sm:px-[1.5rem] md:px-[2rem] rounded-full sm:w-[250px] md:w-[300px] 