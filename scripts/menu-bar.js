const navLinks = document.getElementById('nav-links');
const mobileMenu = document.querySelector('.menu-bar');
const logo = document.getElementById('logo');

const header = document.querySelector('.header');
mobileMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');

    let navLinkHTML = '';
   if(navLinks.classList.contains('active')){
     navLinkHTML +=`
    <li><a href="about.html" class="nav-link">About Us</a></li>
    <li><a href="support.html" class="nav-link">Support Us</a></li>
    <li><a href="donate.html" class="nav-link">Donate</a></li>
     <li><a href="volunteer.html" class="nav-link">volunteer</a></li>
   `
   navLinks.innerHTML = navLinkHTML;
       header.style.cssText = 'width: 30%; height: 100%; right: 0;'
       logo.style.display = 'block';

   }else{
    navLinks.innerHTML = '';
       logo.style.display = 'none';
       header.style.cssText = '';
   }
})