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

   var email = document.getElementById("email").value.trim();
   var erroEmail = document.getElementById("erro-email");
   var mensagem = document.getElementById("mensagem");

   var emailValido = /^[^@]+@[^@]+$/;

   if (!emailValido.test(email)) {
       erroEmail.textContent = "Por favor, insira um e-mail válido (deve conter texto antes e depois do @).";
       erroEmail.style.display = "inline";  
       mensagem.style.display = "none";  
   } else {
       erroEmail.style.display = "none";  
       mensagem.style.display = "block";  
   }
});







