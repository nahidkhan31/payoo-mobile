document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault;
    const pin = document.getElementById('cashout-pin-number').value;
    const convertedPin = parseInt(pin);
    const cashAmount= document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashAmount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedPin===1212){
        const sum = convertedMainBalance - convertedCashoutAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert("enter valid pin")
    }
})