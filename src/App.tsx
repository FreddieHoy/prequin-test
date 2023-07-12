import React, { useEffect, useState } from "react";
import { DataPage, LoginPage } from "./styles";
import axios from "axios";
import { Auth } from "./Auth";
import { Login } from "./Pages/Login";
import { CircularProgress } from "@mui/material";

function App() {
  const [page, setPage] = useState("loading");

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("FirmID", "2670,2792,332,3611");
    const token = Auth.getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    axios
      .get("/api/investor", { params, headers })
      .then((res) => {
        console.log("res", res);
        setPage("data");
      })
      .catch((e) => {
        console.log("Error", e);

        setPage("login");
      });
  }, []);

  return (
    <>
      {page === "loading" && (
        <LoginPage>
          <CircularProgress />
        </LoginPage>
      )}
      {page === "login" && <Login setPage={setPage} />}
      {page === "data" && <DataPage>Data page</DataPage>}
    </>
  );
}

export default App;
