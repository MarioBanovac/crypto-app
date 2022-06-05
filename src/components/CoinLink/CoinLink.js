import React from "react";

export default function CoinLink({className, image, name, symbol }){
  return (
    <a className={className} href={`/coin/${name}`}>
      <img src={image}></img>
      <span>{name}</span>
      <span>({symbol.toUpperCase()})</span>
    </a>
  );
};
