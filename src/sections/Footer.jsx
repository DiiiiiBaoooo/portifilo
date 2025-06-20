import React from 'react'

const Footer = () => {
  return (
<section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
    <div className="text-white-500 flex gap-2">
        <p className="">Term & conditions</p>
        <p className="">|</p>
        <div className="">Privacy Policy</div>
    </div>
    <div className="flex gap-3">
        <div className="social-icon">
            <img src="/assets/github.svg" className='w-1/2 h-1/2' alt="" />
        </div>
        <div className="social-icon">
            <img src="/assets/twitter.svg" className='w-1/2 h-1/2' alt="" />
        </div>
        <div className="social-icon">
            <img src="/assets/instagram.svg" className='w-1/2 h-1/2' alt="" />
        </div>
    </div>
    <p className="text-white-500">© DuyBao All Reserved</p>
</section>
  )
}

export default Footer