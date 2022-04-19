/*Stop default behavior of the form submit*/

document.getElementById('form1').addEventListener('submit', function(event){
    event.preventDefault()
    event.stopImmediatePropagation()
})


/*Functions*/

//ValidaeEmail
function validateEmail(email){
    let reg = /\S+@\S+\.\S+/
    return reg.test(email)
}
//Subscribe Verify
function verify(){
    let email2 = document.getElementById("email2")
    if(validateEmail(email2.value) == false){
        alert("Type a valid e-mail!")
    }else if(validateEmail(email2.value) == true){
        alert("Thanks!")
        location.reload()
    }
}


/*Listeners*/

//Take form and submit button
let form1 = document.querySelectorAll('#form1')
let button = document.querySelector('section form div input[type="button"]')


form1[0][0].addEventListener('focusout', function(){
    if(form1[0][0].value == ""){
        form1[0][0].style.backgroundColor = "#ff8080"
        alert("Your name is required!")
    }else{
        form1[0][0].style.backgroundColor = "rgb(255, 255, 255)"
    }
})


form1[0][2].addEventListener('focusout', function(){
    if(form1[0][2].value == ""){
        form1[0][2].style.backgroundColor = "#ff8080"
        alert("Your email is required!")
    }else{
        form1[0][2].style.backgroundColor = "rgb(255, 255, 255)"
    }
})


//Verify the valid data
button.addEventListener('click', function(){

    if(form1[0][0].value == "" || form1[0][2].value == ""){
        alert("At least Name and Email are required.")
    }else if(form1[0][2].value != ""){
        if(validateEmail(form1[0][2].value) == false){
            alert("Type a valid e-mail!")
        }else{
            alert("Thanks!")
            location.reload()
        }
        
    }
} )



