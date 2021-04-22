import "./index.css";

const Intro = ({ show }) => {
  return (
    <div id="intro">
      <div className={`cat ${!show && "hidden"}`}>
        <div className="cat__body"></div>
        <div className="cat__body"></div>
        <div className="cat__tail"></div>
        <div className="cat__head"></div>
      </div>
    </div>
  );
};

export default Intro;
