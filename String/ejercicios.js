function convertirPalabra(nombre) {
    let mayuscula = nombre.toUpperCase();
    let minuscula = nombre.toLowerCase();
    let primeraMayus = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
  
    return (
      "palabra en mayuscula " +
      mayuscula +
      " palabra en minuscula " +
      minuscula +
      " primera en mayuscula " +
      primeraMayus
    );
  }
  
  function cantidadLetras(nombre) {
    let cantidad = nombre.length;
  
    return nombre.toUpperCase() + " tiene " + cantidad + " letras";
  }
  
  function numeroTelefono(telefono) {
    let arr = telefono.split("-");
    arr.pop();
    arr.shift();
  
    let a = arr[0];
    return a;
  }
  
  function fraseInvertida(frase) {
    let arr = frase.split(" ");
    arr.reverse();
  
    let invertida = arr.join(" ");
  
    return invertida;
  }
  
  function correo(email) {
    let arr;
    let nuevo;
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    ) {
      arr = email.split("@");
      nuevo = arr[0] + "@" + "ceu.es.";
    } else {
      nuevo = "no es una direccion de correo ";
    }
  
    return nuevo;
  }
  
  function fecha(fecha) {
   
    

    let res = fecha.split('/');


    console.log(`Fecha de nacimiento: ${res[0]} de ${res[1]} de ${res[2]}`);
  }
  
  
  function prodcutos(producto) {
    let arr = producto.split(",");
  
    let palabras = "";
  
    arr.forEach(function (x) {
      palabras = palabras + x + "\n";
    });
  
    return palabras;
  }
  
  
  function contarPalabra(oracion) {
    let arr = oracion.split(" ");
  
    return arr.length;
  }
  
  
  
  function capicua(palabra) {
    let arr = palabra.split("");
    arr.reverse();
    let invertir = arr.join("");
  
    if (invertir == palabra) {
      return "es capicua ";
    }
  
    return "no es capicua";
  }


  
