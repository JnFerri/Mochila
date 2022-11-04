const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const inputNome = document.getElementById('nome')
const inputQuantidade = document.getElementById('quantidade')
var listaItens = []
var localStorageItens = []

form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    
    criarItem(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
    localStorage.setItem('itens', JSON.stringify(listaItens))
    limparCampos()
    
    var itensLocalStorage = localStorage.getItem('itens')
    updateElemento(JSON.parse(itensLocalStorage))
    
    })


function criarItem(nome, quantidade){
    const item = {
        'nome':nome,
        'quantidade':quantidade}

        listaItens.push(item)
    }
    
function updateElemento(dados){
   dados.forEach((elemento) => {
        for(var i=0; i<dados.length;i++){
       lista.innerHTML = `<li class='item'><strong>${elemento.quantidade}</strong>${elemento.nome}</li>`
        }
})}
   


function limparCampos(){
    inputNome.value = ''
    inputQuantidade.value = ''
    inputNome.focus()
}