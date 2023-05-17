import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import avatar from '../../public/avatar-ku.png'
import logo1 from '../../public/logo/html-1.svg'
import logo2 from '../../public/logo/css-3.svg'
import logo3 from '../../public/logo/tailwind-css-2.svg'
import logo4 from '../../public/logo/logo-javascript.svg'
import logo5 from '../../public/logo/react-2.svg'
import logo6 from '../../public/logo/next-js.svg'
import logo7 from '../../public/logo/framer-motion.svg'
import jsPDF from "jspdf"



const Navbar = ()=> {
 return (
  <>
  <motion.div className="navbar bg-black">
    <motion.div 
    initial={{x: 1000, opacity: 0}}
    animate={{x: 0, opacity: 1,
    transition: {
      duration: 3
    }
    }}  
    className="navbar-start">
      <p className="text-white text-3xl">CodeFreak.</p>
    </motion.div>
  </motion.div>
  </>
 )
}





const Portofolio = ()=> {

  const imageAnimated = {
    offscreen:{x: -200, opacity: 0},
    onscreen:{x: 0, opacity: 1,
    transition:{
      duration: 2,
    }
    }
  }
const uptodownAnimated = {
    offscreen:{y: -200, opacity: 0},
    onscreen:{y: 0, opacity: 1,
    transition:{
      duration: 1.5,
    }
    }
  }
const downtoupAnimated = {
    offscreen:{y: 200, opacity: 0},
    onscreen:{y: 0, opacity: 1,
    transition:{
      duration: 1.5,
    }
    }
  }

  const downloadPDF = () => {
    var doc = new jsPDF('portrait', 'px', [579, 819]) 
    doc.addImage('https://i.ibb.co/q95YhKL/cv-fe-wisnusadewa.jpg', 'JPG', 0, 0, 579, 819)
    doc.save('resume.pdf')
    } 
    
return (
  <>
 

      {/* Container */}
      <motion.div 
      initial={'offscreen'}
      animate={'onscreen'}
      transition={{staggerChildren: 0.5}}
      className='grid text-white h-full bg-black'>
        
        {/* bagian kiri = foto */}
        <div className='grid grid-cols-2 mt-20'>
          
          <motion.div 
          variants={imageAnimated}
          >
          <Image src={avatar}  alt='/' className='rounded-full' />
          </motion.div>
          
          {/* Bagian kanan text */}
            <div className='grid content-center'>
            
            {/* Wrapping framer motion up to down */}
              <motion.div
              variants={uptodownAnimated}
              className=''
              >
                <div className=''>
                  <span className='text-[30px] md:text-[40px] lg:text-[50px]'>Hi, </span>
                </div>
                
                <div className=''>
                  <span className='text-yellow-300 text-[40px] md:text-[50px] lg:text-[65px]'>
                    I&apos;m Wisnu Sadewa
                  </span>
                </div>

                <div  className=''>
                  <p className='italic text-[20px] md:text-[25px]'>
                  &apos;I am interested in frontend web developer&apos;
                  </p>
                </div>
                
                <div className='mt-10 mb-5'>
                  <p className='text-[20px] md:text-[25px]'>Knowledge</p> 
                </div>
              </motion.div>

              {/* Wrapping framer motion down to up */}
                <motion.div 
                variants={downtoupAnimated}
                className=''>
                  <span className='flex flex-wrap gap-4'>
                    <Image src={logo1} alt='/' width={30} height={0}  className='bg-white'/>
                    <Image src={logo2} alt='/' width={30} height={0} className='bg-white'/>
                    <Image src={logo3} alt='/' width={30} height={0} className='bg-white'/>
                    <Image src={logo4} alt='/' width={30} height={0} className='bg-white'/>
                    <Image src={logo5} alt='/' width={30} height={0} className='bg-white'/>
                    <Image src={logo6} alt='/' width={30} height={0} className='bg-white'/>
                    <Image src={logo7} alt='/' width={30} height={0} className='bg-white'/>                  
                   </span>

                   <div className=''>
                      <button className='border rounded-lg py-2 my-20 px-2 text-[10px] md:text-[15px] lg:text-[18px] md:px-8 lg:px-9 hover:bg-yellow-300 hover:text-black'>
                        <Link href="http://wa.me/088809113137">Hire Me</Link>                       
                        </button>
                      <button 
                      className='border rounded-lg p-2 ml-2 text-[10px] md:text-[15px] md:ml-20 md:px-8 lg:ml-20 lg:text-[18px] hover:bg-yellow-300 hover:text-black'
                      onClick={() => {downloadPDF()}}                    
                      >
                        Resume
                        </button>
                    </div>
                </motion.div>

            </div>
          
        </div>
          
      </motion.div>

  </>
)
}

export default function Hero() {



  return (
    <div>
      <Navbar />
      <Portofolio />
    </div>
  )
}
