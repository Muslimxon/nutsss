import React from 'react';
import './Header.css';
import { RiRobot2Line } from "react-icons/ri";
import nut from '../../static/nut_second.png'

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Nuts, dried fruits and <br />Legumes of the finest quality <br />from Uzbekistan</h1>
          <p className="subtitle">Timely delivery considering <br /> all the wishes of the client</p>
          <button className="product-catalog">Product Catalog</button> {/* Added here */}
        </div>
        <div className="round">
          <img src={nut} alt="" />
        </div>
      </div>
      <div className="buttons">
        <div className="combined-buttons">
          
          <button className="contact-supplier"><RiRobot2Line className='robot' /><br /> Contact <br /> Supplier</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
