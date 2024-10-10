const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#select-dolar");

function convertValues() {
  const inputCurrencyValues = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor a converter

  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  console.log(currencySelect.value);

  const dolarToday = 5.59;
  const euroToday = 6.12;
  const libraToday = 7.29;
  const bitcoinToday = 352.428;

  if (currencySelect.value == "dolar") {
    //se o valor for dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValues / dolarToday);
  }

  if (currencySelect.value == "euro") {
    //se o valor for euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValues / euroToday);
  }

  if (currencySelect.value == "libra") {
    //se o valor for euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValues / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    //se o valor for euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValues / libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValues);
}


function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector ("#currency-img-dolar")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src="./assets/image copy 3.png"
    }

        if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/image.png"
        }

        if (currencySelect.value == "libra") {
          currencyName.innerHTML = "Libra"
          currencyImage.src="./assets/image copy 4.png"
        }

          if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src="./assets/image copy 5.png"
          }

        convertValues()
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency )
