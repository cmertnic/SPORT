import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import back from '../../../img/Back.png'
const Back = ({go}) =>{
    return(
        <Group
        style={{ marginInline: 20, paddingTop: 20, marginBottom: 10, }}
        header={<Header mode="primary" className="marginMain">Тренировки для мышц спины</Header>}
      >
        <div className="up_panel">
          <div className="margin">
            <p>упражнений: 6</p>
          </div>
          <div>
            <img className="musckle_img" src={back} alt="back" />
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
    )
}

export default Back;

