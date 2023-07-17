export const updateHouseFn = async (houseId,updateHouseInformation) => {

    const url = `${import.meta.env.VITE_API_URL}/update-house/${houseId}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(updateHouseInformation),
    })
    const data = await response.json()
    return data

}