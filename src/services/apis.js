import ServerUsers from '../config/serverUsers'
import ServerEvents from '../config/serverEvents'
import ServerQR from '../config/serverQR'
import ServerGuests from '../config/serverGuests'
import ServerEventSearch from '../config/serverEventSearch.js'
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

export function loadGuestsAPI(event_id) {
  return fetch(ServerGuests, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_id: event_id,
    })
  })
}

export function searchEventsAPI(user_id, key_word) {
  return fetch(ServerEventSearch, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: user_id,
      key_word: key_word,
    })
  })
}

export function QRcheckAPI(result, event) {
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