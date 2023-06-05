import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import makeStyles from "@mui/styles/makeStyles";
import TableBody from "@mui/material/TableBody";
import { useNavigate } from "react-router";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
  padding: {
    marginBottom: "10px",
  },
});
const StyledTableCell1 = styled(TableCell)(({ theme }) => ({
  color: "#4169E1",
  
  fontSize: "25px",
  background: "#f5f5f5",
  height: "20px",
  fontWeight: "bold",
  borderBottom: " black",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "black",
  background: "#f5f5f5",
  fontSize: "25px",
  height: "20px",
  fontWeight: "bold",
  borderBottom: "4px solid black",
}));

const API_URL = "https://jsonplaceholder.typicode.com/users";

const columns = [
  { label: "Id", accessor: "id" },
  { label: "Title", accessor: "name" },
  { label: "Action", accessor: "action" },
];
const columns1 = [{ label: "Questionare" }, { label: "" }, { label: "" }];

const CustomGrid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableData, setTableData] = useState([]);

  const arrow = () => {
    navigate("/");
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
    setPage(0);
};
const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <div className={classes.padding}>
          <div className={classes.arrow}>
            <IconButton onClick={arrow}>
              <ArrowBackIcon />
            </IconButton>
            <h2
              className={classes.h2}
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Select Time Period
            </h2>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "Manrope, sans-serif" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns1.map((column) => (
                  <StyledTableCell1>{column.label}</StyledTableCell1>
                ))}
              </TableRow>

              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell>{column.label}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <>
                  <TableRow key={row.id}>
                    
                        <TableCell
                          sx={{
                            border: "transparent",
                            backgroundColor:
                              index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                          }}
                        >{row.id}
                         
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "transparent",
                            backgroundColor:
                              index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                          }}
                        >{row.name}
                         
                        </TableCell>
                      
                    <TableCell
                      sx={{
                        border: "transparent",
                        backgroundColor:
                          index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                      }}
                    >
                      <Avatar sx={{ background: "#f5f5f5" }}>
                        <IconButton>
                          <MoreVertIcon sx={{ color: "#4169E1" }} />
                        </IconButton>
                      </Avatar>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
      </div>
    </div>
  );
};
export default CustomGrid;
