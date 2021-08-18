const currencyEl_One = document.getElementById('currency-one');
const currencyEl_Two = document.getElementById('currency-two');

const amountEl_One = document.getElementById('amount-one');
const amountEl_Two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch Exchange rates and update the DOM
let calculate = () => {
    let currencyOne = currencyEl_One.value;
    let currencyTwo = currencyEl_Two.value;
    //console.log(currencyOne + ' ' + currencyTwo)
    const url = 'https://v6.exchangerate-api.com/v6/afe427c9b01cd62c159971f5/latest/'+currencyOne;
    fetch(url,{
        method:'GET'
    }).then(response => response.json()).then(data => {
        //console.log(data)
        const rate = data.conversion_rates[currencyTwo];

        rateEl.innerText = "1 "+ currencyOne +" is = to "+ rate.toFixed(2) +" "+ currencyTwo;

       amountEl_Two.value = (amountEl_One.value * rate).toFixed(2);
    })
}

    


currencyEl_One.addEventListener('change', calculate);
amountEl_One.addEventListener('input', calculate);
currencyEl_Two.addEventListener('change', calculate);
amountEl_Two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_One.value;
    currencyEl_One.value = currencyEl_Two.value;
    currencyEl_Two.value = temp;
    calculate()
})

calculate();