import jwt_decode from "jwt-decode";


export function checkTokenValidity (token){
    const decodedToken = jwt_decode(token);

    // const testExpirationTime = {
    //     ...decodedToken,
    //      exp: ....
    // }
    // vervolgens decodedToken vervangen door testExpirationTime
    // ( kan ook exp.timestamp - 3540 = 1 minuut
    // setInterval(()=>{
    //     console.log( Math.round(Date.now() / 1000) )
    // }, 1000)

    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() > expirationTime

    return !isExpired;
}