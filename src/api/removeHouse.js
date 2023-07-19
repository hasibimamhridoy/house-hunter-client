export const deleteToMyHouse = async (_id) => {

    const url = `${import.meta.env.VITE_API_URL}/deleted-house/${_id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
    })
    const data = await response.json()
    return data

}

export const cancleToMyHouse = async (_id) => {

    const url = `${import.meta.env.VITE_API_URL}/cancle-house/${_id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
    })
    const data = await response.json()
    return data

}