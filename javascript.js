// O que é JavaScript?
/*  usado para criar interações em páginas web e dentre outros.
    é uma linguagem de programação de alto nível.
    Criado por brendan eich em 1995.

    JavaScript não tem nada a ver com java. O nome é influencia
    da sun, já que a empresa tambem cuidava da linguagem back-end
    java. 

    EcmaScript => o JS é pra funcionar em todas as plataformas
    e a ECMA International é o orgão que regulamenta isso. 
    ela é uma empresa que faz "padronização de linguagens".
*/

// Operações básicas
//Variaveis 
const b = 25;
const c = '25'

const v = true;
const f = false;

const nota = 1;
const age = 23;

let a = 23;
let d = 'oie'
let e = 123.5

//Operadores Básicos (usados no nosso dia-a-dia)
console.log("bom dia, FrontEnder!");
console.log("Soma: ", a + b);
console.log("Subtração: ", a - b);
console.log("Divisão: ", a / b);
console.log("Multiplicação: ", a * b);
console.log("Módulo: ", a % b);
console.log("Incrementar: ", ++a);
console.log("Decrementar: ", --a);

//Operações Lógicas Básicas

/* If, else, switch, ternário 
=== é comparação de tipo e valor, e == é de valor.
*/
console.log(d !== e)
console.log(e !== a)
console.log(v || f)
// /**no AND TODAS, as condções precisam ser verdadeiras para ele retornar true. */
console.log(a == a && b === c)
// /**no OR ele retorna true independente se todas forem true */
console.log(a == a || b === c)
// /*comparação de valor */
console.log(b == c)

/** comparação de VALOR e TIPO */
console.log(c === b)


//Lações de repetição e pequenos exemplos
if (age > 18) {
    console.log("é um adulto (tentando sobreviver)")
} else {
    console.log("É um jovem menor de 18 anos")
}

if (nota <= 5) {
    console.log('abaixo da média')
} else if (nota > 5 && nota <= 7) {
    console.log('na média')
} else {
    console.log("acima da média")
}

/*
switch (nota) {
    case nota < 5:
        console.log('abaixo da média')
        break;
    case nota > 5:
        console.log('na média')
        break;
    default:
        console.log("acima da média")
        break;
}
*/




