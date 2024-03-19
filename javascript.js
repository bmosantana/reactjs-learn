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
//Variáveis 
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

//Tipos de variáveis

//é case sensitive e deve smepre começar com _ ou com um caracter. 
//Cada variavel é um espaço alugado na memória.

var nome = 'Ana'
let idade = 23
const viva = true //Não mutavel, porque é uma constante e ela não muda de valor

//Tipos de variáveis
// Boolean = true ou false
// null =  Nulo
// undefined = Não definido
// Number =  42 ou 3.14159
// String = "Holly"

//Laços de Repetição
//é um bloco de codigo que se repete até que uma condição seja atingida ou mudada.
//feito para não repetir código e assim melhorar performance e qualidade.
//no JS temos: For, While, Foreach, Map

//Fazendo uma tabuada com FOR
let i = 0;
for (i; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`)
    
}
console.log('-------------------------------')
//devolvendo o valor de 0 para i (que estava com 11 nesse passo)
i = 0;

while (i <= 10) {
    console.log(`${i} x 2 = ${i * 2}`)
    i++
}
console.log('--------------------------------')
const valores = [0,1,2,3,4,5,6,7,8,9,10];
valores.forEach((element) => {
    console.log(`${element} x 3 = ${element * 3}`)
});

console.log('-------------------------------');

const resultMap = valores.map((element) => {
    return element * 9;
});
console.log(resultMap)