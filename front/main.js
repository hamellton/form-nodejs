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

// person.__proto__ = person.prototype()
console.log(person.__proto__)


let firstName = document.getElementById('contact-form')
let lastName = document.getElementById('form_lastname')
let userEmail = document.getElementById('form_email')
let userPhone = document.getElementById('form_phone')

let data = {
    firstName: firstName,
    lastName: lastName,
    userEmail: userEmail,
    userPhone: userPhone
}

firstName.onsubmit = async (e) => {
    e.preventDefault()

    let response = await fetch('/firstName', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        // body: new FormData(firstName),
        body: JSON.stringify(data),
    }).then(
        console.log('Form send!!!!')
    )
}