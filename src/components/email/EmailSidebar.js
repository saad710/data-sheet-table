import React, { useContext, useState } from "react";

import FilterEmail from "./FilterLinks";

import {
  List,
  Divider,
  Button,
  Box,
  Dialog,
  DialogTitle,
  Slide,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import {CustomFormLabel} from "../custom-elements/CustomFormLabel"
import {CustomTextField} from "../custom-elements/CustomTextField"

import Email from "./EmailListItem";
import { InboxContext } from "../../provider/InboxProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmailSidebar = (props) => {
  const [open, setOpen] = useState(false);
  const {InboxData,setInboxData} = useContext(InboxContext)
  const {emails} = props;
  console.log(emails)
 
  // const [fullWidth, setFullWidth] = React.useState(true);

  // const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = (event) => {
    setOpen(true);
    
    // setMaxWidth(event.target.value);
    // setFullWidth(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const [activeInbox,setActiveInbox] = useState(true)
  const handleInbox = () => {
    const email = emails?.filter(email => email.inbox === true)
    console.log(email)
    setInboxData(email)
    setActiveInbox(true)
    setActiveSent(false)
    setActiveDraft(false)
    setActiveSpam(false)
    setActiveTrash(false)
  }
  const [activeSent,setActiveSent] = useState(false)
  const handleSent = () => {
    const email = emails?.filter(email => email.sent === true)
    console.log(email)
    setInboxData(email)
    setActiveSent(true)
    setActiveInbox(false)
    setActiveDraft(false)
    setActiveSpam(false)
    setActiveTrash(false)
  }

  const [activeDraft,setActiveDraft] = useState(false)
  const handleDraft = () => {
    const email = emails?.filter(email => email.draft === true)
    console.log(email)
    setInboxData(email)
    setActiveDraft(true)
    setActiveSent(false)
    setActiveInbox(false)
    setActiveSpam(false)
    setActiveTrash(false)
  }

  const [activeSpam,setActiveSpam] = useState(false)
  const handleSpam = () => {
    const email = emails?.filter(email => email.spam === true)
    console.log(email)
    setInboxData(email)
    setActiveDraft(false)
    setActiveSent(false)
    setActiveInbox(false)
    setActiveSpam(true)
    setActiveTrash(false)
  }
  const [activeTrash,setActiveTrash] = useState(false)
  const handleTrash = () => {
    const email = emails?.filter(email => email.trash === true)
    console.log(email)
    setInboxData(email)
    setActiveDraft(false)
    setActiveSent(false)
    setActiveInbox(false)
    setActiveSpam(false)
    setActiveTrash(true)
  }




  return (
    <Box>
      <Box sx={{ p: 2, paddingBottom: "18px" }}>
        <Button
          variant="contained"
          fullWidth
          color="error"
          onClick={handleClickOpen}
        
        >
          Compose
        </Button>
      </Box>
      <Divider />

      <List sx={{ p: 1 }}>
        <FilterEmail
          icon="inbox"
          text="Inbox"
          onClick={handleInbox}
          active ={activeInbox}
        />
        <FilterEmail
          icon="send"
          text="Sent"
          onClick={handleSent}
          active ={activeSent}
        
        />
        <FilterEmail
          icon="archive"
          text="Draft"
          onClick={handleDraft}
          active ={activeDraft}
        
        />
        <FilterEmail
          icon="flag"
          text="Spam"
          onClick={handleSpam}
          active ={activeSpam}
        
        />
        <FilterEmail
          icon="trash"
          text="Trash"
          onClick={handleTrash}
          active ={activeTrash}
        
        />
      </List>

      <Divider />

      <List sx={{ p: 1 }}>
        <FilterEmail
          icon="star"
          text="Starred"
         
        />
        <FilterEmail
          icon="alert-circle"
          text="Important"
          
        />
      </List>

      <Divider />

      <List sx={{ p: 1 }}>
        <FilterEmail
          icon="disc"
          text="Promotional"
         
        />
        <FilterEmail
          icon="disc"
          text="Social"
         
        />
        <FilterEmail
          icon="disc"
          text="Health"
          
        />
      </List>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" variant="h4">
          Compose Mail
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            component="div"
          >
            <CustomFormLabel htmlFor="to-text">To</CustomFormLabel>
            <CustomTextField
              id="to-text"
              fullWidth
              size="small"
              variant="outlined"
            />
            <CustomFormLabel htmlFor="subject-text">Subject</CustomFormLabel>
            <CustomTextField
              id="subject-text"
              fullWidth
              size="small"
              variant="outlined"
            />
            <CustomFormLabel htmlFor="message-text">Message</CustomFormLabel>
            <CustomTextField
              id="message-text"
              placeholder="Write a message"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
            />
            <CustomFormLabel htmlFor="upload-text">Attachment</CustomFormLabel>
            <CustomTextField
              type="file"
              autoFocus
              id="upload-text"
              fullWidth
              size="small"
              variant="outlined"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Send
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmailSidebar;
