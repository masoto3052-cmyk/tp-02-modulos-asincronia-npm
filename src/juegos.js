
function crearInforme(juegos) {

    const encabezado = `CATÁLOGO DE JUEGOS DE MESA
===========================
Cantidad de juegos: ${juegos.length}`;

    
    const informe = juegos.map((juego, indice) => {
    return `Juego:${indice + 1} ${juego.titulo}\nEditorial: ${juego.editorial}\nAño: ${juego.anio}\njugadores minimos: ${juego.jugadoresMin}\njugadores maximos: ${juego.jugadoresMax}\n Categorias: ${juego.categorias.join(", ")}\ndisponible: ${juego.disponible ? "Disponible" : "No disponible"}\n\n`;
    });

    return encabezado + informe.join("");
}

module.exports = {
    crearInforme
};