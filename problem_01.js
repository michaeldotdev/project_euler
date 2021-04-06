// #### Multiple of 3 and 5 ####

const multiple = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i
    }
  }
  return sum;
}
