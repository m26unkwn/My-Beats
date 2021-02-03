// Adding Components
import {Song} from "./components/Song";
import {Player} from "./components/Player";

import "./styles/style.scss";

// Main Functional Component
function App() {
  
  return (
    <div className="App">
      < Song />
      <Player />
    </div>
  );
}

export default App;
