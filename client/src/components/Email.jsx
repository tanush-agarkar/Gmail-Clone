import { StarBorder, Star } from "@mui/icons-material";
import { Box, Checkbox, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > div > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  fontSize: "12px !importan",
  background: "#ddd",
  color: "#222",
  borderRadius: 4,
  marginRight: 6,
  padding: "0 4px",
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 20,
  fontSize: 12,
  color: "#5F6368",
});

const Email = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredMails);

  const toggleStarredMails = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id != email._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };
  return (
    <>
      <Wrapper>
        <Checkbox
          size="small"
          checked={selectedEmails.includes(email._id)}
          onChange={() => onValueChange()}
        />
        {email.starred ? (
          <Star
            fontSize="small"
            style={{ marginRight: 10, color: "#FFF200" }}
            onClick={() => toggleStarredMails()}
          />
        ) : (
          <StarBorder
            fontSize="small"
            style={{ marginRight: 10 }}
            onClick={() => toggleStarredMails()}
          />
        )}

        <Box
          onClick={() =>
            navigate(routes.view.path, { state: { email: email } })
          }
        >
          <Typography style={{ width: 200, overflow: "hidden" }}>
            {email.name}
          </Typography>
          <Indicator>Inbox</Indicator>
          <Typography>
            {email.subject} {email.body && "-"} {email.body}{" "}
          </Typography>
          <Date>
            {new window.Date(email.date).getDate()}
            {new window.Date(email.date).toLocaleDateString("default", {
              month: "long",
            })}
          </Date>
        </Box>
      </Wrapper>
    </>
  );
};

export default Email;
