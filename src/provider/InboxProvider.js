import React, { createContext, useState } from 'react';

export const InboxContext = createContext()

const InboxProvider = (props) => {
    const [InboxData,setInboxData] = useState()

   
    const { children } = props;
    return (
        <InboxContext.Provider value={{InboxData,setInboxData}}>
            {children}
        </InboxContext.Provider>
    );
};

export default InboxProvider;