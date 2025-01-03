import React, {Fragment} from 'react'
import './header.scss'
import personalImage from '../../assets/images/ahmed-gad.jpeg'
import { ReactComponent as Calender } from '../../assets/svg/calendar-alt-stroke.svg'
import { ReactComponent as Earth } from '../../assets/svg/earth.svg'
import { ReactComponent as Location } from '../../assets/svg/location.svg'
import { ReactComponent as Phone } from '../../assets/svg/phone.svg'
import { ReactComponent as Mail } from '../../assets/svg/envelop.svg'
import { ReactComponent as HtmlIcon } from '../../assets/svg/html-five2.svg'
import { ReactComponent as ReduxIcon } from '../../assets/svg/redux.svg'
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/svg/firebase.svg'
import { ReactComponent as CssIcon } from '../../assets/svg/css3.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/svg/javascript.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg'
import { ReactComponent as SassIcon } from '../../assets/svg/sass.svg'
import { ReactComponent as NodeIcon } from '../../assets/svg/node-dot-js.svg'
import { ReactComponent as PostgreSql } from '../../assets/svg/postgresql.svg'
import { ReactComponent as TailwindIcon } from '../../assets/svg/tailwindcss.svg'
import { ReactComponent as WordpressIcon } from '../../assets/svg/wordpress.svg'
import { ReactComponent as Jest } from '../../assets/svg/jest.svg'
import { ReactComponent as Docker } from '../../assets/svg/docker.svg'
import { ReactComponent as Gears } from '../../assets/svg/gears.svg'
import { ReactComponent as Refresh } from '../../assets/svg/refresh.svg'
import { ReactComponent as Mobile } from '../../assets/svg/mobile.svg'
import { ReactComponent as Circle } from '../../assets/svg/circle.svg'
import { ReactComponent as Global } from '../../assets/svg/global.svg'
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin2.svg'
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import Logo from '../logo/Logo'
import {motion} from 'framer-motion'
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomCursor from '../CustomCursor'
function Header() {
  return (
  <Fragment>
    <div className="header h-full xl:h-screen lg:w-screen p-6 relative flex justify-between from-primary to-secondary text-primary-content -mt-[4rem] grid 
       place-items-center items-end bg-gradient-to-br pt-20 bg-contain"> 
    <div className="container lg:max-w-screen-2xl flex flex-col items-center lg:flex-row justify-between items-start">
      <div className="details flex flex-col w-1/2 md:w-1/4 h-full align-center mt-3 gap-4"> 
         <div className="site-logo site-logo__2 flex self-start mb-2">
            <Logo/>
         </div>

         <div className="info h-auto rounded-lg shadow-md p-8">
            <ul className='header-list'>
              <motion.li className='flex flex-row w-full align-center items-center'
               initial={{opacity:0, x: '-100vw'}}
               animate={{opacity: 1, x:0}}
               transition={{delay:0.4 , type: 'spring', stiffness: 80}}>
               <Circle className='circle-icon mr-3'/>DEVELOPE<Mobile className='head-icon ml-3'/>  
              </motion.li>

              <motion.li 
               className='flex flex-row w-full align-center items-center'
               initial={{opacity:0, x: '-100vw'}}
               animate={{opacity: 1, x:0}}
               transition={{delay:0.8, type: 'spring', stiffness: 80}}>
               <Circle className='circle-icon mr-3'/>TEST<Gears className='head-icon ml-3' />
              </motion.li>

              <motion.li className='flex flex-row w-full align-center items-center'
                initial={{opacity:0, x: '-100vw'}}
                animate={{opacity: 1.6, x:0}}
                transition={{delay:1.2,  type: 'spring', stiffness: 80}}>
               <Circle className='circle-icon mr-3'/>DEPLOY<Global className='head-icon ml-3' />
              </motion.li>

              <motion.li className='flex flex-row w-full align-center items-center'
                initial={{opacity:0, x: '-100vw'}}
                animate={{opacity: 1, x:0}}
                transition={{delay:1.6, type: 'spring', stiffness: 80}}>
               <Circle className='circle-icon mr-3'/>LOOP<Refresh className='head-icon ml-3' /> 
              </motion.li>
              <motion.hr initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, type:'tween', duration: 1.5}} />
            </ul>
         </div>

         <div className="brands rounded-lg flex flex-col justify-center align-center items-center">
            <div className="brands-col flex flex-row mb-3">
              <ReactIcon className='brand-icon'/>
              <JavascriptIcon className='brand-icon'/>
              <ReduxIcon className='brand-icon'/>
              <SiNextdotjs className='brand-icon'/> 
              <NodeIcon className='brand-icon'/>
              <SiTypescript className='brand-icon'/>       
            </div>

            <div className="brands-col flex flex-row mb-3">
              <SassIcon className='brand-icon'/>
              <HtmlIcon className='brand-icon'/>  
              <CssIcon className='brand-icon'/>
              <TailwindIcon className='brand-icon'/>
              <Docker className='brand-icon'/>
            </div>

            <div className="brands-col flex flex-row mb-3">       
              <Jest className='brand-icon'/> 
              <GithubIcon className='brand-icon'/>
              <WordpressIcon className='brand-icon'/>         
            </div>       
         </div>
      </div> 
    
     <div className="card-container w-full md:w-1/2 flex justify-center lg:justify-end lg:mr-3 2xl:mr-0">  
      <div className="card w-96 glass shadow-xl">
      <div><figure><LazyLoadImage src= {personalImage} alt="card!" className='card-image mt-4'/></figure></div> 
        <div className="card-body text-white">
         <h4 className="card-title text-white">Ahmed Gad</h4>
         <div className="card-actions">             
            <h6 className='info-span'> <Calender className='icon'/> 22 May 1996</h6>
            <h6 className='info-span'> <Location className='icon'/> Helioplis, Cairo, Egypt</h6>
            <h6 className='info-span'> <Mail className='icon'/> ahmedamrgad12345@gmail.com</h6>
            <h6 className='info-span'> <Phone className='icon'/> +201009860198</h6>
            <h6 className='info-span'> <Earth className='icon'/> ahmedgad-dev.com</h6>     
            <h6 className='info-span'> <LinkedIn className='icon'/> https://www.linkedin.com/in/ahmed-gad-0980221b5/</h6>                
         </div>      
       </div>
     </div>
    </div>
    </div>
   </div>
   <CustomCursor/>
  </Fragment>
  )
}

export default Header