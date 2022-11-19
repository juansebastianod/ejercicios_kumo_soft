function conteoDecreciente() {
  var numero = 50;
  var suma=0;

  while (numero >= 40) {
    console.log("numero " + numero);
    suma = suma + numero;

    --numero;
  }

  console.log("suma " +suma);
}

function contadorX2() {
  for (var i = 1; i <= 5; i++) {
    console.log(i * 2);
  }
}
function suma() {
  var suma = 0;
  /*0 al 99 los primeros 100*/
  for (var index = 0; index < 100; index++) {
    suma = suma + index;
  }

  console.log(suma);
}

function factorial(numero) {

  if(numero>0&&numero<11){
  var multi = 1;
  while (numero != 1) {
    multi = multi * numero;
    --numero;

  }

  return multi }else{
   return  "el numero no esta entre 1 a 10 "
  }


}

function serie(n) {
  var series = 0.0;
  for (var i = 1; i <= n; i++) {
    series = series + 1.0 / i;

    console.log("hola " + 1 / i);
  }
  return series;
}



function fionachi(n){

    var  num1 = 0, num2 = 1, suma = 1;
 
    // Muestro el valor inicial
    console.log(num1);
     
    for (var i=1; i < n; i++) {
         
        
        console.log("codigo fionachi "+suma);
         
      
        suma = num1 + num2;
       
        num1 = num2;
        num2 = suma;
         
         
    }



}

function notas (n1,n2,n3,n4,n5){

let array=[n1,n2,n3,n4,n5]

for(let i=0;i<array.length;i++){

  if(array[i]>3.0){

    console.log("la notas mayores de 3 fueron "+array[i])
  }


     

}

}

function factorial2(numero){

if(numero>=0){

  var multi = 1;
  while (numero != 1) {
    multi = multi * numero;
    --numero;

  }

  return multi 

}else{



  return "No es positivo "
}


  
}

function pares(inicio,fin){

  let a=0
  let b=0
if(inicio<=fin){

  a=inicio
  b=fin
}else{

  a=fin
  b=inicio
}
for(let i=a;i<=b;i++){


  if(i%2==0){
console.log("pares "+i)

  }
}
}

function ahorro(){




}



//console.log(fionachi(10))
console.log(notas(4.2,3.7,4,2.0,2))
//console.log("factorial de  11 "+factorial(11))
//console.log(factorial2(-6))
//console.log(conteoDecreciente())
//console.log(pares(100,50))

