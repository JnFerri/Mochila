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
        }  else {
            item.id = itens.length
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
       lista.appendChild(novoComponente)
    }

    function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
       
    }
    
    function limparCampos(){
    inputNome.value = ''
    inputQuantidade.value = ''
    inputNome.focus()
    }
