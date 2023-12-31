"use client";
import { Box, Button, Container, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { isAuthenticated } from "../services/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    sessionStorage.setItem("userName", email);
    sessionStorage.setItem("password", password);
    if (isAuthenticated()) window.location.assign('/')
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            mt: "100px",
          }}
        >
          {" "}
          <h1>Login</h1>
          <TextField
            style={{
              marginBottom: "20px",
            }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="email"
          />
          <TextField
            style={{
              marginBottom: "20px",
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            label="password"
          />
          <Button variant="contained" size="medium" type="submit">
            Login
          </Button>
        </Box>{" "}
      </form>
    </Container>
  );
}
