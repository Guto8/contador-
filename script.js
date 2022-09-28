 let numero = 0


 function aumentar() {
    numero = numero + 1
    console.log('aumentar')
    mostrarnaTela()
 }

function diminuir() {
    numero = numero - 1
    console.log("diminuir...")
    mostrarnaTela()
}

function mostrarnaTela()  { 
const p = document.querySelector("#resultado")
p . innerText = numero 


}

