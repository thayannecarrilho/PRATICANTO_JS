const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMessages = document.querySelector(".error-message")


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    validateInputs();
})
function setError(input, errorMessage){
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add("error")
}

function resetErrors(){
    errorMessages.forEach((msg) =>{
        msg.textContent = "";
    })
    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")
}

function validateInputs(){
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()
    if(nomeValue === ""){
        setError(nome, "Preenchimento obrigatório");
    }
    if(emailValue === ""){
        setError(email, "Preenchimento obrigatório");
    }else if(!isValidEmail(emailValue)){
        setError(email, "E-mail inválido!")
    }

    if(assuntoValue === ""){
        setError(assunto, "Preenchimento obrigatório");
    }
    if(mensagemValue === ""){
        setError(mensagem, "Preenchimento obrigatório");
    }
}

