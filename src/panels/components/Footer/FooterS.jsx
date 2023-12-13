import React, { useState } from "react";

import Home from '../../../img/Home.svg'
import Profile from '../../../img/Profile.svg'
import Settings from '../../../img/Settings.svg'
import { Footer} from "@vkontakte/vkui";
import'./Footer.css'


const Footer3 = ({go}) => {
    return(
        <Footer>
          <div style={{ display:"flex", alignItems:"center",justifyContent:"space-around",background:"#B3B3B3",height:"100px" }} className="Sticky_footer">
            <div className="footer_img " onClick={go} data-to="home"> <img  src={Home}  alt="home"/></div>
            <div className="footer_img  " onClick={go} data-to="profile"> <img  src={Profile} alt="profile"/></div>
            <div className="footer_img color_footer_img" onClick={go} data-to="settings"> <img  src={Settings} alt="settings"/></div>
          </div>
        </Footer> 
    );
};


export default Footer3;