import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchInput = ({ props }) => {
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <Stack
      spacing={2}
      sx={{ width: 300 }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        renderInput={(params) => <TextField {...params} label={text} />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchInput;
