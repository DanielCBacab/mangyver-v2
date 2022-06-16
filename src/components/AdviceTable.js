import React from "react";
import PriorityChip from "./PriorityChip";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { Grid } from "@mui/material";

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
    col6: "Descripción",
    col7: "Causa de la avería",
    col8: "high",
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
    col8: "medium",
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
    col8: "low",
  },
];

const columns = [
  {
    field: "col1",
    headerName: "Número de aviso",
    width: 150,
    headerClassName: "table-title",
    cellClassName: "first-cell",
  },
  {
    field: "col2",
    headerName: "Tipo de aviso",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col3",
    headerName: "Título de aviso",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col4",
    headerName: "Ubicación técnica",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col5",
    headerName: "Tipo de tarjeta",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col6",
    headerName: "Descripción",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col7",
    headerName: "Causa de la avería",
    width: 150,
    headerClassName: "table-title",
  },
  {
    field: "col8",
    headerName: "Prioridad",
    width: 250,
    headerClassName: "table-title",
    renderCell: (level) => {
      return <PriorityChip level={level.getValue(level.id, "col8")} />;
    },
    disableClickEventBubbling: true,
  },
  {
    field: "col9",
    headerName: "Acciones",
    width: 150,
    headerClassName: "table-title",
    renderCell: (params) => {
      return (
        <Button
          sx={{ color: "#747474" }}
          text="Ver aviso"
          onClick={""}
          variant={"text"}
          size={"small"}
        />
      );
    },
  },
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

export default AdviceTable;
