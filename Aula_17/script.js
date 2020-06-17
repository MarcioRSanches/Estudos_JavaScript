function contar() {
    let ini =  document.getElementById("txtIni")
    let fim = document.getElementById("txtFim")
    let passo = document.getElementById("txtPas")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Falta informar algum valor")
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerado passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`  
            }
        }
        res.innerHTML += ` \u{1f3c1}`   
    }
}