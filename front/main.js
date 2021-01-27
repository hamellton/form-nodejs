
let form = document.getElementById('contact-form').value
let firstName = document.getElementById('form_name').value
let lastName = document.getElementById('form_lastname').value
let userEmail = document.getElementById('form_email').value
let userPhone = document.getElementById('form_phone').value


let sendRequest = (url, method, body = null) => {
    const headers = {
        'Content-type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

form.onsubmit = (e) => {
    e.preventDefault()
    
    let data = {
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail,
        userPhone: userPhone
    }

sendRequest('/', 'POST', data)
.then(data => console.log(data))
.catch(err => console.log(err))

sendRequest('/')

}