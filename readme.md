# Trabajo Práctico 02 - Módulos, asincronía y NPM

 descripción

Aplicación desarrollada con Node.js para gestionar un catálogo de juegos de mesa.

El programa lee los datos desde un archivo JSON, transforma la información en un catálogo de texto y genera el archivo `catalogo-juegos.txt` dentro de la carpeta `salida`.

El proyecto utiliza módulos CommonJS, operaciones asíncronas con `async/await` y la dependencia `picocolors` para mostrar mensajes coloreados en la terminal.

## Instalación

Para instalar las dependencias del proyecto ejecutar:

npm install

## Ejecución

Para ejecutar el programa:

npm start

1. ¿Qué responsabilidad tiene cada módulo?

archivos.js se encarga exclusivamente de trabajar con el sistema de archivos. Contiene las funciones para leer el JSON y escribir el archivo de texto.

juegos.js se encarga de trabajar con los datos de los juegos y generar el informe en formato de texto.

index.js coordina todo el proceso: importa los módulos, construye las rutas, lee los datos, genera el informe y escribe el resultado.

2. ¿Qué diferencia existe entre exportar una función y ejecutarla?

Exportar una función permite que otro módulo pueda utilizarla. Por ejemplo, module.exports permite compartir crearInforme.

Ejecutar una función significa llamarla para que realice su tarea, por ejemplo crearInforme(juegos).

3. ¿Qué representa la promesa devuelta por fs.readFile?

Representa una operación que se está realizando de forma asíncrona. La promesa se resuelve cuando Node termina de leer el archivo y permite obtener su contenido.

4. ¿Por qué await se utiliza dentro de una función async?

Porque await permite esperar el resultado de una operación asíncrona antes de continuar con la siguiente instrucción. La función que contiene ese await debe ser async.

5. ¿Qué errores pueden llegar al catch de main?

Pueden llegar errores producidos durante la lectura del JSON, por ejemplo si el archivo no existe o el contenido no es válido, y errores producidos durante la creación o escritura del archivo.

6. ¿Por qué se publican package.json y package-lock.json, pero no node_modules?

package.json contiene la información del proyecto y sus dependencias. package-lock.json registra las versiones concretas utilizadas.

node_modules contiene las dependencias instaladas y puede reconstruirse utilizando npm install, por eso no es necesario incluirlo en el repositorio.

7. ¿Para qué se utiliza picocolors y por qué figura en dependencies?

picocolors se utiliza para mostrar mensajes de éxito y error con colores en la terminal.

Figura en dependencies porque es una dependencia que el programa necesita para ejecutarse.