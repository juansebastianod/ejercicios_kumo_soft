function conteoDecreciente() {
  var numero = 50;
  var suma=0;

  while (numero >= 40) {
    console.log("numero " + numero);
    

    --numero;
  }


}

function contadorX2() {
  for (var i = 1; i <= 5; i++) {
    console.log(i * 2);
  }
}

function suma() {
  var suma = 0;
  
  for (var index = 1; index <=100; index++) {
    suma += index;
  }

   return suma;
}

function factorial(numero) {

  if(numero>0&&numero<11){
  var multi = 1;
  while (numero != 1) {
    multi *=numero;
    --numero;

  }

  return multi; }


}

function serie(n) {
  var series = 0;
  for (var i = 1; i <= n; i++) {
    series = series + 1/ i;

  
  }
  return series;
}



function fionacci(n){

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

let array=[n1,n2,n3,n4,n5];
let a=new Array();

for(let i=0;i<array.length;i++){

  if(array[i]>3){

    
    a.unshift(array[i])

  }
       

}
return a;

}

function factorial2(numero){

if(numero>=0){

  var multi = 1;
  while (numero != 1) {
    multi *=numero;
    --numero;

  }

  return multi ;

}


  
}

function pares(inicio,fin){

  let a=0;
  let b=0;
  
  let palabra=" ";
  
if(inicio<=fin){

  a=inicio
  b=fin
}else{

  a=fin
  b=inicio
}
for(let i=a;i<=b;i++){


  if(i%2==0){
  
  palabra=palabra+i+", "
  }
}

return palabra;
}





//console.log(fionachi(10))
//console.log(notas(4.2,3.7,4,2.0,2))
//console.log("factorial de  11 "+factorial(11))
//console.log(factorial2(5))
//console.log(conteoDecreciente())
//console.log(pares(100,50))
//console.log(suma())

