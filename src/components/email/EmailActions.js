import React from "react";


import { useSelector, useDispatch } from "react-redux";
import { Box, Button, ButtonGroup, Menu, MenuItem } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

const EmailActions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const id = useSelector((state) => state.emailReducer.selectedEmail);

  // const dispatch = useDispatch();

  return (
    <Box sx={{ p: 2 }}>
      <ButtonGroup size="small" aria-label="small button group" fullWidth>
        <Button key="one" >
          <FeatherIcon icon="trash" width="17" />
        </Button>
        <Button key="two" onClick={handleClick}>
          <FeatherIcon icon="folder" width="17" />
        </Button>
        <Button key="three">
          <FeatherIcon icon="tag" width="17" />
        </Button>
      </ButtonGroup>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ [`& .MuiPaper-root`]: { minWidth: 100 } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem >
          Inbox
        </MenuItem>
        <MenuItem >
          Sent
        </MenuItem>
        <MenuItem >
          Draft
        </MenuItem>
        <MenuItem >
          Spam
        </MenuItem>
        <MenuItem >
          Trash
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default EmailActions;
