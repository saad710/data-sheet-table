import React, { createContext, useState } from 'react';
import emailData from './../data/email/EmailData';

export const MailContext = createContext()

const EmailDataProvider = (props) => {
    const [mailData,setMailData] = useState(emailData)

   
    const { children } = props;
    return (
        <MailContext.Provider value={{mailData,setMailData}}>
            {children}
        </MailContext.Provider>
    );
};

export default EmailDataProvider;