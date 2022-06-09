import React from "react";

export default function CoinLink({ className, name, image, id, symbol }) {
  return (
    <a className={className} href={`/coin/${id}`}>
      <img src={image}></img>
      <span>{name}</span>
      <span>({symbol.toUpperCase()})</span>
    </a>
  );
}
