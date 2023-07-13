import { PageWrap } from "../styles";
import { Firm } from "../types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

export const DataPage = ({ firms }: { firms: Firm[] }) => {
  const tableData = firms.map((item) => ({
    firmID: item.firmID,
    firmName: item.firmName,
    type: item.firmType,
    address: item.address,
    dateAdded: new Date(),
  }));

  return (
    <PageWrap>
      <Typography variant="h5">Firm Data</Typography>
      <Box sx={{ padding: "24px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Firm ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date Added</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.firmID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firmID}
                  </TableCell>
                  <TableCell>{row.firmName}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.dateAdded.getDate()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageWrap>
  );
};
