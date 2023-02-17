import {useState} from "react"
import {UserContext} from "./UserContext"

const userDefault = {
    id: 123,
    name: 'Fernando Herrera',
    email: 'fernando@google.com'
}


export const UserProvider = ({children}) => {

    const [user, setUser] = useState(userDefault);

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}