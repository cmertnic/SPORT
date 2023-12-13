import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SplitLayout,
  SplitCol,
  View,
  Button
} from "@vkontakte/vkui";
import "./../hub.css";
import "./Allbudy.css";
import Footer1 from "../components/Footer/FooterM";
import OpenButtocks from "../components/Modal1/OpenButtocks";

const buttocks1 = ({ go, id }) => {
  const [popout, setPopout] = useState(null);

 return (
   <SplitLayout popout={popout}>
     <SplitCol>
       <View activePanel="popout">
         <Panel className="panel-back" id="popout">
           <Panel id={id} className="Panel">
           <PanelHeader>
       <p style={{ display: "flex", justifyContent: "left" }}>Тренировки</p>
     </PanelHeader>

     <Group style={{ marginInline: 20, paddingTop: 20,}}
       header={<Header mode="primary" style={{ fontSize: 24, display: "flex", justifyContent: "center" }}>Тренировки для ягодиц</Header>}
     >
       
       <div>
         <p style={{ display: "flex", justifyContent: "center",fontSize: 18 }}>Упражнения</p>
       </div>

       <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",textAlign:"center" }}>

           <div className="qwerty"><p>Приседания с пульсом</p></div>

           <div className="qwerty"><p>Выпады назад</p></div>

           <div className="qwerty"><p>Боковой выпад</p></div>

           <div className="qwerty"><p>Мах ногой вверх</p></div>

           <div className="qwerty"><p>Ягодичный мост</p></div>

           <div className="qwerty"><p>Мостик с поднятой ногой</p></div>

         <div style={{display: "flex", justifyContent: "center"}}>
           <Button hoverMode="#red" style={{width:"220",height:"48",size:'l',borderRadius:"10",  background:"#2FAF24",fontSize:"24",cursor:"pointer"  }}
             className="Modal_button"
               onClick={() => {
                 setPopout(
                   <OpenButtocks
                   onClose={()=>setPopout(null)}
                   />
                 );
               }}>
               START
             </Button>
         </div>

       </div>
         {/* <div style={{display: "flex", justifyContent: "center"}}>
           <Button hoverMode="#red" style={{width:"220",height:"48",size:'l',borderRadius:"10",  background:"#2FAF24",fontSize:"24",cursor:"pointer"  }}
             className="Modal_button"
               onClick={() => {
                 setPopout(
                   <Open1
                   onClose={()=>setPopout(null)}
                   />
                 );
               }}>
               START
             </Button>
         </div> */}
       </Group>
     
            
             <Footer1 go={go} />
           </Panel>
         </Panel>
       </View>
     </SplitCol>
   </SplitLayout>
 );
};

export default buttocks1;
