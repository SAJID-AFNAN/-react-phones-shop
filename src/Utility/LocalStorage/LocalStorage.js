import swal from 'sweetalert';

//Get Item from local storage
const getStoredPhone = () => {
    const storedPhone = localStorage.getItem('phoneStorage')
    if (storedPhone) {
        return JSON.parse(storedPhone)
    }
    else {
        return []
    }
}

//All items delete from local Storage
const clearStoredPhone = () => {
    localStorage.clear()
}

//Single item delete form local storage
const clearSingleItem = (id) => {
    const Phone = getStoredPhone();
    localStorage.removeItem('phoneStorage', id)
}

//Save item in local storage
const saveStoredPhone = (id) => {
    const getPhones = getStoredPhone();
    const exits = getPhones.find(phones => phones === id)
    if (!exits) {
        swal("Good job!", "You Add this on favorites!", "success");
        getPhones.push(id)
        localStorage.setItem('phoneStorage', JSON.stringify(getPhones))
    }
    else {
        swal("Error!", "Already Added this one!", "error");
    }
}

export { getStoredPhone, saveStoredPhone, clearStoredPhone, clearSingleItem }