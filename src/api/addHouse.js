export const addHouse = async addHouseInformation => {

    const url = `${import.meta.env.VITE_API_URL}/add-house`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(addHouseInformation),
    })
    const data = await response.json()
    return data

}