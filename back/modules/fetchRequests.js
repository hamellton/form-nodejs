let sendData = async() => {
    let data = {
        firstName: 'Kostya'
    }
    let response = await fetch('firstName', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })

// let result = await response.json()
// console.log()

}