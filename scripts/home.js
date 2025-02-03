document.getElementById('donation-form').addEventListener('submit', (event) =>{
let isValid = false;
const errorMessage = document.getElementById('error-message');
const customAmount = document.getElementById('custom-Amount').value;

const radios = document.getElementsByName('amount');
for(let radio of radios){
    if(radio.checked){
        isValid = true;
        break;
    }
    if(customAmount.clicked &&customAmount === ''){
        isValid = false;

    }
    if(!isValid){
        event.preventDefault(); //prevent form submission
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';
    }
    customAmount.addEventListener('change', () =>{
        customAmount.style.display = this.checked ? 'block' : 'none';
    });
}
});

function onGooglePayLoaded() {
    const paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
    paymentsClient.isReadyToPay({apiVersion: 2, apiVersionMinor: 0}).then(function(response) {
        if (response.result) {
            document.getElementById('googlePayButton').style.display = 'block';
        }
    }).catch(function(err) {
        console.error("Error determining readiness: ", err);
    });
}