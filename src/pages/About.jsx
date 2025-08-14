import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing overall your
            health care. Our main motto is to keep the people safe and secure
            so, we have managed the development of health personal for patient
            betterment.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology in
            affordable price for all group of human being it is for the
            betternment and the good well being of human there are lots of
            helpful hands to make it possible to look after the most sensative
            issue which is health and we are uplifting the better health of
            human and their progress of good life.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to create a seamless healthcare experience for every
            human being and the better health facility from good doctors of
            different group and with advance technology and knowledge of the
            dynamic doctors who are there for the better health of the patient.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that files into your busy lifestyle</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare proffessionals in your area</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalization</b>
          <p>Tailored recommendation and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About
