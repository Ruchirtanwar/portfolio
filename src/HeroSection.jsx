// components/HeroSection.jsx
import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react"; // or any icon library
import ProfileImage from "../src/assets/profile.png"; // Replace with your image
import separator from "../src/assets/separatorBlack2.png";7
import { SiMongodb, SiTypescript, SiCplusplus, SiC } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import html from "./assets/html5.svg";
import css3 from "./assets/css3.svg";
import gsap from "./assets/gsap.png";
// import swiperui from "./assets/swiperui.png"
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import bootsrap from "./assets/bootstrap.svg";
import git from "./assets/git.svg";
import tailwindcss from "./assets/tailwindcss.svg";
import nodejs from "./assets/nodejs.png";
import mysql from "./assets/mysql.svg";
import mongodb from "./assets/mongodb.png";
import c from "./assets/c.svg";
import cplus from "./assets/cplus.svg";
// import english from "./assets/english.svg";
// import spanish from "./assets/spanish.svg";
import express from "./assets/express.svg";
import design from "./assets/desgin.png";
import development from "./assets/development.png"
import maintainance from "./assets/maintainance.png"

const skills = {
  "Using Now": [
    { src: html, label: "HTML5" },
    { src: css3, label: "CSS3" },
    { src: gsap, label: "GSAP" },
    // { src: {}, label: "SwiperUI" },
    { src: js, label: "JavaScript" },
    { src: react, label: "React" },
    { src: bootsrap, label: "Bootstrap" },
    { src: git, label: "Git" },
    { src: tailwindcss, label: "TailWindCSS" },
  ],
  Learning: [
    { src: nodejs, label: "NodeJS" },
    { src: mysql, label: "MySQL" },
    { src: mongodb, label: "MongoDB" },
    { src: express, label: "ExpressJS" },

    // { icon: <SiTypescript />, label: "TypeScript" },
  ],
  "Other Skills": [
    // { src: english, label: "English C1/C2" },
    // { src: spanish, label: "Spanish B1/B2" },
    { src: cplus, label: "C++" },
    { src: c, label: "C" },
  ],
};

const HeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: send form data
    console.log("Form Submitted", form);
  };
  return (
    <div>
      <section className="flex flex-col md:flex-row bg-[#d9d9d9]  min-h-screen">
        {/* Left Side */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12"
          
        >
          {/* Logo */}
          <div></div>
          {/* Text */}
          <div className="mt-10 sm:mt-12 md:mt-16">
            <p className="text-xl font-medium text-gray-800">Hi, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-2 uppercase">
              Ruchir Tanwar
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold mb-6 ">
              <Typewriter
                words={[
                  "Always learning, always building.",
                  "Code. Learn. Repeat.",
                  "Fuelled by curiosity. Focused on growth.",
                  "Learning by doing — one project at a time.",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                className="bg-white p-2 rounded shadow hover:scale-110 transition"
              >
                <Mail className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://github.com/Ruchirtanwar"
                className="bg-white p-2 rounded shadow hover:scale-110 transition"
              >
                <Github className="w-5 h-5 text-black" />
              </a>
              <a
                href="www.linkedin.com/in/ruchir-tanwar"
                className="bg-white p-2 rounded shadow hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
          <div></div> {/* Spacer */}
        </div>

        {/* Right Side */}
        <div
          className="w-full md:w-1/2 bg-black relative flex items-end justify-center py-6 sm:py-8 md:py-0"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-[80%] sm:w-[70%] md:w-[60%] object-contain"
          />
        </div>
      </section>
      {/* about me */}
      <section
        id="aboutme"
        className="bg-gradient-to-b from-gray-200 to-gray-100 py-20 text-center text-gray-800"
      >
        <h2 className="text-2xl font-bold border-4 border-black inline-block px-10 py-3 mb-6 tracking-wide">
          ABOUT ME
        </h2>
        <p className="max-w-3xl mx-auto text-sm mb-6">
          To pursue a challenging career and be a part of progressive
          organization that gives a scope to enhance my knowledge and utilize my
          skills towards the growth of the organization.
        </p>

        <button className="relative inline-flex items-center justify-center px-8 py-2 mt-4 font-bold tracking-wide border-b-2 border-black group">
          EXPLORE
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 border-b-2 border-black"></span>
        </button>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-20 px-6">
          {[
            {
              title: "DESIGN",
              desc: "I can design the site based on your needs...",
              img:design ,
            },
            {
              title: "DEVELOPMENT",
              desc: "I can also develop the site from scratch...",
              img: development,
            },
            {
              title: "MAINTENANCE",
              desc: "I can also maintain and consult you...",
              img: maintainance, 
            },
          ].map((item) => (
       <div
      key={item.title}
      className="relative max-w-sm text-center px-6"
    >
      {/* Faded background icon */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute top-0 left-1/4 -translate-x-1/2 w-16 h-16 opacity-80 pointer-events-none"
      />
      {/* Title */}
      <h3 className="text-lg font-bold tracking-widest mt-10 mb-3">
        {item.title}
      </h3>
      {/* Description */}
      <p className="text-sm text-gray-700">{item.desc}</p>
    </div>
          ))}
        </div>

        <div>
          <img
            src={separator}
            alt="separator "
            className="mx-auto mt-16 w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </div>
      </section>

      {/* skill section */}
      <section
        id="Skills"
        className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 text-center"
      >
        <h2 className="text-2xl font-bold border-4 border-black inline-block px-10 py-3 mb-10 tracking-wide">
          SKILLS
        </h2>

        {Object.entries(skills).map(([section, items]) => (
          <div key={section} className="mb-12">
            <h3 className="text-lg font-semibold uppercase mb-6 tracking-widest">
              {section}:
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-sm text-gray-700"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-18 h-18 mb-2 m-6 transition duration-300 ease-in-out transform hover:scale-110"
                  />{" "}
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <img
            src={separator}
            alt="separator "
            className="mx-auto mt-16 w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </div>
      </section>
      {/* contact form data  */}
      <section
        id="contactme"
        className="bg-gradient-to-b from-gray-200 to-gray-100 py-20 text-center"
      >
        <h2 className="text-2xl font-bold border-4 border-black inline-block px-10 py-3 mb-6 tracking-wide">
          CONTACT
        </h2>
        <p className="max-w-xl mx-auto text-sm text-gray-800 mb-10">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out and
          let’s create something amazing together.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6">
          {[
            { name: "name", placeholder: "ENTER YOUR NAME*", required: true },
            { name: "email", placeholder: "ENTER YOUR EMAIL*", required: true },
            { name: "phone", placeholder: "PHONE NUMBER", required: false },
          ].map((input) => (
            <input
              key={input.name}
              type="text"
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              value={form[input.name]}
              onChange={handleChange}
              className="w-full mb-6 bg-transparent border-b-2 border-black placeholder-black text-sm focus:outline-none py-2"
            />
          ))}

          <textarea
            name="message"
            placeholder="YOUR MESSAGE*"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full h-32 resize-none bg-transparent border-b-2 border-black placeholder-black text-sm focus:outline-none py-2 mb-6"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-2 font-semibold tracking-widest border-t-2 border-b-2 border-black relative group hover:bg-gray-200"
          >
            SUBMIT
            <span className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-[1px] h-6 bg-black"></span>
            <span className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-[1px] h-6 bg-black"></span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default HeroSection;
