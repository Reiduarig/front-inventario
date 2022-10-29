const URL_API = process.env.REACT_APP_API_URL

export const fetchSinToken = async( endpoint, data, method = 'GET') => {

    const url = `${URL_API}/${endpoint}`

    if( method === 'GET')
    {
        const respuesta = await fetch( url )
        return await respuesta.json();
    }
    else 
    {
        const respuesta = await fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await respuesta.json()
    }
}

export const fetchConToken = async( endpoint, data, method = 'GET') => {

    const url = `${URL_API}/${endpoint}`
    const token = localStorage.getItem('token') || ''

    if(method === 'GET')
    {
        const respuesta = await fetch( url, {
            headers:{
                'x-token': token
            }
        })

        return await respuesta.json()
    }
    else 
    {
        const respuesta = await fetch( url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token': token
            },

            body: JSON.stringify(data)
        })

        return respuesta.json()
    }

}