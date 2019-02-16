// tail call optimisation
function fib (n, a = 0, b = 1) {
  if (n < 1) {
    return a + b
  }
  return fib(n - 1, b, a + b)
}
