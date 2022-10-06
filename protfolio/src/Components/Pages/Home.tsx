import React from "react";
import projectid from '../../img/project.png'
const Home = () => {
  return (
    <section>
      <section id="#01" className="incons">
        <div className="incon  mx-52 flex justify-between">
          <div className="bac ">
          <i className="fa-brands fa-react  fa-8x "></i>
         
            <h5 className="hed">Backend</h5>
          </div>
          <div className="bac">
          <i className="fa-brands fa-node-js fa-8x"></i>
            <h5 className="hed">Frontend</h5>
          </div>
          <div className="bac">
          <i className="fa-brands fa-github-alt fa-8x"></i>
            <h5 className="hed">Code MT git gitHub</h5>
          </div>
          <div className="bac"> 
          <i className="fa-sharp fa-solid fa-bug fa-8x"></i>
          <h5 className="hed">Problem solving</h5>
          </div>
        </div>
      </section>

      <section className="About me ">
        <div className="main  mx-52 ">
         
          <div className="di2 flex justify-around" >
            <p>
              <h1 className="text-7xl font-bold">About me</h1>
            Hello again everyone! So, you already know that my name is Anil. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in gujarat, india. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes. By trusting me, you will get the maximum return for your project, save your nerves and time. If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
              
            </p>
           
          </div>
        
        </div>
      </section>

      <section className="Portfolio flex justify-around ">
      
        <div className="sidebar mx-52">
        <h1 className="text-5xl font-bold p-0.5">Portfolio</h1>
           <img className="mypro" src={projectid} alt="Enshkard" />
           
        </div>
        
        <div className="sidebar mx-52">
        Up coming project
        </div>
      </section>
    </section>
  );
};

export default Home;
