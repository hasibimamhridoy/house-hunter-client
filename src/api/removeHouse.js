export const deleteToMyHouse = async (_id) => {

    const url = `${import.meta.env.VITE_API_URL}/deleted-house/${_id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data

}