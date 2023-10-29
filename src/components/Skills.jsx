// import React from "react";

const Skills = ({ skills }) => {
  console.log(skills);
  return (
    <>
      <h2 className="montserrat dark-navy-blue text-capitalize mb-4 h2-font-size font-weight-700">
        skills
      </h2>
      <ul className="ps-0 row">
        {skills.map((skill, index) => {
          return (
            <li className="col-4 col-md-2 mb-3" key={index}>
              {/* {console.log(skill)} */}
              <div className="p-4 skill-block d-flex justify-content-center align-items-center">
                <img
                  src={`${skill.acf.icon.url}`}
                  alt={`${skill.acf.icon.alt}`}
                  title={`${skill.acf.skill_name}`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Skills;
