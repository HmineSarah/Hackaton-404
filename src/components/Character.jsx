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

const [message, setMessage] = useState("");


let randomString =  getRandomString(4)
let randomUrl = "https://robohash.org/"+ randomString +".png"
function fetchRobot () {

    fetch(randomUrl)
    .then(res => (res.blob()))
      .then((data) => {
        setBlob(URL.createObjectURL(data));
      });
}

const handleClick = (e) => {
//e.preventDefault();
//setUserRobot(userRobot)
userRobot.push(randomUrl);
console.log("UserRobot:",userRobot);
console.log("UserRobot[0]:",userRobot[0]);
setMessage(getRandomString(4));
fetchRobot();
}

/*function robotLike () {
return (
        userRobot.map(url => (
            randomUrl = url
                this.fetchRobot()   )
 )
 )
     }*/



useEffect(() => {
     randomString =  getRandomString(4);
   fetchRobot();
  }, []);

  return (
    <div className="App">   
         <img src={blob} alt=""/>
         <button type="button" onClick={handleClick} >HO YEAH</button>
    </div>
  );
  }
export default CharacterDisplay;
