function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyHAIXn1Pfmof-JNcllpG_RQyJdH-z_55st25ePG-fy_KY0HIohzuxasKJnkYTd6GON/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})