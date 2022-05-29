export const  nFormatter = (num, digits) => {
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
