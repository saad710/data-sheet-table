import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  Chip,
  Button,
} from "@material-ui/core";
import { ActiveContext } from "../../provider/ActiveProvider";
import emailData from './../../data/email/EmailData';
const EmailContent = () => {
  // const emailDetails = useSelector(
  //   (state) => state.emailReducer.emails[state.emailReducer.emailContent - 1]
  // );
  // console.log(emailDetails)
  const {active,setActive} = useContext(ActiveContext)
  const emailDetail = emailData.filter(email => email.id === active)
 
 
  

  return emailDetail && emailDetail.map(emailDetails =>  (
  
    <Box>

      <Box display="flex" alignItems="center" sx={{ pb: 2 }}>
        <Avatar alt={emailDetails.from} src={emailDetails.thumbnail} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6" fontWeight="600">
            {emailDetails.from}
          </Typography>
          <Typography variant="body2">{emailDetails.To}</Typography>
        </Box>
        <Chip
          label={emailDetails.label}
          sx={{ ml: "auto", height: "21px" }}
          size="small"
          color={
            emailDetails.label === "Promotional"
              ? "primary"
              : emailDetails.label === "Social"
              ? "error"
              : "success"
          }
        />
      </Box>
      <Divider />
      <Box sx={{ py: 2 }}>
        <Typography variant="h4" fontWeight="600">
          {emailDetails.subject}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ py: 2 }}>
        <div
          dangerouslySetInnerHTML={{ __html: emailDetails.emailContent }}
        ></div>
      </Box>
      <Button variant="outlined" size="small" color="primary">
        Reply
      </Button>
    </Box>
  )) 
};

export default EmailContent;
