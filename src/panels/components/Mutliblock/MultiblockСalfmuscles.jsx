import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import calf from '../../../img/Legs.png'
const Calf = ({go}) =>{
    return(
      <Group style={{marginInline:20, paddingTop:20, paddingBottom:100}}
       header={<Header mode="primary" className="marginMain">Тренировка для икроножных мышц</Header>}>
         
         <div className="up_panel">
          <div className="margin">
            <p>упражнений: 7</p>
          </div>
          <div>
            <img className="musckle_img" src={calf} alt="Lesson1" />
          </div>
        </div>
       <div className="margin">
         <p>Приседания на одной ноге</p>
         <p>Жим платформы носками</p>
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
