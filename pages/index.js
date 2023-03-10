import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const bottomAnimate = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:1,
        when:"beforeChildren",
        staggerChildren:0.4,
        duration:0.5
      }
    }
  }

  const jordanAninate = {
     hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration:0.4
      }
    }
  }
  const shoe = {
     hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
      
       
        staggerChildren:0.4,
        duration:0.4
      }
    }
  }
  const heading = {
    hidden:{
      x:"-100vw"
    },
    visible:{
      x:0
    }
  }
  return (
    <>
      <Head>
        <title>Shoe Card</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/neon green.png" />
      </Head>

      <div className='flex items-center justify-center h-[100%] w-[100%] '>
      

       <motion.div className='bg-black w-[280px] h-[470px] mt-[100px] cardBox relative flex flex-col rounded-2xl cursor-grab' drag dragConstraints={{top:-124,right:125,bottom:125,left:-125}} dragTransition={{bounceStiffness:600,bounceDamping:20}} dragElastic={0.5}>

        
         <div className="topContainer " style={{flex:1.2,justifyContent:'flex-end',display:'flex',flexDirection:'column',width:'100%',paddingTop:'1em',paddingBottom:'1em',paddingLeft:'15px',paddingRight:'15px'}}>
           <motion.div className='absolute top-0 right-0' style={{zIndex:99,width:'auto'}}>
 <Image src="/brand-nike 1.png" width={50} height={300} alt="shoe"/>
          </motion.div>
          <div className="absolute top-0 left-0  cirleWrapper overflow-hidden " style={{borderTopRightRadius:'25px',minHeight:'100%',minWidth:'100%'}}>
          <motion.div className=' absolute w-[350px] h-[350px]  -top-[4.2em] -left-[10em]  bg-[#93BC2F] text-white overflow-hidden ' style={{borderRadius:'50%'}} initial={{scale:10,opacity:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>
          </motion.div>
        </div>
        <div className='absolute shoeWrapper ' style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <motion.div className='shoe mt-[300px]' style={{zIndex:99,width:'auto'}} initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:0.9,delay:0.4}}>
 <Image src="/usama-akram-kP6knT7tjn4-unsplash 2.png" width={350} height={300} alt="shoe"/>
          </motion.div>

        </div>

       


        <motion.h1 className='font-[900] text-white' style={{textTransform:'uppercase',margin:0,fontSize:'56px',zIndex:10}} initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:1.2,delay:0.2}}>
          NIKE AIR
        </motion.h1>
        </div>

        

       

         <motion.div className="bottomContainer  relative  text-white   " style={{flex:0.8, flexDirection:'column',justifyContent:'flex-end',width:'100%',display:'flex',position:'relative',paddingTop:'1em',paddingBottom:'1em',paddingLeft:'1em',paddingRight:'1em'}} variants={bottomAnimate} initial="hidden" animate="visible">
<motion.div className='flex gap-[20px] jordan' variants={jordanAninate}>
  <h3>AIR JORDAN 1 MID SE GC</h3>
  <h4>$856</h4>
</motion.div>
<motion.div className='flex gap-[60px] mt-[20px] shoe' variants={shoe}>
   <motion.h3 className='text-sm' variants={heading} >YOUR NEXT SHOES</motion.h3>
 <motion.button className='bg-[#93BC2F] h-[35px] w-[60px] rounded-md' variants={heading}>BUY</motion.button>
</motion.div>
 <motion.div className='flex items-center justify-center' style={{zIndex:99,width:'auto'}}>
 <Image src="/brand-nike 1.png" width={30} height={300} alt="shoe"/>
          </motion.div>
        </motion.div>



       </motion.div>



      </div>
    
          

       

       
         

        
    </>
  )
}
