import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../NavBar/Navbar";
import { auth } from "../../firebase";
import rest from './wp1874155-restaurant-wallpapers.jpg';
import gr from './gordon-ramsay.jpg';
import ar from './ann-reardon.jpg';
import food from './wp3376127-wallpaper-food-hd.jpg';
import './Home.css';
import date from './pxfuel.jpg';
import knife from './steel.jpg'

const Home = (props) => {
  const [userName, setUserName] = useState(""); 
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', overflow:'hidden' }}>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Armata&family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=La+Belle+Aurore&display=swap');
      </style>
      <img src={rest} className="site-image" alt="Restaurant background" />
      <h1 className="site-name">Ms. Naive's palace</h1>

      <h1 className="titles">OUR CHEFS</h1>
      <div className="Chefs">
        <div className="chef">
          <img src={gr} className="chef-image" alt="Gordon Ramsay" />
          <div className="hover-text">Gordon Ramsay</div>
        </div>
        <div className="chef">
          <img src={ar} className="chef-image" alt="Ann Reardon" />
          <div className="hover-text">Ann Reardon</div>
        </div>
      </div>
      <div className="container" style={{alignItems:'flex-start'}}>
      
      <div className="yellow-box" style={{width:'42vw'}}>
      <img src={food} alt="Description" className="box-image" style={{width: "40vw"}}/>
      <p className="box-text">Dine with us at Ms. Naive’s palace, where culinary delights blend harmoniously with the environment, creating a seamless and enchanting atmosphere.</p>
    </div>
    <button className="button" style={{marginTop: '40vh', marginLeft: '5vw'}}>Our Menu</button>
    </div>
    <div className="yellow-box" style={{width:'93vw'}}>
      <img src={date} alt="Description" className="box-image" style={{width: "90vw"}}/>
      <p className="box-text">Indulge in a dining experience that tantalizes all your senses and transports you to a realm of exquisite flavors and aesthetic beauty.</p>
      <button className="button">Book a Table</button>
    </div>
    <div className="container">
    <button className="button" style={{marginTop: '40vh', marginLeft: '10vw', marginRight:'10vw'}}>Get to know us</button>
    <div className="yellow-box" style={{width:'42vw'}}>
      <img src={knife} alt="Description" className="box-image" style={{width: "40vw"}}/>
      <p className="box-text" style={{textAlign: "right", marginRight: "1vw"}}>Ms. Naive's knife set seamlessly blends precision and elegance, transforming every culinary creation into a masterpiece.
</p>
    </div>
    </div>
    


      <Link to="/login">Sign In</Link>
      <br />
      <Link to="/SignUp">Sign up</Link>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
};

export default Home;
