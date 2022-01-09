import React from "react";

function Contact() {
  return (
    <div className="bg-contact">
      <div className="flex flex-col justify-between py-20 sm:items-center md:py-44 layout sm:flex-row">
        <h1 className="text-4xl font-extrabold sm:text-6xl flex-[5] max-w-[850px]">
          Contact us for the service you want to use
        </h1>
        <button className="mt-12 sm:mt-0 px-8 py-4 text-base font-medium rounded outline-none sm:text-xl  bg-bg-btn max-w-[160px] sm:max-w-[200px] text-center">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Contact;
