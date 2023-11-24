import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Sportfitnes from "./panels/Sportfitnes/Sportfitnes";
import Sett from "./panels/Setings/Setings";
import Prof from "./panels/Profile/Profile";

import Allbody from "./panels/Allbudy/Allbudy";
import AllbodyArms from "./panels/Allbudy/Arms";
import AllbodyBack from "./panels/Allbudy/Back";
import AllbodyButtocks from "./panels/Allbudy/Buttocks";
import AllbodyLowerMuscle from "./panels/Allbudy/LowerMuscle";
import AllbodyPres from "./panels/Allbudy/Pres";
import AllbodyShoulders from "./panels/Allbudy/Shoulders";
import AllbodyCalf from "./panels/Allbudy/Calf";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Sportfitnes id="home" go={go} />
                <Allbody id="allbody" go={go} />
                <AllbodyArms id="arms1" go={go} />
                <AllbodyBack id="back1" go={go} />
                <AllbodyButtocks id="buttocks1" go={go} />
                <AllbodyLowerMuscle id="lowermuscle1" go={go} />
                <AllbodyPres id="pres1" go={go} />
                <AllbodyShoulders id="shoulders1" go={go} />
                <AllbodyCalf id="calf1" go={go} />
                
                <Sett id="settings" go={go} />
                <Prof id="profile" go={go} fetchedUser={fetchedUser}/>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
