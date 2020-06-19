function parimp(n) {
    if(n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimp(10))
console.log(parimp(7))


function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(10, 5)

function result_Soma(n1, n2) {
    var resultado = n1 + n2
    return resultado
}

console.log(result_Soma(15,25))

// simplificado
function result_Soma(n1, n2) {
    return n1 + n2
}

console.log(result_Soma(15,25))