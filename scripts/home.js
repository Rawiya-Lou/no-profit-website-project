document.getElementById('donation-form').addEventListener('submit', (event) =>{

let isValid = false;
const errorMessage = document.getElementById('error-message');
const customAmount = document.getElementById('custom-amount').value;

const radios = document.getElementsByName('amount');
for(let radio of radios){
    if(radio.checked){
        isValid = true;
        break;
    }
    if(customAmount.value === ''){
        isValid = false;
    }

    if(!isValid){
        event.preventDefault(); //prevent form submission
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';
    }
    customAmount.addEventListener('keypress', (event) =>{
        if(customAmount.value === ''){
        errorMessage.style.display = 'none'; }
        else{
        errorMessage.style.display = 'block';
        }
    });
}
});

