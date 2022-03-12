import React, {useState, createContext} from 'react';
export const context = createContext();

export const ContextProvider = props => {
    const [userContext, setUserContext] = useState({});
    const [repos, setRepos] = useState({});
    return(
        <context.Provider value= {{
            userContext,
            setUserContext,
            repos,
            setRepos,
        }}>
            {props.children}
        </context.Provider>
    );
}