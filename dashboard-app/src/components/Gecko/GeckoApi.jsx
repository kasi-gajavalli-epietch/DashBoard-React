import Gecko from './Gecko';
import axios from "axios";
import { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import './Gecko.css';

function GeckoApi() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Draggable>
    <div className="GeckoApi">
      <div className="container-gecko">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="gecko-input"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <Gecko coins={coins} search={search} />
      </div>
    </div>
      
    </div>
    </Draggable>
  );
}

export default GeckoApi;
