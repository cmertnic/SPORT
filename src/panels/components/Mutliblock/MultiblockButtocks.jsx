import React, { useState } from "react";
import { Group, Button, Header,} from "@vkontakte/vkui";
import "./Multiblok.css"
import Lesson1 from '../../../img/Buts.png'
const Buttocks = ({go}) =>{
    return(
        <Group
        style={{ marginInline: 20, paddingTop: 20, background: "#7B7B7B" }}
        header={<Header mode="primary">Тренировки для ягодицы</Header>}
      >
        <div className="up_panel">
          <div>
            <p>упражнений: 6</p>
          </div>
          <div>
            <img className="musckle_img" src={Lesson1} alt="Lesson1" />
          </div>
        </div>

        <div>
          <p>Приседание с пульсом</p>
          <p>Выпады назад</p>
          <p>Боковой выпад</p>
        </div>

        <div className="down_panel">
          <Button onClick={go} data-to="buttocks1">
            Смотреть всё
          </Button>
        </div>
      </Group>  
    )
}

export default Buttocks;
// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">Тренировки для Плечь</Header>}>
//   <div>
//   <p>упражнений: 5</p>
//   </div>
// <div>
//   <p>Тяга перед собой (гантели)</p>
//   <p>Кубинские вращения (гантели)</p>
//   <p>Тяга на дельтовидные мышцы сидя (гантели)</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>
// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">Тренировка для рук</Header>}>
//   <div>
//   <p>упражнений: 6</p>
//   </div>
// <div>
//   <p>Подъем на бицепс "молот" (гантели)</p>
//   <p>Махи назад для трицепсов (гантели)</p>
//   <p>экстензия трицепсовв над головой (гантели)</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>     
// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">тренировки для спины</Header>}>
//   <div>
//   <p>упражнений: 5</p>
//   </div>
// <div>
//   <p>Подтягивания</p>
//   <p>Тяга гантели одной рукой в наклоне</p>
//   <p>подъём плеч (гантели)</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>

// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">тренировки для пресса</Header>}>
//   <div>
//   <p>упражнений: 6</p>
//   </div>
// <div>
//   <p>Скручивание с подъемом колен</p>
//   <p>Складка с подтягиванием ног</p>
//   <p>Шаги из планки в четвереньки</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>

// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">Тренировки для нижней группы мышц</Header>}>
//   <div>
//   <p>упражнений: 7</p>
//   </div>
// <div>
//   <p>Ягодичный мост</p>
//   <p>Боковой подъём ног лежа</p>
//   <p>Махи назад</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>

// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
// header={<Header mode="primary">Тренировка для ягодицы</Header>}>
//   <div>
//   <p>упражнений: 6</p>
//   </div>
{/* <div>
  <p>Выпады назад</p>
  <p>Боковой выпад</p>
  <p> Широкий присед + выпад по диагонали</p>
</div> */}
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>

// </Group>

// <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B",paddingBottom:100}}
// header={<Header mode="primary">Тренировка для икроножных мышц</Header>}>
//   <div>
//   <p>упражнений: 5</p>
//   </div>
// <div>
//   <p>Приседания на одной ноге</p>
//   <p>Жим платформы носками</p>
//   <p>Подъем на носки сидя</p>
// </div>
// <div style={{ display:"flex", justifyContent:"right" }}>
// <SimpleCell>{"Смотреть всё"}</SimpleCell>   
// </div>