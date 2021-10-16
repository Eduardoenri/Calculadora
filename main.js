
//adicionar a class botao em todos os button
function addClassBtn() {
    const btn = document.querySelectorAll('button')

    btn.forEach((i) => {
        i.classList.add('botao')
    })
}
addClassBtn()

//pegar o valor dos numeros clicados
function insert(num) {
    const numero = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = numero + num
}
//limpar campo
function clean() {
    document.querySelector('.resultado').innerHTML = ''
}
//apagar item por item
function back() {
    const resultado = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
//calcular
function res() {
    const resultado = document.querySelector('.resultado').innerHTML

    if(resultado) {
    //usado a função 'eval()' para reconhecer simbolos de operação e resolver a equação
    //os valores são obtidos como string e retornados string
    document.querySelector('.resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('.resultado').innerHTML = 'NaN'
    }

}