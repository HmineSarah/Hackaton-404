import React, { useState, useEffect } from "react";
//import './App.css';

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


useEffect(() => {
    fetch("https://robohash.org/"+ getRandomString(4) +".png")
    .then(res => (res.blob()))
      .then((data) => {
        setBlob(URL.createObjectURL(data));
      });
  }, []);

  return (
    <div className="App">   
         <img src={blob} alt=""/>
    </div>
  );
  }
export default CharacterDisplay;
