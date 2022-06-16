import React from "react";
import PriorityChip from "./PriorityChip";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { Grid, Typography } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

// Data Grid table
const rows = [
  {
    id: 1,
    col1: "Número de aviso 1",
    col2: "Tipo de aviso 1",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "Si",
    col7: "Causa de la avería",
  },
  {
    id: 2,
    col1: "Número de aviso 2",
    col2: "Tipo de aviso 2",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "Si",
    col7: "Causa de la avería",
  },
  {
    id: 3,
    col1: "Número de aviso 3",
    col2: "Tipo de aviso 3",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "No",
    col7: "Causa de la avería",
  },
];

const columns = [
  {
    field: "col1",
    headerName: "Número de OT",
    width: 150,
    headerClassName: "table-title",
    cellClassName: "first-cell",
  },
  {
    field: "col2",
    headerName: "Fecha",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col3",
    headerName: "Hora de inicio",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col4",
    headerName: "Hora de finalización",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col5",
    headerName: "Comentario",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col6",
    headerName: "¿Se realizó la orden?",
    width: 150,
    headerClassName: "table-title",
    renderCell: (isOrder) => {
      return (
        <Typography
          color={
            isOrder.getValue(isOrder.id, "col6") === "Si" ? "red" : "green"
          }
        >
          {isOrder.getValue(isOrder.id, "col6") === "Si" ? "Si" : "No"}
        </Typography>
      );
    },
    disableClickEventBubbling: true,
  },
  {
    field: "col7",
    headerName: "Autor",
    width: 150,
    headerClassName: "table-title",
  },
];
// END OF Data Grid table
const NotificationTable = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <SearchInput onClick={null} text={"¿Cuál aviso desea buscar?"} />
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            border: "0",
            height: "500px",
            "& .table-title, .first-cell": {
              color: "primary.main",
            },
          }}
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default NotificationTable;
