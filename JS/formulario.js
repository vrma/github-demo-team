const arrayDeObjetosEstudiante = [];

const formulario = document.querySelector("#formulario1");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Se ha impedido el envio normal del formulario");

    const objEstudiante = new Object();

    objEstudiante.nombre = document.querySelector("#nombre").value;
    objEstudiante.primerApellido = document.querySelector("#primerApellido").value;

    arrayDeObjetosEstudiante.push(objEstudiante);

    console.log("El array de Objetos Estudiantes: ");
    console.log(arrayDeObjetosEstudiante);

});