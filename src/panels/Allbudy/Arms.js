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
const arms1 = ({ go }) => {
  return (
    <Panel id="arms1" style={{ backgroundColor: "#7B7B7B" }}>
      <PanelHeader>
        <p style={{ display: "flex", justifyContent: "left" }}>Тренировки</p>
      </PanelHeader>

      <Group style={{ marginInline: 20, paddingTop: 20, background: "#7B7B7B"}}
        header={<Header mode="primary" style={{ fontSize: 24, display: "flex", justifyContent: "center" }}>Тренировки для рук</Header>}
      >
        
        <div>
          <p style={{ display: "flex", justifyContent: "center",fontSize: 18 }}>Упражнения:</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",textAlign:"center" }}>

          <div className="qwerty"><p>отжимания от скамьи</p></div>

          <div className="qwerty"><p>планка на коленях с подъемом рук к плечам</p></div>

          <div className="qwerty"><p>сгибания и разгибания запястий</p></div>

          <div className="qwerty"><p>разгибания гантелей из-за головы</p></div>

          <div className="qwerty"><p>Обратные отжимания от скамьи</p></div>

          <div className="qwerty"><p>Подъём штанги или гантелей на бицепс</p></div>

          <div className="qwerty"><p>Отжимания на пальцах</p></div>

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

export default arms1;
