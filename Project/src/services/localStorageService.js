export const setItemInLocalStorage = (key, value) => {
    return localStorage.setItem(key, value);
}

export const getItemFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const removeItemFromLocalStorage = (key) => {
    return localStorage.removeItem(key);
}