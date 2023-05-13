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

const preco1 = document.getElementById("preco1")
const preco2 = document.getElementById("preco2")

const inputPreco = document.getElementById("inputPreco")

moeda1.setAttribute("tipo","USD")
moeda2.setAttribute("tipo","BRL")



function conferirMoeda (){
    if(label1.textContent == "Dolar"){
        label1.setAttribute("tipo", "USD")

    } else if(label1.textContent == "Real"){
        label1.setAttribute("tipo", "BRL")
    }else if(label1.textContent == "Euro"){
        label1.setAttribute("tipo","EUR")
    }

    if(moeda2.textContent == "Dolar"){
        moeda2.setAttribute("tipo", "USD")
    } else if(moeda2.textContent == "Real"){
        moeda2.setAttribute("tipo", "BRL")
    }else if(moeda2.textContent == "Euro") {
        moeda2.setAttribute("tipo","EUR")
    }
}


const abrirModal1 = ()=>{
    modal.classList.toggle("visible")
    const lista = document.querySelectorAll("#lista li");

    
        for (let i = 0; i < lista.length; i++) {
            lista[i].addEventListener("click", function (e) {

               moeda1.innerText = e.target.textContent
               label1.innerText = e.target.textContent

               if(e.target.textContent == " Dolar"){
                e.target.setAttribute("tipo", "USD")
                moeda1.setAttribute("tipo","USD")
            } 
            else if(e.target.textContent == "Real"){
                e.target.setAttribute("tipo", "BRL")
                moeda1.setAttribute("tipo", "BRL")
            }
            else if(e.target.textContent == " Euro"){
               e.target.setAttribute("tipo","EUR")
               moeda1.setAttribute("tipo","EUR")
            }
               
               console.log(e.target)
               
        })
    } 
    ul1.classList.remove("hidden")
    ul2.classList.add("hidden")
}

const abrirModal2 = ()=>{
    modal.classList.toggle("visible")
    const lista2 = document.querySelectorAll("#lista2 li");
    for (let i = 0; i < lista2.length; i++) {
        lista2[i].addEventListener("click", function (e) {
              
           moeda2.innerText = e.target.textContent

           if(e.target.textContent == " Dolar"){
            e.target.setAttribute("tipo","USD")
            moeda2.setAttribute("tipo","USD")
        } else if(e.target.textContent == "Real"){
            e.target.setAttribute("tipo","BRL")
            moeda2.setAttribute("tipo","BRL")
        }else if(e.target.textContent == "Euro"){
            e.target.setAttribute("tipo","EUR")
            moeda2.setAttribute("tipo","EUR")
        }
           console.log(e.target)

           
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
    let m1 =  moeda1.getAttribute("tipo")
    let m2 =  moeda2.getAttribute("tipo")
    let conc = `${m1}${m2}`
    let juncaoSiglaMoeda = Number(result[conc].bid)
    let valor =  (inputPreco.value * juncaoSiglaMoeda).toFixed(2)

    preco1.innerText = Number(inputPreco.value).toFixed(2)
    preco2.innerText = valor
    inputPreco.value = Number(inputPreco.value).toFixed(2)
    console.log(valor)

})


