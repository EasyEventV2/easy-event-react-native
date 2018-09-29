import ServerUsers from './../config/server.js'

export function loginAPI(username, password) {
    return fetch(ServerUsers, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            password: password
        })
    })
}