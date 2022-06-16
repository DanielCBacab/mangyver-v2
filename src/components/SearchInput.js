import React from "react";
import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { createStyles } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = createStyles((theme) => ({
  label: {
    textTransform: "none",
    borderRadius: "0.656rem",
  },
}));

const SearchInput = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "auto" },
      }}
      noValidate
      autoComplete="true"
    >
      <TextField
        id="outlined-basic"
        label="¿Cuál aviso desea buscar?"
        variant={variant || "outlined"}
        size={size || "large"}
        classes={{ label: classes.label }}
        onClick={onClick}
        {...other}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {text}
      </TextField>
    </Box>
  );
};

export default SearchInput;
