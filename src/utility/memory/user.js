import {
    deleteCookieItem,
} from './cookies';

export function saveUser(user) {
    window.localStorage.setItem('id', user.id);
    window.localStorage.setItem('username', user.nickname);
    window.localStorage.setItem('nickname', user.username);
}

export function getUser() {
    return {
        id: window.localStorage.getItem('id'),
        username: window.localStorage.getItem('username'),
        nickname: window.localStorage.getItem('nickname'),
    };
}

export function dropUser() {
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('nickname');
    deleteCookieItem('token');
}
