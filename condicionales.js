
function criminal(respuesta) {
   
   
    switch(respuesta){

        case "si":
            console.log("irás a la cárce")
            break;
        
        case "no":
            break;


    }



  }

  function ImparoPar(numero) {

    if(numero%2==0){
        return console.log("numero es par")

    }
    else{

        return console.log("es impar")
    }

  }

  function multiplo(numero1,numero2) {
        

    if(numero1%numero2==0||numero2%numero1==0){

         console.log("son multiplos")

    }else(

        console.log("no son multiplos")

    )



  }

  function encontrarMayor(numero1,numero2) {
  

   if(numero1>numero2){
    console.log("el numero uno es el mayor")
   }else{

    console.log("el numero dos  es el mayor")
   }
}


function Calificacion(nota){


    if(nota<6){console.log("insuficiente")}
    else{
         if(nota==6){console.log("Suficiente")
        }else{
           
            if(nota>6&&nota<=8){console.log("bien")
        }else{

            console.log("Excelente")
        }

        }

    }



}
function videoclud(precio1,precio2,precio3){

    var suma;
if(precio1<precio3&&precio2<precio3){  suma=precio1+precio2;console.log(suma)}
if(precio2<precio1&&precio3<precio1){  suma=precio3+precio2;console.log(suma)}
if(precio3<precio2&&precio1<precio2){suma=precio3+precio1;console.log(suma)}
    



}

function calificaciones(nota1,nota2,nota3,nota4){

let arr=[nota1,nota2,nota3,nota4]
var promedio=(nota1+nota3+nota3+nota4)/4
var mayor=arr[0]
var menor=arr[0]
console.log("el promedio es "+promedio)

for(var i=1;i<arr.length;i++){

if(mayor>arr[i]){
    mayor=arr[i]
}else{

if(menor>arr[i]){
menor=arr[i]
}
}
}
console.log("numero mayor "+mayor)
console.log("numero menor "+menor)
}

function numerosPres(numero1,numero2,numero3){

if(numero1%2==0){console.log("el "+numero1+" par")}
else{console.log("el "+numero1+" impar")}

if(numero2%2==0){console.log("el "+numero2+" par")}
else{console.log("el "+numero2+" impar")}

if(numero3%2==0){console.log("el "+numero3+" par")}
else{console.log("el "+numero3+" impar")}


}

function mayormedioymenor(numero1,numero2,numero3){

   let arr=[numero1,numero2,numero3]
    var mov
    var mov2
    
   for(var i=0;i<arr.length-1;i++){
    mov=arr[i]
    mov2=arr[i+1]
if(arr[i]>arr[i+1]){

arr[i]=mov2
arr[i+1]=mov
}

   }
   
  mov=arr[0]
  mov2=arr[1]

  if(arr[0]>arr[1]){
    arr[0]=mov2
    arr[1]=mov

  }



console.log("numero mayor "+arr[2])
console.log("numero medio "+arr[1])
console.log("numero menor "+arr[0])
}

function jubilarse(edad,sexo){

if(sexo=="femenino"){
    if(edad>54){
        console.log("ya puede jubilarce")}
    else{
        console.log("no puede jubilarce")
    }}else{

        if(sexo=="masculino"){
            if(edad>60){
                console.log("ya puede jubilarce")}
            else{
                console.log("no puede jubilarce")
            }



    }else{

        console.log("dijito mal ")
    }

   

}

}


