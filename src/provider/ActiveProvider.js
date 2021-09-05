import React, { createContext, useContext, useState }  from 'react';

export const ActiveContext = createContext()
const ActiveProvider = (props) => {
   
    
    const [active,setActive] = useState(1)
    
    const { children } = props;
    return (
      
        <ActiveContext.Provider value={{active,setActive}}>
            {children}
        </ActiveContext.Provider>
        
    );
};

export default ActiveProvider;