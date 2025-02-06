
const submitButton = document.getElementById('submit');
const confMessage = document.getElementById('confermationMessage');
const donationForm = document.getElementById('donation');

donationForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const selectedAmount = document.querySelector('input[name="amount"]:checked').value;
    const otherAmount = document.getElementById('other').value;
    alert(`Thank you for your donation of ${otherAmount || selectedAmount}!`);

    fetch(donationForm.action,{
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response =>{
        if(response.ok){
            donationForm.reset(); //reset the form fields
            confMessage.style.display= 'block';
            }
    }).catch(error =>{
        console.error('Error!', error.message);
    });
 });


const frecquency = document.querySelector('input[name="frequency"]:checked');
const donation = document.querySelector('input[name="donation"]:checked');
const customAmount = document.querySelector('input[name="customAmount"]');

const otherAmount = document.querySelector('.js-other-amount');
const resultMessage =document.getElementById('resultMessage');



otherAmount.addEventListener('change', () => {
    if (otherAmount.checked) {
        donationForm.classList.add('editing-amount');

    } else {
        donationForm.classList.remove('editing-amount'); // Optional: Remove the class if not checked
    }
 });

 customAmount.addEventListener('input', () => {
    const value = customAmount.value;
    // Check if the value is a number
    if (isNaN(value) || value.trim() === '') {
        customAmount.setCustomValidity('Please enter a valid number');
    } else {
        customAmount.setCustomValidity(''); 
        resultMessage.style.display = 'block';
    }
});


let message = 'You have selected';
if(frecquency){
    message += frecquency.value + 'donation';
}
if(donation){
    message += `of $ ${donation.value}`;
}else if (customAmount){
    message += `of $ ${customAmount.value}`;
}

resultMessage.innerText = message;



