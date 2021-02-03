// import start
import {useState} from "react";

// Adding Components
import {Song} from "./components/Song";
import {Player} from "./components/Player";

//Import Util

import  chillhop from "./util";

import "./styles/style.scss";

import { Library } from "./components/Library";

// Main Functional Component
function App() {
// States
const [songs, setSongs] = useState(chillhop());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className="App">
      < Song currentSong={currentSong} />
      <Player
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
       />
       <Library songs={songs}/>
    </div>
  );
}

export default App;
