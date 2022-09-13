import React from 'react'

const GeckoRow = ({ coin, index }) => {
    return (
      <tr>
        <td className="text-muted">{index}</td>
        <td>
        <img
            src={coin.image}
            alt=""
            className="img-fluid me-4"
            style={{ width: "80%", padding:"0.5rem" }}
          />

        </td>
        <td>
          <div className="coin-image"><span className="ms-3 text-muted">{coin.symbol}</span></div>
          <div className="coin-name"><span>{coin.name}</span></div>
        </td>
  
        <td 
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }>
          <div className="total-table">
          <div className="price"><span>${coin.current_price.toLocaleString()}</span></div>
          <div className="price-change"><span>{coin.price_change_percentage_24h}</span></div>
          </div>
        </td>
  
        <td>
          <div className="volume">${coin.total_volume.toLocaleString()}</div>
          
        </td>
      </tr>
    );
};

export default GeckoRow;