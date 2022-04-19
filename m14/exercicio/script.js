//IMPEDIR PROPAGAÇÃO DE EVENTO FORM
document.getElementById('formulario-01').addEventListener('submit', function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
})

/*Elementos no array*/
let form = document.querySelectorAll('#formulario-01')

/*Variável de controle*/
let c1 = 'nok'
let c2 = 'nok'
let c3 = 'nok'
let c4 = 'nok'
let c5 = 'nok'
let c6 = 'nok'

/*LISTENERS*/

//Verificação de campos vazios ou não e submissão
//nome
form[0][0].addEventListener('focusout', function(){
    if(validaNome(form[0][0].value) != true){
        form[0][0].style.border = "solid red 1px"
        c1 = 'nok'
    }else if(validaNome(form[0][0].value) == true){
        form[0][0].style.border = "solid green 1px"
        c1 = 'ok'
    }
})

//e-mail
form[0][1].addEventListener('focusout', function(){
    if(validateEmail(form[0][1].value) != true){
        form[0][1].style.border = "solid red 1px"
        c2 = 'nok'
    }else if(validateEmail(form[0][1].value) == true){
        form[0][1].style.border = "solid green 1px"
        c2 = 'ok'
    }
})

//telefone
form[0][2].addEventListener('focusout', function(){
    if(validarTel(form[0][2].value) != true){
        form[0][2].style.border = "solid red 1px"
        c3 = 'nok'
    }else if(validarTel(form[0][2].value) == true){
        form[0][2].style.border = "solid green 1px"
        c3 = 'ok'
    }
})

//cep
form[0][3].addEventListener('focusout', function(){
    if(validaCEP(form[0][3].value) != true){
        form[0][3].style.border = "solid red 1px"
        c4 = 'nok'
    }else if(validaCEP(form[0][3].value) == true){
        form[0][3].style.border = "solid green 1px"
        c4 = 'ok'
    }
})

//cidade
form[0][4].addEventListener('focusout', function(){
    if(validaNome(form[0][4].value) != true){
        form[0][4].style.border = "solid red 1px"
        c5 = 'nok'
    }else if(validaNome(form[0][4].value) == true){
        form[0][4].style.border = "solid green 1px"
        c5 = 'ok'
    }
})

//uf
form[0][5].addEventListener('focusout', function(){
    if(validaUF(form[0][5].value) != true){
        form[0][5].style.border = "solid red 1px"
        c6 = 'nok'
    }else if(validaUF(form[0][5].value) == true){
        form[0][5].style.border = "solid green 1px"
        c6 = 'ok'
    }
})

//submissão
form[0][6].addEventListener('click', function(){
    if(c1=='nok' || c2=='nok' || c3=='nok' || c4=='nok' || c5=='nok' || c6=='nok'){
        mensagem.innerHTML = "Revise os campos!"
    }else{
        alert("Obrigado!")
        location.reload()
    }

})







/*FUNÇÕES*/

//Valida Nome
function validaNome(nome){
    let regnome = /^[a-záàâãéèêíïóôõöúçñ ]+$/i
    return regnome.test(nome)
}

//Validação de Email
function validateEmail(email){
    let reg = /\S+@\S+\.\S+/
    return reg.test(email)
}

//Validação de CEP
function validaCEP(numCep) {
    let regC = /^[0-9]{5}-[0-9]{3}$/;
    return regC.test(numCep)
}

//Validação de UF
function validaUF(uf) {

    let regUF = /A[CLMP]|BA|CE|ES|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|[GT]O/i;
    return regUF.test(uf);

}
//Validação de telefone - Método alternativo
function validarTel (tel) {
    let regtel = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
    return regtel.test(tel);
}


