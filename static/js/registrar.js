let btnSend = document.querySelector("#btn-send");

//ESCUCHAR UN EVENTO
btnSend.addEventListener('click',function(){
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    //Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(firstname.value.trim().length);
    if(firstname.value.trim()=='' || firstname.value.trim().length < 3 ){
        document.querySelector("#error-firstname").innerHTML ="Debes completar el campo Nombre";
         alert('ERROR! Debes completar el campo Nombre');
    }
    if(firstname.value.trim().length < 3){
        document.querySelector("#error-firstname").innerHTML ="El nombre no puede tener menos de 3 carecteres";
       // alert('ERROR! Debes completar el campo Nombre');
     }

    if(lastname.value.trim()==''){
        document.querySelector("#error-lastname").innerHTML ="Debes completar el campo Apellido";
     alert('ERROR! Debes completar el campo Apellido');
    }

    if(!emailRegex.test(email.value)){
        document.querySelector("#error-email").innerHTML ="El email no tiene un formato valido.";
        alert('ERROR! Debes completar el campo Apellido');
    }

    // alert('Los datos fueron enviados...');
    // alert('Holaaaa! '+inputFirstname.value)
});