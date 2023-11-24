import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Footer,
  Switch,
  View,
  AdaptivityProvider,
  NativeSelect,
  FormItem,
  Button,
} from "@vkontakte/vkui";
import "./../hub.css";
import "./Setings.css";
import Footer3 from "../components/Footer/FooterS";
const Sett = ({ go }) => {
  return (
    <Panel id="settings" style={{ backgroundColor: "#7B7B7B" }}>
      <View activePanel="switch">
        <Panel id="switch">
          <PanelHeader>Настройки</PanelHeader>
          <View activePanel="native-select">
            <Panel id="native-select">
              <PanelHeader>Выберите пол</PanelHeader>
              <Group>
                <FormItem>
                  <NativeSelect>
                    <option value="m">Мужской</option>
                    <option value="f">Женский</option>
                  </NativeSelect>
                </FormItem>
                <div className="btn">
                  <Button onClick={go} data-to="#">
                    Написать в техническую поддержку
                  </Button>
                </div>
              </Group>
            </Panel>
          </View>

          <Group>
            <p>Музыка</p>

            
          </Group>
        </Panel>
      </View>
      <Footer3 go={go} />
    </Panel>
  );
};
export default Sett;
