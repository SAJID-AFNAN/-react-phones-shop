const getStoredPhone = () => {
    const storedPhone = localStorage.getItem('phoneStorage')
    if (storedPhone) {
        return JSON.parse(storedPhone)
    }
    else {
        return []
    }
}

const saveStoredPhone = (id) => {
    const getPhones = getStoredPhone();
    const exits = getPhones.find(phones => phones === id)
    if (!exits) {
        getPhones.push(id)
        localStorage.setItem('phoneStorage', JSON.stringify(getPhones))
    }
}

export { getStoredPhone, saveStoredPhone }