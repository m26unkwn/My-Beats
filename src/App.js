// import start
import {useState,useRef} from "react";

// Adding Components
import {Song} from "./components/Song";
import {Player} from "./components/Player";
import {Nav} from "./components/Nav";

//Import Util

import  chillhop from "./data";

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
 const [songInfo, setSongInfo] = useState(
   {currentTime: 0,
     duration: 0,
     animationPercentnge:0,
    });
 const [libraryStatus, setLibraryStatus] = useState(false);

//TimeUpdateHandler 
const timeUpdateHandler=(e)=>{
  const current= e.target.currentTime;

  const duration=e.target.duration;

  //Calculate Percentage
  const roundedCurrent=Math.round(current);
  const roundedDuration=Math.round(duration);
  const animation= Math.round((roundedCurrent/ roundedDuration) * 100);
  console.log(animation);


  setSongInfo({...songInfo, currentTime : current,duration, animationPercentnge:animation});

}


  return (
    <div className="App">
      < Nav libraryStatus= {libraryStatus} setLibraryStatus= {setLibraryStatus} />
      < Song currentSong={currentSong} />
      <Player
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      songs={songs}
      setSongs={setSongs}

       />
       <Library 
       songs={songs} 
       setCurrentSong={setCurrentSong}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setSongs={setSongs}
       libraryStatus= {libraryStatus}
       />
       <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}src={currentSong.audio}>
        </audio>
    </div>
  );
}

export default App;
