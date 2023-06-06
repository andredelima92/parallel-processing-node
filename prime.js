function generatePrimes(start, end) {
  const primes = [];

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
      return true;
    }
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

module.exports = {
  generatePrimes,
};
