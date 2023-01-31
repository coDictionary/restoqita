import React from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  return (
    <section id="about" className="flex px-64 py-32 max-lg:px-12 max-lg:flex-col max-lg:gap-5">

      <div className="w-1/2 flex items-center flex-col max-lg:w-full">
        <h2 className="title -mb-8 max-lg:text-5xl max-lg:-mb-6"data-aos="fade-down" data-aos-once="false">Contact</h2>
        <h4 className="subtitle z-10 uppercase max-lg:text-3xl" data-aos="fade-up" data-aos-once="false" data-aos-delay="200">Let's Chat</h4>
        <div className="content-about mt-12 text-center justify-center"data-aos="flip-up" data-aos-delay="350" data-aos-once="false">
          <span className="text-sm mt-12 mb-4 text-gray-400">* * *</span>
          <p className="text-sm text-center text-gray-400 px-20 leading-relaxed max-lg:px-0 max-lg:text-xs">
            Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
            molestiae enim a voluptate totam natus modi debitis dicta impedit
            voluptatum quod sapiente illo saepe explicabo quisquam perferendis
            labore et illum suscipit
          </p>
        </div>

    
      </div>
      <div className="px-10 w-1/2 gap-5 max-lg:w-full max-lg:p-0">
        <form>
            <div className="input-form flex flex-col" data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
                <label className="max-lg:text-sm">Your Name</label>
                <input type="text" className="rounded-md my-2  border-gray-500"/>
            </div>
            <div className="input-form flex flex-col"  data-aos="fade-left" data-aos-delay="550" data-aos-once="false">
                <label className="max-lg:text-sm">Your Email</label>
                <input type="email" className="rounded-md my-2  border-gray-500"/>
            </div>
            <div className="input-form flex flex-col"  data-aos="fade-left" data-aos-delay="600" data-aos-once="false"> 
                <label className="max-lg:text-sm">Your Message</label>
                <textarea type="text" rows={10} className="rounded-md my-2 border-gray-500"/>
            </div>
        </form>

        <div className="btn-send"  data-aos="fade-left" data-aos-delay="650" data-aos-once="false">
            <button className="py-2 px-5 bg-orange-400  text-white text-sm rounded-3xl font-semibold max-lg:w-full max-lg:mt-5">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;