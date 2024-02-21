function guardar(nombre, apellido, cedula, telefono, direccion){
    let tabla = document.getElementById("mitabla");

    let row = tabla.insertRow(-1);

    let cell1 = row.insertCell(0);
    nombre = document.getElementById("nombre").value

    let cell2 = row.insertCell(1);
    apellido = document.getElementById("apellido").value

    let cell3 = row.insertCell(2);
    cedula = document.getElementById("cedula").value

    let cell4 = row.insertCell(3);
    telefono = document.getElementById("telefono").value

    let cell5 = row.insertCell(4);
    direccion = document.getElementById("direccion").value

    cell1.textContent = (nombre);
    cell2.textContent = (apellido);
    cell3.textContent = (cedula);
    cell4.textContent = (telefono);
    cell5.textContent = (direccion);

}
























