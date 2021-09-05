import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

const FilterEmail = (props) => {
  // const active = useSelector(
  //   (state) => props.filter === state.emailReducer.visibilityFilter
  // );

  // const dispatch = useDispatch();
  

  return (
    <ListItem
      sx={{ mb: 1 }}
      button
     
      onClick={props.onClick}
      selected={props.active}
    >
      <ListItemIcon sx={{ minWidth: "30px" }}>
        <FeatherIcon icon={props.icon} width="20" />
      </ListItemIcon>
      <ListItemText>{props.text}</ListItemText>
    </ListItem>
  );
};

export default FilterEmail;
