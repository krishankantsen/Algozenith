import "./hero.css";
import imgs from './images/bg.png'

const Hero = () => {
  return (
   <section className="hero">
   <div className="left">
 <h1 className="title">Be Better At DSA & CP</h1>
 <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 <div className="butt">
 <button className="join">Join now → </button>
 <button className="curri">Curriculam</button>
 </div>
 <div className="boxes">
 <div className="box">
  
  </div>
  <p className=" boxp">Lorem ipsum dolor sit amet</p>
  <div className="box">
   
  </div>
  <p className=" boxp">Lorem ipsum dolor sit amet</p>
 </div>
 <div className="boxes">
 <div className="box">
  
  </div>
  <p className=" boxp">Lorem ipsum dolor sit amet</p>
  <div className="box">
   
  </div>
  <p className=" boxp">Lorem ipsum dolor sit amet</p>
 </div>
   </div>
   
   <div className="right">
<img src={imgs} alt="logo" />
   </div>
   </section>
   
  );
};

export default Hero;
