function fibs(index) {
  let fib = [1, 1];
  index = +index;

  if (index === 0) return 0;

  for (let i = 2; i <= index; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  if (index >= 0) {
    return fib[index - 1];
  } else {
    return "OOPS";
  }
}
