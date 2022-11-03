const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    
    criarItem(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
    
})

function criarItem(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem) 
    lista.appendChild(novoItem)
    
}