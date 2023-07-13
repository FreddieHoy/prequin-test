import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Auth } from "../Auth";
import { PageWrap } from "../styles";
import { Page } from "../App";

export const Login = ({ setPage }: { setPage: (val: Page) => void }) => {
  const [userName, setUserName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async () => {
    if (userName && apiKey) {
      try {
        setError(undefined);

        const params = new URLSearchParams();
        params.append("username", userName);
        params.append("apikey", apiKey);
        axios.post("/connect/token", params).then((res) => {
          console.log("res", res);
          Auth.setAccessToken(res.data.access_token);
          Auth.setAccessToken(res.data.access_token);
          setPage("data");
        });
      } catch (e: any) {
        console.log("ERROR", e);
        const message = e.response.data.message ?? undefined;
        if (message) {
          setError(message);
        } else {
          setError("Error fetching token");
        }
      }
    }
  };

  return (
    <PageWrap justify="center" align="center">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "300px",
        }}
      >
        <Typography variant="h5" display="block" gutterBottom>
          Prequin Data
        </Typography>
        <TextField
          label="User Name"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="API Key"
          variant="outlined"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
        {error && (
          <Typography variant="caption" display="block" gutterBottom>
            {error}
          </Typography>
        )}
        Here's a hint:
        <br />
        dummydatafeeds@preqin.com
        <br />
        8f0bc69bc2a643f8bb8034a15081962e
      </Box>
    </PageWrap>
  );
};
