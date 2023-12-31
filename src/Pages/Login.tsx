import React, { useState } from "react";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Auth } from "../Auth";
import { PageWrap } from "../styles";

export const Login = ({ getData }: { getData: () => void }) => {
  const [userName, setUserName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async () => {
    if (userName && apiKey) {
      setLoading(true);
      try {
        setError(undefined);

        const params = new URLSearchParams();
        params.append("username", userName);
        params.append("apikey", apiKey);
        await axios
          .post("/connect/token", params)
          .then((res) => {
            Auth.setAccessToken(res.data.access_token);
            Auth.setAccessToken(res.data.access_token);
            setLoading(false);
          })
          .catch((e) => {
            console.error(e);
            setLoading(false);
          });
        getData();
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
        {loading && <CircularProgress />}
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
