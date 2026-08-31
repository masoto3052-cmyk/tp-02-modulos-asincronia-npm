
const { leerJson, escribirArchivo } = require("./archivos");
const { crearInforme } = require("./juegos");
const path = require("node:path");
const pc = require("picocolors");

const rutaJson = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");
async function main() {
    const juegos = await leerJson(rutaJson);
    const informe = crearInforme(juegos);
    await escribirArchivo(rutaSalida, informe);
}
async function main() {

    try {
        const juegos = await leerJson(rutaJson);

        const informe = crearInforme(juegos);

        await escribirArchivo(rutaSalida, informe);
        console.log(informe);
        console.log(pc.green("Informe generado correctamente."));

    } catch (error) {
        console.error(pc.red("Ocurrió un error:"), error.message);
        process.exitCode = 1;
    }
}

main();