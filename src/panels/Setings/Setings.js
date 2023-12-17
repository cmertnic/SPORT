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
import "..//Setings/Setings.css";
import Footer3 from "../components/Footer/FooterS";
const Sett = ({ go }) => {
  return (
    <Panel className="panel-back" id="settings">
      <View activePanel="switch">
        <Panel id="switch">
          <Group>
          <PanelHeader className="Settings_set">Настройки</PanelHeader>
          <View activePanel="native-select">
            <Panel id="native-select">
              <Group>
              <Panel className="Settings_pol">Выберите пол</Panel>
                <FormItem>
                  <NativeSelect>
                    <option value="m">Мужской</option>
                    <option value="f">Женский</option>
                  </NativeSelect>
                </FormItem>
              </Group>
            </Panel>
          </View>

          <Group className = "settingslabel">
            <SimpleCell Component="label" after={<Switch defaultChecked />}>
              Диктор
            </SimpleCell>
            <SimpleCell Component="label" after={<Switch />}>
              Музыка
            </SimpleCell>
            <SimpleCell Component="label" after={<Switch />}>
              Вибрация
            </SimpleCell>
          </Group>

          <div className="btn">
            <Button onClick={go} data-to="#">
              Написать в техническую поддержку
            </Button>
          </div>
          </Group>
        </Panel>
      </View>
      <Footer3 go={go} />
    </Panel>
  );

  // function GO(){
  //   $('.switch-btn').click(function(){
  //     $(this).toggleClass('switch-on');
  //     if ($(this).hasClass('switch-on')) {
  //       $(this).trigger('on.switch');
  //     } else {
  //       $(this).trigger('off.switch');
  //     }
  //   });
  // }
};

export default Sett;
