
import Navbar from "./Navbar";
import myimage from "./../../img/Gleb.png";

const Header = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
  }
  return (
    <section className="header">
      <div className="xl:mx-52 md:mx-3 sm:mx-2">
        <Navbar />
        <div
          className="main_header flex">
          <div className="lg-cont mt-10">
            <h3 className="text-5xl font-semibold">Hello</h3>
            <h1 className="text-7xl font-bold">I’m Anil</h1>
            <p className="text-lg">
            I've been doing web design, front-end and back-end development  now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
            </p>
           
            <button className="cv_btn md:mb-3 sm:mb-2" onClick={onButtonClick}> Download CV</button>
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
