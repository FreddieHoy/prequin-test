import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Auth } from "../Auth";
import { Firm } from "../types";

export const useGetData = (): {
  loading: boolean;
  getData: () => void;
  firmData: Firm[] | undefined;
  setFirmData: (val: Firm[] | undefined) => void;
} => {
  const [loading, setLoading] = useState(true);
  const [firmData, setFirmData] = useState<Firm[] | undefined>(undefined);

  const getData = useCallback(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error", e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!firmData) {
      getData();
    }
  }, [firmData, getData]);

  return { getData, loading, firmData, setFirmData };
};
