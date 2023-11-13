import React, { useState } from "react";
import { Panel, PanelHeader, Header, Group, SimpleCell, Radio, Checkbox } from "@vkontakte/vkui";
import './Sportfitnes.css'
import GrayHeart from './../img/Gray_heart.svg'
import Lesson from './../img/Lesson1.png'
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export function App(){
  const{ view:activeView, panel:activePanel}=useActiveVkuiLocation();

  return(
    <Root activeView={activeView|DEFAULT_VIEW}>
      <View nav="default_view" activePanel={activePanel|DEFAULT_PANEL}>
        <Panel nav="home">...</Panel>
        <Panel nav="Allbudy">...</Panel>
      </View>

    </Root>
  )
}

export function PersikPage (){

  const routeNavigator = useRouteNavigator();

  return(
<Button onClick={()=> routeNavigator.push('/')}>На главную</Button>
  );
}


const Sportfitnes = () => {
   
 
  return (
    <Panel id="home" style={{backgroundColor:"#7B7B7B"}}>
      <PanelHeader>
      <p style={{display:"flex",justifyContent:"left"}}>
        Тренировки
        </p>  
      </PanelHeader>
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B", }} 
      header={<Header mode="primary">Тренировки для всего тела</Header>}>
        <div className="up_panel">
         
        <div>
        <p>упражнений: 7</p>
        
        </div> 
         <div className="musckle_img">
      <img  src={Lesson} alt="Lesson1" />
      </div>        
        </div>
     
      <div>
        <p>Махи (гантели)</p>
        <p>Выпад (гантели)</p>
        <p>Внешние вращение (гантели)</p>
      </div>        



<div className="down_panel">
  <img  src={GrayHeart} alt="grey heart" id="GrayHeart" className="grey_heart" />
   <SimpleCell><a href="#/Allbudy">{"Смотреть всё"}</a></SimpleCell>   
</div>

   


      </Group>

      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировки для верхней группы мышц</Header>}>
        <div>
        <p>упражнений: 6</p>
        </div>
      <div>
        <p>Французский жим лежа (гантели)</p>
        <p>Жим штанги под наклоном (гантели)</p>
        <p>Подъем на бицепс (гантели)</p>
      </div>
      <div className="img_down_panel" style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell className="">{"Смотреть всё"}</SimpleCell>   
      </div>
      </Group>

      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировки для Плечь</Header>}>
        <div>
        <p>упражнений: 5</p>
        </div>
      <div>
        <p>Тяга перед собой (гантели)</p>
        <p>Кубинские вращения (гантели)</p>
        <p>Тяга на дельтовидные мышцы сидя (гантели)</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      </Group>
      
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировка для рук</Header>}>
        <div>
        <p>упражнений: 6</p>
        </div>
      <div>
        <p>Подъем на бицепс "молот" (гантели)</p>
        <p>Махи назад для трицепсов (гантели)</p>
        <p>экстензия трицепсовв над головой (гантели)</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>     
      </Group>
      
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">тренировки для спины</Header>}>
        <div>
        <p>упражнений: 5</p>
        </div>
      <div>
        <p>Подтягивания</p>
        <p>Тяга гантели одной рукой в наклоне</p>
        <p>подъём плеч (гантели)</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      
      </Group>
      
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">тренировки для пресса</Header>}>
        <div>
        <p>упражнений: 6</p>
        </div>
      <div>
        <p>Скручивание с подъемом колен</p>
        <p>Складка с подтягиванием ног</p>
        <p>Шаги из планки в четвереньки</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      
      </Group>

      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировки для нижней группы мышц</Header>}>
        <div>
        <p>упражнений: 7</p>
        </div>
      <div>
        <p>Ягодичный мост</p>
        <p>Боковой подъём ног лежа</p>
        <p>Махи назад</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      
      </Group>

      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировка для ягодицы</Header>}>
        <div>
        <p>упражнений: 6</p>
        </div>
      <div>
        <p>Выпады назад</p>
        <p>Боковой выпад</p>
        <p> Широкий присед + выпад по диагонали</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      
      </Group>

      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B"}} 
      header={<Header mode="primary">Тренировка для икроножных мышц</Header>}>
        <div>
        <p>упражнений: 5</p>
        </div>
      <div>
        <p>Приседания на одной ноге</p>
        <p>Жим платформы носками</p>
        <p>Подъем на носки сидя</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      
      </Group>
      
    </Panel>
  );
};

export default Sportfitnes;