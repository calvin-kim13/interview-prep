const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]);
    }
  }
}

// logAllPairsOfArray(boxes);

// Matrix
const dp = [...Array(2)].map((_) => Array(4).fill(0));
console.log(dp);
