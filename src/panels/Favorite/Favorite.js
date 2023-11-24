import React, { useState } from "react";
import Home from './../../img/Home.svg'
import Profile from './../../img/Profile.svg'
import Favorite from './../../img/Favorite.svg'
import Settings from './../../img/Settings.svg'
import { Panel, PanelHeader, Header, Group, SimpleCell, Footer } from "@vkontakte/vkui";
import'./../hub.css'
import'./Favorite.css'
const Fav = ({go}) => {
    return(
        <Panel id="favorite" style={{backgroundColor:"#7B7B7B"}}>
        <PanelHeader>
        <p style={{display:"flex",justifyContent:"left"}}>
          Тренировки
          </p>  
        </PanelHeader>
        <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B", }} 
        header={<Header mode="primary">Тренировки для всего тела</Header>}>
            
        </Group>
        <Footer>
<div style={{ display:"flex", alignItems:"center",justifyContent:"space-around",background:"#CFCFCF",height:"100px" }} className="Sticky_footer">
<div className="footer_img" onClick={go} data-to="home"> <img  src={Home}  alt="home"/></div>
<div className="footer_img" onClick={go} data-to="profile"> <img  src={Profile} alt="profile"/></div>
<div className="footer_img color_footer_img" onClick={go} data-to="favorite"> <img  src={Favorite} alt="favorite"/></div>
<div className="footer_img" onClick={go} data-to="settings"> <img  src={Settings} alt="settings"/></div>
</div>
</Footer> 
        </Panel>
    );
};
export default Fav;