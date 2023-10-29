const PortfolioTech = ({ technos }) => {
  return (
    <ul className="tech-ul mx-0 px-0 d-flex flex-wrap">
      {technos.map((tech, index) => {
        return (
          <li className="raleway cream font-weight-500 me-3 mb-2" key={index}>
            {tech}
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioTech;
