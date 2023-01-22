const ratingsForm = document.querySelector('#ratings-form')
const ratingButtons = document.querySelectorAll('[data-ratingButton]')
const ratingMessage = document.querySelector('[data-ratingMessage]')
const cardSubmitted = document.querySelector('#card-submitted')

ratingsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    cardSubmitted.classList.add('show')
})

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener('click', () => {
        const rating = ratingButton.getAttribute('data-rating')
        ratingMessage.textContent = `You selected ${rating} out of 5`
    })
})
