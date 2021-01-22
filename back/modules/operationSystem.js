const os = require('os')

let userInfo = () => {
    let userName = os.userInfo().username
    return userName
}

module.exports = {
    userInfo
}
