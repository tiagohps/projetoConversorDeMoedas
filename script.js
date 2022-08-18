const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.17
const euro = 5.21
const bitcoin = 120852.14

const convertValue = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputReais)

    if(select.value === 'US$ Dólar americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputReais / dolar) 

    }
    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputReais / euro) 

    }
     if(select.value === '₿ Bitcoin'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC"
        }).format(inputReais / bitcoin) 

    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    
    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./estados-unidos (1) 1 (1).png"
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./euro.png"
    }

    if(select.value === '₿ Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./bitcoin.png"
    }
    convertValue()
}
button.addEventListener("click", convertValue)
select.addEventListener("change",changeCurrency)

