const arrayDeObjetosEstudiante = [];

const formulario = document.querySelector("#formulario1");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    // alert("Se ha impedido el envio normal del formulario");

    const objEstudiante = new Object();

    objEstudiante.nombre = document.querySelector("#nombre").value;
    objEstudiante.primerApellido = document.querySelector("#primerApellido").value;
    objEstudiante.segundoApellido = document.querySelector("#segundoApellido").value;
    objEstudiante.genero = document.querySelector("input[name=genero]:checked").value;
    objEstudiante.fechaAlta = document.querySelector("#fechaAlta").value;
    objEstudiante.facultad = document.querySelector("#facultad").value;

    arrayDeObjetosEstudiante.push(objEstudiante);

    console.log("El array de Objetos Estudiantes: ");
    console.log(arrayDeObjetosEstudiante);

    // Agregar el estudiante al cuerpo de la tabla

    const tableBody = document.querySelector("#tableBody");

    // Eliminar previamente los hijos del elemento cuyo id es tableBody
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Recorrer el array de objeto estudiante
    for (const objEstudiante of arrayDeObjetosEstudiante) {

        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        const primerApellido = document.createElement("td");
        const segundoApellido = document.createElement("td");
        const genero = document.createElement("td");
        const fechaAlta = document.createElement("td");
        const facultad = document.createElement("td");

        nombre.textContent = objEstudiante.nombre;
        primerApellido.textContent = objEstudiante.primerApellido;
        segundoApellido.textContent = objEstudiante.segundoApellido;
        genero.textContent = objEstudiante.genero;
        fechaAlta.textContent = objEstudiante.fechaAlta;
        facultad.textContent = objEstudiante.facultad;

        fila.appendChild(nombre);
        fila.appendChild(primerApellido);
        fila.appendChild(segundoApellido);
        fila.appendChild(genero);
        fila.appendChild(fechaAlta);
        fila.appendChild(facultad);

        tableBody.appendChild(fila);
    }


});


const filtroPorFacultades = document.querySelector("#filtroFacultades");

filtroPorFacultades.addEventListener("change", () => {

    // Reuperamos la facultad seleccionada
    const facultad = filtroPorFacultades.value;

    console.log("Facultad seleccionada es : ", facultad);

    // Agregar el estudiante al cuerpo de la tabla

    const tableBody = document.querySelector("#tableBody");

    // Eliminar previamente los hijos del elemento cuyo id es tableBody
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Recorrer el array de objeto estudiante
    for (const objEstudiante of arrayDeObjetosEstudiante) {

        if (objEstudiante.facultad === facultad) {
            const fila = document.createElement("tr");

            const nombre = document.createElement("td");
            const primerApellido = document.createElement("td");
            const segundoApellido = document.createElement("td");
            const genero = document.createElement("td");
            const fechaAlta = document.createElement("td");
            const facultad = document.createElement("td");

            nombre.textContent = objEstudiante.nombre;
            primerApellido.textContent = objEstudiante.primerApellido;
            segundoApellido.textContent = objEstudiante.segundoApellido;
            genero.textContent = objEstudiante.genero;
            fechaAlta.textContent = objEstudiante.fechaAlta;
            facultad.textContent = objEstudiante.facultad;

            fila.appendChild(nombre);
            fila.appendChild(primerApellido);
            fila.appendChild(segundoApellido);
            fila.appendChild(genero);
            fila.appendChild(fechaAlta);
            fila.appendChild(facultad);

            tableBody.appendChild(fila);
        }
    }



});