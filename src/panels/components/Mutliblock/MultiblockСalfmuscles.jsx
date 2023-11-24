import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import calf from '../../../img/Legs.png'
const Calf = ({go}) =>{
    return(
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B",paddingBottom:100}}
       header={<Header mode="primary">Тренировка для икроножных мышц</Header>}>
         
         <div className="up_panel">
          <div>
            <p>упражнений: 7</p>
          </div>
          <div>
            <img className="musckle_img" src={calf} alt="Lesson1" />
          </div>
        </div>
       <div>
         <p>Приседания на одной ноге</p>
         <p>Жим платформы носками</p>
         <p>Подъем на носки сидя</p>
       </div>
       
       <div className="down_panel">
          <Button onClick={go} data-to="calf1">
            Смотреть всё
          </Button>
        </div>
       </Group> 
    )
}

export default Calf;
