const hackerAlphabet = {
  A: "4",
  B: "I3",
  C: "[",
  D: ")",
  E: "3",
  F: "|=",
  G: "&",
  H: "#",
  I: "1",
  J: ",_|",
  K: ">|",
  L: "1",
  M: "[V]",
  N: "/V",
  O: "0",
  P: "|*",
  Q: "(_,)",
  R: "I2",
  S: "5",
  T: "7",
  U: "(_)",
  V: "|/",
  W: "VV",
  X: "><",
  Y: "j",
  Z: "2",
  1: "L",
  2: "R",
  3: "E",
  4: "A",
  5: "S",
  6: "b",
  7: "T",
  8: "B",
  9: "q",
  0: "o",
};

const hackerLang = (input) => {
  return input
    .toUpperCase()
    .split("")
    .map((char) => {
      if (Object.keys(hackerAlphabet).includes(char))
        return hackerAlphabet[char];
      else return char;
    })
    .join("");
};

const tests = {
  input: [
    "some words",
    "SOME WORDS",
    "mixEd wOrdS and num63|22",
    "wOrdS, num63|22; and punctuation.",
  ],
  output: [
    "50[V]3 VV0I2)5",
    "50[V]3 VV0I2)5",
    "[V]1><3) VV0I2)5 4/V) /V(_)[V]bE|RR",
    "VV0I2)5, /V(_)[V]bE|RR; 4/V) |*(_)/V[7(_)4710/V.",
  ],
};

let errors = 0;
tests.input.forEach((test, index) => {
  let resp = hackerLang(test);
  let expected = tests.output[index];
  if (resp != expected) {
    errors += 1;
    console.log("\noriginal: ", test);
    console.log(resp);
    console.log("expected:", expected);
  }
});

console.log(`Tests${errors != 0 ? " not " : " "}passed, ${errors} errors`);
