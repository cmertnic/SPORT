import Qwerty from "./../components/Modal1/Open1.jsx";

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Footer,
  Button,
  Div,
  FormLayout,
  Input,
  PanelHeaderBack,
  Search,
  View,
  Cell,
  Avatar,
} from "@vkontakte/vkui";
import "./../hub.css";
import "./Profile.css";
import Footer2 from "../components/Footer/FooterP";

// const Home = ({id, go, fetchedUser}) => (
//   <Panel id = {id}>
//     <img src ={fetchedUser.photo_200}/>
//   </Panel>
// );

// Home.propTypes = {
//   id: PropTypes.string.isRequired,

// }
const Prof = ({ go, fetchedUser }) => {
  return (
    <Panel className="panel-back" id="profile">
      <PanelHeader>
        <p style={{ display: "flex", justifyContent: "left" }}>Профиль</p>
      </PanelHeader>

      <Group className="user_pading">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          subtitle={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
        <div className="static_padding">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 340,
              height: 29,
              background: "#A7C19D",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <p>Статистика</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: 340,
              height: 345,
              background: "#83997C",
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            {/* Статистика */}
            <div
              style={{
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "center",
                width: 340,
                height: 345,
                paddingLeft: 25
              }}
            >
              <p>Пройдено занятий: 3</p>
              <p>Выполненно упражнений: 18</p>
              <p>Проработанно часов: 28</p>
              <p>Сброшенно каллорий: 18кг</p>
            </div>
          </div>
        </div>
      </Group>

      <Footer2 go={go} />
    </Panel>
  );
};

Prof.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Prof;
