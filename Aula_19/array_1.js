let num = [2, 5, 7, 8, 4]
console.log(num)

for(let pos=0;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//processo simplificado

for(let pos in num) {
    console.log(`For simplificado - A posição ${pos} tem o valor ${num[pos]}`)
}

// pesquisar conteúdo do array

console.log(`Retornar a chave do valor 7 é ${num.indexOf(7)}`)

// se informar um valor que não existe o js retorna -1
let valor = 10
let pos = num.indexOf(valor)
if (pos == -1){
    console.log(`O valor ${valor} informado não existe`)
} else {
    console.log(`O valor ${valor} está na chave ${num.indexOf(valor)}`)
}