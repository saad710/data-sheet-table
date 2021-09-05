import { Avatar } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ActiveProvider from "./provider/ActiveProvider";
import EmailDataProvider from "./provider/EmailDataProvider";
import InboxProvider from "./provider/InboxProvider";

ReactDOM.render(
 
    <BrowserRouter>
      <InboxProvider>
        <ActiveProvider>
          <EmailDataProvider>
            <App />
          </EmailDataProvider>
        </ActiveProvider>
      </InboxProvider>
    </BrowserRouter>
 
 ,
  document.getElementById("root")
);
