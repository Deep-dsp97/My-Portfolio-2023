import { useState } from "react";

const Experience = () => {
  const [toggleActiveState, SetToggleActiveState] = useState(1);

  const onTabClick = (index) => {
    SetToggleActiveState(index);
  };
  return (
    <>
      <h2 className="montserrat dark-navy-blue text-capitalize mb-4 h2-font-size font-weight-700">
        Experience
      </h2>
      <div className="row">
        {/* Tabs */}
        <div className="col-md-5 col-lg-4">
          <div className="work-tabs d-flex flex-md-column">
            <button
              className={`raleway dark-navy-blue font-weight-500 ${
                toggleActiveState === 1 ? "active-work-tab" : ""
              }`}
              onClick={() => onTabClick(1)}
            >
              The Branding Firm
              <sup className="montserrat text-uppercase white ms-2">
                Present
              </sup>
            </button>
            <button
              className={`raleway dark-navy-blue font-weight-500 ${
                toggleActiveState === 2 ? "active-work-tab" : ""
              }`}
              onClick={() => onTabClick(2)}
            >
              Redding Designs
            </button>
          </div>
        </div>
        {/* Info Block */}
        <div className="mt-3 mt-md-0 col-md-7 col-lg-8">
          <div
            className={`work-content-block ${
              toggleActiveState === 1 ? "active-work-content" : ""
            }`}
            data-workinfo="0"
          >
            <p className="montserrat font-weight-700 dark-navy-blue font-size-24">
              The Branding Firm Inc
            </p>
            <p className="raleway font-weight-500 dark-navy-blue">
              Frontend Developer - May 2022 to Present
            </p>
            <div className="role-responsibility">
              <p className="raleway dark-navy-blue">
                Develop pixel-perfect, user/SEO-friendly websites, with two of
                them earning prestigious IAC awards for excellence.
              </p>
              <p className="raleway dark-navy-blue">
                Consecutively managing plugins and performing weekly core
                updates for 7 Wordpress websites preventing security risks and
                ensuring good site health.
              </p>
              <p className="raleway dark-navy-blue">
                Enhance the mobile and web performance of a specific website by
                an impressive margin of 10-12%, optimizing its speed,
                responsiveness, and overall functionality
              </p>
              <p className="raleway dark-navy-blue">
                Successfully developed a website with an accessibility score of
                98/100 according to Lighthouse testing tool.
              </p>
              <p className="raleway dark-navy-blue">
                Identified and removed hidden malicious code during phishing
                attack in order to restore working condition of the website.
              </p>
              <p className="raleway dark-navy-blue">
                Collaborated with design team to come up with great solution
                which align with client’s profession and successfully
                implemented ideas together
              </p>
            </div>
          </div>
          {/* Redding Designs */}
          <div
            className={`work-content-block ${
              toggleActiveState === 2 ? "active-work-content" : ""
            }`}
            data-workinfo="0"
          >
            <p className="montserrat font-weight-700 dark-navy-blue font-size-24">
              Redding Designs Inc
            </p>
            <p className="raleway font-weight-500 dark-navy-blue">
              Web Developer - July 2021 to May 2022
            </p>
            <div className="role-responsibility">
              <p className="raleway dark-navy-blue">
                Followed best practices to develop responsive pixel-perfect and
                AODA compliant websites while maintaining coherent feel and
                awareness.
              </p>
              <p className="raleway dark-navy-blue">
                Cultivated confidence of clients about editing Wordpress pages
                and posts by educating them after website launch.
              </p>
              <p className="raleway dark-navy-blue">
                Prioritize internal development activities along with urgent,
                often unscheduled, development request with a high level of
                urgency
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
