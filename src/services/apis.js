import ServerUsers from '../config/serverUsers'
import ServerEvents from '../config/serverEvents'
import ServerQR from '../config/serverQR'

export function loginAPI(username, password) {
    return fetch(ServerUsers, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            password: password,
        })
    })
}

export function loadEventsAPI(user_id) {
    return fetch(ServerEvents, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: user_id,
        })
    })
}

export function QRcheckAPI(result,event) {
    return fetch(ServerQR, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            QRcode: result,
            event_id: event
        })
    })
}