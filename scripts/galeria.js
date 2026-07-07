document.addEventListener("DOMContentLoaded", function () {
    const botonesAbrirGaleria = document.querySelectorAll(".abrirGaleria");
    const botonCerrarGaleria = document.getElementById("botonCerrarGaleria");
    const galeriaDisenos = document.getElementById("galeriaDisenos");
    const contenedorFoto = document.getElementById("contenedorFoto");

    if (botonesAbrirGaleria.length === 0) {
        console.error("No existe ningún botón con la clase '.abrirGaleria'");
        return;
    }

    if (!botonCerrarGaleria) {
        console.error("No existe el botón con id='botonCerrarGaleria'");
        return;
    }

    if (!galeriaDisenos) {
        console.error("No existe la sección con id='galeriaDisenos'");
        return;
    }

    botonesAbrirGaleria.forEach(function (boton) {
        boton.addEventListener("click", function (evento) {
            evento.preventDefault();

            galeriaDisenos.classList.remove("oculto");
            document.body.classList.add("sinScroll");

            galeriaDisenos.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    botonCerrarGaleria.addEventListener("click", function () {
        galeriaDisenos.classList.add("oculto");
        document.body.classList.remove("sinScroll");

        if (contenedorFoto) {
            contenedorFoto.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});