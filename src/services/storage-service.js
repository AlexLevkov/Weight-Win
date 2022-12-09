function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const data = JSON.parse(json)
    return data;
}

function saveToStorage(key, data){
    console.log('data in storage:', data)
    const json = JSON.stringify(data);
    localStorage.setItem(key, json)
    

}

function clearLocalStorage(){
    localStorage.clear()
}

export default {
    loadFromStorage,
    saveToStorage,
    clearLocalStorage
}