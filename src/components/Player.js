import React ,{useEffect} from 'react';

import {playAudio} from "../util";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft,faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({songs,setSongs,currentSong,setCurrentSong, isPlaying, setIsPlaying,audioRef, songInfo, setSongInfo}) => {
    

    
   
    useEffect(() => {
             //SONG ACTIVE OR NOT
             const newSong= songs.map((song)=> {
                if(song.id===currentSong.id){
                    return {
                        ...song, active:true,
                    }
                }
                else{
                    return {
                        ...song, active:false,
                    }
                };
            })
            setSongs(newSong);
    }, [currentSong] )
        // Drag Handler
    function dragHandler(e) {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });

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
    const skipTrackHandler=(direction)=>{
       let currentIndex= songs.findIndex((song)=>song.id===currentSong.id)
        if(direction==='skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);   
        }
        if(direction==='skip-back'){
            if((currentIndex - 1)%songs.length===-1)
            {

             setCurrentSong(songs[songs.length-1]) 
             playAudio(isPlaying, audioRef);
                return;                                                             
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);   
        }
        playAudio(isPlaying, audioRef);
    };

    // Add the styles
    const trackAnim={
        transform:`translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player" >

            <div className="time-control">

                <span>{getTime(songInfo.currentTime)}</span>

                <div style={{background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                    <input 
                    min={0}
                    max = {songInfo.duration || 0} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="Range"/>
                    <div style={trackAnim} className='animate-track'></div>
                </div>
                <span>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</span>
            </div>
            <div className='play-control'>
                    < FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                    < FontAwesomeIcon onClick={playSongHandler} className="play"  size="2x" icon={isPlaying ?faPause: faPlay } />
                    < FontAwesomeIcon  onClick={()=>skipTrackHandler('skip-forward')} className ="skip-forward" size="2x" icon={faAngleRight} />
                </div>
                
        </div>
    )
}
