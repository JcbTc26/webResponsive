// La galería solo se inicializa cuando la página ya tiene todos sus elementos.
document.addEventListener("DOMContentLoaded", function () {
    const botonesAbrirGaleria = document.querySelectorAll(".abrirGaleria");
    const botonCerrarGaleria = document.getElementById("botonCerrarGaleria");
    const galeriaDisenos = document.getElementById("galeriaDisenos");
    const contenedorFoto = document.getElementById("contenedorFoto");

    if (botonesAbrirGaleria.length === 0 || !botonCerrarGaleria || !galeriaDisenos) {
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

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && !galeriaDisenos.classList.contains("oculto")) {
            botonCerrarGaleria.click();
        }
    });
});