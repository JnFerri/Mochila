const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const inputNome = document.getElementById('nome')
const inputQuantidade = document.getElementById('quantidade')

var itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criarElemento(elemento)
    
    })
    
form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    
    let existe = itens.find(elemento => elemento.nome === nome.value)


    const item = {
        'nome':nome.value,
        'quantidade':quantidade.value}
        
        if(existe){
            item.id = existe.id
            atualizaElemento(item)
            itens[itens.findIndex(elemento => elemento.id === existe.id)] = item
        }  else {
            item.id = itens[itens.length -1] ? itens[itens.length -1 ].id + 1 : 0
            criarElemento(item)
            itens.push(item)
            
        }

        localStorage.setItem('itens', JSON.stringify(itens))
    limparCampos()
        
    })

    function criarElemento(elemento){
        let novoComponente = document.createElement('li')
        novoComponente.classList.add('item')
        let numeroComponente =  document.createElement('strong')
        numeroComponente.dataset.id = elemento.id
        numeroComponente.innerHTML = elemento.quantidade
        novoComponente.appendChild(numeroComponente)
        novoComponente.innerHTML += elemento.nome
        novoComponente.appendChild(botaoRemover(elemento.id))
       lista.appendChild(novoComponente)
    }

    function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
       
    }

    function botaoRemover(id){
        const botaoRemover = document.createElement('button')
        botaoRemover.innerText = 'X'
        botaoRemover.addEventListener('click', function(){
            deletaItem(botaoRemover.parentNode, id)
        })
        return botaoRemover
    }

    function deletaItem(tag ,id){
        tag.remove()
        itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
        localStorage.setItem('itens', JSON.stringify(itens))
    }
    
    function limparCampos(){
    inputNome.value = ''
    inputQuantidade.value = ''
    inputNome.focus()
    }
