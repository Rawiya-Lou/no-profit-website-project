const donationForm = document.getElementById("my-form");
const submitButton = document.getElementById('submit');
const confMessage = document.getElementById('confermationMessage');
const inputElements = document.querySelectorAll('input:required');
const otherAmount = document.querySelector('.js-other-amount');
const resultMessage = document.getElementById('resultMessage');
const customAmount = document.querySelector('input[name="customAmount"]:checked');

donationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let allFilled = true;
    inputElements.forEach(inputElement => {
        if (!inputElement.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        const frequency = document.querySelector('input[name="frequency"]:checked');
        const donation = document.querySelector('input[name="donation"]:checked');
        let message = 'You have selected ';

        if (frequency && donation) {
            message += `${frequency.value} donation and the amount of $${donation.value}`;
        } else {
            message += 'please select a frequency and an amount!';
        }
        
        resultMessage.innerHTML = message;
        confMessage.style.display = 'block';
    } else {
        resultMessage.innerHTML = 'Please fill all required fields!';
        alert('Please fill in all fields!');
    }
    
    customChecked();
});

customChecked();
function customChecked() {
    otherAmount.addEventListener('change', () => {
        if (otherAmount.checked) {
            donationForm.classList.add('editing-amount');
        } else {
            donationForm.classList.remove('editing-amount');
        }
    });
}





donationForm.addEventListener('submit', handleSubmiting);


    async function handleSubmiting(event){
        event.preventDefault();
        const status = document.getElementById('confermationMessage');
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if(response.ok){
                status.innerHTML = 'thanks for your submission';
                form.reset();
            }else{
                response.json().then(data => {
                    if(Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data['errors'].map(error => error['message']).join(', ')
                    }else{
                        status.innerHTML = 'Oops! there was a problem submitting your form';
                    }
                });
            }
        }).catch((error) =>{
            status.innerHTML = 'Oops! there was a problem submitting your form';
        });
    }
  




