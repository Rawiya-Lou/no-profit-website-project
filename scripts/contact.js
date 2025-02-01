
document.addEventListener('DOMContentLoaded', () =>{

    const buttons = document.querySelectorAll('.js-faq-button');
    const answers = document.querySelectorAll('.js-answer');
    buttons.forEach((button, index) =>{
        button.addEventListener('click', () =>{
            const answer =answers[index];
            if(answer.style.display === 'block' && answer.style.maxHeight){
                answer.style.display = 'none';
                // this will make it open in a smoth way
                answer.style.maxHeight = null;
                button.querySelector('.js-icon').innerHTML =`<i class="fa-solid fa-plus plus-icon icon"></i>`;
            }else{
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight+ 'rem'; //expand
                button.querySelector('.js-icon').innerHTML =`<i class="fa-solid fa-minus minus-icon icon"></i>`;
            }
        });
    
    });
});



