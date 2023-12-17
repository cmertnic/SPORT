import React, { useState } from "react";
import { Group, Button, Header } from "@vkontakte/vkui";
import "./Multiblok.css";
import shoulders from "../../../img/Shoulders.png";
const Shoulders = ({ go }) => {
  return (
    <Group
    separator="show"
      className = "MainGroup"
      header={
        <Header mode="primary" className="marginMain">
          Тренировки для Плеч
        </Header>
      }
    >
      <div className="up_panel">
        <div className="margin">
          <p>Упражнений: 5</p>
        </div>
        <div>
          <img className="musckle_img musckle_img_border" src={shoulders} alt="shoulders" />
        </div>
      </div>
      <div className="margin">
        <p>Тяга перед собой (гантели)</p>
        <p>Разведение гантелей в наклоне</p>
        <p>Тяга на дельтовидные мышцы сидя (гантели)</p>
      </div>

      <div className="down_panel">
        <Button onClick={go} data-to="shoulders1" className="MainBt">
          Смотреть всё
        </Button>
      </div>
    </Group>
  );
};

export default Shoulders;
