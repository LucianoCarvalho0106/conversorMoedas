const tipoMoeda1 = document.getElementById("tipoMoeda1")
const modal = document.getElementById("modal")
const closeImg = document.getElementById("closeModal")

const tipoMoeda2 = document.getElementById("tipoMoeda2")
const confirmar = document.getElementById("confirmar")

const moeda1 = document.getElementById("moeda1")
const moeda2 = document.getElementById("moeda2")

const label1 = document.getElementById("label1")
const ul1 = document.getElementById("lista")
const ul2 = document.getElementById("lista2")


function conferirMoeda (){
    if(moeda1.textContent == "Dólar"){
        moeda1.setAttribute("tipo", "USD")
    } else if(moeda1.textContent == "Real"){
        moeda1.setAttribute("tipo", "BRL")
    }else {
        moeda1.setAttribute("tipo","EUR")
    }

    if(moeda2.textContent == "Dólar"){
        moeda2.setAttribute("tipo", "USD")
    } else if(moeda2.textContent == "Real"){
        moeda2.setAttribute("tipo", "BRL")
    }else {
        moeda2.setAttribute("tipo","EUR")
    }

}


const abrirModal1 = ()=>{
    modal.classList.toggle("visible")
    const lista = document.querySelectorAll("#lista li");
    
        for (var i = 0; i < lista.length; i++) {
            lista[i].addEventListener("click", function (e) {
               let valAux1 = e.target.textContent
               moeda1.textContent = valAux1
               label1.textContent = valAux1
               console.log(valAux1)
        })
    } 
    ul1.classList.remove("hidden")
    ul2.classList.add("hidden")
}

const abrirModal2 = ()=>{
    modal.classList.toggle("visible")
    const lista2 = document.querySelectorAll("#lista2 li");
    for (var i = 0; i < lista2.length; i++) {
        lista2[i].addEventListener("click", function (e) {
            let valAux2 = e.target.textContent
           moeda2.textContent = valAux2

           console.log(valAux2)
    })
    ul2.classList.remove("hidden")
    ul1.classList.add("hidden")

}}

const fecharModal = ()=>{
    if(modal.classList.contains("visible")){
        modal.classList.remove("visible")
    }
}

tipoMoeda1.addEventListener("click",abrirModal1)
tipoMoeda2.addEventListener("click",abrirModal2)
closeImg.addEventListener("click", fecharModal)


confirmar.addEventListener("click",async()=>{
    conferirMoeda()
    const data = await fetch(`https://economia.awesomeapi.com.br/last/${moeda1.getAttribute("tipo")}-${moeda2.getAttribute("tipo")}`)
     
    const result = await data.json()
    console.log(result)

})


