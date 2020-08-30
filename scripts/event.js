buttonShare = document.querySelector('.button-share')
buttonShareSelect = document.getElementById('button-share')
shareContainer = document.querySelector('.share')

function onclicked() {
    (shareContainer.style.display !== 'none')
        ? shareContainer.style.display = 'none'
        : shareContainer.style.display = 'flex'
}

buttonShare.addEventListener('click', onclicked)
buttonShareSelect.addEventListener('click', onclicked)