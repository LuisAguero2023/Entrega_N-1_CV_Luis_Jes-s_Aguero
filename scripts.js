let menuVisible = false;
//Funcion para ocultar o mostrar el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

//Funcion para ocultar el menu responsive una vez que seleccionamos una opcion
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = true;
}



