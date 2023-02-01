let miNombre = new  String("Angie");
let miApellido = new  String("Robayo");
console.log(`Nombre: ${miNombre} ${miApellido}`);
let miEdad = new Number(24);
console.log(`Edad: ${miEdad}`);
let esMujer = new Boolean(true);
console.log(`Es mujer: ${esMujer}`);
let otrosDatos = new Object({colorFavorito: "Azul", 
                  animalPreferido: "Perro",
                  frutaFavorita: "Granadilla"});
console.log(`Datos adicionales`);
console.log(`Color Favorito: ${otrosDatos.colorFavorito
                                +", Animal Preferido: "+ otrosDatos.animalPreferido 
                                +", Fruta Favorita: "+ otrosDatos.frutaFavorita}`);

alert("Esta es una alerta!!");
confirm("¿Quieres continuar a la siguiente alerta?");
prompt("Ingresa la palabra 'OK' si te quedó claro todo.");