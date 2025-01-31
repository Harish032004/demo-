const scriptURL = 'https://script.google.com/macros/s/AKfycbwDEr1g8ffqjJGau6tSTKvHHo43KXy79Rycu6yOYva81EbDEiGZWHzGLUGXttxF4w8VjA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e=> {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST',body: new FormData(form) })
    .then(response=> alert("Thank You ! Your form is submitted successfully."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!',error.message))
})