const dateInput = document.querySelectorAll('.js-date-input');
dateInput.forEach(date => {
    date.addEventListener('click', () =>{
        alert('stay tunned for the event you have selected');
    });
});