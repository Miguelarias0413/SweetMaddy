function main(){
    hamburgerController()

}

function hamburgerController(){
    const hamburguer = document.querySelector(".menu-hamburguesa")
    const closebutton = document.querySelector('.close-button')
    const modalHamburguer = document.querySelector(".modal-hamburguesa")

    hamburguer.addEventListener('click',()=>{
        modalHamburguer.style.transform = 'translateX(0)';
        hamburguer.classList.add('hidden')
        closebutton.classList.toggle('hidden')
    })

    closebutton.addEventListener('click',()=>{
        modalHamburguer.style.transform = 'translateX(-100%)';
        closebutton.classList.toggle('hidden')
        hamburguer.classList.toggle('hidden')
    })


}
addEventListener("DOMContentLoaded", main)