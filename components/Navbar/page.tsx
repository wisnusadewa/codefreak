
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Navbar = ()=> {
    return (
     <>
     <motion.div 
     className="fixed flex navbar bg-black">
       <motion.div 
       initial={{x: 500, opacity: 0}}
       animate={{x: 0, opacity: 1,
       transition: {
         duration: 3
       }
       }}  
       className="navbar-start">
         <p className="text-white text-3xl">CodeFreak.</p>
       </motion.div>

       <motion.div
       className="flex navbar-end"
       initial={{y: 500, opacity: 0}}
       animate={{y: 0, opacity: 1,
       transition: {
         duration: 3
       }
       }}  
       >
       <Link href='https://www.linkedin.com/in/wisnu-sadewa-989b65161/'>
            <span className="flex text-white"><FaLinkedin size={25}/></span>
       </Link>
       <Link href='https://github.com/wisnusadewa'>
            <span className="flex text-white ml-5"><FaGithub  size={25}/></span>
       </Link>
       <Link href='https://www.instagram.com/wisnusadew/'>
            <span className="flex text-white ml-5"><FaInstagram  size={25}/></span>
       </Link>
       </motion.div>
     </motion.div>
     </>
    )
   }
   
   export default Navbar;