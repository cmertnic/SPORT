import React, { useState } from "react";
import { Group, Button, Header } from "@vkontakte/vkui";
import Arm from "../../../img/Arm.png";
import "./Multiblok.css";
const Arms = ({ go }) => {
  return (
    <Group
    separator="show"
    className = "MainGroup"
      header={
        <Header mode="primary" className="marginMain">
          Тренировка для рук
        </Header>
      }
    >
      <div className="up_panel">
        <div className="margin">
          <p>Упражнений: 7</p>
        </div>
        <div>
          <img className="musckle_img musckle_img_border" src={Arm} alt="Lesson1" />
        </div>
      </div>

      <div className="margin">
        <p>отжимания от скамьи</p>
        <p>планка на коленях с подъемом рук к плечам</p>
        <p>сгибания и разгибания запястий</p>
      </div>

      <div className="down_panel">
        <Button onClick={go} data-to="arms1" className="MainBt">
          Смотреть всё
        </Button>
      </div>
    </Group>
  );
};

export default Arms;
