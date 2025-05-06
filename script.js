function login(){
    const username = document .getElementById  ("username"). value;
    const password = document.getElementById  ("password"). value;
 
    if (username==="admin" && password==="1234"){
        window.location.hret="bemvindo.html"
    } else{
        document.getElementById("mensagem").textContent="usuario ou senha incorretos."
    }
}