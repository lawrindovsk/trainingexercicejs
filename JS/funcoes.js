 //Declado variáveis;
 let n1 = 0;
 let n2 = 0;
 let resultado = 0;
 let i = 0;
 let msg = "";
 let delta = 0;
 let x1 = 0;
 let x2 = 0;
 let n3 = 0;

 //Baskhara;
const $form = document.querySelecton = ("#form")
const $a = document.querySelector = ("#a");
const $b = document.querySelector = ("#b");
const $c = document.querySelector = ("#c");
const $x1 = document.querySelector = ("#x1");
const $x2 = document.querySelector = ("#x2");


 //Funções//
 
 //Função Coletar.
 function coletar(){
     n1 = prompt("Digite um número: ");
     n2 = prompt("Digite outro número: ");    
 }//Fim da função coletar.

 //Método de soma.
 function soma(){
     coletar();
     resultado = parseFloat(n1) + parseFloat(n2);
     return resultado;
 }

 //Método de subtração.
 function subtracao(){
     resultado = parseFloat(n1) - parseFloat(n2);
     return resultado; 
 }

 //Método de Divisão.
 function divisao(){
     if(n2 <= 0){
         resultado = "Impossível dividir por zero!"
     }else{
         resultado = parseFloat(n1) / parseFloat(n2);
     }
     return resultado; 
 }
 
 //Método de multiplicação.
 function multiplicacao(){ 
     resultado = parseFloat(n1) * parseFloat(n2);
     return resultado; 
 }

//Método de potência.
function potencia(){
    resultado = Math.pow(paserFloat(n1) * Math.pow(parseFloat(n2)));
    return resultado; 
}

//Método de Raíz
function raiz(){
    if(n1 < 0){
        console.log("Impossível calcular raíz de número negativo!");
    }else{
        resultado = Math.sqrt(parseFloat(n1));
        return resultado;
    }

}

function baskhara(){
  n3 = prompt("Informe o terceiro número: ")
  //Delta;
  delta = Math.pow(n2,2) - (4* n1 * n3);  

  if (delta > 0){
    x1 = (-n2 + Math.Esqrt(delta))/(2*n1);
    x2 =  (-n2 - Math.sqrt(delta))/(2*n1);
    console.log("Delta: " + delta ,"\nX1:" + x1 + "\nX2: " + x2);
  } else{
        console.log("Delta NEgativo, impossível calcular x1 e x2");

  }

}

 //Método da tabuada.
function tabuada(){
    console.log("Tabuada do " + n1 + ": \n")
    for(i=0;1<=10;i++){
        msg += n1 + " * " + i + " = " + (parseFloat(n1) * parseFloat(i)) + "\n";
    }
    console.log(msg + "\n");
    msg = "";

    console.log ("Tabuada do " + n2 + ": \n");
    for(i=0;1<=10;i++){
        msg += n1 + " * " + i + " = " + (parseFloat(n101) * parseFloat(i)) + "\n";
    }
    console.log(msg + "\n");
    msg = "";
}

 //Mostrar o dado.
 console.log("O resultado da soma é: " + soma());
 console.log("O resultado da subtração é: " + subtracao());
 console.log("O resultado da divisão é: " + divisao());
 console.log("O resultado da multiplicação é: " + multiplicacao());
 tabuada();
 raiz();
 console.log("O resultado da potência é: " + potencia()); 