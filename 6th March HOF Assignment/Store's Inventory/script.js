const priceInUSD = {
    item1: 30,
    item2: 20,
    item3: 10,
};

const exchangeRate = 80;
const priceInINR = Object.fromEntries(
    Object.entries(priceInUSD).map(([key, value]) => [key, "INR- " + value * exchangeRate])
);

console.log(priceInINR);