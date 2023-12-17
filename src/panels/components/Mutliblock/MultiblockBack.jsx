import React, { useState } from "react";
import { Group, Button, Header } from "@vkontakte/vkui";
import "./Multiblok.css";
import back from "../../../img/Back.png";
const Back = ({ go }) => {
  return (
    <Group
    separator="show"
      className = "MainGroup"
      header={
        <Header mode="primary" className="marginMain">
          Тренировки для мышц спины
        </Header>
      }
    >
      <div className="up_panel">
        <div className="margin">
          <p>Упражнений: 6</p>
        </div>
        <div>
          <img className="musckle_img musckle_img_border" src={back} alt="back" />
        </div>
      </div>

      <div className="margin">
        <p>Подтягивания</p>
        <p>Тяга гантели одной рукой в наклоне</p>
        <p>Пожимания плечами (гантели)</p>
      </div>

      <div className="down_panel">
        <Button onClick={go} data-to="back1" className="MainBt">
          Смотреть всё
        </Button>
      </div>
    </Group>
  );
};

export default Back;
