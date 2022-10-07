import React from "react";

const Footer = () => {
  return (
    <div className="footer xl:mx-52 flex justify-around ">
      <div className="contact ">
        <h1 className="text-2xl font-bold">Contact</h1>
        <h2>
          Email: <a href="mr.ab6354@gmail.com"> mr.ab6354@gmail.com</a>
        </h2>
        <h2>Mo: (+91) 6354904466</h2>
      </div>
      <div className="Socil icon flex justify-around ">
        <h2>
          {" "}
          <a href="https://www.facebook.com/anil.bhil.7564">
            {" "}
            <i className="fa-brands fa-facebook fa-2x mx-1"></i>
          </a>
        </h2>

        <h2>
          {" "}
          <a href=" https://twitter.com/Anilbhi03335640?t=nt6Y6MiD2zHHbQQC68Xuvg&s=08">
            <i className="fa-brands fa-twitter fa-2x mx-1"></i>
          </a>
        </h2>
        <h2>
          {" "}
          <a href=" https://www.instagram.com/invites/contact/?i=wfigbordluwr&utm_content=47j03x1">
            <i className="fa-brands fa-instagram fa-2x mx-1"></i>
          </a>
        </h2>
      </div>
      <div className="logs">
        <img
          className="logo"
          src="https://us.123rf.com/450wm/twindesigner/twindesigner1904/twindesigner190400136/120461010-ab-letter-design-with-brush-stroke-and-modern-3d-look-vector-illustration-.jpg?ver=6"
          alt=""
        />
        <p>Copyright &copy; 2022 , Create by Ab</p>
      </div>
    </div>
  );
};

export default Footer;
