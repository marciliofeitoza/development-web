const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.button')

for (let button of  buttons) {
    button.addEventListener("click", function(){
        const postId = button.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.classList.add('maximized')
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximized')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximized')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.maximize-modal').addEventListener("click", function(){
    
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized')
    }else {
        modal.classList.add('maximized')
    }
})

