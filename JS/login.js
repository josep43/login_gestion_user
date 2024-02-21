function login(){
    let user=document.getElementById("usuario").value;
    let password=document.getElementById("clave").value;

    if (user=="José" && password== "12345") {
        window.location= "bienvenidos.html";
    } else {
        alert("Los datos no coinciden")
    }
}