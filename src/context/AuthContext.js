import React, { createContext, useCallback, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";


export const AuthContext = createContext()

const initialState = {
    uuid: null,
    checking: true,
    logged: false,
    nombre: null,
    apellidos: null,
    email: null,
    documento: null
}

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState)

    const login = async( documento, password ) => {
        
        const respuesta = await fetchSinToken('auth/login', { documento, password }, 'POST')
    
        if(respuesta.ok)
        {
            localStorage.setItem('token', respuesta.token)
            const { uuid, nombre, apellidos, email, documento } = respuesta.usuario
            setAuth({
                uuid: uuid,
                checking: false,
                logged: true,
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                documento: documento
            })
        }

        return respuesta.ok
    }

    const register = async(nombre, apellidos, email, documento, password) => {

    }

    const verificaToken = useCallback( async() => {

    },[])

    const logout = () => {

    }

    return (
        <AuthContext.Provider value = {{
            auth,
            login,
            register,
            verificaToken,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}