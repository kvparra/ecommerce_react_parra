const btn_1 = document.querySelector('#btn_1')
const input = document.querySelector('input')
const link = document.querySelector('a')
/* OPCIÓN 1 : con variable como función */ /* EN AMBOS CASOS, SIEMPRE EL 2DO PARÁMETRO ES UNA FUNCIÓN */
const hacerClick =(e)=>{
    /* console.log(e) */
    /* e.preventDefault() */
    e.stopPropagation()
    console.log("Click en el botón")
}
/* Hizo varios casos para comparar los eventos en consola */
btn_1.addEventListener("click", hacerClick)

document.body.addEventListener("click",(e)=>{
    console.log(e.target)
    console.log("click en el body")
})
/* link.addEventListener("click", (e)=>{
    console.log(e)
})

input.addEventListener("keyup", (e)=>{
    console.log(e)
    console.log(e.key) //Me muestra qué tecla apreté
}) */

/* OPCIÓN 2: directamente con la función */ 
/* btn_1.addEventListener("click", ()=>{}) */