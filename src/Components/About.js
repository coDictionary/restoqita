import React from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id="about" className="flex p-32 max-lg:p-10 max-lg:flex-col">
      <div
        className="flex w-1/2 max-lg:w-fit max-lg:justify-center"
        data-aos="fade-up-left"
        data-aos-once="false"
      >
        <img
          src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
          alt="about"
          className="bg-cover w-5/6 max-lg:rounded-md "
        />
      </div>
      <div
        className="w-1/2 my-5 flex flex-col justify-center items-center max-lg:w-fit"
        data-aos="fade-up-right"
        data-aos-once="false"
      >
        <h2 className="title -mb-8 max-lg:text-5xl max-lg:-mb-6">Discover</h2>
        <h4 className="subtitle z-10 max-lg:text-3xl">Our Store</h4>
        <div className="content-about mt-12 text-center justify-center max-lg:mt-6">
          <span className="text-sm mt-12 mb-4 text-gray-400 max-lg:text-xs">
            * * *
          </span>
          <p className="text-sm text-center text-gray-400 px-20 leading-relaxed max-lg:px-10 max-lg:text-xs">
            RESTOQITA is a restaurant that provides various types of food,
            starting from the Main Course, Appetizer, and also Dessert that will
            spoil your tongue with a taste that you have never tasted anywhere
            else.
          </p>
        </div>

        <div className="btn-about mt-5">
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-yellow-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 max-lg:text-sm"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
