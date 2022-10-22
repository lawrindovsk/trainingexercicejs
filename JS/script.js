//JavaScript
// =========
//Variáveis
var opcao = 0;
var B = 10;
var A = 20;
var msg = "";
var C = 0;
var resultado = "";


// ==========
function menu(){
    this.opcao = prompt("---- Menu ----\n"  +
                "Digite um número de 1 a 25, ou digite 0 para sair!.\n");
}//Fim da função menu.

function operecao(){
    menu();//Chamando function menu(){}

    switch(this.opcao){
        case '0':
            console.log("Obrigado!!, Aperte F5 no seu teclado para reiniciar.");
            break;
        case '1':
            console.log("Exercicio 01:\n " + ex01());
            break;
        case '2':
            console.log("Exercicio 02:\n " + ex0    2());
            break;
        case '3':
            break;
            //
        case '4':
            break;
            //
        case '5':
            break;
            //
        case '6':
            break;   
            //    
        case '7':
            break;   
            //
        case '8':
            //
            break;
        case '9':
            //
            break;   
        case '10':
            //
            break;   
        case '11':
            //
             break;   
            //Fim Switch Case.
            default: //Caso o usuário digite um número, mostra o prompt em tela novamente para digitar o número correto!.
                console.log("Insira um número válida de acordo com a tabela.");
                break;
    }//Fim do switch;
}

function ex01(){
 //Mensagem Inicial.
 console.log("Exercicio 1 - Troca de A para B")
 this.msg = "A: " + this.A + "\nB: " + this.B;
 this.msg += "\n\nTroca\n\n";
 //Troca!
 this.C = this.A;
 this.A = this.B;
 this.B = this.C;
 //Mensagem final
 this.msg += "A: " + this.A + "\nB: " + this.B;
 return this.msg;
}//fim do função.

//função precisa ser arrumada!!!!
function ex02(){
    n1 = 0;
    this.prompt("Exercicio 2 - Antecessor: ")
    resultado =  parseFloat(n1 -1);
    return resultado; 
}//fim da função. !!!! disclaimer em cima.

function ex03(){
    base = 0;
    altura = 0;
    console.log("Exercicio 3 - Altura X Base: ")
    resultado = parseFloat(altura * altura);
    return resultado;
} 

function ex04(){
    console.log("Exercicio 4 - Idade: ")
    promp
}



//Chamar o método operação.
operecao();