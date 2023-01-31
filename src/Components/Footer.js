import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className='flex flex-col  bg-black '>
        <div className="content-footer flex px-40 py-28 max-lg:px-6 max-lg:py-16 max-lg:flex-col max-lg:gap-8">
            <div className="w-1/2 flex flex-col max-lg:w-full">
            <h2 className='title-foot text-white uppercase  text-md font-medium '>Location</h2>

            <div className="content-loc flex mt-5 max-lg:flex-col max-lg:gap-6">
                <div className="w-1/2 flex max-lg:w-full">
                    <h4 className='uppercase text-white text-sm font-extralight max-lg:leading-6' >198 West 21th Street, Suite 721 <br />New York NY 10016</h4>
                </div>
                <div className="w-1/2 flex max-lg:w-full">
                    <h4 className='uppercase text-white text-sm font-extralight  max-lg:leading-6'>198 West 21th Street, Suite 721 <br />New York NY 10016</h4>
                </div>
            </div>
            
        </div>
        <div className="w-1/2 flex flex-col max-lg:w-full">
            <h2 className='title-foot text-white uppercase tracking-widest text-md font-medium'>Open Hours</h2>

            <div className="content-loc flex mt-5 max-lg:flex-col max-lg:gap-6">
                <div className="w-1/2 flex max-lg:w-full'">
                    <h4 className='uppercase text-white text-sm font-extralight max-lg:leading-6'>Monday - Thursday 5:30pm - 10:00pm</h4>
                </div>
                <div className="w-1/2 flex'">
                    <h4 className='uppercase text-white text-sm font-extralight max-lg:leading-6'>Friday - Sunday <br />5:30pm - 10:00pm</h4>
                </div>
                <div className="w-1/2 flex'">
                    <h4 className='uppercase text-white text-sm font-extralight max-lg:leading-6'>Available for Catering <br />Email or Call Us</h4>
                </div>
            </div>
            
        </div>
        </div>
        

        <div className="bottom-foot flex px-40 py-5 max-lg:px-4 max-lg:flex-col max-lg:gap-5">
            <div className="w-3/4 max-lg:w-full">
                <p className='text-white text-sm font-extralight'>© 2017 <a className='link' href="https://demos.onepagelove.com/html/resto/">ProBootstrap:Resto</a> All Rights Reserved. Images by <a className='link' href="https://graphicburger.com/">GraphicBurger</a> & <a className='link' href="https://unsplash.com/">Unsplash</a></p>
            </div>
            <div className="w-1/4 flex">
                <div className="container-icon ml-auto gap-9 flex max-lg:gap-4 max-lg:ml-0">
                    <a href="#" className='#'><FontAwesomeIcon icon={faTwitter} className="text-gray-500 icon"/></a>
                    <a href="#" className='#'><FontAwesomeIcon icon={faFacebook} className="text-gray-500 icon"/></a>
                    <a href="#" className='#'><FontAwesomeIcon icon={faInstagram} className="text-gray-500 icon"/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer