import React, { useEffect } from 'react'
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    AOS.init()
  })
  return (
    <section id='home'>
        <div id="bg-home" className='flex flex-col justify-center items-center' >
          <div className="container flex flex-col justify-center items-center" >

          <h2 className='title -mb-8 max-lg:text-5xl max-lg:-mb-6' data-aos="fade-down" data-aos-once="true">Welcome to</h2>
          <h4 className='subtitle text-white z-10 max-lg:text-3xl' data-aos="fade-up" data-aos-once="true" data-aos-delay="500">The RestoQita</h4>
          <p className='text-white text-sm max-lg:text-xs max-lg:text-center max-lg:px-4' data-aos="flip-up" data-aos-delay="650">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, labore?</p>
          </div>
        </div>
    </section>
  )
}

export default Home