import React from 'react'

import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div name="home" className='Home flex-wrap flex justify-between px-10 py-10 bg-blue-50 l:flex-nowrap pt-20 pb-32'>
      <div className='md:home-text-content max-w-screen-sm'>
      <motion.h1 
      initial={{y: "-5rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 1.5,
              type: "spring",
            }}
      className=' font-Croissant text-6xl text-center mb-4 text-orange-500 md:text-7xl md:text-start'>WOOLFY</motion.h1>
        <p className='font-YoungSerif text-md mt-6 md:text-xl justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, et exercitationem. Recusandae delectus dolorum officia expedita. Similique enim atque nulla consequuntur aut veritatis voluptate assumenda nisi maiores ab? Tempore, voluptas</p>
        
        <p className='font-YoungSerif mt-3 text-l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam cumque placeat ad eaque reiciendis tempora numquam impedit harum, at est? eniam cumque placeat ad eaque reiciendis tempora numquam impedit</p>
      </div>
      <motion.div 
      initial={{x: "25rem", opacity:1}}
      animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring",
            }}
      className='m-auto home-image pt-10 sm:grid-cols-2 gap-8'>
        <img src="demo_img.png" alt="" />
      </motion.div>
    </div>
  )
}

export default Home