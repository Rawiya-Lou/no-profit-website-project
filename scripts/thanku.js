
const button = document.getElementById("subButton");

const overlay = document.getElementById("overlay");

const thankYouMessage = document.getElementById("thankYouMessage");

function closeMessageButton(){
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener('click', () =>{
        overlay.style.display = 'none'; 
        thankYouMessage.style.display = 'none';
       
    });
}


button.addEventListener('click', () =>{
    overlay.style.display = 'block'; 
    thankYouMessage.classList.add('open-message');
    thankYouMessage.style.display = 'block';
    closeMessageButton();
   
});
