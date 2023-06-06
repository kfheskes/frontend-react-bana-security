import {createContext, useState} from "react";

export const AuthContext = createContext(null)
export function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false)

    function login() {
        setIsAuth(true)
    }

    function logout() {
        setIsAuth(false)
    }

    const data ={
        isAuth: isAuth,
        logout: logout,
        login: login
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider