import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Radio,
  Checkbox,
  Button,
} from "@vkontakte/vkui";
import "./Sportfitnes.css";
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import "./../hub.css";
import "./Sportfitnes.css";
import Footer1 from "../components/Footer/FooterM";
import FullBody from "../components/Mutliblock/MultiblockBody";
import Arms from "../components/Mutliblock/MultiblockArms";
import Back from "../components/Mutliblock/MultiblockBack";
import Buttocks from "../components/Mutliblock/MultiblockButtocks";
import Lower from "../components/Mutliblock/MultiblockLowermuscle";
import Press from "../components/Mutliblock/MultiblockPress";
import Shoulders from "../components/Mutliblock/MultiblockShoulders";
import Calf from "../components/Mutliblock/MultiblockСalfmuscles";
import Background from "../../img/background.svg";
const Sportfitnes = ({ go }) => {
  return (
    <Panel id="home" className="panel-back" style={{ backgroundImage: Background }}>
      <PanelHeader>
        <p style={{ display: "flex", justifyContent: "left" }}>Тренировки</p>
      </PanelHeader>
      <FullBody go={go} />
      <Shoulders go={go} />      
      <Arms go={go} />
      <Back go={go} />
      <Press go={go} />
      <Lower go={go} />
      <Buttocks go={go} />      
      <Calf go={go} />
      <Footer1 go={go} />
    </Panel>
  );
};
export default Sportfitnes;
