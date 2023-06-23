import {createContext, useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {checkTokenValidity} from "../helper/checkTokenValidity";
import axios from "axios";
export const AuthContext = createContext(null)
// Stap 1: Maak een state object aan voor de authenticatie
 function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    })

     const navigate = useNavigate()

     // Stap 2: Pas de verwijzingen naar de state aan (ook bij je logout functie)
     // Stap 5: Token ontvangen en decoderen
     // Stap 6: Token opslaan in de local storage en verwijderen bij logout
     // Stap 7: Gebruiker ophalen met de token
     // Stap 8: Zet gebruikers info in de state (NIET DE JWT TOKEN)
     // Stap: 9: Geef ook de user mee aan de context
     // stap 10: gebruik use Effect om te checken of er een token in de localstorage zit
     // stap 11: als er een token in de localstorage zit, check dan of deze nog geldig is
     // stap 12: als de token nog geldig is,  log de gebruiker in
     // stap 13: als de token niet meer geldig is, log de gebruiker uit
     // stap 14: maak een state aan om de pagina status bij te houden (pending, done)
     // stap 15:
     // stap 16: haal de user data op uit de database en sla deze op in de state
     // stap 17 geef een redirect mee (optioneel)

     useEffect(() => {
         const storedToken = localStorage.getItem('token');

         if (storedToken && checkTokenValidity(storedToken)) {
             void login(storedToken)
         } else {
             void logout()
         }
     }, [])

   async function login(jwt_token, redirect= true) {
        const decodedToken = jwt_decode(jwt_token)
        localStorage.setItem('token', jwt_token);
        console.log(decodedToken)
        try {
            const {
                data: {
                    email,
                    username,
                    id
                }
                } = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt_token}`
                }
            })
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email,
                    id,
                    username
                },
                status: "done"
            })
            console.log('De gebruiker is ingelogd 🔓')
            if (redirect) navigate('/')
        }catch (e){
            console.error(e)
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        console.log('De gebruiker is uitgelogd')
        navigate('/')
    }
// Stap: 9: Geef ook de user mee aan de context
    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout:logout
    }

     console.log(data)

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider