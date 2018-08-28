var Calculadora = {
var num1 = 0,
var num2 = 0,
var operacion,
var coma=0,

window.onload = function(){
pantalla=document.getElementById("display");
},

      var resultado = document.getElementById("display");
      var suma = document.getElementById("mas");
      var resta = document.getElementById("menos");
      var multiplicacion = document.getElementById("por");
      var division = document.getElementById("dividido");
      var igual = document.getElementById("igual");
      var reset = document.getElementById("reset");
      var cero = document.getElementById("0");
      var uno = document.getElementById("1");
      var dos = document.getElementById("2");
      var tres = document.getElementById("3");
      var cuatro = document.getElementById("4");
      var cinco = document.getElementById("5");
      var seis = document.getElementById("6");
      var siete = document.getElementById("7");
      var ocho = document.getElementById("8");
      var nueve = document.getElementById("9");
      var punto = document.getElementById("punto");
      var igual = document.getElementById("igual");
      var on = document.getElementById("on");
      var signo = document.getElementById("sign");
      var raiz = document.getElementById("raiz");

//

function efectoTecla(){
  document.getElementById("mas").style="width:50%;"
 document.getElementById("display").style="width:50%;"
 document.getElementById("mas").style="width:50%;"
 document.getElementById("menos").style="width:50%;"
 document.getElementById("por").style="width:50%;"
 document.getElementById("dividido").style="width:50%;"
 document.getElementById("igual").style="width:50%;"
 document.getElementById("reset").style="width:50%;"
 document.getElementById("0").style="width:50%;"
 document.getElementById("1").style="width:50%;"
 document.getElementById("2").style="width:50%;"
 document.getElementById("3").style="width:50%;"
 document.getElementById("4").style="width:50%;"
 document.getElementById("5").style="width:50%;"
 document.getElementById("6").style="width:50%;"
 document.getElementById("7").style="width:50%;"
 document.getElementById("8").style="width:50%;"
 document.getElementById("9").style="width:50%;"
 document.getElementById("punto").style="width:50%;"
 document.getElementById("igual").style="width:50%;"
 document.getElementById("on").style="width:50%;"
 document.getElementById("sign").style="width:50%;"
 document.getElementById("raiz").style="width:50%;"
}

//Eventos

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1"; //agregaremos un contenido a este componente.
},
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
},
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
},
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
},
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
},
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
},
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
},
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
},
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
},
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
},
punto.onclick = function(e){
    resultado.textContent = resultado.textContent + "punto";
},


//Punto decimal
function numero(xx) {
         if (num1=="0" || num2==1  ) {
            pantalla.innerHTML=xx;
            num1=xx;
            if (xx==".") {
               pantalla.innerHTML="0.";
               num1=xx;
               coma=1;
               }
           }else {
               if (xx=="." && coma==0) {
                   pantalla.innerHTML+=xx;
                   num1+=xx;
                   coma=1;
               }

               else if (xx=="." && coma==1) {}

               else {
                   pantalla.innerHTML+=xx;
                   num1+=xx
               }
            }
            num2=0
         },

//Simbolo de signo inverso

function inverso(){
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);
         pantalla.innerHTML=x;
         xi=1;
         }




borrar.onclick = function(e){
    resetear();
},

suma.onclick = function(e){
  num1 = resultado.textContent;
  operacion = "+";
  limpiar();
},

resta.onclick = function(e){
  num1 = resultado.textContent;
  operacion = "-";
  limpiar();
},

multiplicacion.onclick = function(e){
  num1 = resultado.textContent;
  operacion = "*";
  limpiar();
},

division.onclick = function(e){
  num1 = resultado.textContent;
  operacion = "/";
  limpiar();
},

signo.onclick = function(e){
  num1 = resultado.textContent;
  operacion = "+/-";
  limpiar();
},

igual.onclick = function(e){
  num2 = resultado.textContent;
  resolver();
},

},

function limpiar(){
    resultado.textContent = "":
  },
  function resolver(){
    var   res = 0;
    switch(operacion){
        case "+":
          res = parsefloat(num1) + parsefloat(num2);
          break;

          case "-":
            res = parsefloat(num1) - parsefloat(num2);
            break;

            case "*":
              res = parsefloat(num1) * parsefloat(num2);
              break;

              case "/":
                res = parsefloat(num1) / parsefloat(num2);
                break;


                },
  function resetear(){
      resultado.textContent = "";
      num1 = 0;
      num2 = 0;
      operacion = "";
  },


}

}
