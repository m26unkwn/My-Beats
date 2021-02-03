import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft,faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({currentSong, isPlaying, setIsPlaying,audioRef, songInfo, setSongInfo}) => {
    
    // Drag Handler
    const dragHandler=(e)=>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    //Time Formatter

    const getTime=(time)=>
        Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    


    const playSongHandler=()=>{

        if (isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);

        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);


        }        


    }
    return (
        <div className="player" >
            <div className="time-control">
                <span>{getTime(songInfo.currentTime)}</span>
                <input 
                min={0}
                 max = {songInfo.duration} 
                 value={songInfo.currentTime}
                 onChange={dragHandler}
                  type="Range"/>
                <span>{getTime(songInfo.duration)}</span>
            </div>
            <div className='play-control'>
                    < FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                    < FontAwesomeIcon onClick={playSongHandler} className="play"  size="2x" icon={isPlaying ?faPause: faPlay } />
                    < FontAwesomeIcon className ="skip-forward" size="2x" icon={faAngleRight} />
                </div>
                
        </div>
    )
}
