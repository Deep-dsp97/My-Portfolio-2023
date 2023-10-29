// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner max-width-1440 ms-auto d-flex mb-0 align-items-center">
        <div>
          <h1>Deep Patel - My Portfolio</h1>
          <p className="raleway dark-navy-blue font-weight-500 letter-spacing-1px">
            Hello, My name is
          </p>
          <p className="montserrat h1-font purple font-weight-700">
            Deepkumar Patel
          </p>
          <p className="raleway mb-0 mt-3 dark-navy-blue font-weight-500 letter-spacing-1px">
            Front-End / Wordpress Developer
          </p>
          <div className="btn-group mt-3">
            <a
              href="/"
              className="raleway purple primary-btn font-weight-700 letter-spacing-1px"
            >
              Portfolio
            </a>
            <a
              href="/"
              className="raleway purple secondary-btn font-weight-700 letter-spacing-1px ms-3"
            >
              My Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
