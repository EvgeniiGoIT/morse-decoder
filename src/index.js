const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};
function decode(expr) {
  const splitExpr = expr.split("**********");
  const decodingExpr = splitExpr.map(expr => {
    const arrayExpr = expr.split("");
    let doubleArr = [];
    for (let i = 0; i < arrayExpr.length; i++) {
      const currentElement = arrayExpr[i];
      const nextElement = arrayExpr[i + 1];
      if (currentElement === "0" && nextElement !== "0") {
        doubleArr.push("");
      }
      const element = `${currentElement}${nextElement}`;
      i++;
      doubleArr.push(element);
    }
    doubleArr.map((e, i) => {
      switch (e) {
        case "10":
          doubleArr[i] = ".";
          break;
        case "11":
          doubleArr[i] = "-";
          break;
        default:
          doubleArr[i] = "|";
      }
    });
    return doubleArr
      .join("")
      .split("|")
      .map((e, i) => {
        if (MORSE_TABLE[e] === undefined && e.length !== 0) {
          return decodeBadString(e);
        } else {
          return MORSE_TABLE[e];
        }
      })
      .join("");
  });
  console.log(decodingExpr.join(" "));
  return decodingExpr.join(" ");
}

function decodeBadString(expr) {
  const badString = expr.split("");
  let nextStatus = "";
  for (let i = 0; i < badString.length; i++) {
    const currentStatus = nextStatus;
    nextStatus = currentStatus + badString[i];
    if (MORSE_TABLE[currentStatus] && MORSE_TABLE[nextStatus] === undefined) {
      const badStringRest = expr.slice(i);
      return `${MORSE_TABLE[currentStatus]}${MORSE_TABLE[badStringRest]}`;
    }
  }
}

decode(
  "00000000100000111010101010111100111011100000001011111110101011111010101010101010"
);
module.exports = {
  decode
};
