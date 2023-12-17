import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import calf from '../../../img/Legs.png'
const Calf = ({go}) =>{
    return(
      <Group separator="show" style={{marginInline:20, paddingTop:20, paddingBottom:100}}
       header={<Header mode="primary" className="marginMain">Тренировка для икроножных мышц</Header>}>
         
         <div className="up_panel">
          <div className="margin">
            <p>Упражнений: 7</p>
          </div>
          <div>
            <img className="musckle_img musckle_img_border" src={calf} alt="Lesson1" />
          </div>
        </div>
       <div className="margin">
         <p>Прыжки из приседа</p>
         <p>Стульчик с поднятием ног</p>
         <p>Подъем на носки сидя</p>
       </div>
       
       <div className="down_panel">
          <Button onClick={go} data-to="calf1" className="MainBt">
            Смотреть всё
          </Button>
        </div>
       </Group> 
    )
}

export default Calf;
