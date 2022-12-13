function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let result = document.getElementById('result')
    //varificação de erro
    if(ini.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        result.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p<= 0){
            alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                result.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for(let c = i; c>= f; c-=p){
                result.innerHTML += `${c} \u{1F449}`
            }
            
        }
        result.innerHTML +=  `\u{1F3C1}`
    }
}