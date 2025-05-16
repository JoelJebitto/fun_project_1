import React from "react";
import { Button, Card, TextField, Typography } from "@mui/material";

const Signup = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "120px",
          }}
        >
          <br />
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Card
          style={{
            width: 300,
            padding: 20,
            height: 400,
            // backgroundColor: rgba(255, 255, 255, 0.3),
          }}
        >
          <center>
            <TextField
              variant="outlined"
              label="Email"
              style={{ padding: "10", marginTop: 50 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Password"
              style={{ padding: "10" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></TextField>
            <br />
            <br />
            <Button
              variant="contained"
              style={{ padding: "10" }}
              onClick={() => {
                fetch("http://localhost:3000/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    username: email,
                    password,
                  }),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    alert(data.message);
                    localStorage.setItem("token", data.token);
                    window.location = "/";
                  });
              }}
            >
              Signup
            </Button>
          </center>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
