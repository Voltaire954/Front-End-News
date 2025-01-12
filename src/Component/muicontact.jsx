import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LongTextSnackbar from "./ui/input";
import BasicButton from "./ui/muibutton";
import { TextField } from "@mui/material";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function ContactCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [firstname, SetFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 const  FilledAlerts =()=> {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>
    );
  }

  const handleClick = () => {
    if (firstname && lastname && email && message) {
      alert(
        `Form is submitted. First Name is ${firstname} Last name is ${lastname} email is ${email} and message is ${message}`
      );
    } else {
      alert(`please fill out missing information`);
    }
  };

  return (
    <Card
      sx={({ maxWidth: 900 }, { maxHeight: 1200 }, { marginTop: 5 })}
      style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "5%" }}
    >
      <CardMedia
        component="img"
        height="500"
        image="src/assets/5-anchors-mc-240529-90ee07.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardContent>
        <TextField
          style={{ width: "100%" }}
          required
          id="outlined-required"
          label="First Name"
          value={firstname}
          onChange={(e) => SetFirstName(e.target.value)}
        />
        <TextField
          style={{ width: "100%", marginTop: "30px" }}
          required
          id="outlined-required"
          label="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          style={{ width: "100%", marginTop: "30px" }}
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          multiline
          rows={4}
          style={{ width: "100%", marginTop: "30px" }}
          required
          id="outlined-required"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <BasicButton color="black" text="Submit" handleClick={handleClick} />
      </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
