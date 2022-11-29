function sumatoria(array) {
  let suma = array.reduce((accumulator, current) => accumulator + current);
  return suma;
}

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

  const suma = sumatoria(array);

  return suma / array.length;
}

function buscarIndice(a) {
  let array = [5, 6, 3, 2, 4, 3, 6, 3, 1, 9];

  const incidencias = (element) => element == a;

  let indice = array.findIndex(incidencias);

  return indice;
}

var aray = Array();

for (let i = 0; i < 10; i++) {
  aray.push(Math.floor(Math.random() * 20));
}

function notas(array) {
  let aprobado = array.filter((x) => x >= 10);
  let desaprobado = array.filter((y) => y < 10);

  promedioA = sumatoria(aprobado) / aprobado.length;
  promedioB = sumatoria(desaprobado) / desaprobado.length;

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

let a = [2, 5, 2, 4, 1];

function mayorMenor(a) {
  a.sort();

  let media = sumatoria(a) / a.length;

  let mjs =
    "numero menor " +
    array[0] +
    " numero mayor " +
    array[array.length - 1] +
    " promedio " +
    media;
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

    return arr[(arr.length - 1) / 2];
  }

  return "el tamaño es par";
}


let matriz = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 6],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

function sumarFilasYColumnas(matriz) {
  let suma_fila = Array(5);
  let suma_coml = Array(5);
  let suma=0;

  for (let i = 0; i < matriz.length; i++) {
    suma_fila.push(sumatoria(matriz[i]));
  }


  for (let j = 0; j < matriz.length; j++) {
    for (let i = 0; i < matriz[0].length; i++) {
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


