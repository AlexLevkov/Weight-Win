function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const data = JSON.parse(json)
    return data;
}

function saveToStorage(key, data){
    const json = JSON.stringify(data);
    localStorage.setItem(key, json)
}

function clearLocalStorage(){
    localStorage.clear()
}

function keyInLocalStorage(key) {
    return localStorage.hasOwnProperty(key)
}
    

export default {
    loadFromStorage,
    saveToStorage,
    clearLocalStorage,
    keyInLocalStorage
}