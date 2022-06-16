import React from "react";
import SearchInput from "../components/SearchInput";
import { Grid } from "@mui/material";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// Data Grid table
const rows: GridRowsProp = [
  {
    id: 1,
    col1: "Número de aviso 1",
    col2: "Tipo de aviso 1",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "Descripción",
    col7: "Causa de la avería",
    col8: "Alta",
    col9: "",
  },
  {
    id: 2,
    col1: "Número de aviso 2",
    col2: "Tipo de aviso 2",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "Descripción",
    col7: "Causa de la avería",
    col8: "Media",
    col9: "",
  },
  {
    id: 3,
    col1: "Número de aviso 3",
    col2: "Tipo de aviso 3",
    col3: "Título de aviso",
    col4: "Ubicación técnica",
    col5: "Tipo de tarjeta",
    col6: "Descripción",
    col7: "Causa de la avería",
    col8: "Baja",
    col9: "",
  },
];

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "Número de aviso",
    width: 150,
    color: "#F3F3F3",
  },
  { field: "col2", headerName: "Tipo de aviso", width: 150, color: "#F3F3F3" },
  { field: "col3", headerName: "Título de aviso", width: 150 },
  { field: "col4", headerName: "Ubicación técnica", width: 150 },
  { field: "col5", headerName: "Tipo de tarjeta", width: 150 },
  { field: "col6", headerName: "Descripción", width: 150 },
  { field: "col7", headerName: "Causa de la avería", width: 150 },
  { field: "col8", headerName: "Prioridad", width: 150 },
  { field: "col9", headerName: "Acciones", width: 150 },
];
// END OF Data Grid table
const AdviceTable = () => {
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
            "&:first-child": { color: "primary.main" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AdviceTable;
