import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null)
 function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
    })

     const navigate = useNavigate()

    function login() {
        setAuth({
            ...auth,
            isAuth: true,
            user: null
        })
        console.log('De gebruiker is ingelogd 🔓')
        navigate('/profile')
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: null
        })
        console.log('De gebruiker is uitgelogd')
        navigate('/')
    }

    const data = {
        isAuth: auth.isAuth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider