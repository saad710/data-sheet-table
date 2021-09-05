import React, { useContext, useState } from "react";
import Email from "./EmailListItem";

import { List } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { InboxContext } from "../../provider/InboxProvider";
import { ActiveContext } from "../../provider/ActiveProvider";
import { MailContext } from "../../provider/EmailDataProvider";

const EmailList = ({ showrightSidebar }) => {
  console.log(showrightSidebar)
  const {mailData,setMailData} = useContext(MailContext)
  const {InboxData,setInboxData} = useContext(InboxContext)

  // const getVisibleEmails = (emails, filter, emailSearch) => {
  //   console.log(emails)
  //   console.log(filter)
  //   console.log(emailSearch)
  //   switch (filter) {
  //     case EmailVisibilityFilters.SHOW_INBOX:
  //       return emails.filter(
  //         (t) =>
  //           t.inbox &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_SENT:
  //       return emails.filter(
  //         (t) =>
  //           t.sent &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_DRAFTS:
  //       return emails.filter(
  //         (t) =>
  //           t.draft &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_SPAM:
  //       return emails.filter(
  //         (t) =>
  //           t.spam &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_TRASH:
  //       return emails.filter(
  //         (t) =>
  //           t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_STARRED:
  //       return emails.filter(
  //         (t) =>
  //           t.starred &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_IMPORTANT:
  //       return emails.filter(
  //         (t) =>
  //           t.important &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_PROMOTIONAL:
  //       return emails.filter(
  //         (t) =>
  //           t.label === "Promotional" &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_SOCIAL:
  //       return emails.filter(
  //         (t) =>
  //           t.label === "Social" &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     case EmailVisibilityFilters.SHOW_HEALTH:
  //       return emails.filter(
  //         (t) =>
  //           t.label === "Health" &&
  //           !t.trash &&
  //           t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
  //       );
  //     default:
  //       throw new Error("Unknown filter: " + filter);
  //   }
  // };

  // const emails = getVisibleEmails(
  //   useSelector((state) => state.emailReducer.emails),
  //   useSelector((state) => state.emailReducer.visibilityFilter),
  //   useSelector((state) => state.emailReducer.emailSearch)
  // );
  // console.log(emails)
 

  // const active = useSelector((state) => state.emailReducer.emailContent);
  // console.log(active);
  // const dispatch = useDispatch()
  const {active,setActive} = useContext(ActiveContext)
  const handleSingleEmail = (id) => {
      console.log(id)
      setActive(id)
  }
  const emailDefaultData = mailData?.filter(email => email.inbox === true)
  console.log(emailDefaultData)


  return (
   InboxData ? 
    <List sx={{p:1}}>
    {InboxData?.map((email) => (
      <Email
        key={email.id}
        active={active}
        {...email}
        onClick ={() => handleSingleEmail(email.id)}
        isSelected= {email.id === active}
      />
    ))}
  </List>:
    <List sx={{p:1}}>
    {emailDefaultData?.map((email) => (
      <Email
        key={email.id}
        active={active}
        {...email}
        onClick ={() => handleSingleEmail(email.id)}
        isSelected= {email.id === active}
      />
    ))}
  </List>

  );
};

export default EmailList;
