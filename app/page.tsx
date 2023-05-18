'use client'

import Image from 'next/image'
import FramerMotion from '@/components/FramerMotion/page'
import Hero from '@/components/Hero/page'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar/page'




export default function Home() {

  const [loading , setLoading] = useState(true);

  // useEffect(()=> {
  //   loading 
  //   ? document.querySelector('body').classList.add('loading')
  //   : document.querySelector('body').classList.remove('loading');
  // },[loading]); 


  return (
    <>
     {/* <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </Head> */}
    <AnimatePresence>
      {
        loading ? (
          <motion.div>
            <FramerMotion setLoading={setLoading}/>
          </motion.div>
        ) : (   
          <>
          <Navbar/>
          <Hero />  
          </>
        )
      }   
    </AnimatePresence>
    </>
  )
}
