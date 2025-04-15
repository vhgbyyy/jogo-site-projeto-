const navLinks = document.querySelectorAll (".nav-menu .nav-link");
const menuopenbutton = document.querySelector ("#menu-open-button");
const menuclosebutton =document.querySelector ("#menu-close-button");

menuopenbutton.addEventListener("click", () => {
   document.body.classList.toggle("show-mobile-menu");
});

menuclosebutton.addEventListener("click", () => menuopenbutton.click ());

navLinks.forEach(link => {
   link.addEventListener("click", () => menuopenbutton.click());
});


document.getElementById("form-contato").addEventListener("submit", function(event) {
   event.preventDefault();  

   var email = document.getElementById("email").value;
   var erroEmail = document.getElementById("erro-email");
   
   if (!email.includes("@")) {
       erroEmail.style.display = "inline";  
   } else {
       erroEmail.style.display = "none";  
       document.getElementById("mensagem").style.display = "block";  
   }
});






