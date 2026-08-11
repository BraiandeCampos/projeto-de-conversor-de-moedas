const convertButton = document.querySelector(".convert-button"); /* mapeando o botão de conversão */
const selectCurrency = document.querySelector(".select-currency-converted"); /* mapeando o select de moeda */
const selectCurrencyToConvert = document.querySelector(".select-currency-to-convert"); /* mapeando o select de moeda a ser convertida */


function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value; /* mapeando o input de valor da moeda */
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); /* mapeando o elemento de valor da moeda a ser convertida */
    const currencyValueConverted = document.querySelector(".currency-value-converted"); /* mapeando o elemento de valor da moeda convertida */


    const dolarValue = 5.2; /* valor do dólar */
    const euroValue = 5.9; /* valor do euro */
    const libraValue = 6.8; /* valor da libra */
    const bitcoinValue = 120000; /* valor do bitcoin */

    let valueInReal = inputCurrencyValue; /* valor convertido para reais, usado só como base de cálculo */

    if (selectCurrencyToConvert.value == "dolar") {
        valueInReal = inputCurrencyValue * dolarValue;
    } /* função de conversão de moeda, se o select estiver selecionado o dólar, vai converter para reais, antes de converter para a moeda desejada */
    if (selectCurrencyToConvert.value == "euro") {
        valueInReal = inputCurrencyValue * euroValue;
    } /* função de conversão de moeda, se o select estiver selecionado o euro, vai converter para reais, antes de converter para a moeda desejada */
    if (selectCurrencyToConvert.value == "libra") {
        valueInReal = inputCurrencyValue * libraValue;
    } /* função de conversão de moeda, se o select estiver selecionado a libra, vai converter para reais, antes de converter para a moeda desejada */
    if (selectCurrencyToConvert.value == "bitcoin") {
        valueInReal = inputCurrencyValue * bitcoinValue;
    } /* função de conversão de moeda, se o select estiver selecionado o bitcoin, vai converter para reais, antes de converter para a moeda desejada */

    if (selectCurrencyToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCurrencyValue);
    }
    if (selectCurrencyToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue);
    }
    if (selectCurrencyToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCurrencyValue);
    }
    if (selectCurrencyToConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB',
            {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue);
    }
    if (selectCurrencyToConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCurrencyValue);
    }




    // MOEDAS A SEREM CONVERTIDAS
    if (selectCurrency.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(valueInReal / dolarValue); /* exibindo o valor da moeda convertida, com formatação de moeda */

    }  /* função de conversão de moeda, se o select estiver selecionado o dólar, vai converter para dolar*/

    if (selectCurrency.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }).format(valueInReal / euroValue); /* exibindo o valor da moeda convertida, com formatação de moeda */
    }/* função de conversão de moeda, se o select estiver selecionado o euro, vai converter para euro*/

    if (selectCurrency.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB',
            {
                style: 'currency',
                currency: 'GBP'
            }).format(valueInReal / libraValue); /* exibindo o valor da moeda convertida, com formatação de moeda */
    }
    if (selectCurrency.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'BTC'
            }).format(valueInReal / bitcoinValue); /* exibindo o valor da moeda convertida, com formatação de moeda */
    }


}/* função de conversão de moeda */

function changeCurrency() {
    const changeCurrencyName = document.querySelector(".currency-converted-name"); /* mapeando o elemento de nome da moeda convertida */
    const changeCurrencyImage = document.querySelector(".currency-image"); /* mapeando o elemento de imagem da moeda convertida */

    if (selectCurrency.value == "dolar") {
        changeCurrencyName.innerHTML = "dólar americano"; /* alterando o nome da moeda convertida para dólar americano */
        changeCurrencyImage.src = "./assets/estadosunidos.png"; /* alterando a imagem da moeda convertida para dólar americano */
    } /* função de mudança de moeda, se o select estiver selecionado o dólar, vai alterar o nome e a imagem da moeda convertida para dólar americano */

    if (selectCurrency.value == "euro") {
        changeCurrencyName.innerHTML = "euro"; /* alterando o nome da moeda convertida para euro */
        changeCurrencyImage.src = "./assets/euro.png"; /* alterando a imagem da moeda convertida para euro */
        changeCurrencyImage.style.width = "44px"; /* alterando a largura da imagem da moeda convertida */
    } /* função de mudança de moeda, se o select estiver selecionado o euro, vai alterar o nome e a imagem da moeda convertida para euro */

    if (selectCurrency.value == "libra") {
        changeCurrencyName.innerHTML = "libra"; /* alterando o nome da moeda convertida para libra */
        changeCurrencyImage.src = "./assets/libra.png"; /* alterando a imagem da moeda convertida para libra */
    }
    if (selectCurrency.value == "bitcoin") {
        changeCurrencyName.innerHTML = "bitcoin"; /* alterando o nome da moeda convertida para bitcoin */
        changeCurrencyImage.src = "./assets/bitcoin.png"; /* alterando a imagem da moeda convertida para bitcoin */
    }

    convertCurrency(); /* chamando a função de conversão de moeda */
} /* função de mudança de moeda, se o select estiver selecionado o euro, vai alterar o nome e a imagem da moeda convertida para euro*/


    function changeCurrencyToConvert() {
    const changeCurrencyToConvertName = document.querySelector(".currency-name-to-convert");
    const changeCurrencyToConvertImage = document.querySelector(".currency-image-to-convert");

    if (selectCurrencyToConvert.value == "real") {
        changeCurrencyToConvertName.innerHTML = "real";
        changeCurrencyToConvertImage.src = "./assets/brasil.png";
        changeCurrencyToConvertImage.style.width = "44px";
    }
    if (selectCurrencyToConvert.value == "dolar") {
        changeCurrencyToConvertName.innerHTML = "dólar americano";
        changeCurrencyToConvertImage.src = "./assets/estadosunidos.png";
        changeCurrencyToConvertImage.style.width = "";
    }
    if (selectCurrencyToConvert.value == "euro") {
        changeCurrencyToConvertName.innerHTML = "euro";
        changeCurrencyToConvertImage.src = "./assets/euro.png";
        changeCurrencyToConvertImage.style.width = "44px";
    }
    if (selectCurrencyToConvert.value == "libra") {
        changeCurrencyToConvertName.innerHTML = "libra";
        changeCurrencyToConvertImage.src = "./assets/libra.png";
        changeCurrencyToConvertImage.style.width = "";
    }
    if (selectCurrencyToConvert.value == "bitcoin") {
        changeCurrencyToConvertName.innerHTML = "bitcoin";
        changeCurrencyToConvertImage.src = "./assets/bitcoin.png";
        changeCurrencyToConvertImage.style.width = "";
    }

    convertCurrency();
}




selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvert); /* adicionando evento de mudança ao select de moeda a ser convertida */
selectCurrency.addEventListener("change", changeCurrency); /* adicionando evento de mudança ao select de moeda */
convertButton.addEventListener("click", convertCurrency); /* adicionando evento de clique ao botão de conversão */