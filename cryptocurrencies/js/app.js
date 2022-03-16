// References
const API_URL = 'https://min-api.cryptocompare.com';

const form = document.querySelector('#formulario');
const currency = document.querySelector('#currency');
const cryptocurrencies = document.querySelector('#crytocurrency');
const result = document.querySelector('#resultado');

const objectSearch = {
    currency: '',
    crytocurrency: ''
}

// Promise
const getCryptocurrencies = cryptocurrencies => new Promise(resolve => {
    resolve(cryptocurrencies);
});

document.addEventListener('DOMContentLoaded', () => {
    consultCrypto();

    form.addEventListener('submit', submitForm);
    currency.addEventListener('change', readValue);
    cryptocurrencies.addEventListener('change', readValue);
});

// Get top 10th crypto currencies
async function consultCrypto() {
    // fetch(`${ API_URL }/data/top/mktcapfull?limit=10&tsym=MXN`)
    //     .then(response => response.json())
    //     .then(json => getCryptocurrencies(json.Data))
    //     .then(cryptocurrencies => selectCryptocurrencies(cryptocurrencies))
    //     .catch(e => console.log(e));

    try {        
        const response = await fetch(`${ API_URL }/data/top/mktcapfull?limit=10&tsym=MXN`);
        const result = await response.json();
        const cryptocurrencies = await getCryptocurrencies(result.Data);
        selectCryptocurrencies(cryptocurrencies);
    } catch (error) {
        console.log(error);
    }
}

// Select crypto currencies
function selectCryptocurrencies(crypto_currencies) {

    // Know the execution time
    const start = performance.now()

    crypto_currencies.forEach(crypto => {
        const { FullName, Name } = crypto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        cryptocurrencies.appendChild(option);
    });

    const end = performance.now();
    console.log('Time Performance:', end - start);
}

// Read changes in select cryptocurrencies
function readValue(e) {
    objectSearch[e.target.name] = e.target.value;
}

// Submit Form
function submitForm(e) {
    e.preventDefault();
    spinner();

    // Validate form
    const { currency, crytocurrency } = objectSearch;

    if (currency === '' || crytocurrency === '') {
        showAlert('Ambos campos son obligatorios.');
        return;
    }

    // Request API
    consultAPI();
}

// Consult API
async function consultAPI() {
    const { currency, crytocurrency } = objectSearch;

    try {
        const responde = await fetch(`${ API_URL }/data/pricemultifull?fsyms=${ crytocurrency }&tsyms=${ currency }`);
        const result = await responde.json();
        quotationHTML(result.DISPLAY[crytocurrency][currency]);
    } catch (error) {
        console.log(error);
    }
}

// Print quotation in HTML
function quotationHTML(quotation) {
    // Clean HTML
    cleanHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quotation;

    // debugger;

    const price = document.createElement('p');
    price.classList.add('precio');
    price.innerHTML = `Precio: <span>${ PRICE }</span>`;
    
    const priceHigh = document.createElement('p');
    priceHigh.innerHTML = `Mayor precio del Día: <span>${ HIGHDAY }</span>`;

    const priceLow = document.createElement('p');
    priceLow.innerHTML = `Menos precio del Día: <span>${ LOWDAY }</span>`;

    const change24Hour = document.createElement('p');
    change24Hour.innerHTML = `24 Horas: <span>${ CHANGEPCT24HOUR }%</span>`;

    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `Última Actualización: <span>${ LASTUPDATE }</span>`;

    result.appendChild(price);
    result.appendChild(priceHigh);
    result.appendChild(priceLow);
    result.appendChild(change24Hour);
    result.appendChild(lastUpdate);
}

// Show alert
function showAlert(message) {
    const error = document.querySelector('.error');

    if (!error) {
        const msg = document.createElement('div');
        msg.classList.add('error');
        msg.textContent = message;
        form.appendChild(msg);
    
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }
}

// Clean HTML
function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function spinner() {
    cleanHTML();
    
    const spinner = document.createElement('div');
    spinner.classList.add('sk-chase');
    spinner.innerHTML = `
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    `;

    result.appendChild(spinner);
}