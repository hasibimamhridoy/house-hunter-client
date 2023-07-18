export const isAlreadyBooked = async (email, houseId) => {

    console.log("from is booked",email);
    const url = `${import.meta.env.VITE_API_URL}/house/isBooked/${email}?houseId=${houseId}`
    const response = await fetch(url,{
        headers: {
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
    })
    const data = await response.json()
    return data

}