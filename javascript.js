const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.2
  const euroToday = 6.2
  const bitcoinToday = 0.00000310
  const yuanToday = 1.40789 

  if (currencySelect.value == 'dolar') {// Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == 'euro') { // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday)
  }
  if(currencySelect.value == 'bitcoin'){
      currencyValueConverted.innerHTML = new Intl.NumberFormat('BTC',{
          style:'currency',
          currency:'BTC'
      }).format(inputCurrencyValue/bitcoinToday)
  }
  if(currencySelect.value == 'yuan'){
      currencyValueConverted.innerHTML= new Intl.NumberFormat('CN',{
          style:'currency',
          currency:'CNY'
      }).format(inputCurrencyValue/yuanToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)
}


function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/unidesestades.webp'
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.jpg'
  }

  if (currencySelect.value =='bitcoin'){
      currencyName.innerHTML = 'Bitcoin'
      currencyImage.src = './assets/bitcoin.jpg'
  }
  if(currencySelect.value == 'yuan'){
      currencyName.innerHTML = 'Yuan'
      currencyImage.src = './assets/china.jpg'
  }

  convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)