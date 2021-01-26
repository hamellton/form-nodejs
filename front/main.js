let person = new Object({
    name: 'test',
    age: 45,
    func() {
        console.log('say hi!!!')
    }
})

Object.prototype.sayHellow = () => {
    console.log('say hellow')
}

person.sayHellow()


let firstName = document.getElementById('contact-form').value
let lastName = document.getElementById('form_lastname').value
let userEmail = document.getElementById('form_email').value
let userPhone = document.getElementById('form_phone').value

let data = {
    firstName: firstName,
    lastName: lastName,
    userEmail: userEmail,
    userPhone: userPhone
}

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

firstName.onsubmit = (e) => {
    e.preventDefault()

sendRequest('/', 'POST', data)
.then(data => console.log(data))
.catch(err => console.log(err))

}