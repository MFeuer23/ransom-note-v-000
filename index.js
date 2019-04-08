function buildHistogram (arr) {
  let hist = {};
  for (let i = 0; i < arr.lengh; i++) {
    hist[`${arr[i]}`] = hist[`${arr[i]}`] + 1 || 1
    console.log(`${}`)
  }
  console.log(hist)
}