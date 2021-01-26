import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";

function AddCoin() {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>

      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el, index) => {
          return (
            <a
              key={index}
              onClick={() => handleClick(el)}
              className="dropdown-item"
              href="#"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default AddCoin;
