function fibs(count) {
  let fib = [0, 1];

  if (count === 0) return 0;

  for (let i = 2; i < count; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  if (count > 0) {
    return fib;
  } else {
    return "Error";
  }
}

function fibsRec(count) {
  count--;
  if (count === 0) {
    return;
  }
  if (count < 2) {
    return [0, 1];
  }
  const arr = fibsRec(count);
  arr.push(arr[count - 1] + arr[count - 2]);
  return arr;
}

console.log(fibsRec(8));
