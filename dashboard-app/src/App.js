import React,{useState} from 'react';
import Facebook from './components/facebook/Facebook';
import Sidebar from './components/Sidebar/Sidebar';
import Reddit from './components/Reddit/Reddit';
import GeckoApi from './components/Gecko/GeckoApi';
import Dictionary from './components/dictionary/Dictionary';
import Meteo from './components/meteo/meteo.js';
import Stopwatch from "./components/Stopwatch/Stopwatch.jsx";
import Animelist from "./components/Animelist/Animelist.jsx";
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';

function App() {
  const[showMeteo,setShowMeteo]=useState(true);
  const[showReddit,setShowReddit]=useState(false);
  const[showGecko,setShowGecko]=useState(false);
  const[showStopwatch,setShowStopwatch]=useState(false);
  const[showAnime,setShowAnime]=useState(false);
  const[showDictionary,setShowDictionary]=useState(false)
  const[showYoubeEmbed, setShowYoutubeEmbed]=useState(false);

  return (
      <div className='App'>
        <Facebook />
        <Sidebar showReddit={showReddit} setShowReddit={setShowReddit}
                 showGecko={showGecko} setShowGecko={setShowGecko}
                 showMeteo={showMeteo} setShowMeteo={setShowMeteo}
                 showStopwatch={showStopwatch} setShowStopwatch={setShowStopwatch}
                 showAnime={showAnime} setShowAnime={setShowAnime}
                 showDictionary={showDictionary} setShowDictionary={setShowDictionary}
                 showYoubeEmbed={showYoubeEmbed} setShowYoutubeEmbed={setShowYoutubeEmbed}/>
          {showReddit?<Reddit/>:null}
          {showGecko?<GeckoApi/>:null}
          {showMeteo?<Meteo/>:null} 
          {showStopwatch?<Stopwatch/>:null}
          {showAnime?<Animelist/>:null}
          {showDictionary?<Dictionary/>:null}
          {showYoubeEmbed?<YoutubeEmbed/>:null}
      </div>
  )
};

export default App;