import React from "react";
import './player.css'
import play from '../img/player-icon/play.png'
import pause from '../img/player-icon/pause.png'
import backward from '../img/player-icon/backward.png'
import forward from '../img/player-icon/forward.png'





function Player() {
  return (
    <div>
        <div className="player-container">
        <img src={backward}  alt="" className="controls"/>
        <img src={play} alt="" className="controls"/>
        <img src={pause} alt="" className="controls hide"/>
        <img src={forward} alt="" className="controls"/>
      </div>
    </div>
  );
}

export default Player;
