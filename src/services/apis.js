import ServerUsers from '../config/serverUsers'
import ServerEvents from '../config/serverEvents'
import ServerQR from '../config/serverQR'

export function loginAPI(username, password) {
    return fetch(ServerUsers, {
        // method: 'GET',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     name: username,
        //     password: password,
        // })
    })
}

export function loadEventsAPI() {
    return fetch(ServerEvents, {
        method: 'GET',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     name: username,
        //     password: password,
        // })
    })
}

export function QRcheckAPI(result) {
    return fetch(ServerQR, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            QRcode: result,
        })
    })
}