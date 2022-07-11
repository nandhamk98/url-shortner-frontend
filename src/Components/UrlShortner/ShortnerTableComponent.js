import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { api } from "../../utils/Api";

export function ShortnerTableComponent({ getShortnerdata, shortnerData }) {
  const updateClicks = (data) => {
    fetch(`${api}/api/urlShortner/update-clicks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      getShortnerdata();
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell align="center">Url</TableCell>
            <TableCell align="center">Shortner</TableCell>
            <TableCell align="center">Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shortnerData.map((row, index) => (
            <TableRow
              key={row.shortner}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.url}</TableCell>
              <TableCell align="center">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    updateClicks({ _id: row._id });
                  }}
                >
                  {row.shortner}
                </a>
              </TableCell>
              <TableCell align="center">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
