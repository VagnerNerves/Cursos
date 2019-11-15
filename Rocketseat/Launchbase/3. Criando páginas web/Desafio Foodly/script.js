const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click",function(){
        modalOverlay.querySelector('.card__modal').appendChild(card.cloneNode(true))

        modalOverlay.classList.add('active')
    })
}

document.querySelector(".fechar").addEventListener("click", function() {
    const modalcard = document.querySelector('.modal-overlay .card__modal .card')
    
    modalOverlay.querySelector('.card__modal').removeChild(modalcard);
    modalOverlay.classList.remove("active")
})