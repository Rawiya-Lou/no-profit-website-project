const button = document.getElementById("subButton");

const overlay = document.getElementById("overlay");

const thankYouMessage = document.getElementById("thankYouMessage");



function closeMessageButton(){
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener('click', () =>{
        overlay.style.display = 'none'; 
        thankYouMessage.style.display = 'none';
        return;
    });
}


button.addEventListener('click', () =>{

    overlay.style.display = 'block'; 
    thankYouMessage.style.display = 'block';
    closeMessageButton();
});