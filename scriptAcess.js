
const url_email = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard"
const button = document.getElementById("botaoAcessar");
const error = document.getElementById("mensagemError");



button.addEventListener("click", ()=>{
  console.log("botao pressionado")
  validarEmail();
});

// Função para verificar o email
async function validarEmail() {
const emailInput = document.getElementById("email").value.trim();

try{
  var emailReturn = await fetch(`${url_email}/GetPersonByEmail?Email=${emailInput}`);
  
  if(emailReturn.ok){
    var infoUsuario = await emailReturn.json();

    localStorage.setItem("usuario", JSON.stringify({
      Name: infoUsuario.Name,
      Email: infoUsuario.Email,
      Id: infoUsuario.Id,
      NumberPhone: infoUsuario.PhoneNumber,
    }))

    window.location.href = "./telaBoard.html";
    
  }else{
    error.style.display = "block";
   
  }

  /* UM ERRO INESPERADO */
}catch(error){ 
    error.innerText = "Erro ao achar o email!"
    error.style.display = "block";

}

}


