const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string\n", function (str) {
  const arr = [...str];
  const obj = {};
  let firstNonRepeat = "";

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      continue;
    }

    obj[arr[i]] = [arr[i]];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i] && i !== j) {
        obj[arr[i]].push(arr[i]);
      }
    }
    if (firstNonRepeat.length === 0) {
      if (obj[arr[i]].length === 1) {
        firstNonRepeat = arr[i];
      }
    }
  }
  console.log(`First non-repeated letter: '${firstNonRepeat}'`);

  console.log(
    Object.values(obj)
      .sort((a, b) => {
        return b.length - a.length;
      })
      .reverse()
      .flat()
      .join("")
  );

  rl.close();
});

rl.on("close", function () {
  console.log("\nthanks for your consideration!");
  process.exit(0);
});
