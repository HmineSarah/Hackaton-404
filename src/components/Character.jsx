import React, { useState, useEffect } from "react";
//import './App.css';
const userRobot = [];
function getRandomString(length) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function CharacterDisplay () {

const [blob, setBlob] = useState ([]);
//const [userRobot, setUserRobot] = useState ([]);
const [url, setUrl] = useState()
const [message, setMessage] = useState("");
const [robotName, setRobotName] = useState()



function fetchRobot () {
  
  let randomUrl = "https://robohash.org/"+ robotName.name.first + robotName.name.last +".png"
  
  fetch(randomUrl)
    .then(res => (res.blob()))
    .then((data) => {
      setBlob(URL.createObjectURL(data));
    });
}

function fetchName () {
  console.log('fetchName');
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setRobotName({
      name: data.results[0].name,
      gender: data.results[0].gender
    }) )
}

const handleClick = (e) => {
  //e.preventDefault();
  //setUserRobot(userRobot)
  userRobot.push(robotName);
  console.log("UserRobot:",userRobot);
  console.log("UserRobot[0]:",userRobot[0]);
  fetchName()
}



/*function robotLike () {
return (
     userRobot.map(url => (
         randomUrl = url
             fetchRobot()   )
 ))}*/



  useEffect(() => {
     //randomString =  getRandomString(4);
   fetchName();
  }, []);

  useEffect(() => {
    if(robotName) {
      fetchRobot()
      console.log(robotName);
    }
  }, [robotName])

  return (
    <div className="App">
      <button onClick={() => fetchName()}>NEXT !</button>   
         <img src={blob} alt=""/>
         
         <button type="button" onClick={() => handleClick()} >HO YEAH</button>
    </div>
  );
}
export default CharacterDisplay;
