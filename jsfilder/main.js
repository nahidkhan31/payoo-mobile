document.getElementById('btn-add-money').addEventListener('click', function(event){
    // reload na howar jonno preventDefault use kora hoyese.......
    event.preventDefault;
    const amount= document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(amount && pin){
        if(convertedPin===1212){
            const sum = convertedMainBalance + convertedAmount;
         //    note the point........ add money
            document.getElementById('main-balance').innerText = sum;
         }
         else{
               alert("incorrect pin number")
         }
    } 
    else{
           alert("enter amount")
    }
})