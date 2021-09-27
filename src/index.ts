import { leerTeclado } from "./util/entradaTeclado";
console.log("Hola mundo");
// Creamos la variable función main que llamamos main
let main = async () => {
  const valor = await leerTeclado("Dime algo");
  console.log(`Me has dicho: ${valor}`);
};
// Invocamos a la función
main();
