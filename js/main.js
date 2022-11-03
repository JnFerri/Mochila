const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const inputNome = document.getElementById('nome')
const inputQuantidade = document.getElementById('quantidade')
var listaItens = []

console.log(localStorage)

form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    
    criarItem(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
    localStorage.setItem('itens', JSON.stringify(listaItens))
    limparCampos()

    JSON.parse(localStorage.getItem('itens')).forEach((elemento) => function(){
    const novoItem = document.createElement('li')
    const numeroElemento = document.createElement('strong')
    numeroElemento.innerHTML = elemento.quantidade
    novoItem.appendChild(numeroElemento)
    novoItem.innerHTML = elemento.nome
    lista.appendChild(novoItem)
    
})})


function criarItem(nome, quantidade){
    const item = {
        'nome':nome,
        'quantidade':quantidade}

        listaItens.push(item)
        console.log(listaItens)
    }
    
    
   


function limparCampos(){
    inputNome.value = ''
    inputQuantidade.value = ''
    inputNome.focus()
}