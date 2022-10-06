
import Navbar from "./Navbar";
import myimage from "./../../img/Gleb.png";

const Header = () => {
  const downloadFile = () => {

    window.location.href = "hwll"
  }
  return (
    <section className="header">
      <div className=" mx-52">
        <Navbar />
        <div
          className="main_header flex ">
          <div className="mt-10 ">
            <h3 className="text-5xl font-semibold">Hello</h3>
            <h1 className="text-7xl font-bold">I’m Anil</h1>
            <p className="text-lg">
            I've been doing web design, front-end and back-end development  now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
            </p>
           
            <button className="cv_btn" onClick={downloadFile}>Download CV </button>
          </div>
          <div className="myimage">
            <img className="" src={myimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
