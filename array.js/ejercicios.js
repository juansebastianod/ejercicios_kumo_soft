function implimir() {
  let array = [5, 6, 3, 2, 4];
  let unir = "";

  for (let i = 0; i < array.length; i++) {
    unir += array[i] + " ";
  }

  return unir;
}

function media() {
  let array = [5, 6, 3, 2, 4, 3, 6, 3, 1, 9];

  const suma = array.reduce((accumulator, current) => accumulator + current);

  return suma / array.length;
}

function buscarIndice(a) {
  let array = [5, 6, 3, 2, 4, 3, 6, 3, 1, 9];

  let indice = " ";
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma = array.indexOf(a);
    if (suma != -1) {
      indice += suma + " ";
    }

    array[suma] = a + 1;
  }

  return indice;
}

function notas(array) {
  let aprobado = Array();
  let desaprobado = Array();
  let nota = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      aprobado.push(array[i]);
    } else {
      desaprobado.push(aray[i]);
    }
  }

  promedioA =
    aprobado.reduce((accumulator, current) => accumulator + current) /
    aprobado.length;
  promedioB =
    desaprobado.reduce((accumulator, current) => accumulator + current) /
    desaprobado.length;

  let msj =
    "el promediode aprobado es " +
    promedioA +
    " - el promedio de desaporbado es " +
    promedioB +
    " cantidad de aprovados es " +
    aprobado.length +
    " - cantidad de desaprobados es " +
    desaprobado.length;

  return msj;
}

function mayorMenor(aray){

aray.sort(function(a,b){return a - b;})
console.log("soy el array  nuevo "+aray)
let entero=aray.length-1/2
let medio=0;
entero=Math.round(entero,1)

if(aray.length%2!=0){

     medio=([aray.length/2]+[(aray.length/2)+1]);

}else{


    medio=aray[entero];
}






let msj="el mayor es "+aray[aray.length-1]+", el menor es "+aray[0]+" y el valor medio "+medio;


return msj;

}

function mayorMenor(array) {
  array.sort();

  suma = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  array.length;

  let mjs =
    "numero menor " +
    array[0] +
    " numero mayor " +
    array[array.length - 1] +
    " promedio " +
    suma;
  return mjs;
}

function StringArray(numero) {
  let array = numero.split(",");

  let arr = array.map(function (element) {
    return +element;
  });

  return arr;
}

function multiplo(array) {
  let arr = array.map(function (element) {
    return element * 2;
  });

  return arr;
}

function valorMedio(tamano) {
  let arr = Array();
  if (tamano % 2 != 0) {
    for (let i = 0; i < tamano; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }

    console.log(arr);

    return arr[(arr.length - 1) / 2];
  }

  return "el tamaño es par";
}

function sumarFilasYColumnas(matriz) {
  let suma = 0;
  let suma_fila = Array();
  let suma_coml = Array();
  let i = 0;
  let j = 0;

  for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[0].length; j++) {
      suma = suma + matriz[i][j];
    }

    suma_fila.push(suma);
    suma = 0;
  }

  suma = 0;
  for (j = 0; j < matriz.length; j++) {
    for (i = 0; i < matriz[0].length; i++) {
      suma = suma + matriz[i][j];
    }

    suma_coml.push(suma);
    suma = 0;
  }

  let filas = "filas" + "\n";
  let columna = "columnas" + "\n";

  suma_fila.map(function (element) {
    filas = filas + element + "\n";
  });

  suma_coml.map(function (element) {
    columna = columna + element + "\n";
  });
  return filas + columna;
}

function multiplo(tamano, multiplo) {
  let arr = new Array();

  for (let i = 0; i < tamano; i++) {
    arr.push((i + 1) * multiplo);
  }

  return arr;
}

let a = [2, 5, 2, 4, 1];
let matriz = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

//console.log(mayorMenor(a));
//console.log(StringArray("1,2,3,4,5,6"))
//console.log(multiplo(a))
//console.log(valorMedio(11))
//console.log(multiplo(8,4))
//console.log(sumarFilasYColumnas(matriz));




var aray = Array();

for (let i = 0; i < 9; i++) {

  aray.push(Math.floor(Math.random() * 20));

}



//console.log("soy el array "+aray)
//console.log(implimir())
//console.log(media())
//console.log(buscarIndice(6));
//console.log(notas(aray))
//console.log(mayorMenor(aray))



//const array1 = [1, 3, 2];
//console.log(Math.max(...array1));
//var numeros = [3,6,67,6,23,11,100,8,93,9,17,24,7,2,33,45,28,33,23,12,99,100];
//console.log(Math.min(...numeros))


