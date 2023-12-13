import { Button, PopoutWrapper } from "@vkontakte/vkui";
import React, { useState, useEffect } from 'react';
import Berpie from "../../../img/gif/uprazhnenie-berpi-vashsport.com_.gif"




const Timer = () => {
  const [time, setTime] = useState(30 * 60);
  
  const [isRunning, setIsRunning] = useState(false);

  const [currentImage, setCurrentImage] = useState(Berpie);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (time <= 30 * 60 && time >= 25 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    } else if (time <= 25 * 60 && time >= 20 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    } else if (time <= 20 * 60 && time >= 15 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    } else if (time <= 15 * 60 && time >= 10 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    } else if (time <= 10 * 60 && time >= 5 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    }else if (time <= 5 * 60 && time >= 2 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    }else if (time <= 2 * 60 && time >= 0 * 60) {
      setCurrentImage(Berpie);
      setCount(setCount + 1);
    }
  }, [time]);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(30 * 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={{display: "flex",
    alignItems:"center",
    height:"500",
    minWidth:"400",
    flexWrap:"wrap",
    marginLeft:"auto",
    marginRight:"auto",
    flexDirection: "column",
    }}> 
    
     <img src={currentImage} alt="" style={{
      width:350,
      height:350,
     }} />
      <h1 style={{
        minWidth:"400"
      }}>Таймер: {formatTime()}</h1>
      {time <= 30*60 && time >= 25*60 && <h2 style={{textAlign:"center"}}>Упражнение первое: Приседания у стены</h2>}
      {time <= 25*60 && time >= 249*6 && <p>Переходим ко 2 упражнению</p>}
      {time <= 25*60 && time >= 20*60 && <h2 style={{textAlign:"center"}}>Упражнение второе: Подъёмы на носки</h2>}
      {time <= 20*60 && time >= 199*6 && <p>Переходим к 3 упражнению</p>}
      {time <= 20*60 && time >= 15*60 && <h2 style={{textAlign:"center"}}>Упражнение третье: Приседания с вытянутыми вперёд руками</h2>}      
      {time <= 15*60 && time >= 149*6 && <p>Переходим к 4 упражнению</p>}
      {time <= 15*60 && time >= 10*60 && <h2 style={{textAlign:"center"}}>Упражнение четвёртое: Ягодичный мост</h2>}      
      {time <= 10*60 && time >= 99*6 && <p>Переходим к 5 упражнению</p>}
      {time <= 10*60 && time >= 5*60 && <h2 style={{textAlign:"center"}}>Упражнение пятое: Приседания пистолетиком</h2>}      
      {time <= 5*60 && time >= 49*6 && <p>Переходим к 6 упражнению</p>}
      {time <= 5*60 && time >= 2*60 && <h2 style={{textAlign:"center"}}>Упражнение шестое: Боковой подъём ног лежа</h2>}      
      {time <= 2*60 && time === 19*6 && <p>Переходим к 7 упражнению</p>}
      {time <= 2*60 && time >= 0*60 && <h2 style={{textAlign:"center"}}>Упражнение седьмое: Махи ногами назад</h2>}      
      {time === 0 && <p>Время кончилось!</p>}  {/*Если время равно 0, отображаем сообщение "Время кончилось!"*/}  
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        minWidth:"400",
        
      }}>
      
      <div style={{
        marginRight:50
      }}>
         {!isRunning && time > 0 && (
        <Button onClick={startTimer}>Старт</Button> // Кнопка Старт, если таймер не запущен и время больше 0
      )}
      {isRunning && (
        <Button onClick={stopTimer}>Стоп</Button> // Кнопка Стоп, если таймер запущен
      )}  
      </div>
      <div>
      <Button onClick={resetTimer}>Сбросить</Button>  {/*Кнопка Сбросить*/}        
      </div>


      </div>
     
    </div>
  );
};

const OpenLowerMuscle = ({ onClose }) => {
  return (
    <PopoutWrapper onClick={onClose}>
      <div style={{
        backgroundColor: "var(--vkui--color_background_content)",
        borderRadius: 8,
        position: "relative",
        padding: "12px",
        width: "500px",

      }}>
        <div style={{
        display: "flex",
        alignItems:"center",
        
        }}>
          
          <Timer />
          {/* <Button onClick={onClose}>Стоп</Button> */}
        </div>
      </div>
    </PopoutWrapper>
  );
};

export default OpenLowerMuscle;