import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import Arm from '../../../img/Arm.png'
import "./Multiblok.css"
const Arms = ({go}) =>{
    return(
        <Group
        style={{ marginInline: 20, paddingTop: 20, background: "#7B7B7B" }}
        header={<Header mode="primary">Тренировка для рук</Header>}
      >
<div className="up_panel">
          <div>
            <p>упражнений: 7</p>
          </div>
          <div>
            <img className="musckle_img" src={Arm} alt="Lesson1" />
          </div>
        </div>

<div>
  <p>отжимания от скамьи</p>
  <p>планка на коленях с подъемом рук к плечам</p>
  <p>сгибания и разгибания запястий</p>
</div>

        <div className="down_panel">
          <Button onClick={go} data-to="arms1">
            Смотреть всё
          </Button>
        </div>
      </Group>  
    )
}

export default Arms;
