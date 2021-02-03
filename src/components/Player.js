import React,{useRef, useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft,faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    //State
    const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0});

    //TimeUpdateHandler 
    const timeUpdateHandler=(e)=>{
        const current= e.target.currentTime;

        const duration=e.target.duration;

        setSongInfo({...songInfo, currentTime : current,duration});

    }

    // Drag Handler
    const dragHandler=(e)=>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    //Time Formatter

    const getTime=(time)=>
        Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    
    //userRef
    const audioRef=useRef(null);

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
                    <FontAwesomeIcon onClick={playSongHandler} className="play"  size="2x" icon={isPlaying ?faPause: faPlay } />
                    < FontAwesomeIcon className ="skip-forward" size="2x" icon={faAngleRight} />
                </div>
                <audio onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}src={currentSong.audio}></audio>
        </div>
    )
}
