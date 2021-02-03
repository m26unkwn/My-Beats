// import start
import {useState,useRef} from "react";

// Adding Components
import {Song} from "./components/Song";
import {Player} from "./components/Player";

//Import Util

import  chillhop from "./util";

import "./styles/style.scss";

import { Library } from "./components/Library";

// Main Functional Component
function App() {

//userRef
const audioRef=useRef(null);
// States
const [songs, setSongs] = useState(chillhop());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
 //State
 const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0});

//TimeUpdateHandler 
const timeUpdateHandler=(e)=>{
  const current= e.target.currentTime;

  const duration=e.target.duration;

  setSongInfo({...songInfo, currentTime : current,duration});

}


  return (
    <div className="App">
      < Song currentSong={currentSong} />
      <Player
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
       />
       <Library 
       songs={songs} 
       setCurrentSong={setCurrentSong}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setSongs={setSongs}
       />
       <audio onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}src={currentSong.audio}>
        </audio>
    </div>
  );
}

export default App;
