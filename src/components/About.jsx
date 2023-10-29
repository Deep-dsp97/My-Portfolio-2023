// import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";

const About = ({ skills }) => {
  return (
    <>
      <section className="about-container max-width-1200 mx-auto container-fluid mt-100">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="deep-image mb-5 mb-md-0 mx-auto ms-md-auto">
              <img
                className="img-fluid"
                src="/public/images/deep-patel.png"
                alt="Deep Patel Image "
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="montserrat dark-navy-blue text-capitalize mb-4 h2-font-size font-weight-700">
              About me
            </h2>
            <p className="raleway dark-navy-blue font-weight-500">
              I am a Front-end developer based in London, Ontario, with a strong
              passion for creating exceptional user interfaces and dynamic user
              experiences. My core attributes include being highly organized, an
              adept problem solver, and a meticulous attention to detail. In my
              professional pursuits, I am known for my dedication to delivering
              high-quality web solutions.
              <br />
              <br />
              I am deeply committed to the pursuit of excellence in all my
              endeavors and am excited to bring my unique blend of skills,
              creativity, and dedication to any project I undertake. If you are
              seeking a motivated and meticulous developer who is not only
              proficient in the latest web technologies but also deeply
              committed to delivering exceptional user experiences, I'm ready to
              bring your digital vision to life. Let's embark on this journey
              together.
              <br />
              <br />
              Beyond my professional life, I am an outdoors enthusiast, a
              dedicated Marvel fan, and hold a deep interest in reading books.
            </p>
          </div>
        </div>
      </section>
      <section className="skill-container max-width-1200 mx-auto mt-100 container-fluid">
        <Skills skills={skills} />
      </section>
      <section className="mt-100 mb-100 container-fluid">
        <div className="experience mx-auto p-4">
          <Experience />
        </div>
      </section>
      <section className="books-container mx-auto mt-100 p-4 container-fluid"></section>
    </>
  );
};

export default About;
