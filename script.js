


function adicionaItem(event){
    //criei um novo elemento
    let article1 = document.createElement("article") 

    //criei o conteúdo do elemento
    const adiciona = document.createTextNode("olá")

    //adicionei o conteúdo na variavel
    article1.appendChild(adiciona)

    //definir aonde o elemento criado irá ficar
    let elementoReferncia = document.getElementById("container")

    //adicionei o elemento no local escolhido a partir da referencia
    elementoReferncia.insertAdjacentElement("beforeend", article1)
    article1.classList.add("item")
    //Adicionei a ação click
    article1.addEventListener("click", removeItem)
    
}


function removeItem(event){
    event.target.remove()
}