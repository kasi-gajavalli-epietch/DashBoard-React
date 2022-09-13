import React from 'react';
import Reddit from '../Reddit/Reddit';
import GeckoApi from '../Gecko/GeckoApi';
import Dictionary from '../dictionary/Dictionary';
import Meteo from '../meteo/meteo.js';
import Stopwatch from "../Stopwatch/Stopwatch.jsx";
import Animelist from "../Animelist/Animelist.jsx";

const Display = () => {
  return (
    <div className="displayapps">
      <Reddit />
      <GeckoApi />
      <Dictionary />
      <Meteo />
      <Stopwatch />
      <Animelist />
    </div>
  )
};

export default Display;