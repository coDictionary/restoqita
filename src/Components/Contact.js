import React from "react";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { text } from "@fortawesome/fontawesome-svg-core";
const Contact = () => {
  const scriptUrl ="https://script.google.com/macros/s/AKfycbxLYekvBhKM1WDeH4IorKqfBrfj6Rl5x4px99kd5vxFCes-zkTN9iAW8Lc1SGgHVLF18A/exec";
  const form = document.forms["form-to-sheets"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSendingForm, setSendingForm] = useState(false);

  let formData = new FormData();
  const submittForm = (e) => {
    setSendingForm(true);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const MySwal = withReactContent(Swal);
    axios({
      method: "post",
      url: scriptUrl,
      data: formData,
    })
      .then((res) => {
        console.log(res);
        MySwal.fire({
          title: "Berhasil",
          text: "Berhasil mengirim pesan",
          icon: "success",
          allowOutsideClick: false,
        }).then((isClicked) => {
          if (isClicked) e.target.reset();
        });
      })
      .catch((res) => {
        console.error(res);
      })
      .finally(() => {
        setSendingForm(false);
      });
  };

  // useEffect((e) => {
  //   submitForm(e);
  // });

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   await fetch(scriptUrl, { method: "POST", body: new FormData(form) })
  //     .then((response) => {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Your work has been saved",
  //         showConfirmButton: false,
  //         timer: 2500,
  //       });
  //       console.log("Success!", response);
  //     })
  //     .catch((error) => console.error("Error!", error.message));
  // };

  return (
    <section
      id="about"
      className="flex px-64 py-32 max-lg:px-12 max-lg:flex-col max-lg:gap-5"
    >
      <div className="w-1/2 flex items-center flex-col max-lg:w-full">
        <h2
          className="title -mb-8 max-lg:text-5xl max-lg:-mb-6"
          data-aos="fade-down"
          data-aos-once="false"
        >
          Contact
        </h2>
        <h4
          className="subtitle z-10 uppercase max-lg:text-3xl"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
        >
          Let's Chat
        </h4>
        <div
          className="content-about mt-12 text-center justify-center"
          data-aos="flip-up"
          data-aos-delay="350"
          data-aos-once="false"
        >
          <span className="text-sm mt-12 mb-4 text-gray-400">* * *</span>
          <p className="text-sm text-center text-gray-400 px-20 leading-relaxed max-lg:px-0 max-lg:text-xs">
            With the best service from our customer service, you will be first
            and foremost, all your questions about our restaurant will be
            answered immediately. Your question is a treasure that can build us
            up
          </p>
        </div>
      </div>
      <div className="px-10 w-1/2 gap-5 max-lg:w-full max-lg:p-0">
        <form
          name="form-to-sheets"
          onSubmit={(e) => {
            e.preventDefault();
            submittForm(e);
          }}
        >
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="false"
          >
            <label className="max-lg:text-sm">Your Name</label>
            <input
              name="name"
              type="text"
              className="rounded-md my-2  border-gray-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-delay="550"
            data-aos-once="false"
          >
            <label className="max-lg:text-sm">Your Email</label>
            <input
              name="email"
              type="email"
              className="rounded-md my-2  border-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            className="input-form flex flex-col"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-once="false"
          >
            <label className="max-lg:text-sm">Your Message</label>
            <textarea
              name="message"
              type="text"
              rows={10}
              className="rounded-md my-2 border-gray-500"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div
            className="btn-send flex"
            data-aos="fade-left"
            data-aos-delay="650"
            data-aos-once="false"
          >
            <button
              type="submit"
              className="py-2 px-5 bg-orange-400  text-white text-sm rounded-3xl font-semibold max-lg:w-full max-lg:mt-5"
            >
              {isSendingForm ? (
                <>
                  <ReactLoading type="cylon" width={24} height={24} text = "Loading" /> 
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
