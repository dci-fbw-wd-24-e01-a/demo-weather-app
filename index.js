console.log(process.env.URL);
console.log(process.env.ENVIRONMENT);

if (process.env.ENVIRONMENT === "development") {
  console.log("We will give you admin access!!!!");
}

const response = await fetch(
  `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${process.env.API_KEY}`
);
const result = await response.json();

console.log(result);
