import React, { useEffect, useState } from "react";
import { PageWrap } from "./styles";
import axios from "axios";
import { Auth } from "./Auth";
import { Login } from "./Pages/Login";
import { CircularProgress } from "@mui/material";
import { Firm } from "./types";
import { DataPage } from "./Pages/DataPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [firmData, setFirmData] = useState<Firm[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("FirmID", "2670,2792,332,3611");
    const token = Auth.getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    axios
      .get("/api/investor", { params, headers })
      .then((res) => {
        console.log("res", res.data);
        try {
          setFirmData(res.data.data as Firm[]);
        } catch (e) {
          console.error("Failed to create Firm entities:", e);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("Error", e);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <PageWrap justify="center" align="center">
          <CircularProgress />
        </PageWrap>
      )}
      {!Auth.isAuthenticated() && <Login />}
      {Auth.isAuthenticated() && <DataPage firms={firmData} />}
    </>
  );
}

export default App;
