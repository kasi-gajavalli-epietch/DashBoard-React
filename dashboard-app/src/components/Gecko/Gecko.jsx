import React from 'react';
import GeckoRow from './GeckoRow';
import './Gecko.css';


const titles = ["","Symbol", "Coin", "Price","24h Volume"];

const Gecko = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    if (!coins) return <div>no coins</div>
  
    return (
      <div className="cryptoGecko">
        <table className="table table-dark mt-4 table-hover">
          <thead>
            <tr>
              {titles.map((title, i) => (
                <td key={i}>{title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <GeckoRow key={coin.id} coin={coin} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  

export default Gecko;

