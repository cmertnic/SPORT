import React, { useState } from "react";
import { Panel, PanelHeader, Header, Group, SimpleCell } from "@vkontakte/vkui";

const Allbudy = () => {
    
return(
<Panel id="home" style={{backgroundColor:"#7B7B7B"}}>
      <PanelHeader>
      <p style={{display:"flex",justifyContent:"left"}}>Тренировки</p>  
      </PanelHeader>
      <Group style={{marginInline:20, paddingTop:20, background:"#7B7B7B", }} 
      header={<Header mode="primary">Тренировки для всего тела</Header>}>
        <div>
        <p>упражнений</p>
        </div>
      <div>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
      </div>
      <div style={{ display:"flex", justifyContent:"right" }}>
      <SimpleCell>{"Смотреть всё"}</SimpleCell>   
      </div>
      </Group>
      </Panel>
    );
};

export default Allbudy;