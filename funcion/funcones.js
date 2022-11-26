function parOImpar(n){

if(n%2==0){
    return "Es par";
}

return "Es impar";


}

function media(num,num2){

let aritmetica=(num+num2)/2;

return aritmetica;

}

function ejercicio7(num,num2,num3){

    let arr=[num,num2,num3]
    var mov
    var mov2
    let pasos=" ";
    
   for(var i=0;i<arr.length-1;i++){
    mov=arr[i]
    mov2=arr[i+1]
if(arr[i]>arr[i+1]){
   pasos=pasos+arr[i]+" es mayor que "+arr[i+1]+" ,";
   arr[i]=mov2
   arr[i+1]=mov

  
}else{
   
    pasos=pasos+arr[i+1]+" es que mayor que "+arr[i]+",";

}

   }
   
  mov=arr[0]
  mov2=arr[1]

  if(arr[0]>arr[1]){
    pasos=pasos+arr[0]+" es que mayor que "+arr[1];


    arr[0]=mov2
    arr[1]=mov

  }else{

    pasos=pasos+arr[1]+" es que mayor que "+arr[0];

  }


  pasos=pasos+" El orden de los numeros asendente  es "+arr[0]+", "+arr[1]+", "+arr[2]

return pasos;
    



}

function ejercicio8(num,num2,num3){

  let arr=[num,num2,num3]
  var mov
  var mov2
  let pasos=" ";
  
 for(var i=0;i<arr.length-1;i++){
  mov=arr[i]
  mov2=arr[i+1]
if(arr[i]<arr[i+1]){
 pasos=pasos+arr[i]+" es menor que "+arr[i+1]+" ,";
 arr[i]=mov2
 arr[i+1]=mov


}else{
 
  pasos=pasos+arr[i+1]+" es que menor que "+arr[i]+",";

}

 }
 
mov=arr[0]
mov2=arr[1]

if(arr[0]<arr[1]){
  pasos=pasos+arr[0]+" es que menor que "+arr[1];


  arr[0]=mov2
  arr[1]=mov

}else{

  pasos=pasos+arr[1]+" es que menor que "+arr[0];

}


pasos=pasos+" El orden de los numeros decendente es "+arr[0]+", "+arr[1]+", "+arr[2]




return pasos;
  



}

function fibonacciRecursion(n){


  if(n == 0){
		return 0;
	}
	if(n == 1 || n == 2){
			return 1;
		}
	return fibonacciRecursion(n-2) + fibonacciRecursion(n-1);
	


}


function conteo(n){

  if(n==1){

    return " 1";
  }


   // console.log("soy la n "+n)
   let numeros=" "+n+conteo(n-1);
    return numeros;

}


function binario(n){

if(n<2){

return 1;
}

n=n.toFixed();

console.log("soy la n  "+n)
let operacion=n%2;

if(operacion==0){
  
  return binario(n/2)+"0";

}else{

  return binario((n-1)/2)+"1";


}


}

function invertir(n){
n=n.toFixed();

if(n<10){

  return n 
}


return (n%10)+invertir(+n/10)



}


//console.log(parOImpar(13))
//console.log(media(2,8))
//console.log(ejercicio7(4,5,1))
//console.log(ejercicio8(4,5,1))
//console.log(fibonacciRecursion(8))
//console.log(conteo(10))
//console.log(binario(842))
console.log(invertir(1281))