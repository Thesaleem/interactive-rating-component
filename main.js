const main = document.querySelector("body");
const ratingsBtn = document.querySelectorAll('.ratings')
const submitBtn = document.querySelector('.btn')
const container = document.querySelector('.container')
const eval = document.querySelector('.evaluation')
let value;
ratingsBtn.forEach(rating => {
    rating.addEventListener('click', (e) => {
        e.preventDefault()
        value = e.target.textContent
    })
})

submitBtn.addEventListener('click', () => {
    let thankYou = `<div class=" wrapper wrapper-2">
        <div class="img-container">
            <img src="images/illustration-thank-you.svg" alt="Thank You" class="thanks-img">
        </div>
        <div class="confirmation-container">
            <p class="confirmation-msg">
                You selected ${value} out of 5
            </p>
        </div>
        <h2>
            Thank you!
        </h2>
        <p class="text-2">We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get in touch!</p>
         </div>`
    if(value){
        container.insertAdjacentHTML('afterbegin', thankYou)
        eval.style.display = 'none'
    }
    
})
