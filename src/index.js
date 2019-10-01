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
  let multipleExpr = [];
  for (let i = 0; i <= expr.length - 10; i += 10) {
    multipleExpr.push(expr.substring(i, i + 10));
  }
  const replaceExpr = multipleExpr.map(e =>
    e
      .replace("**********", " ")
      .replace(/00/gi, "")
      .replace(/10/gi, ".")
      .replace(/11/gi, "-")
  );
  const decodingExpr = replaceExpr.map(e => {
    if (e === " ") {
      return e;
    }
    return MORSE_TABLE[e];
  });
  return decodingExpr.join("");
}

module.exports = {
  decode
};
