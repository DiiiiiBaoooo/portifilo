import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../conponents/Button'

const About = () => {
    const [hasCopied,setHasCopied]= useState(false);

    const handleCopy = ()=>{
        navigator.clipboard.writeText('nguyenduybaodt1821@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
setHasCopied(false)
        },2000)
    }
  return (
   <section className='c-space my-20' id='about'>
    <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid1.png" alt="" className='w-full sm:h-[276px] h-fit object-contain' />
                <div className="">
                    <p className="grid-headtext">Hi, I'm Duy Bao</p>
                    <p className="grid-subtext">Hihihhiihihihihihihihihhihihiihhihihiihihihihihih</p>
                </div>
            </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
            <img src="/assets/grid2.png" alt="" className='w-full sm:w-[276px] h-fit object-contain' />
            <div className="">
                <p className="grid-headtext">Kỹ năng</p>
                <p className="grid-subtext">PHP, JS, HTML, CSS , NodeJS, React</p>

                
            </div>
        </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.jpg"
                            globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                            labelsData={[{
                                lat: 10.762622, lng: 106.660172,
                                text:'toi o day',
                                color:'white',
                                size:20,
                            }]}
                            />
                </div>
                <div className="">
                <p className="grid-headtext">
                    Dia chi
                </p>
                <p className="grid-subtext">Toi song va lam viec o tphcm</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                </div>
                
            </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
<div className="grid-container">
    <img src="/assets/grid3.png" alt="" className='w-full sm:h-[266px] h-fit object-contain' />
    <div className="">
        <p className="grid-headtext">My Passion for coding</p>
        <p className="grid-subtext">Em thich an thich ngu heheheheheheheheh</p>

    </div>
</div>

        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="assets/grid4.png" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' alt="" />
                <div className="spacy-y-2">
                    <p className="grid-subtext text-center">Contact me </p>
                   <div
                    onClick={handleCopy}
                   className="copy-container">
                    <img src={hasCopied ? 'assets/tick.svg':'assets/copy.svg'} alt="" /> 
                    <br></br>
                            <p className="lg:text-lg md:text-lg font-medium text-white text-gray_gradient">nguyenduybaodt1821@gmail.com</p>
                   </div>

                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
