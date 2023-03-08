// When I input a Base Currency, Conversion Currency, and Currency Amount to convert
// and press the 'Conversion' button, the Currency Amount is converted from the Base Curenncy
// to the Conversion Currency

function convertCurrency() {
  // Variables

  // Placeholder
  var baseCurrency = "USD";

  // Placeholder
  var currencyAmount = "10.00";

  // Placeholder
  var conversionCurrency = "GBP";

  // API KEY CHANGES BASED ON DEVELOPER
  var kanesExchangeApiKey = "9470f9dffac1cee9291efaaa";
  var rachelsExchangeApiKey = "97450b01cbb760880bc42f8b";
  var halimasExchangeApiKey = "737ab999317301663c433266";
  // var gilbertsExchangeApiKey =;

  // Placeholder
  var requestUrl =
    "https://v6.exchangerate-api.com/v6/" +
    kanesApiKey +
    "/pair/" +
    baseCurrency +
    "/" +
    conversionCurrency +
    "/" +
    currencyAmount;

  // Returns data based on the requestUrl
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
    });
}
