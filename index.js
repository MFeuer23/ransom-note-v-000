function buildHistogram (arr) {
  let hist = {};
  for (let char of arr) {
    hist[`${char}`] = hist[`${char}`] + 1 || 1
    console.log(char)
  }
  console.log(hist)
}