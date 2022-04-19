var janelaLogin = new bootstrap.Moddal(document.getElementById("loginNegado")); 

function rotaCadastro() {
    window.location.href = "../registro.html";
}
function rotaRecuperar(){
    window.location.href = "../recuperar.html";
}
function rotaLogin() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if (email === "eriveltonnunes14@gmail.com" && senha === "nunes") {
        window.location.href = "../index.html";
    } else {
        janelaLogin.show();
    }

}