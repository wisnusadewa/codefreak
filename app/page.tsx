'use client'

import Image from 'next/image'
import FramerMotion from '@/components/FramerMotion/page'
import Hero from '@/components/Hero/page'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'



export default function Home() {

  const [loading , setLoading] = useState(true);

  // useEffect(()=> {
  //   loading 
  //   ? document.querySelector('body').classList.add('loading')
  //   : document.querySelector('body').classList.remove('loading');
  // },[loading]); 


  return (
    <>
    <AnimatePresence>
      {
        loading ? (
          <motion.div>
            <FramerMotion setLoading={setLoading}/>
          </motion.div>
        ) : (   
          <>
            <Hero />
          </>
        )
      }   

    </AnimatePresence>
    </>
  )
}
