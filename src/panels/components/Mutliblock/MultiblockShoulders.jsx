import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import shoulders from '../../../img/Shoulders.png'
const Shoulders = ({go}) =>{
    return(
        <Group
        style={{ marginInline: 20, paddingTop: 20, marginBottom: 10 }}
        header={<Header mode="primary" className="marginMain">Тренировки для Плечь</Header>}
      >
        <div className="up_panel">
          <div className="margin">
            <p>упражнений: 5</p>
          </div>
          <div>
            <img className="musckle_img" src={shoulders} alt="shoulders" />
          </div>
        </div>
<div className="margin">
  <p>Тяга перед собой (гантели)</p>
  <p>Кубинские вращения (гантели)</p>
  <p>Тяга на дельтовидные мышцы сидя (гантели)</p>
</div>

        <div className="down_panel">
          <Button onClick={go} data-to="shoulders1" className="MainBt">
            Смотреть всё
          </Button>
        </div>
      </Group>  
    )
}

export default Shoulders;

