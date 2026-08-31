
const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJson(ruta) {
    const contenido = await fs.readFile(ruta, "utf8");


    return JSON.parse(contenido);


}

async function escribirArchivo(ruta, texto) {
    const carpeta = path.dirname(ruta);

    await fs.mkdir(carpeta, { recursive: true });

    await fs.writeFile(ruta, texto, "utf8");
}

module.exports = {
    leerJson, escribirArchivo
};
