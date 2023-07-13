import React from "react";
import { PageWrap } from "./styles";
import { Auth } from "./Auth";
import { Login } from "./Pages/Login";
import { CircularProgress } from "@mui/material";
import { DataPage } from "./Pages/DataPage";
import { useGetData } from "./hooks/useGetData";

function App() {
  // In larger app this would be a user request and it would have in a context
  const { firmData, loading, setFirmData, getData } = useGetData();

  return (
    <>
      {loading ? (
        <PageWrap justify="center" align="center">
          <CircularProgress />
        </PageWrap>
      ) : Auth.isAuthenticated() && firmData ? (
        <DataPage firms={firmData} setFirmData={setFirmData} />
      ) : (
        <Login getData={getData} />
      )}
    </>
  );
}

export default App;
