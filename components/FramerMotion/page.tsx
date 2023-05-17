'use client'

import { motion, Variants, AnimatePresence } from 'framer-motion'
import style from './Framer.module.css'


const container = {
  onscreen : {
    transition: {
      staggerChildren: 0.40,
    }
  },
  exit: { y: -1000, opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}


const animated1 = {
  offscreen: {opacity: 0},
  onscreen: {
    opacity: 1,
          transition: {delay: 0.5},
          transitionEnd: {
            display: 'none'
          }
  }
}


const animated2 = {
  offscreen: {opacity: 0},
  onscreen: {
    opacity: 1,
          transition: {delay: 0.8},
          transitionEnd: {
            display: 'none'
          }
  }
}
const animated3 = {
  offscreen: {opacity: 0},
  onscreen: {
    opacity: 1,
          transition: {delay: 1.1},
          transitionEnd: {
            display: 'none'
          }
  }
}
const animated4 = {
  offscreen: {opacity: 0},
  onscreen: {
    opacity: 1,
          transition: {delay: 1.4},
          transitionEnd: {
            display: 'none'
          }
  }
}
const animated5 = {
  offscreen: {opacity: 0},
  onscreen: {
    opacity: 1,
          transition: {delay: 1.7},
  }
}






export default function FramerMotion({setLoading}: any) {


  return (
    <>

    <motion.section 
    initial={'offscreen'}
    animate={'onscreen'}
    exit={'exit'}
    variants={container}
    onAnimationComplete={()=> setLoading(false)}
    className={style.loaderHome}>
        
        <motion.div 
        // initial={'offscreen'}
        // animate={'onscreen'}
        className={style.containerLoaderHome}>
           
            <motion.span
            variants={animated1}
            >hello</motion.span>

            <motion.span
            variants={animated2}
            >مرحبًا</motion.span>

            <motion.span
            variants={animated3}
            >Ciao</motion.span>

            <motion.span
            variants={animated4}
            >Привет</motion.span>

            <motion.span
            variants={animated5}
            >Hola</motion.span>

        </motion.div>
    </motion.section>

    </>
  )
}
