import PortfolioTech from "./PortfolioTech";
import { FaGithubAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Portfolio = ({ work }) => {
  // console.log(work);
  return (
    <section className="container-fluid mt-100 max-width-1200 mx-auto portfolio-container">
      {work.map((mywork, index) => {
        return (
          <div className="row mt-5 align-items-center" key={index}>
            <div className="col-lg-6">
              <div className="image-block">
                <img
                  className="img-fluid"
                  src={`/images/portfolio/${mywork.image}.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4 mt-5 mt-lg-0">
                <h2 className="montserrat dark-navy-blue text-capitalize mb-4 font-size-24 font-weight-700">
                  {mywork.title}
                </h2>
                <p className="raleway dark-navy-blue font-weight-500">
                  {mywork.about}
                </p>
                <PortfolioTech technos={mywork.technology} />
                {(mywork.live || mywork.repo) && (
                  <div className="row align-items-center">
                    {mywork.repo && (
                      <div className="col-3 col-sm-2">
                        <a
                          href={`${mywork.repo}`}
                          className="d-flex flex-column align-items-center purple"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithubAlt
                            className="font-size-24"
                            aria-label="Github"
                          />
                          <span className="purple raleway font-size-14 font-weight-700 mt-1">
                            Github
                          </span>
                        </a>
                      </div>
                    )}

                    {mywork.live && (
                      <div className="col-3 col-sm-2">
                        <a
                          href={`${mywork.live}`}
                          className="d-flex flex-column align-items-center purple"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CgWebsite
                            className="font-size-24"
                            aria-label="Live Website"
                          />
                          <span className="purple raleway font-size-14 font-weight-700 mt-1">
                            Web
                          </span>
                        </a>
                      </div>
                    )}

                    {mywork.iac && (
                      <div className="col-4">
                        <a
                          href={`${mywork.iac}`}
                          className="d-flex align-items-center purple gif-container"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/images/iacRotation.gif"
                            alt="IAC Award rotational gif"
                          />
                          <span className="purple raleway font-size-14 font-weight-700 mt-1">
                            IAC Award Winner
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
