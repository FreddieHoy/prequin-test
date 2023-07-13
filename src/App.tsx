import React, { useEffect, useState } from "react";
import { PageWrap } from "./styles";
import axios from "axios";
import { Auth } from "./Auth";
import { Login } from "./Pages/Login";
import { CircularProgress } from "@mui/material";
import { Firm } from "./types";
import { DataPage } from "./Pages/DataPage";

export type Page = "loading" | "login" | "data";

function App() {
  const [page, setPage] = useState<Page>("loading");
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
        setPage("data");
      })
      .catch((e) => {
        console.error("Error", e);
        setPage("login");
      });
  }, []);

  return (
    <>
      {page === "loading" && (
        <PageWrap justify="center" align="center">
          <CircularProgress />
        </PageWrap>
      )}
      {page === "login" && <Login setPage={setPage} />}
      {page === "data" && <DataPage firms={firmData} />}
    </>
  );
}

export default App;
