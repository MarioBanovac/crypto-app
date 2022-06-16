import { useEffect, useRef } from "react";

export const nFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

export const overviewFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "ths" },
    { value: 1e6, symbol: "mln" },
    { value: 1e9, symbol: "bln" },
    { value: 1e12, symbol: "tln" },
    { value: 1e15, symbol: "qdn" },
    { value: 1e18, symbol: "qln" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + " " + item.symbol
    : "0";
};

export function getFormattedDate(timestamp) {
  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  if (arguments.length > 0) {
    const [month, day] = new Date(timestamp).toLocaleString().split("/");
    return `${months[month]} ${day < 10 ? "0" + day : day}`;
  } else {
    const date = new Date(Date.now());
    const [month, day, year] = date.toLocaleDateString().split("/");
    return `${months[month]} ${day < 10 ? "0" + day : day},${year}`;
  }
}

export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function formatCoinName(coinName) {
  return [...coinName]
    .map((character) => (character !== " " ? character.toLowerCase() : "-"))
    .join("");
}

export function formatCoinPrice(currencySymbol, num, hasSymbol) {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  };
  switch (num) {
    case undefined:
      return " -";
    case null:
      return "Infinity ";
    default:
      return `${hasSymbol ? currencySymbol : ""}${Number(num).toLocaleString(
        "en",
        options
      )}`;
  }
}

export function formatURL(url) {
  if (url.length > 0) {
    const myUrl = new URL(url);
    if (myUrl.pathname && myUrl.pathname.length > 1) {
      return myUrl.hostname + myUrl.pathname;
    }
    return myUrl.hostname;
  }
  return;
}

export function isEmpty(str) {
  return str.length <= 0 ? true : false;
}

export function toUTCDate(str) {
  return new Date(str).toUTCString();
}

export function isThemeDark(theme) {
  return theme.name === "darkTheme";
}

export function isThemeLight(theme) {
  return theme.name === "lightTheme";
}
