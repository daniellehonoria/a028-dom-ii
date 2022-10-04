/*1 -Utilize o DOM para adicionar uma função ao clique do botão. 
Ao clicar no botão, um novo item deve ser adicionado ao container. 
Por enquanto, o item não precisa de estilização. 
Ele pode ter apenas um texto, para facilitar sua visualização.*/



function adicionaItem(event){
    //atribuindo a tag container na variavel container
        let container = document.getElementById("container")

    //atribui funcionalidade de criar um elemento article na var item
    let item = document.createElement("article")
    
    //adiciona a classe item na variavel item
    item.classList.add("item")

    //adiciona o atributo onclick e a funçao remover ao ser clicado na let item
    item.setAttribute('onclick' , 'removeItem(event)')

    //insere a let item, já com a classe e o atributo definido no container
    container.insertAdjacentElement("beforeend" , item)
    }

function removeItem(event){
    event.target.remove()
}
/*2- Altere a função criada no exercício 1 para que agora o 
clique no botão faça a **estilização** do novo item*/

/*3-Crie a função `removeItem`, que é chamada pelo `onclick` dos 
itens do container. Esta função deve **remover** o elemento clicado.

**Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.*/
