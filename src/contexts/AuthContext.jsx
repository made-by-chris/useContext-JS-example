import {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'John',
        email: 'jdwqoijd'
    });

    const login = (email, password) => {}

    const logout = () => {}

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;