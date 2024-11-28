//Microinteracciones JSON
//https://lottiefiles.com/featured

/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("btn-login").addEventListener("click", login);


/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Por favor verifique los datos",
        text: ptext,
        confirmButtonText: "Volver",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/6d5a97cc-5416-4728-8399-cda607180e31/swyOw5B7Bj.json"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            //este es el texto que llevar el parametro de la funcion validación_alert
            text = "Por favor no deje espacio vacíos";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 3000,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/2557bbc7-c1e4-4414-a06a-7be43c94a7c8/eg57MyhwJT.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}