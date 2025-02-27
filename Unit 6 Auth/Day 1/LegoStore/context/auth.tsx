import * as React from 'react';
const AuthContact = React.createContext<any>(null);

export function useAuth(){
    return React.useContext(AuthContact)
}

export function Provider({children}:React.PropsWithChildren){
    
    const [user, setUser] = React.useState<string | undefined>(undefined)
    
    return(
        <AuthContact.Provider
            value={{
                user: user,
                singIn: () => {
                    setUser("Beto")
                }, 
                signOut: () => {
                    setUser(undefined);
                }
            }}
        >

        </AuthContact.Provider>
    )
}