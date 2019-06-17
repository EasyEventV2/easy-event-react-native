import localIP from './localIP'
// const ServerEventSearch = 'https://api.namdaoduy.tk/easy-event/user/event/search';
const ServerEventSearch = `${localIP}:3005/user/event/search`;
module.exports = ServerEventSearch;