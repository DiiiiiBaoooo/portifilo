import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../conponents/HackerRoom'
import CanvasLoader from '../conponents/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../conponents/Target'
import ReactLogo from '../conponents/ReactLogo'
import Cube from '../conponents/Cube'
import Rings from '../conponents/Rings'
import HeroCamera from '../conponents/HeroCamera'
import Button from '../conponents/Button'
const Hero = () => {
  
  const isSmall = useMediaQuery({maxWidth:480})
  const isMobile = useMediaQuery({maxWidth:768 });
  const isTablet = useMediaQuery({maxWidth:1024,minWidth:768})
  const sizes = calculateSizes(isSmall, isMobile,isTablet)

  return (
   <section className='min-h-screen w-full flex flex-col relative' id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-16 c-space gap-3 ">
      <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans' >  Hi, i am Duy Bao <span className='waving-hand'>🖐</span></p>
      <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
    </div>
    <div className="w-full h-full absolute inset-0 ">
    {/* <Leva /> */}

       <Canvas  className='w-full h-full'>
        <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault  position={[0,0,20]} />
        <HeroCamera isMobile={isMobile} >

    
          <HackerRoom 
          scale={sizes.deskScale}
          // scale={0.07}  
          // position={[0,-7,0]} 
          position={sizes.deskPosition} 
          // rotation={[0, 280 , 0]}
          rotation={[0,-Math.PI,0]}

           />
               </HeroCamera>
           <group >
            <Target position={sizes.targetPosition}/>
            <ReactLogo position={sizes.reactLogoPosition} />
            {/* <Rings position={sizes.ringPosition} /> */}
            <Cube position={sizes.cubePosition} />
            
           </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10,10,10]} intensity={0.5} />
          </Suspense>
       </Canvas>
    </div>


    <div className="absolute bottom-7 left-0 ring-0 w-full z-10 c-space">
      <a href="#about" className='w-fit'>
      <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
      </a>


    </div>
   </section>
  )
}

export default Hero
