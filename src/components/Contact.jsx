const Contact = () => {
  return (
    <section className="contact-container d-flex justify-content-center align-items-center london-bg">
      <div className="container-fluid contact-information d-flex flex-column align-items-center">
        <h1 className="montserrat purple font-weight-700 text-center">
          Get In Touch
        </h1>
        <p className="raleway dark-navy-blue font-weight-500 text-center">
          I'm actively seeking fresh opportunities, and I'm just a message away.
          <br className="d-none d-sm-block" />
          Feel free to reach out anytime.
        </p>
        <div className="contact-btn">
          <a
            href="mailto:deepthedeveloper97@gmail.com"
            className="d-block raleway purple primary-btn font-weight-700 letter-spacing-1px"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
