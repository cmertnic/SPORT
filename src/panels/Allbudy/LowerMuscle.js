import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Footer,
} from "@vkontakte/vkui";
import "./../hub.css";
import "./Allbudy.css";
import Footer1 from "../components/Footer/FooterM";
const lowermuscle1 = ({ go }) => {
  return (
    <Panel id="lowermuscle1" style={{ backgroundColor: "#7B7B7B" }}>
      <PanelHeader>
        <p style={{ display: "flex", justifyContent: "left" }}>Тренировки</p>
      </PanelHeader>

      <Group style={{ marginInline: 20, paddingTop: 20, background: "#7B7B7B"}}
        header={<Header mode="primary" style={{ fontSize: 24, display: "flex", justifyContent: "center" }}>Тренировки для нижней группы мышц</Header>}
      >
        
        <div>
          <p style={{ display: "flex", justifyContent: "center",fontSize: 18 }}>Упражнения:</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",textAlign:"center" }}>
          <div className="qwerty">
            <p>Приседания у стены</p></div>

          <div className="qwerty">
            <p>Подъёмы на носки</p></div>

          <div className="qwerty">
            <p>Приседания с вытянутыми вперёд руками</p></div>

          <div className="qwerty">
            <p>Ягодичный мост</p></div>

          <div className="qwerty">
            <p>Приседания пистолетиком</p></div>

          <div className="qwerty">
            <p>Боковой подъём ног лежа</p></div>

          <div className="qwerty">
            <p>Махи ногами назад</p></div>

        </div>
        
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ width: 220, height: 48, backgroundColor: "#2FAF24", borderRadius: 10, fontSize: 24,cursor:"pointer" }}>Начать</button>
        </div>

      </Group>
      <div style={{ display: "flex", justifyContent: "right" }}>
          <SimpleCell>{"Смотреть всё"}</SimpleCell>
      </div>
      
      <Footer1 go={go} />
    </Panel>
  );
};

export default lowermuscle1;
